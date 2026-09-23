import { Clock, Tag, ChevronRight, Calendar } from 'lucide-react';

export default function ServiceCard({ service, onViewDetails, onBookNow }) {
  return (
    <article className="group bg-white border border-[#E8E2D9] hover:border-[#C5A059] transition-all duration-300 flex flex-col h-full shadow-2xs hover:shadow-md rounded-sm overflow-hidden">
      {/* Service Image with subtle zoom */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F4F0EA]">
        <img
          src={service.image}
          alt={`${service.name} at Lotus Spa Viman Nagar Pune`}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 transition-opacity group-hover:opacity-0" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-serif text-xl sm:text-2xl text-[#2C2724] font-normal tracking-tight group-hover:text-[#C5A059] transition-colors">
            {service.name}
          </h3>
          <p className="text-xs text-[#6E675F] font-light leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>

        {/* Duration & Price structured metadata */}
        <div className="pt-3 border-t border-[#F0EBE1] flex items-center justify-between text-[11px] text-[#8C7A6B]">
          <div className="flex items-center space-x-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center space-x-1.5 font-medium">
            <Tag className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{service.price}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => onViewDetails(service)}
            className="inline-flex items-center justify-center px-3 py-2 text-[11px] tracking-[0.12em] uppercase font-medium text-[#2C2724] bg-[#FAF8F5] hover:bg-[#F4F0EA] border border-[#E8E2D9] transition-all rounded-2xs cursor-pointer"
          >
            <span>Details</span>
            <ChevronRight className="w-3 h-3 ml-1 text-[#C5A059]" />
          </button>

          <button
            type="button"
            onClick={() => onBookNow(service)}
            className="inline-flex items-center justify-center px-3 py-2 text-[11px] tracking-[0.14em] uppercase font-medium text-white bg-[#C5A059] hover:bg-[#B38E46] transition-all rounded-2xs cursor-pointer shadow-2xs"
          >
            <Calendar className="w-3 h-3 mr-1" />
            <span>Book</span>
          </button>
        </div>
      </div>
    </article>
  );
}
