import { Feather, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { ABOUT_IMAGES } from '../data/images';

export default function About() {
  const pillars = [
    {
      icon: Feather,
      title: 'Tranquil Sanctuary',
      description: 'An intentionally quiet atmosphere designed to insulate you from urban stress and noise.'
    },
    {
      icon: HeartHandshake,
      title: 'Bespoke Therapies',
      description: 'Consultative care where techniques and organic botanicals are tailored to your physical comfort.'
    },
    {
      icon: ShieldCheck,
      title: 'Pure Hygiene Standards',
      description: 'Immaculately maintained private suites with fresh organic linens and sterilized equipment for every guest.'
    },
    {
      icon: Sparkles,
      title: 'Holistic Wellbeing',
      description: 'Traditional Asian and Western therapies dedicated to releasing deep tension and resetting your energy.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#8C7A6B] font-semibold">
            Discover Lotus Spa
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C2724] tracking-tight">
            A Sanctuary of Quiet in Viman Nagar
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
          <p className="text-base text-[#6E675F] font-light leading-relaxed pt-2">
            Located at Clover Park, Viman Nagar, Pune, Lotus Spa provides a sanctuary devoted to total physical renewal, mental stillness, and tailored massotherapy.
          </p>
        </div>

        {/* Story & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-6 text-[#6E675F] font-light leading-relaxed">
            <h3 className="font-serif text-2xl text-[#2C2724] font-normal leading-snug">
              Mindful Care for Your Physical & Mental Well-being
            </h3>
            <p>
              At Lotus Spa, every treatment is rooted in the belief that authentic rejuvenation begins in an unhurried, serene setting where your comfort is paramount.
            </p>
            <p>
              Whether you are looking to release stubborn shoulder knots from long desk hours, experience a shared couple wellness session, or indulge in botanical hydrotherapy, our certified therapists ensure every touch is attentive and restorative.
            </p>
            
            <div className="p-6 border-l-3 border-[#C5A059] bg-white text-base italic font-serif text-[#2C2724] shadow-2xs rounded-r-sm">
              &ldquo;Relax, Rejuvenate, Renew — Experience total tranquility at Lotus Spa in Viman Nagar, Pune.&rdquo;
            </div>

            <p className="text-xs text-[#8C7A6B]">
              Conveniently located at {BUSINESS_INFO.address.full}.
            </p>
          </div>

          {/* Serene Photography Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="overflow-hidden border border-[#E8E2D9] bg-[#F4F0EA] aspect-[3/4] shadow-sm rounded-sm group">
                <img
                  src={ABOUT_IMAGES.treatmentSuite}
                  alt="Lotus Spa serene treatment room in Viman Nagar"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] tracking-widest uppercase text-[#8C7A6B] text-center font-medium">
                Private Therapy Suite
              </p>
            </div>

            <div className="space-y-3 pt-6 sm:pt-10">
              <div className="overflow-hidden border border-[#E8E2D9] bg-[#F4F0EA] aspect-[3/4] shadow-sm rounded-sm group">
                <img
                  src={ABOUT_IMAGES.essentialOils}
                  alt="Lotus Spa essential oils and botanical blends"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] tracking-widest uppercase text-[#8C7A6B] text-center font-medium">
                Organic Essential Oils
              </p>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#E8E2D9]">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white border border-[#E8E2D9] hover:border-[#C5A059] transition-all duration-300 shadow-2xs hover:shadow-md rounded-sm group"
              >
                <div className="w-11 h-11 border border-[#E8E2D9] flex items-center justify-center text-[#C5A059] mb-4 bg-[#FAF8F5] group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300 rounded-sm">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h4 className="font-serif text-xl font-normal text-[#2C2724] mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#6E675F] font-light leading-relaxed">
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
