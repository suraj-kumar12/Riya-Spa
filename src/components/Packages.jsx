import { Check, Calendar } from 'lucide-react';
import { PACKAGES } from '../data/packagesData';

export default function Packages({ onOpenBooking }) {
  return (
    <section id="packages" className="py-20 md:py-28 bg-[#faf9f6] border-t border-[#e7e5e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#78716c] font-medium">
            Curated Experiences
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1c1917] tracking-tight">
            Wellness Rituals & Packages
          </h2>
          <div className="w-12 h-px bg-[#78716c] mx-auto mt-4" />
          <p className="text-base text-[#57534e] font-light leading-relaxed pt-2">
            Thoughtfully combined multi-treatment journeys crafted for prolonged rejuvenation and holistic care.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#faf9f6] border border-[#e7e5e4] hover:border-[#a8a29e] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group"
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 bg-[#f5f2eb] border border-[#e7e5e4] text-[#57534e]">
                    {pkg.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1c1917] mb-3 leading-snug">
                  {pkg.title}
                </h3>

                <p className="text-xs text-[#57534e] font-light leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Inclusions list */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-[#f0ece5]">
                  <p className="text-[10px] tracking-wider uppercase text-[#78716c] font-medium">
                    Package Inclusions:
                  </p>
                  <ul className="space-y-2">
                    {pkg.includes.map((inc, i) => (
                      <li key={i} className="flex items-center text-xs text-[#292524] space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#1c1917] shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Meta structure */}
                <div className="py-3 border-t border-[#f0ece5] flex justify-between items-center text-[11px] text-[#78716c] mb-4">
                  <span>{pkg.duration}</span>
                  <span className="font-medium text-[#292524]">{pkg.price}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBooking(pkg.title)}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs tracking-[0.16em] uppercase font-medium text-[#1c1917] bg-[#f5f2eb] hover:bg-[#1c1917] hover:text-[#faf9f6] border border-[#d6d3d1] hover:border-[#1c1917] transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 mr-2" />
                  Inquire Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs text-[#78716c] font-light">
          Custom package combinations and group bookings can also be arranged upon request.
        </div>

      </div>
    </section>
  );
}
