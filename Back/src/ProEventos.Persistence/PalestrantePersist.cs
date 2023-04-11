using System.Linq;
using System.Threading.Tasks;
using ProEventos.Domain;
using Microsoft.EntityFrameworkCore;
using ProEventos.Persistence.Contexts;


namespace ProEventos.Persistence
{
    public class PalestrantePersist : IPalestrantePersist
    {
        private readonly ProEventosContext _context;
        public PalestrantePersist(ProEventosContext context)
        {
            _context = context;
            
        }
       
        public async Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos=false)
        {
              IQueryable<Palestrante> query = _context.Palestrantes
                          .Include(e => e.RedeSociais);
                        

                    if(includeEventos){
                        query=query.Include(p => p.PalestranteEventos)
                                    .ThenInclude(e => e.Evento);
                    }
                        query = query.OrderBy(pe => pe.Id);

            return await query.ToArrayAsync();
        }

        public async Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string nome, bool includeEventos=false)
        {
             IQueryable<Palestrante> query = _context.Palestrantes
                          .Include(p => p.RedeSociais);
                        

                    if(includeEventos){
                        query=query.Include(p => p.PalestranteEventos)
                                    .ThenInclude(e => e.Evento);
                    }
                        query = query.OrderBy(p => p.Id).Where(p=>p.Nome.ToLower().Contains(p.Nome.ToLower()));

            return await query.ToArrayAsync();
        }

        

        public async Task<Palestrante> GetPalestranteByIdAsync(int palestranteId, bool includeEventos=false)
        {
            IQueryable<Palestrante> query = _context.Palestrantes
                          .Include(p => p.RedeSociais);
                        

                    if(includeEventos){
                        query=query.Include(p => p.PalestranteEventos)
                                    .ThenInclude(e => e.Evento);
                    }
                        query = query.OrderBy(p => p.Id).Where(p=>p.Id==palestranteId);

            return await query.FirstOrDefaultAsync();
        }

     
    }
}