using Application.Services;
using Microsoft.EntityFrameworkCore;
using Moq;
using System;
using Xunit;

namespace TestEscola
{
    public class CrudTest
    {
        [Fact]
        public void DeveRetornarAprovado()
        {
            var unit = Mock.Of<IUnitOfWork>();
            var alunoService = new AlunoAppService(unit);


            Assert.True(alunoService.ValidaNotaGeral(7), "Aprovado");
        }

        [Theory]
        [InlineData(1)]
        [InlineData(4)]
        [InlineData(7)]
        [InlineData(9)]
        public void DeverRetornarReprovado(int nota)
        {
            var unit = Mock.Of<IUnitOfWork>();
            var alunoService = new AlunoAppService(unit);


            Assert.False(alunoService.ValidaNotaGeral(nota), "Reprovado");
        }
    }
}
