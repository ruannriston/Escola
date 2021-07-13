using System;
using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Escola.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EscolaController : ControllerBase
    {

        private IEscolaAppService _escolaAppService;
        public EscolaController(IEscolaAppService escolaAppService)
        {
            _escolaAppService = escolaAppService;
        }

        [HttpGet]
        [Route("CarregarEscola")]
        public IActionResult CarregarEscola()
        {
            try
            {
                var ret = _escolaAppService.CarregarEscola();
                return Ok(ret);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("ExcluirEscola")]
        public IActionResult ExcluirEscola([FromBody] Domain.Escola obj)
        {
            try
            {
                _escolaAppService.ExcluirEscola(obj);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("GravarEscola")]
        public IActionResult GravarEscola([FromBody] Domain.Escola obj)
        {
            try
            {
                _escolaAppService.GravarEscola(obj);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("AlterarEscola")]
        public IActionResult AlterarEscola([FromBody] Domain.Escola obj)
        {
            try
            {
                _escolaAppService.AlterarEscola(obj);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}