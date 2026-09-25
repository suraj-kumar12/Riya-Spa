import { 
  VolumeX, 
  UserCheck, 
  Award, 
  Sparkles, 
  MapPin, 
  CalendarCheck 
} from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: VolumeX,
      title: "Tranquil Quietude",
      description: "A serene, low-noise sanctuary intentionally isolated from city commotion to support mental stillness."
    },
    {
      icon: UserCheck,
      title: "Bespoke Personalization",
      description: "Every therapy is attuned to your desired pressure, comfort level, and target areas of muscular tension."
    },
    {
      icon: Award,
      title: "Certified Hospitality",
      description: "Dedicated spa staff committed to polite, respectful, and courteous hospitality throughout your visit."
    },
    {
      icon: Sparkles,
      title: "Pristine Sanitation",
      description: "Strict hygiene protocols, fresh single-use amenities, and immaculate treatment linens for every guest."
    },
    {
      icon: MapPin,
      title: "Prime Viman Nagar Location",
      description: "Centrally positioned in Clover Park, Viman Nagar with effortless local access."
    },
    {
      icon: CalendarCheck,
      title: "Seamless Reservations",
      description: "Convenient online booking reservation system and responsive reception assistance via phone."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#8C7A6B] font-semibold">
            The Lotus Spa Standard
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C2724] tracking-tight">
            Why Choose Lotus Spa
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
          <p className="text-base text-[#6E675F] font-light leading-relaxed pt-2">
            A conscious commitment to quiet comfort, pristine hygiene, and genuine care in the heart of Pune.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E8E2D9] p-8 hover:border-[#C5A059] transition-all duration-300 relative group flex flex-col justify-between shadow-2xs hover:shadow-md rounded-sm"
              >
                <div>
                  <div className="w-12 h-12 border border-[#E8E2D9] bg-[#FAF8F5] flex items-center justify-center text-[#C5A059] mb-6 group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300 rounded-sm">
                    <Icon className="w-5.5 h-5.5 stroke-[1.75]" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#2C2724] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6E675F] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0EBE1] flex items-center justify-between">
                  <span className="text-[10px] tracking-widest text-[#8C7A6B] uppercase font-mono font-medium">
                    0{idx + 1}
                  </span>
                  <div className="w-6 h-0.5 bg-[#E8E2D9] group-hover:w-12 group-hover:bg-[#C5A059] transition-all duration-300 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
