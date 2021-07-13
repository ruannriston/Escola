using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Dto
{
    public class DtoAluno
    {
        public int CodAluno { get; set; }
        public string NomeAluno { get; set; }
        public string Cpf { get; set; }
        public int CodEscola { get; set; }
        public string NomeEscola { get; set; }
        public DateTime DtInsercao { get; set; }
    }
}
