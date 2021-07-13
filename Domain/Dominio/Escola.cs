using System;
using System.Collections.Generic;

#nullable disable

namespace Domain
{
    public partial class Escola
    {
        public Escola()
        {
            Alunos = new HashSet<Aluno>();
        }

        public int CodEscola { get; set; }
        public string NomeEscola { get; set; }
        public string Cnpj { get; set; }
        public DateTime DtInsercao { get; set; }

        public virtual ICollection<Aluno> Alunos { get; set; }
    }
}
