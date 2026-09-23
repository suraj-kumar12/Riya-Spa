import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function Hero({ onOpenBooking }) {
  const handleScrollToServices = (e) => {
    e.preventDefault();
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#faf9f6]">
      {/* Background Decorative Subtle Texture & Ambient Tint */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#f0eae1] to-transparent rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 border border-[#d6d3d1] bg-[#f5f2eb]/60 rounded-none text-[11px] tracking-[0.2em] uppercase text-[#57534e]">
              <Sparkles className="w-3 h-3 text-[#78716c]" />
              <span>Lotus Spa • Viman Nagar, Pune</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal leading-[1.08] text-[#1c1917] tracking-tight">
              A Refined Escape for <span className="italic font-light">Mind & Body</span>
            </h1>

            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-[#57534e] font-light leading-relaxed">
              {BUSINESS_INFO.shortDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-xs tracking-[0.18em] uppercase font-medium text-[#faf9f6] bg-[#1c1917] hover:bg-[#292524] transition-all duration-200 border border-[#1c1917] shadow-sm cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 mr-2" />
                Book Appointment
              </button>

              <a
                href="#services"
                onClick={handleScrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-xs tracking-[0.18em] uppercase font-medium text-[#1c1917] bg-transparent hover:bg-[#efebe4] transition-all duration-200 border border-[#a8a29e]"
              >
                Explore Services
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </a>
            </div>

            {/* Location & Quick Meta Bar */}
            <div className="pt-6 sm:pt-8 border-t border-[#e7e5e4] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#78716c]">Location</p>
                <p className="text-xs font-medium text-[#292524] mt-0.5">Viman Nagar, Pune</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#78716c]">Ambience</p>
                <p className="text-xs font-medium text-[#292524] mt-0.5">Quiet & Hygienic</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#78716c]">Reservations</p>
                <p className="text-xs font-medium text-[#292524] mt-0.5">Prior Booking Advised</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle outer frame */}
              <div className="relative border border-[#d6d3d1] p-2 bg-[#fdfcfb]">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e7e5e4]">
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80"
                    alt="Lotus Spa serene wellness therapy in Viman Nagar Pune"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle tonal gradient overlay to maintain neutral aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#e7e5e4]">Lotus Spa Sanctuary</p>
                    <p className="font-serif text-lg tracking-wide">Tranquility in Viman Nagar</p>
                  </div>
                </div>
              </div>

              {/* Offset Accent Card */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#faf9f6] border border-[#d6d3d1] p-4 shadow-sm max-w-xs">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#78716c]">Address</p>
                <p className="text-xs text-[#292524] mt-1 font-serif leading-snug">
                  Lunkad Classic, Row House 1, near Kailash Super Market, Pune
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
