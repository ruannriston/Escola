using Domain;
using Infra.Extensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Mapping
{
    public class EscolaMap : EntityTypeConfiguration<Escola>
    {
        public override void Map(EntityTypeBuilder<Escola> entity)
        {
            entity.HasKey(e => e.CodEscola);

            entity.ToTable("ESCOLA");

            entity.Property(e => e.CodEscola).HasColumnName("COD_ESCOLA");

            entity.Property(e => e.Cnpj)
                .IsRequired()
                .HasMaxLength(14)
                .IsUnicode(false)
                .HasColumnName("CNPJ");

            entity.Property(e => e.DtInsercao)
                .HasColumnType("datetime")
                .HasColumnName("DT_INSERCAO");

            entity.Property(e => e.NomeEscola)
                .IsRequired()
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("NOME_ESCOLA");
        }
    }
}
