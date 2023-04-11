using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ProEventos.Persistence.Contexts;
using ProEventos.Domain;
using ProEventos.Application.Interfaces;
using System.Threading.Tasks;
using System;
using Microsoft.AspNetCore.Http;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventosController : ControllerBase
    {
        private readonly IEventosService _eventosService;
         
        public EventosController(IEventosService eventosService)
        {
            _eventosService = eventosService;
                       
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {

            var eventos = await _eventosService.GetAllEventosAsync(true);

            if(eventos==null) return NotFound("Nenhum evento encontrado.");

            return Ok(eventos);

            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,$"Erro ao tentar recuperar eventos. Erro: {ex.Message}");
            }
        }

         [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {

            var evento = await _eventosService.GetEventoByIdAsync(id);

            if(evento==null) return NotFound("Evento não encontrado.");
            
            return Ok(evento);

            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,$"Erro ao tentar recuperar eventos. Erro: {ex.Message}");
            }
        }

         [HttpGet("tema/{tema}")]
        public async Task<IActionResult> GetByTema(string tema)
        {
            try
            {

            var evento = await _eventosService.GetAllEventosByTemaAsync(tema);

            if(evento==null) return NotFound("Eventos por tema não encontrados.");
            
            return Ok(evento);

            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,$"Erro ao tentar recuperar eventos. Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Evento model)
        {
            try
            {
            var evento = await _eventosService.AddEventos(model);
            if(evento==null) return BadRequest("Erro ao tentar adicionar evento.");
            
            return Ok(evento);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,$"Erro ao tentar adicionar evento. Erro: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Evento model)
        {
            try
            {
            var evento = await _eventosService.UpdateEvento(id,model);
            if(evento==null) return BadRequest("Erro ao tentar Atualizar evento.");
            
            return Ok(evento);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,$"Erro ao tentar adicionar evento. Erro: {ex.Message}");
            }
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
                  try
            {
            var evento = await _eventosService.DeleteEvento(id);
            if(evento==null) return BadRequest("Erro ao tentar Atualizar evento.");
            
            return Ok(evento);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,$"Erro ao tentar adicionar evento. Erro: {ex.Message}");
            }
        }
    }
}
