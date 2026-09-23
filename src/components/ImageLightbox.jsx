import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageLightbox({ item, items, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(-1);
      if (e.key === 'ArrowRight') onNavigate(1);
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in duration-200">
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2 text-[#faf9f6] bg-black/50 hover:bg-white hover:text-black border border-white/20 transition-colors"
        aria-label="Close image gallery viewer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next buttons */}
      <button
        type="button"
        onClick={() => onNavigate(-1)}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 text-white bg-black/40 hover:bg-white hover:text-black border border-white/20 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={() => onNavigate(1)}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 text-white bg-black/40 hover:bg-white hover:text-black border border-white/20 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Frame */}
      <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center">
        <img
          src={item.image}
          alt={item.alt}
          className="max-h-[75vh] w-auto object-contain border border-[#44403c] shadow-2xl"
        />
        <div className="mt-4 text-center text-[#faf9f6]">
          <p className="font-serif text-lg">{item.title}</p>
          <p className="text-xs text-[#a8a29e] mt-1 font-light tracking-wider">
            {currentIndex + 1} / {items.length} • Lotus Spa, Viman Nagar
          </p>
        </div>
      </div>
    </div>
  );
}
