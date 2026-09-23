import { MapPin, Phone, Calendar, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function Footer({ onOpenBooking, onOpenLegal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#1c1917] text-[#faf9f6] border-t border-[#292524] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#292524]">
          
          {/* Brand & Address Column */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-normal uppercase text-[#faf9f6]">
                {BUSINESS_INFO.name}
              </span>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#a8a29e] mt-1">
                Viman Nagar, Pune
              </p>
            </div>

            <p className="text-xs text-[#a8a29e] font-light leading-relaxed max-w-sm">
              {BUSINESS_INFO.shortDescription}
            </p>

            <div className="pt-2 flex items-start space-x-2.5 text-xs text-[#d6d3d1] font-light leading-relaxed">
              <MapPin className="w-4 h-4 text-[#a8a29e] shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address.full}</span>
            </div>

            {BUSINESS_INFO.contact.phoneTel && (
              <div className="flex items-center space-x-2.5 text-xs text-[#d6d3d1] font-light">
                <Phone className="w-4 h-4 text-[#a8a29e] shrink-0" />
                <a
                  href={BUSINESS_INFO.contact.phoneTel}
                  className="hover:text-white transition-colors tracking-wide"
                >
                  {BUSINESS_INFO.contact.phoneDisplay}
                </a>
              </div>
            )}
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#a8a29e] font-medium">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs text-[#d6d3d1]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors py-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors text-left py-1 text-xs cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors text-left py-1 text-xs cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Action Column */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#a8a29e] font-medium">
              Reservations
            </p>
            <p className="text-xs text-[#a8a29e] font-light leading-relaxed">
              Prior booking is advised to guarantee your preferred sanctuary suite and therapist.
            </p>
            <div>
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs tracking-[0.16em] uppercase font-medium text-[#1c1917] bg-[#faf9f6] hover:bg-[#e7e5e4] transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 mr-2" />
                Book Appointment
              </button>
            </div>
            <p className="text-[10px] text-[#78716c] italic">
              Accepted: Cash, UPI, Credit & Debit Cards
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716c] gap-4">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#a8a29e] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-[#44403c]">•</span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#a8a29e] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-[#44403c]">•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center hover:text-white transition-colors"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
