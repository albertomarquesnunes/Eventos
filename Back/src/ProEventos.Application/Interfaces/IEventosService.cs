using System.Threading.Tasks;
using ProEventos.Application.Dto;

namespace ProEventos.Application.Interfaces
{
    public interface IEventosService
    {
       Task<EventoDTO> AddEventos(EventoDTO model) ;
       Task<EventoDTO> UpdateEvento(int eventoId, EventoDTO model);
       Task<bool> DeleteEvento(int eventoId);
       Task<EventoDTO[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes=false );
       Task<EventoDTO[]> GetAllEventosAsync(bool includePalestrantes=false);
       Task<EventoDTO> GetEventoByIdAsync(int eventoId, bool includePalestrantes=false);

    }
}