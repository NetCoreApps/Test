using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Threading.Tasks;
using Chat;
using Funq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Northwind.ServiceInterface;
using ServiceStack;
using ServiceStack.Admin;
using ServiceStack.Auth;
using ServiceStack.Configuration;
using ServiceStack.Data;
using ServiceStack.Host.Handlers;
using ServiceStack.Mvc;
using ServiceStack.OrmLite;
using ServiceStack.Text;

namespace Test
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                //app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            //app.UseStaticFiles();

            var lic = Environment.GetEnvironmentVariable("SERVICESTACK_LICENSE");
            lic.Print();

            app.UseServiceStack(new AppHost());

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            app.Use(new RequestInfoHandler());
        }
    }

    [Route("/hello")]
    [Route("/hello/{Name}")]
    public class Hello : IReturn<HelloResponse>
    {
        public string Name { get; set; }
    }

    public class HelloResponse
    {
        public string Result { get; set; }
    }

    public class MyServices : Service
    {
        public object Any(Hello request) =>
            new HelloResponse { Result = $"Hello, {request.Name ?? "World"}!" };
    }

    public class AppHost : AppHostBase
    {
        public AppHost() : base("Chat", typeof(ServerEventsServices).GetTypeInfo().Assembly)
        {
            var liveSettings = MapProjectPath("~/appsettings.txt");
            AppSettings = File.Exists(liveSettings)
                ? (IAppSettings)new TextFileSettings(liveSettings)
                : new AppSettings();
        }

        public override void Configure(Container container)
        {
            /** 
             * Chat 
             * **/
            Plugins.Add(new RazorFormat());
            Plugins.Add(new ServerEventsFeature());

            SetConfig(new HostConfig
            {
                DefaultContentType = MimeTypes.Json,
                AllowSessionIdsInHttpParams = true,
            });

            this.CustomErrorHttpHandlers.Remove(HttpStatusCode.Forbidden);

            //Register all Authentication methods you want to enable for this web app.            
            Plugins.Add(new AuthFeature(
                () => new AuthUserSession(),
                new IAuthProvider[] {
                    new TwitterAuthProvider(AppSettings),   //Sign-in with Twitter
                    new FacebookAuthProvider(AppSettings),  //Sign-in with Facebook
                    new GithubAuthProvider(AppSettings),    //Sign-in with GitHub
                }));

            container.RegisterAutoWiredAs<MemoryChatHistory, IChatHistory>();

            // for lte IE 9 support
            Plugins.Add(new CorsFeature());


            /** 
             * Northwind 
             * **/
            container.Register<IDbConnectionFactory>(
                new OrmLiteConnectionFactory(MapProjectPath("~/App_Data/Northwind.sqlite"), SqliteDialect.Provider));

            //Use Redis Cache
            //container.Register<ICacheClient>(new PooledRedisClientManager());

            VCardFormat.Register(this);

            Plugins.Add(new AutoQueryFeature { MaxLimit = 100 });
            Plugins.Add(new AdminFeature());
        }
    }
}
