import { Link } from 'react-router-dom';
import { Calendar, Feather, ShieldCheck, HeartHandshake, Sparkles, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import WhyChooseUs from '../components/WhyChooseUs';

export default function AboutPage({ onOpenBooking }) {
  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF8F5]">
      
      {/* Header Banner */}
      <div className="bg-[#F4F0EA] border-b border-[#E8E2D9] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#8C7A6B] font-semibold">
            Our Story & Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2724] font-normal tracking-tight">
            About Lotus Spa
          </h1>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto rounded-full" />
          <p className="max-w-2xl mx-auto text-base text-[#6E675F] font-light leading-relaxed">
            A sanctuary devoted to holistic health, mindful massotherapy, and unhurried peace in Viman Nagar, Pune.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-[#6E675F] font-light leading-relaxed">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-[#E8E2D9] text-[10px] tracking-widest uppercase text-[#C5A059] font-medium rounded-full">
              <Sparkles className="w-3 h-3" />
              <span>Established Sanctuary</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2724] font-normal leading-snug">
              Creating a Gentle Retreat Away From Urban Stress
            </h2>
            <p>
              Lotus Spa was founded with a clear intention: to build an oasis where guests can disengage from daily rush, reset sensory fatigue, and experience pure musculoskeletal restoration.
            </p>
            <p>
              Located in the heart of Viman Nagar near Kailash Super Market, our sanctuary features private single and couple treatment suites designed with soft ambient lighting, crisp organic linens, and natural stone finishes.
            </p>
            
            <div className="p-6 border-l-3 border-[#C5A059] bg-white text-base italic font-serif text-[#2C2724] shadow-2xs rounded-r-sm">
              &ldquo;We believe that true wellness is not a luxury, but a vital pause that allows body and spirit to renew.&rdquo;
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden border border-[#E8E2D9] bg-[#F4F0EA] aspect-[4/5] shadow-sm rounded-sm group">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85"
                  alt="Lotus Spa Welcome Lounge"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <p className="text-[11px] tracking-widest uppercase text-[#8C7A6B] text-center font-medium">Tranquil Welcome Lounge</p>
            </div>

            <div className="space-y-4 pt-8">
              <div className="overflow-hidden border border-[#E8E2D9] bg-[#F4F0EA] aspect-[4/5] shadow-sm rounded-sm group">
                <img
                  src="https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=800&q=85"
                  alt="Lotus Spa Couples Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <p className="text-[11px] tracking-widest uppercase text-[#8C7A6B] text-center font-medium">Couples Suite Sanctuary</p>
            </div>
          </div>
        </div>

        {/* Pillars / Values Section */}
        <WhyChooseUs />

        {/* Experience Banner */}
        <div className="bg-white border border-[#E8E2D9] p-8 sm:p-12 rounded-sm shadow-2xs flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A059] font-medium">Prior Reservations</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2724]">Ready to Experience Pure Rejuvenation?</h3>
            <p className="text-xs sm:text-sm text-[#6E675F] font-light leading-relaxed">
              Book your session today or call our reception in Viman Nagar, Pune to select your preferred therapy and timing slot.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            {BUSINESS_INFO.contact.phoneTel && (
              <a
                href={BUSINESS_INFO.contact.phoneTel}
                className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-wider uppercase font-medium text-[#2C2724] bg-[#FAF8F5] border border-[#E8E2D9] hover:border-[#C5A059] rounded-2xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
                Call Reception
              </a>
            )}
            <button
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-wider uppercase font-medium text-white bg-[#C5A059] hover:bg-[#B38E46] rounded-2xs shadow-2xs transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 mr-2" />
              Book Appointment
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
