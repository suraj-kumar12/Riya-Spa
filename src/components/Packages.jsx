import { Check, Calendar } from 'lucide-react';
import { PACKAGES } from '../data/packagesData';

export default function Packages({ onOpenBooking }) {
  return (
    <section id="packages" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#8C7A6B] font-semibold">
            Curated Wellness Journeys
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C2724] tracking-tight">
            Wellness Rituals & Packages
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
          <p className="text-base text-[#6E675F] font-light leading-relaxed pt-2">
            Thoughtfully combined multi-treatment journeys crafted for prolonged physical rejuvenation and sensory harmony.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white border border-[#E8E2D9] hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-md rounded-sm overflow-hidden group"
            >
              {/* Image banner */}
              {pkg.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F4F0EA]">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 bg-white/95 backdrop-blur-xs border border-[#E8E2D9] text-[#C5A059] font-medium shadow-2xs rounded-full">
                      {pkg.badge}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2C2724] mb-2 leading-snug group-hover:text-[#C5A059] transition-colors">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-[#6E675F] font-light leading-relaxed mb-4">
                    {pkg.description}
                  </p>

                  {/* Inclusions list */}
                  <div className="space-y-2 pt-3 border-t border-[#F0EBE1]">
                    <p className="text-[10px] tracking-wider uppercase text-[#8C7A6B] font-semibold">
                      Package Inclusions:
                    </p>
                    <ul className="space-y-1.5">
                      {pkg.includes.map((inc, i) => (
                        <li key={i} className="flex items-center text-xs text-[#2C2724] space-x-2">
                          <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                          <span className="font-light">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Duration & Price */}
                  <div className="py-2.5 border-t border-[#F0EBE1] flex justify-between items-center text-[11px] text-[#8C7A6B] mb-3">
                    <span>{pkg.duration}</span>
                    <span className="font-medium text-[#2C2724]">{pkg.price}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(pkg.title)}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs tracking-[0.16em] uppercase font-medium text-white bg-[#C5A059] hover:bg-[#B38E46] transition-all rounded-2xs cursor-pointer shadow-2xs"
                  >
                    <Calendar className="w-3.5 h-3.5 mr-2" />
                    Inquire Package
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs text-[#8C7A6B] font-light max-w-xl mx-auto border-t border-[#E8E2D9] pt-6">
          Custom package combinations and group bookings can be arranged upon request.
        </div>

      </div>
    </section>
  );
}
