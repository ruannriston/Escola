using Application.Dto;
using Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Interfaces
{
    public interface IAlunoAppService
    {
        List<DtoAluno> CarregarAluno();

        void ExcluirAluno(Aluno obj);

        void GravarAluno(Aluno obj);
        void AlterarAluno(Aluno obj);
    }
}
