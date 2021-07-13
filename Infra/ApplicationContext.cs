using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Infra
{
    public class ApplicationContext : DbContext
    {
        public IConfigurationRoot Configuration { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            
        }

        public virtual DbSet<Escola> Escola { get; set; }
        public virtual DbSet<Aluno> Aluno { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //VERIFICA O MAPPING E AUTOMATIZA O CARREGAMENTO DO MESMO.
            Type[] types = typeof(Infra.Extensions.EntityTypeConfiguration<>).GetTypeInfo().Assembly.GetTypes();
            IEnumerable<Type> typesToRegister = types
                .Where(type => !string.IsNullOrEmpty(type.Namespace) &&
                                type.GetTypeInfo().BaseType != null &&
                                type.GetTypeInfo().BaseType.GetTypeInfo().IsGenericType &&
                                type.GetTypeInfo().BaseType.GetGenericTypeDefinition() == typeof(Infra.Extensions.EntityTypeConfiguration<>));

            foreach (var type in typesToRegister)
            {
                dynamic configurationInstance = Activator.CreateInstance(type);
                Infra.Extensions.ModelBuilderExtensions.AddConfiguration(modelBuilder, configurationInstance);
            }

            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            if (!optionBuilder.IsConfigured)
                optionBuilder.UseSqlServer(RetornaUrlConection());
        }

        public string RetornaUrlConection()
        {
            var builder = new ConfigurationBuilder()
             .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json");
            Configuration = builder.Build();

            string conexao = Configuration.GetConnectionString("DefaultConnection");
            return conexao;
        }
    }
}
