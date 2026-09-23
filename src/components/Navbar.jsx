import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D9] shadow-xs py-3'
          : 'bg-[#FAF8F5]/85 backdrop-blur-sm border-b border-[#E8E2D9]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="group flex items-center space-x-3 focus:outline-none"
            aria-label="Lotus Spa Homepage"
          >
            <img
              src="/logo.jpg"
              alt="Lotus Spa Logo"
              className="h-10 sm:h-12 w-auto object-contain rounded-full border border-[#E8E2D9] p-0.5 bg-white shadow-xs group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] text-[#2C2724] font-medium uppercase transition-colors group-hover:text-[#C5A059]">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#8C7A6B]">
                Viman Nagar, Pune
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs tracking-[0.16em] uppercase font-medium transition-all py-1.5 relative ${
                    isActive
                      ? 'text-[#C5A059] font-semibold'
                      : 'text-[#6E675F] hover:text-[#2C2724]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A059] rounded-full animate-fade-in" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Call & Book CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            {BUSINESS_INFO.contact.phoneTel && (
              <a
                href={BUSINESS_INFO.contact.phoneTel}
                className="inline-flex items-center justify-center px-4 py-2 text-xs tracking-wider uppercase font-medium text-[#2C2724] hover:text-[#C5A059] border border-[#E8E2D9] hover:border-[#C5A059] transition-all bg-white shadow-2xs rounded-sm"
                title={`Call ${BUSINESS_INFO.contact.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-[#C5A059]" />
                <span>{BUSINESS_INFO.contact.phoneRaw}</span>
              </a>
            )}
            <button
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs tracking-[0.16em] uppercase font-medium text-white bg-[#C5A059] hover:bg-[#B38E46] transition-all duration-200 shadow-sm rounded-sm active:scale-[0.98] cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 mr-2" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center lg:hidden space-x-2">
            {BUSINESS_INFO.contact.phoneTel && (
              <a
                href={BUSINESS_INFO.contact.phoneTel}
                className="p-2 text-[#2C2724] bg-white border border-[#E8E2D9] rounded-sm hover:border-[#C5A059]"
                aria-label={`Call ${BUSINESS_INFO.contact.phoneRaw}`}
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
              </a>
            )}
            <button
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center px-3.5 py-1.5 text-[11px] tracking-widest uppercase font-medium text-white bg-[#C5A059] hover:bg-[#B38E46] rounded-sm"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2C2724] hover:text-[#C5A059] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E8E2D9] bg-[#FAF8F5] px-6 pt-4 pb-8 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-[#E8E2D9]">
            <img src="/logo.jpg" alt="Lotus Spa" className="h-10 w-auto rounded-full border border-[#E8E2D9]" />
            <div>
              <p className="font-serif text-lg text-[#2C2724] font-medium uppercase tracking-wider">{BUSINESS_INFO.name}</p>
              <p className="text-[10px] text-[#8C7A6B] uppercase tracking-widest">A Luxury Escape in Viman Nagar</p>
            </div>
          </div>
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm tracking-[0.16em] uppercase py-2.5 border-b border-[#F0EBE1] transition-colors ${
                    isActive ? 'text-[#C5A059] font-semibold' : 'text-[#6E675F] hover:text-[#2C2724]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 space-y-3">
              {BUSINESS_INFO.contact.phoneTel && (
                <a
                  href={BUSINESS_INFO.contact.phoneTel}
                  className="w-full flex items-center justify-center px-4 py-3 text-xs tracking-[0.16em] uppercase font-medium text-[#2C2724] bg-white border border-[#E8E2D9] rounded-sm"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#C5A059]" />
                  Call {BUSINESS_INFO.contact.phoneDisplay}
                </a>
              )}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center px-4 py-3 text-xs tracking-[0.18em] uppercase font-medium text-white bg-[#C5A059] hover:bg-[#B38E46] rounded-sm shadow-xs"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
