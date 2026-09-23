import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function Navbar({ onOpenBooking, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf9f6]/95 backdrop-blur-md border-b border-[#e7e5e4] shadow-xs py-3.5'
          : 'bg-[#faf9f6]/80 backdrop-blur-xs border-b border-[#e7e5e4]/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex flex-col items-start focus:outline-hidden"
            aria-label="Lotus Spa Homepage"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.22em] text-[#1c1917] font-normal uppercase transition-colors group-hover:text-[#44403c]">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#78716c] -mt-0.5">
              Viman Nagar, Pune
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-[13px] tracking-[0.14em] uppercase font-medium transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#1c1917]'
                      : 'text-[#78716c] hover:text-[#1c1917]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1c1917] animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            {BUSINESS_INFO.contact.phoneTel && (
              <a
                href={BUSINESS_INFO.contact.phoneTel}
                className="inline-flex items-center justify-center px-3.5 py-2 text-xs tracking-wider uppercase font-medium text-[#1c1917] hover:text-black border border-[#d6d3d1] hover:border-[#1c1917] transition-all bg-transparent"
                title={`Call ${BUSINESS_INFO.contact.phoneDisplay}`}
              >
                <Phone className="w-3 h-3 mr-1.5" />
                <span>{BUSINESS_INFO.contact.phoneRaw}</span>
              </a>
            )}
            <button
              onClick={() => onOpenBooking()}
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 text-xs tracking-[0.16em] uppercase font-medium text-[#faf9f6] bg-[#1c1917] hover:bg-[#292524] transition-all duration-200 border border-[#1c1917] shadow-xs cursor-pointer active:scale-[0.99]"
            >
              <Calendar className="w-3.5 h-3.5 mr-2 stroke-[1.75]" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-2">
            {BUSINESS_INFO.contact.phoneTel && (
              <a
                href={BUSINESS_INFO.contact.phoneTel}
                className="inline-flex items-center px-2.5 py-1.5 text-[11px] font-medium text-[#1c1917] border border-[#d6d3d1] hover:border-[#1c1917]"
                aria-label={`Call ${BUSINESS_INFO.contact.phoneRaw}`}
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={() => onOpenBooking()}
              type="button"
              className="inline-flex items-center px-3 py-1.5 text-[11px] tracking-widest uppercase font-medium text-[#faf9f6] bg-[#1c1917] hover:bg-[#292524] border border-[#1c1917]"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#292524] hover:text-black focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#e7e5e4] bg-[#faf9f6] px-5 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm tracking-[0.15em] uppercase text-[#44403c] hover:text-[#1c1917] py-2 border-b border-[#f5f5f4]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 space-y-2">
              {BUSINESS_INFO.contact.phoneTel && (
                <a
                  href={BUSINESS_INFO.contact.phoneTel}
                  className="w-full flex items-center justify-center px-4 py-2.5 text-xs tracking-[0.16em] uppercase font-medium text-[#1c1917] bg-[#f5f2eb] border border-[#d6d3d1]"
                >
                  <Phone className="w-3.5 h-3.5 mr-2" />
                  Call {BUSINESS_INFO.contact.phoneDisplay}
                </a>
              )}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center px-4 py-3 text-xs tracking-[0.18em] uppercase font-medium text-[#faf9f6] bg-[#1c1917] hover:bg-[#292524] border border-[#1c1917]"
              >
                <Calendar className="w-3.5 h-3.5 mr-2" />
                Book Appointment
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
