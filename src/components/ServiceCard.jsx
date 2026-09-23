import { Clock, Tag, ChevronRight, Calendar } from 'lucide-react';

export default function ServiceCard({ service, onViewDetails, onBookNow }) {
  return (
    <article className="group bg-[#faf9f6] border border-[#e7e5e4] hover:border-[#a8a29e] transition-all duration-300 flex flex-col h-full">
      {/* Service Image with subtle zoom */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#e7e5e4]">
        <img
          src={service.image}
          alt={`${service.name} at Lotus Spa Viman Nagar Pune`}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2.5">
          <h3 className="font-serif text-xl sm:text-2xl text-[#1c1917] font-normal tracking-tight group-hover:text-[#44403c] transition-colors">
            {service.name}
          </h3>
          <p className="text-xs text-[#57534e] font-light leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>

        {/* Duration & Price structured metadata */}
        <div className="pt-2 border-t border-[#f0ece5] flex items-center justify-between text-[11px] text-[#78716c]">
          <div className="flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Tag className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>{service.price}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <button
            type="button"
            onClick={() => onViewDetails(service)}
            className="inline-flex items-center justify-center px-3 py-2 text-[11px] tracking-[0.12em] uppercase font-medium text-[#292524] bg-transparent hover:bg-[#f5f2eb] border border-[#d6d3d1] transition-colors cursor-pointer"
          >
            <span>View Details</span>
            <ChevronRight className="w-3 h-3 ml-1" />
          </button>

          <button
            type="button"
            onClick={() => onBookNow(service)}
            className="inline-flex items-center justify-center px-3 py-2 text-[11px] tracking-[0.14em] uppercase font-medium text-[#faf9f6] bg-[#1c1917] hover:bg-[#292524] border border-[#1c1917] transition-colors cursor-pointer"
          >
            <Calendar className="w-3 h-3 mr-1" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </article>
  );
}
