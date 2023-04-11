using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence
{
    public interface IPalestrantePersist
    {
         //Palestrantes
        Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string nome, bool includeEvemtos );
        Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEvemtos);
        Task<Palestrante> GetPalestranteByIdAsync(int palestranteId, bool includeEvemtos);
    }
}