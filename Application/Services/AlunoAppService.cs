using Application.Dto;
using Application.Interfaces;
using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Application.Services
{
    public class AlunoAppService : IAlunoAppService
    {

        private readonly IUnitOfWork _unitOfWork;
        public AlunoAppService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public List<DtoAluno> CarregarAluno()
        {
            var list = _unitOfWork.GetRepository<Aluno>().Include(c => c.Escola).Select(z => new DtoAluno
            {
                CodAluno = z.CodAluno,
                NomeAluno = z.NomeAluno,
                Cpf = z.Cpf,
                DtInsercao = z.DtInsercao,
                NomeEscola = z.Escola.NomeEscola,
                CodEscola = z.CodEscola
            }).ToList();

            return list;
        }

        public void ExcluirAluno(Aluno obj)
        {
            _unitOfWork.GetRepository<Aluno>().Delete(obj);
            _unitOfWork.SaveChanges();
        }

        public void GravarAluno(Aluno obj)
        {
            _unitOfWork.GetRepository<Aluno>().Insert(obj);
            _unitOfWork.SaveChanges();
        }

        public void AlterarAluno(Aluno obj)
        {
            _unitOfWork.GetRepository<Aluno>().Update(obj);
            _unitOfWork.SaveChanges();
        }

        public Boolean ValidaNotaGeral(int nota)
        {
            if (nota < 7)
                return false;
            else
                return true;
        }

    }
}
