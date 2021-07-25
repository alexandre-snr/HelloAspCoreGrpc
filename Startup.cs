using HelloGrpc.Models;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using System;

namespace HelloGrpc
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {

            switch (Environment.GetEnvironmentVariable("DATABASE"))
            {
                case "MEMORY": 
                    services.AddDbContext<HelloContext>(opt => opt.UseInMemoryDatabase("Hello"));
                    Console.WriteLine("using in-memory database.");
                    break;
                case "POSTGRES":
                    Console.WriteLine(Environment.GetEnvironmentVariable("POSTGRES_URI"));
                    services.AddDbContext<HelloContext>(opt => opt.UseNpgsql(Environment.GetEnvironmentVariable("POSTGRES_URI"))); 
                    Console.WriteLine("using postgres database.");
                    break;
                default: Console.Error.WriteLine("no database set."); break;
            }
            services.AddGrpc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGrpcService<GreeterService>();

                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
                });
            });
        }
    }
}
