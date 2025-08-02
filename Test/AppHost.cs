using Funq;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Configuration;
using ServiceStack.Data;
using ServiceStack.Host.Handlers;
using ServiceStack.IO;
using ServiceStack.Logging;
using ServiceStack.NativeTypes.Java;
using ServiceStack.NativeTypes.TypeScript;
using ServiceStack.OrmLite;
using ServiceStack.Text;
using ServiceStack.Validation;
using Test.ServiceInterface;

[assembly: HostingStartup(typeof(Test.AppHost))]

namespace Test;

public class AppHost : AppHostBase, IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services => {
            // Configure ASP.NET Core IOC Dependencies
        });
        
    /// <summary>
    /// Default constructor.
    /// Base constructor requires a name and assembly to locate web service classes. 
    /// </summary>
    public AppHost()
        : base("Test", typeof(MyServices).Assembly)
    {
        LogManager.LogFactory = new StringBuilderLogFactory(debugEnabled:true);
    }

    /// <summary>
    /// Application specific configuration
    /// This method should initialize any IoC resources utilized by your web service classes.
    /// </summary>
    /// <param name="container"></param>
    public override void Configure(Container container)
    {
        // this.GlobalHtmlErrorHttpHandler = new RazorHandler("/error");

        // RawHttpHandlers.Add(req => req.PathInfo.StartsWith("/login")
        //     ? new RedirectHttpHandler { RelativeUrl = "/metadata" }
        //     : null);

        SetConfig(new HostConfig
        {
            AdminAuthSecret = "secretz",
            UseHttpOnlyCookies = false,
            //DebugMode = HostingEnvironment.IsDevelopment(),
            DebugMode = true,
            UseSameSiteCookies = false,
            Return204NoContentForEmptyResponse = true,
        });

        // container.Register<IRedisClientsManager>(c =>
        //     new RedisManagerPool("localhost:6379"));
        // container.Register(c => c.Resolve<IRedisClientsManager>().GetCacheClient());

        //container.Register<IDbConnectionFactory>(c => new OrmLiteConnectionFactory(
        //    AppSettings.GetString("AppDb"), PostgreSqlDialect.Provider));

        container.Register<IDbConnectionFactory>(c => new OrmLiteConnectionFactory(
            ":memory:", SqliteDialect.Provider));

        using (var db = container.Resolve<IDbConnectionFactory>().Open())
        {
            db.DropAndCreateTable<Logger>();
        }

        container.Register<IAuthRepository>(c =>
            new OrmLiteAuthRepository(c.Resolve<IDbConnectionFactory>())
            {
                UseDistinctRoleTables = AppSettings.Get("UseDistinctRoleTables", true),
            });

        var authRepo = (OrmLiteAuthRepository)container.Resolve<IAuthRepository>();
        authRepo.DropAndReCreateTables();

        CreateUser(authRepo, 1, "test", "test", new List<string> { "TheRole" }, new List<string> { "ThePermission" });
        CreateUser(authRepo, 2, "test2", "test2");
        CreateUser(authRepo, 2, "admin", "test", new List<string> { RoleNames.Admin });

        Plugins.Add(new PostmanFeature());

        Plugins.Add(new CorsFeature(
            allowOriginWhitelist: new[] { 
                "http://localhost", "http://localhost:8080", "http://localhost:56500", "http://test.servicestack.net", 
                "http://null.jsbin.com", "http://plnkr.co", "http://run.plnkr.co" },
            allowCredentials: true,
            allowedHeaders: "Content-Type, Allow, Authorization, X-Args"));

        Plugins.Add(new RequestLogsFeature
        {
            //RequestLogger = new RedisRequestLogger(container.Resolve<IRedisClientsManager>()),
        });
        // Plugins.Add(new RazorFormat());
            
        GlobalRequestFilters.Add((req, res, dto) => {
            var msg = $"{req.Verb} {req.PathInfo} > {req.ContentType} < {string.Join(',', req.AcceptTypes)}";
            msg.Print();
        });

        Plugins.Add(new AuthFeature(() => new CustomUserSession(),
        [
            new JwtAuthProvider(AppSettings)
                {
                    AllowInQueryString = true,
                },
                new BasicAuthProvider(AppSettings),
                new CredentialsAuthProvider(AppSettings),
                new TwitterAuthProvider(AppSettings),   //Sign-in with Twitter
                new FacebookAuthProvider(AppSettings),  //Sign-in with Facebook
                new GithubAuthProvider(AppSettings) //Sign-in with GitHub
        ]) {
            // AllowGetAuthenticateRequests = req => true,
            IncludeRegistrationService = true,
            IncludeAssignRoleServices = true,
        });

        Plugins.Add(new AutoQueryFeature
        {
            MaxLimit = 1000,
        });

        container.RegisterValidators(typeof(ThrowValidationValidator).Assembly);

        JavaGenerator.AddGsonImport = true;
        var nativeTypes = this.GetPlugin<NativeTypesFeature>();
        nativeTypes.MetadataTypesConfig.ExportTypes.Add(typeof(DayOfWeek));

        Plugins.Add(new SharpPagesFeature());

        container.RegisterAutoWiredAs<MemoryChatHistory, IChatHistory>();
        Plugins.Add(new ServerEventsFeature
        {
            // LimitToAuthenticatedUsers = true,
        });
            
        TypeScriptGenerator.ReturnTypeAliases[typeof(byte[]).Name] = "Uint8Array";

        var fileFs = new FileSystemVirtualFiles(HostingEnvironment.ContentRootPath.CombineWith("App_Data/files").AssertDir());
        Plugins.Add(new FilesUploadFeature(
            new UploadLocation("pub", 
                fileFs,
                readAccessRole: RoleNames.AllowAnon,
                // requireApiKey: new(),
                maxFileBytes: 10 * 1024 * 1024,
                resolvePath:ctx => "pub".CombineWith(ctx.FileName)),
            new UploadLocation("secure", 
                fileFs,
                // requireApiKey: new(),
                maxFileBytes: 10 * 1024 * 1024,
                resolvePath:ctx => "secure".CombineWith(ctx.FileName))
        ));
        
    }

    private void CreateUser(OrmLiteAuthRepository authRepo,
        int id, string username, string password, List<string>? roles = null, List<string>? permissions = null)
    {
        new SaltedHash().GetHashAndSaltString(password, out var hash, out var salt);

        authRepo.CreateUserAuth(new UserAuth
        {
            Id = id,
            DisplayName = username + " DisplayName",
            Email = username + "@gmail.com",
            UserName = username,
            FirstName = "First " + username,
            LastName = "Last " + username,
            PasswordHash = hash,
            Salt = salt,
            Roles = roles,
            Permissions = permissions
        }, password);

        authRepo.AssignRoles(id.ToString(), roles, permissions);
    }
    
    public static void RegisterLicense() =>
        Licensing.RegisterLicense("OSS BSD-3-Clause 2025 https://github.com/NetCoreApps/Test M27TtHoHgW26oIo0X3fRskubhn19AVBx0EKCn1iQ3AvJ584csfVrjjMqFlNO8FD0HC1n3LGjON6ycHf904NPCGC1XBPNEKlSFTgTMF4DbwlLDlOmTTR+HxCvLfUNQOxtuO4YXVYeS2JYgojojg3br9fJmycpc12hjq3ayyhX3Yg=");
}