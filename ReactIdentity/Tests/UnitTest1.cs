using DataModel;
using DataPersistence;
using IdentityServer4.EntityFramework;
using IdentityServer4.EntityFramework.Options;
using IdentityServer4.EntityFramework.Storage;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Tests
{

    [TestClass]
    public class UnitTest1
    {
        // Proveedor para consumir inyeciones
        static ServiceProvider serviceProvider;

        [TestInitialize]
        public void InitialSetup()
        {
            var services = new ServiceCollection();

            ConfigurationBuilder configurationBuilder =
                new Microsoft.Extensions.Configuration.ConfigurationBuilder();
            IConfigurationRoot configuration = configurationBuilder.AddJsonFile("appsettings.json").Build();

            services.AddDbContext<ApplicationDbContext>(
                options => options.UseSqlServer(
                    configuration.GetConnectionString("DefaultConnection")));



            serviceProvider = services.BuildServiceProvider();


            // Lanzamos las migraciones
            ApplicationDbContext dbContext = serviceProvider.GetService<ApplicationDbContext>();
            dbContext.Database.Migrate();


        }


        [TestMethod]
        public void TestMethod1()
        {
            ApplicationDbContext dbContext = serviceProvider.GetService<ApplicationDbContext>();

            var pelucas = dbContext.Set<Peluca>();
            pelucas.Add(new Peluca { Color = "Adangaymarina" });
            dbContext.SaveChanges();

        }
    }
}
