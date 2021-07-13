using Domain;
using Infra.Extensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infra.Mapping
{
    public class AlunoMap : EntityTypeConfiguration<Aluno>
    {
        public override void Map(EntityTypeBuilder<Aluno> entity)
        {
            entity.HasKey(e => e.CodAluno);

            entity.ToTable("ALUNO");

            entity.Property(e => e.CodAluno).HasColumnName("COD_ALUNO");

            entity.Property(e => e.CodEscola).HasColumnName("COD_ESCOLA");

            entity.Property(e => e.Cpf)
                .HasMaxLength(11)
                .IsUnicode(false)
                .HasColumnName("CPF");

            entity.Property(e => e.DtInsercao)
                .HasColumnType("datetime")
                .HasColumnName("DT_INSERCAO");

            entity.Property(e => e.NomeAluno)
                .IsRequired()
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("NOME_ALUNO");

            entity.HasOne(d => d.Escola)
                .WithMany(p => p.Alunos)
                .HasForeignKey(d => d.CodEscola)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_ESCOLA_ALUNO");
        }
    }
}
