import { useEffect } from 'react';
import { X, Clock, Tag, Check, Calendar } from 'lucide-react';

export default function ServiceModal({ service, isOpen, onClose, onBookNow }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#faf9f6] border border-[#d6d3d1] shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#faf9f6]/90 border border-[#d6d3d1] text-[#1c1917] hover:bg-[#1c1917] hover:text-[#faf9f6] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative aspect-[21/9] sm:aspect-[2/1] overflow-hidden bg-[#e7e5e4]">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-[#faf9f6]">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#e7e5e4]">Lotus Spa Treatment</p>
            <h3 id="service-modal-title" className="font-serif text-2xl sm:text-3xl font-normal text-white">
              {service.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-[#44403c] font-light leading-relaxed">
            {service.description}
          </p>

          {/* Info pill row */}
          <div className="flex flex-wrap gap-4 py-3 border-y border-[#e7e5e4] text-xs text-[#57534e]">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#78716c]" />
              <span>{service.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tag className="w-4 h-4 text-[#78716c]" />
              <span>{service.price}</span>
            </div>
            <div className="text-[11px] text-[#78716c] italic">
              *Details confirmed upon scheduling
            </div>
          </div>

          {/* Features / Highlights */}
          {service.features && service.features.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-[0.16em] text-[#78716c] font-medium">
                Treatment Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-[#292524]">
                    <Check className="w-3.5 h-3.5 mt-0.5 text-[#1c1917] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ideal for */}
          {service.idealFor && (
            <div className="p-3.5 bg-[#f5f2eb]/70 border border-[#e7e5e4] text-xs text-[#44403c]">
              <span className="font-medium text-[#1c1917]">Recommended for: </span>
              {service.idealFor}
            </div>
          )}

          {/* Modal Action CTA */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-xs tracking-wider uppercase text-[#57534e] hover:text-[#1c1917] transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookNow(service);
              }}
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs tracking-[0.16em] uppercase font-medium text-[#faf9f6] bg-[#1c1917] hover:bg-[#292524] border border-[#1c1917] transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 mr-2" />
              Book This Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
