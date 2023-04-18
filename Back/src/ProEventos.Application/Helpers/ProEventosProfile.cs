using AutoMapper;
using ProEventos.Application.Dto;
using ProEventos.Domain;

namespace ProEventos.Application.Helpers
{
    public class ProEventosProfile: Profile
        {
        public ProEventosProfile() 
        {
            CreateMap<Evento , EventoDTO>().ReverseMap();
        }
    }
}