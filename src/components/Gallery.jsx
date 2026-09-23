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
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-12">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#8C7A6B] font-semibold">
            Visual Sanctuary
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C2724] tracking-tight">
            Lotus Spa Gallery
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
          <p className="text-base text-[#6E675F] font-light leading-relaxed pt-2">
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
              className={`px-5 py-2.5 text-xs tracking-[0.16em] uppercase font-medium transition-all border rounded-full cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#C5A059] text-white border-[#C5A059] shadow-xs'
                  : 'bg-white text-[#6E675F] border-[#E8E2D9] hover:border-[#C5A059] hover:text-[#2C2724]'
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
              className="group relative aspect-[4/5] bg-[#F4F0EA] border border-[#E8E2D9] overflow-hidden cursor-pointer rounded-sm shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <span className="p-2 bg-white/20 backdrop-blur-xs rounded-full border border-white/30">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </span>
                </div>
                <div>
                  <p className="font-serif text-lg font-normal">{item.title}</p>
                  <p className="text-[10px] tracking-widest uppercase text-[#FAF8F5] mt-1 opacity-90">
                    Click to enlarge
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
