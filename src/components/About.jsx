import { Feather, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function About() {
  const pillars = [
    {
      icon: Feather,
      title: 'Peaceful Environment',
      description: 'An intentionally quiet atmosphere designed to insulate you from daily noise and rush.'
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Treatments',
      description: 'Consultative sessions where therapist techniques and pressures are adapted to your comfort.'
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic Space',
      description: 'Immaculately maintained treatment rooms with clean linens and fresh botanical oils for each guest.'
    },
    {
      icon: Sparkles,
      title: 'Dedicated Wellness',
      description: 'Traditional and contemporary therapies dedicated to physical recovery and inner calm.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#f5f2eb]/40 border-t border-b border-[#e7e5e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#78716c] font-medium">
            About Lotus Spa
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1c1917] tracking-tight">
            A Haven of Calm in Viman Nagar
          </h2>
          <div className="w-12 h-px bg-[#78716c] mx-auto mt-4" />
          <p className="text-base text-[#57534e] font-light leading-relaxed pt-2">
            Located in Pune&apos;s vibrant Viman Nagar neighborhood, Lotus Spa provides a serene space dedicated to relaxation, physical recovery, and restorative wellness therapies.
          </p>
        </div>

        {/* Narrative & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-6 text-[#44403c] font-light leading-relaxed">
            <h3 className="font-serif text-2xl text-[#1c1917] font-normal">
              Mindful Care for Your Physical Wellbeing
            </h3>
            <p>
              At Lotus Spa, our focus is centered on pure relaxation and personal comfort. We believe that true rejuvenation begins in a peaceful, unhurried setting where every detail supports mental ease.
            </p>
            <p>
              Whether you are looking to ease persistent muscle tension after long workdays, enjoy a soothing couple therapy, or simply take time for quiet reflection, our treatment sessions are tailored thoughtfully to your preferences.
            </p>
            
            <div className="p-5 border-l-2 border-[#1c1917] bg-[#faf9f6] text-sm italic font-serif text-[#292524]">
              &ldquo;Experience a calm, rejuvenating spa experience at Lotus Spa in Viman Nagar, Pune.&rdquo;
            </div>

            <p className="text-sm text-[#78716c]">
              Conveniently located at {BUSINESS_INFO.address.full}.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden border border-[#d6d3d1] bg-[#e7e5e4] aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=700&q=80"
                  alt="Lotus Spa treatment room atmosphere in Viman Nagar"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition duration-500"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] tracking-wider uppercase text-[#78716c] text-center">
                Serene Suite
              </p>
            </div>

            <div className="space-y-4 pt-8 sm:pt-12">
              <div className="overflow-hidden border border-[#d6d3d1] bg-[#e7e5e4] aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=700&q=80"
                  alt="Lotus Spa botanical oils and soothing essences"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition duration-500"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] tracking-wider uppercase text-[#78716c] text-center">
                Natural Essentials
              </p>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-[#e7e5e4]">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#faf9f6] border border-[#e7e5e4] hover:border-[#a8a29e] transition-colors"
              >
                <div className="w-10 h-10 border border-[#d6d3d1] flex items-center justify-center text-[#1c1917] mb-4 bg-[#f5f2eb]/60">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#1c1917] mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#57534e] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
