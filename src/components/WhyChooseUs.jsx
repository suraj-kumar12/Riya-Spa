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
      title: "Peaceful Environment",
      description: "A calm, low-noise sanctuary intentionally isolated from daily city commotion to support mental stillness."
    },
    {
      icon: UserCheck,
      title: "Personalized Experience",
      description: "Every therapy is attuned to your desired pressure, comfort level, and target areas of tension."
    },
    {
      icon: Award,
      title: "Professional Service",
      description: "Dedicated spa staff committed to polite, respectful, and courteous hospitality throughout your visit."
    },
    {
      icon: Sparkles,
      title: "Hygienic Space",
      description: "Strict sanitation protocols, fresh single-use amenities, and pristine treatment linens for every guest."
    },
    {
      icon: MapPin,
      title: "Convenient Viman Nagar Location",
      description: "Centrally positioned in Viman Nagar near Kailash Super Market with effortless local access."
    },
    {
      icon: CalendarCheck,
      title: "Easy Appointment Booking",
      description: "Convenient online booking reservation system and responsive reception assistance."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f5f2eb]/30 border-t border-[#e7e5e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#78716c] font-medium">
            The Lotus Spa Standard
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1c1917] tracking-tight">
            Why Choose Lotus Spa
          </h2>
          <div className="w-12 h-px bg-[#78716c] mx-auto mt-4" />
          <p className="text-base text-[#57534e] font-light leading-relaxed pt-2">
            A conscious commitment to quiet comfort, hygiene, and genuine care in the heart of Pune.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#faf9f6] border border-[#e7e5e4] p-8 hover:border-[#a8a29e] transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 border border-[#d6d3d1] bg-[#f5f2eb]/60 flex items-center justify-center text-[#1c1917] mb-6 group-hover:bg-[#1c1917] group-hover:text-[#faf9f6] transition-colors">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#1c1917] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#57534e] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#f0ece5] flex items-center justify-between">
                  <span className="text-[10px] tracking-widest text-[#a8a29e] uppercase font-mono">
                    0{idx + 1}
                  </span>
                  <div className="w-6 h-px bg-[#e7e5e4] group-hover:w-12 group-hover:bg-[#1c1917] transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
