using System;
using Application.Interfaces;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace Escola.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlunoController : ControllerBase
    {

        private IAlunoAppService _AlunoAppService;
        public AlunoController(IAlunoAppService AlunoAppService)
        {
            _AlunoAppService = AlunoAppService;
        }

        [HttpGet]
        [Route("CarregarAluno")]
        public IActionResult CarregarAluno()
        {
            try
            {
                var ret = _AlunoAppService.CarregarAluno();
                return Ok(ret);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("ExcluirAluno")]
        public IActionResult ExcluirAluno([FromBody] Aluno obj)
        {
            try
            {
                _AlunoAppService.ExcluirAluno(obj);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("GravarAluno")]
        public IActionResult GravarAluno([FromBody] Aluno obj)
        {
            try
            {
                _AlunoAppService.GravarAluno(obj);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("AlterarAluno")]
        public IActionResult AlterarAluno([FromBody] Aluno obj)
        {
            try
            {
                _AlunoAppService.AlterarAluno(obj);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}