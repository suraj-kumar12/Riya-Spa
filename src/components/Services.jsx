import { useState } from 'react';
import { SERVICES } from '../data/servicesData';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

export default function Services({ onSelectServiceForBooking }) {
  const [selectedService, setSelectedService] = useState(null);

  const handleViewDetails = (service) => {
    setSelectedService(service);
  };

  const handleBookNow = (service) => {
    onSelectServiceForBooking(service);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#78716c] font-medium">
            Therapies & Treatments
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1c1917] tracking-tight">
            Curated Spa Services
          </h2>
          <div className="w-12 h-px bg-[#78716c] mx-auto mt-4" />
          <p className="text-base text-[#57534e] font-light leading-relaxed pt-2">
            Each treatment at Lotus Spa is administered with dedicated attention to your comfort, using natural botanicals and time-honored wellness techniques.
          </p>
        </div>

        {/* Services Grid (All 8 requested services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onViewDetails={handleViewDetails}
              onBookNow={handleBookNow}
            />
          ))}
        </div>

        {/* Pricing / Booking Notice */}
        <div className="mt-12 text-center text-xs text-[#78716c] max-w-xl mx-auto border-t border-[#e7e5e4] pt-6 font-light">
          Session durations and current rates can be customized upon request. Contact our reception or submit a booking inquiry for tailored appointment details.
        </div>

      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        onBookNow={handleBookNow}
      />
    </section>
  );
}
