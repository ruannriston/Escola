using System;
using System.Collections.Generic;

#nullable disable

namespace Domain
{
    public partial class Aluno
    {
        public int CodAluno { get; set; }
        public string NomeAluno { get; set; }
        public string Cpf { get; set; }
        public int CodEscola { get; set; }
        public DateTime DtInsercao { get; set; }

        public virtual Escola Escola { get; set; }
    }
}
