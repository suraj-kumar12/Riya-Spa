import { useState } from 'react';
import { SERVICES } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';
import { Sparkles, Search } from 'lucide-react';

export default function ServicesPage({ onSelectServiceForBooking }) {
  const [selectedService, setSelectedService] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Therapies' },
    { id: 'massage', label: 'Massages & Bodywork' },
    { id: 'couples', label: 'Couples Sanctuary' },
    { id: 'scrubs', label: 'Scrubs & Exfoliation' },
  ];

  const filteredServices = SERVICES.filter((service) => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterCategory === 'all') return matchesSearch;
    if (filterCategory === 'couples') return matchesSearch && service.id.includes('couple');
    if (filterCategory === 'scrubs') return matchesSearch && (service.id.includes('scrub') || service.id.includes('hot-stone'));
    if (filterCategory === 'massage') return matchesSearch && !service.id.includes('scrub');
    return matchesSearch;
  });

  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF8F5]">
      
      {/* Header Banner */}
      <div className="bg-[#F4F0EA] border-b border-[#E8E2D9] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#8C7A6B] font-semibold">
            Bespoke Treatments & Massotherapy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2724] font-normal tracking-tight">
            Spa Services & Therapies
          </h1>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto rounded-full" />
          <p className="max-w-2xl mx-auto text-base text-[#6E675F] font-light leading-relaxed">
            Explore our curated menu of traditional Indonesian, Swedish, deep muscle recovery, and organic botanical rituals in Viman Nagar, Pune.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        
        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 border border-[#E8E2D9] rounded-sm shadow-2xs">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-4 py-2 text-xs tracking-[0.14em] uppercase font-medium rounded-full transition-all cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#C5A059] text-white shadow-2xs'
                    : 'bg-[#FAF8F5] text-[#6E675F] border border-[#E8E2D9] hover:border-[#C5A059]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8C7A6B] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF8F5] border border-[#E8E2D9] focus:outline-none focus:border-[#C5A059] rounded-2xs text-[#2C2724] placeholder:text-[#8C7A6B]"
            />
          </div>

        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onViewDetails={(s) => setSelectedService(s)}
                onBookNow={(s) => onSelectServiceForBooking(s)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-[#E8E2D9] rounded-sm">
            <p className="font-serif text-xl text-[#2C2724]">No matching therapies found.</p>
            <p className="text-xs text-[#6E675F] mt-1">Try resetting your search or filter options.</p>
            <button
              onClick={() => { setSearchQuery(''); setFilterCategory('all'); }}
              className="mt-4 px-4 py-2 text-xs uppercase tracking-wider bg-[#C5A059] text-white rounded-2xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        onBookNow={(s) => onSelectServiceForBooking(s)}
      />
    </main>
  );
}
