import { useState } from 'react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';
import ImageLightbox from './ImageLightbox';
import { Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleNavigateLightbox = (direction) => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === lightboxItem.id);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = filteredItems.length - 1;
    if (nextIndex >= filteredItems.length) nextIndex = 0;
    setLightboxItem(filteredItems[nextIndex]);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#78716c] font-medium">
            Visual Sanctuary
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1c1917] tracking-tight">
            Lotus Spa Gallery
          </h2>
          <div className="w-12 h-px bg-[#78716c] mx-auto mt-4" />
          <p className="text-base text-[#57534e] font-light leading-relaxed pt-2">
            A glimpse into the quiet spaces, mindful rituals, and serene atmosphere at Lotus Spa in Viman Nagar, Pune.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12" role="tablist">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs tracking-[0.14em] uppercase transition-all border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1c1917] text-[#faf9f6] border-[#1c1917]'
                  : 'bg-transparent text-[#78716c] border-[#e7e5e4] hover:border-[#a8a29e] hover:text-[#1c1917]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative aspect-[4/5] bg-[#e7e5e4] border border-[#e7e5e4] overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <span className="p-1.5 bg-black/40 border border-white/20">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </span>
                </div>
                <div>
                  <p className="font-serif text-base sm:text-lg">{item.title}</p>
                  <p className="text-[10px] tracking-widest uppercase text-[#d6d3d1] mt-0.5">
                    View Image
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        item={lightboxItem}
        items={filteredItems}
        onClose={() => setLightboxItem(null)}
        onNavigate={handleNavigateLightbox}
      />
    </section>
  );
}
