using Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Interfaces
{
    public interface IEscolaAppService
    {
        List<Escola> CarregarEscola();

        void ExcluirEscola(Escola obj);

        void GravarEscola(Escola obj);
        void AlterarEscola(Escola obj);


    }
}
