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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white border border-[#E8E2D9] shadow-2xl overflow-hidden my-8 rounded-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 border border-[#E8E2D9] text-[#2C2724] hover:text-[#C5A059] transition-colors rounded-full"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative aspect-[21/9] sm:aspect-[2/1] overflow-hidden bg-[#F4F0EA]">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-[#FAF8F5]">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#E8E2D9]">Lotus Spa Therapy</p>
            <h3 id="service-modal-title" className="font-serif text-2xl sm:text-3xl font-normal text-white">
              {service.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-[#6E675F] font-light leading-relaxed">
            {service.description}
          </p>

          {/* Info pill row */}
          <div className="flex flex-wrap gap-4 py-3 border-y border-[#F0EBE1] text-xs text-[#8C7A6B]">
            <div className="flex items-center space-x-2 font-medium text-[#2C2724]">
              <Clock className="w-4 h-4 text-[#C5A059]" />
              <span>{service.duration}</span>
            </div>
            <div className="flex items-center space-x-2 font-medium text-[#2C2724]">
              <Tag className="w-4 h-4 text-[#C5A059]" />
              <span>{service.price}</span>
            </div>
          </div>

          {/* Features / Highlights */}
          {service.features && service.features.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-[0.16em] text-[#8C7A6B] font-semibold">
                Treatment Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-[#2C2724]">
                    <Check className="w-3.5 h-3.5 mt-0.5 text-[#C5A059] shrink-0" />
                    <span className="font-light">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ideal for */}
          {service.idealFor && (
            <div className="p-3.5 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#6E675F] rounded-2xs">
              <span className="font-medium text-[#2C2724]">Recommended for: </span>
              {service.idealFor}
            </div>
          )}

          {/* Modal Action CTA */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-xs tracking-wider uppercase text-[#8C7A6B] hover:text-[#2C2724] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookNow(service);
              }}
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs tracking-[0.16em] uppercase font-medium text-white bg-[#C5A059] hover:bg-[#B38E46] transition-colors rounded-2xs shadow-2xs cursor-pointer"
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
