using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence
{
    public interface IEventosPersist
    {
      
        //Eventos
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes=false );
        Task<Evento[]> GetAllEventosAsync(bool includePalestrantes=false);
        Task<Evento> GetEventoByIdAsync(int eventoId, bool includePalestrantes=false);

    }
}