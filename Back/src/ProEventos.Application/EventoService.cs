using System;
using System.Threading.Tasks;
using ProEventos.Application.Dto;
using ProEventos.Application.Interfaces;
using ProEventos.Persistence;
using ProEventos.Domain;
using AutoMapper;

namespace ProEventos.Application
{
    public class EventoService : IEventosService
    {
        private readonly IGeralPersist _geralPersist;

        private readonly IEventosPersist _eventoPersist;
        private readonly IMapper _mapper;
     
        public EventoService(IGeralPersist geralPersist, IEventosPersist eventoPersist, IMapper mapper)
        {
            _mapper = mapper;
            _eventoPersist = eventoPersist;            
            _geralPersist = geralPersist;
                     
        }
        public async Task<EventoDTO> AddEventos(EventoDTO model)
        {
            try
            {
                var evento = _mapper.Map<Evento>(model);
               _geralPersist.Add<Evento>(evento);
               if(await _geralPersist.SaveChangesAsync())
               {
                return _mapper.Map<EventoDTO>(await _eventoPersist.GetEventoByIdAsync(evento.Id, false));
               
               }
               return null;
            }
            catch (Exception ex)
            {
                
                throw new Exception(ex.Message);
            }
        }

       public async Task<EventoDTO> UpdateEvento(int eventoId, EventoDTO model)
        {
            try
            {
                var evento = await _eventoPersist.GetEventoByIdAsync(eventoId,false);
                if(evento==null) return null;
              
                model.Id = evento.Id;
                _mapper.Map(model,evento);

                _geralPersist.Update<Evento>(evento);
                if(await _geralPersist.SaveChangesAsync())
                {
                    return _mapper.Map<EventoDTO>(await _eventoPersist.GetEventoByIdAsync(evento.Id, false));
                }
                return null;
            }
            catch (Exception ex)
            {
                
               throw new Exception(ex.Message);
            }
        }

        public async Task<bool> DeleteEvento(int eventoId)
        {
            try
            {
                var evento = await _eventoPersist.GetEventoByIdAsync(eventoId);
                if(evento==null) throw new Exception("Evento para deleção não encontrado!");

                _geralPersist.Delete<Evento>(evento);
                return await _geralPersist.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                
               throw new Exception(ex.Message);
            }
        }

        public async Task<EventoDTO[]> GetAllEventosAsync(bool includePalestrantes = false)
        {
            try
            {
                var eventos = await _eventoPersist.GetAllEventosAsync(includePalestrantes);
                if (eventos==null) return null;

                 var resultado = _mapper.Map<EventoDTO[]>(eventos);

                return resultado;
            }

            catch (Exception ex)
            {
                
                throw new Exception(ex.Message);
            }
        }

        public async Task<EventoDTO[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes = false)
        {
             try
            {
                var eventos = await _eventoPersist.GetAllEventosByTemaAsync(tema, includePalestrantes);
                if (eventos==null) return null;

                  var resultado = _mapper.Map<EventoDTO[]>(eventos);

                return resultado;
            }

            catch (Exception ex)
            {
                
                throw new Exception(ex.Message);
            }
        }

        public async Task<EventoDTO> GetEventoByIdAsync(int eventoId, bool includePalestrantes = false)
        {
                 try
            {
                var evento = await _eventoPersist.GetEventoByIdAsync(eventoId, includePalestrantes);
                if (evento==null) return null;

                var resultado = _mapper.Map<EventoDTO>(evento);

                return resultado;
            }

            catch (Exception ex)
            {
                
                throw new Exception(ex.Message);
            }
        }

    
    }
}