using Funq;
using ServiceStack;
using ServiceStack.Api.OpenApi;
using ServiceStack.Auth;
using ServiceStack.Configuration;
using ServiceStack.Data;
using ServiceStack.Logging;
using ServiceStack.NativeTypes.CSharp;
using ServiceStack.NativeTypes.Java;
using ServiceStack.NativeTypes.TypeScript;
using ServiceStack.OrmLite;
using ServiceStack.Redis;
using ServiceStack.Text;
using ServiceStack.Validation;
using Test.ServiceInterface;
using Test.ServiceModel;

[assembly: HostingStartup(typeof(Test.AppHost))]

namespace Test;

public partial class AppHost : AppHostBase, IHostingStartup
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

        SetConfig(new HostConfig
        {
            AdminAuthSecret = "secretz",
            UseHttpOnlyCookies = false,
            DebugMode = HostingEnvironment.IsDevelopment(),
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
            new IAuthProvider[]
            {
                new JwtAuthProvider(AppSettings)
                {
                    AllowInQueryString = true,
                },
                new BasicAuthProvider(AppSettings),
                new CredentialsAuthProvider(AppSettings),
                new TwitterAuthProvider(AppSettings),   //Sign-in with Twitter
                new FacebookAuthProvider(AppSettings),  //Sign-in with Facebook
                new GithubAuthProvider(AppSettings),    //Sign-in with GitHub
            }) {
            // AllowGetAuthenticateRequests = req => true,
            IncludeRegistrationService = true,
            IncludeAssignRoleServices = true,
        });

        Plugins.Add(new OpenApiFeature());
        // Plugins.Add(new ValidationFeature());
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
        Licensing.RegisterLicense("OSS BSD-3-Clause 2024 https://github.com/NetCoreApps/Test fyIJciQwB1gqTrcpY03DJbazVUK5dcQK4/ZjC/3rk+tKIGcAtHdtxSTrmrBr4iY2b0vGEGHen2mKR+BGsho7kDEU0QDNVPWZOY/BPnT3zgRkMUK4BsNhAOMCSos1VaP6oQZYaMGimJ4dogRNorh2Aui5muFVuhL7kJEnKHOXFf8=");
}