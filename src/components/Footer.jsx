import { Link } from 'react-router-dom';
import { MapPin, Phone, Calendar, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#F4F0EA] text-[#2C2724] border-t border-[#E8E2D9] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E8E2D9]">
          
          {/* Brand & Address Column */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/logo.jpg"
                alt="Lotus Spa Logo"
                className="h-12 w-auto object-contain rounded-full border border-[#E8E2D9] p-0.5 bg-white shadow-xs group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <span className="font-serif text-2xl tracking-[0.18em] font-medium uppercase text-[#2C2724] group-hover:text-[#C5A059] transition-colors">
                  {BUSINESS_INFO.name}
                </span>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#8C7A6B] mt-0.5">
                  Viman Nagar, Pune
                </p>
              </div>
            </Link>

            <p className="text-xs text-[#6E675F] font-light leading-relaxed max-w-sm">
              {BUSINESS_INFO.shortDescription}
            </p>

            <div className="pt-2 flex items-start space-x-2.5 text-xs text-[#6E675F] font-light leading-relaxed">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address.full}</span>
            </div>

            {BUSINESS_INFO.contact.phoneTel && (
              <div className="flex items-center space-x-2.5 text-xs text-[#6E675F] font-light">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={BUSINESS_INFO.contact.phoneTel}
                  className="hover:text-[#C5A059] transition-colors tracking-wide font-medium"
                >
                  {BUSINESS_INFO.contact.phoneDisplay}
                </a>
              </div>
            )}
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#8C7A6B] font-semibold">
              Explore Sanctuary Pages
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs text-[#6E675F]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-[#C5A059] transition-colors py-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-[#C5A059] transition-colors py-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-[#C5A059] transition-colors py-1 inline-block"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Action Column */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#8C7A6B] font-semibold">
              Appointments & Hours
            </p>
            <p className="text-xs text-[#6E675F] font-light leading-relaxed">
              Prior booking is recommended for seamless therapy suite reservation.
            </p>
            <div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs tracking-[0.16em] uppercase font-medium text-white bg-[#C5A059] hover:bg-[#B38E46] transition-all rounded-2xs cursor-pointer shadow-2xs"
              >
                <Calendar className="w-3.5 h-3.5 mr-2" />
                Book Appointment
              </button>
            </div>
            <p className="text-[10px] text-[#8C7A6B]">
              Payment Accepted: Cash, UPI, Cards
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7A6B] gap-4">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>

          <div className="flex items-center space-x-5">
            <Link to="/privacy" className="hover:text-[#C5A059] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#E8E2D9]">•</span>
            <Link to="/terms" className="hover:text-[#C5A059] transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-[#E8E2D9]">•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center hover:text-[#C5A059] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 ml-1 text-[#C5A059]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
