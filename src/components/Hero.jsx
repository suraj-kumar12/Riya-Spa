import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Sparkles, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { HERO_IMAGES, LOGO_IMAGE } from '../data/images';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-[#FAF8F5]">
      {/* Subtle Ambient Light Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#F3EFEA] via-[#FAF8F5] to-transparent rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 border border-[#E8E2D9] bg-white/90 rounded-full text-[11px] tracking-[0.22em] uppercase text-[#8C7A6B] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Lotus Spa • Luxury Spa in Viman Nagar Pune</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-normal leading-[1.08] text-[#2C2724] tracking-tight">
              Premier <span className="italic font-light text-[#C5A059]">Luxury Spa in Viman Nagar Pune</span>
            </h1>

            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-[#6E675F] font-light leading-relaxed">
              Immerse yourself in deeply restorative full body massage in Pune, tranquil couple spa experiences, and organic botanical rituals at Lotus Spa in Clover Park, Viman Nagar, Pune, Maharashtra 411014.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs tracking-[0.18em] uppercase font-medium text-white bg-[#C5A059] hover:bg-[#B38E46] transition-all duration-300 shadow-sm rounded-sm cursor-pointer active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 mr-2.5" />
                Book Appointment
              </button>

              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs tracking-[0.18em] uppercase font-medium text-[#2C2724] bg-white hover:bg-[#F4F0EA] transition-all duration-300 border border-[#E8E2D9] rounded-sm shadow-2xs group"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Meta Highlights */}
            <div className="pt-8 border-t border-[#E8E2D9] grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="bg-white/60 p-3.5 border border-[#E8E2D9]/80 rounded-sm">
                <p className="text-[10px] uppercase tracking-wider text-[#8C7A6B]">Location</p>
                <p className="text-xs font-semibold text-[#2C2724] mt-0.5">Clover Park, Viman Nagar</p>
              </div>
              <div className="bg-white/60 p-3.5 border border-[#E8E2D9]/80 rounded-sm">
                <p className="text-[10px] uppercase tracking-wider text-[#8C7A6B]">Ambience</p>
                <p className="text-xs font-semibold text-[#2C2724] mt-0.5">Private & Hygienic Suites</p>
              </div>
              <div className="bg-white/60 p-3.5 border border-[#E8E2D9]/80 rounded-sm">
                <p className="text-[10px] uppercase tracking-wider text-[#8C7A6B]">Experience</p>
                <p className="text-xs font-semibold text-[#2C2724] mt-0.5">Certified Spa Therapists</p>
              </div>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame */}
              <div className="relative border border-[#E8E2D9] p-2.5 bg-white shadow-md rounded-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xs bg-[#F4F0EA]">
                  <img
                    src={HERO_IMAGES.main}
                    alt="Lotus Spa - Premier luxury spa in Viman Nagar Pune offering full body massage in Pune"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle Light Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#E8E2D9]">Lotus Spa Sanctuary</p>
                    <p className="font-serif text-lg tracking-wide font-normal">Pure Rejuvenation in Viman Nagar</p>
                  </div>
                </div>
              </div>

              {/* Offset Floating Badge */}
              <div className="hidden sm:flex items-center space-x-3 absolute -bottom-6 -left-6 bg-white border border-[#E8E2D9] p-4 shadow-lg max-w-xs rounded-sm">
                <img src={LOGO_IMAGE} alt="Lotus Spa Logo" className="h-11 w-11 rounded-full border border-[#E8E2D9] object-contain" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-medium">Lotus Spa</p>
                  <p className="text-xs text-[#2C2724] font-serif leading-snug">
                    Clover Park, Viman Nagar, Pune
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
