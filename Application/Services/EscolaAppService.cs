using Application.Interfaces;
using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Application.Services
{
    public class EscolaAppService : IEscolaAppService
    {
        private readonly IUnitOfWork _unitOfWork;
        public EscolaAppService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public List<Escola> CarregarEscola()
        {
            var list = _unitOfWork.GetRepository<Escola>().GetAll().ToList();
            return list;
        }

        public void ExcluirEscola(Escola obj)
        {
            _unitOfWork.GetRepository<Escola>().Delete(obj);
            _unitOfWork.SaveChanges();
        }

        public void GravarEscola(Escola obj)
        {
            _unitOfWork.GetRepository<Escola>().Insert(obj);
            _unitOfWork.SaveChanges();
        }

        public void AlterarEscola(Escola obj)
        {
            _unitOfWork.GetRepository<Escola>().Update(obj);
            _unitOfWork.SaveChanges();
        }
    }
}
