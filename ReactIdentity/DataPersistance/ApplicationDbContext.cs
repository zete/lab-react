using DataModel;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataPersistence
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<Empleado> Empleados{ get; set; }
        public DbSet<Coche> Coches { get; set; }

        // Configuraciones específicas del modelo
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Empleado>().HasNoKey();

            base.OnModelCreating(builder);
        }

        // Configuraciones del DBContext (ej./Cadena de conexión, etc... Options)
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

    }
}
