using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
           
        public EventoController()
        {
            
        }
        public IEnumerable<Evento> _evento = new Evento[]{
        new Evento(){
                    EventoId = 1,
                    Tema = "Angular 11 e .NET 5",
                    Local = "Belo Horizonte",
                    Lote = "1 lote",
                    QtdPessoas = 250,
                    DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy"),
                    ImagemURL = "meucu.jpg"
            },   new Evento(){
                    EventoId = 2,
                    Tema = "React11 e .NET 3",
                    Local = "São Paulo",
                    Lote = "2 lote",
                    QtdPessoas = 250,
                    DataEvento = DateTime.Now.AddDays(4).ToString("dd/MM/yyyy"),
                    ImagemURL = "cu.jpg"
            }
        };

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return  _evento;
            
        }

         [HttpGet("{id}")]
        public IEnumerable<Evento> GetById(int id)
        {
            return  _evento.Where(evento => evento.EventoId==id);
            
        }

        [HttpPost]
        public string Post()
        {
            return "Exemplo de Post";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Exemplo de Put {id}";
        }
        
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Exemplo de delete {id}";
        }
    }
}
