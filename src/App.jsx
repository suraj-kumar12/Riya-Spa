import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import LegalModal from './components/LegalModal';
import { useScrollSpy } from './hooks/useScrollSpy';

export default function App() {
  const sectionIds = ['home', 'about', 'services', 'packages', 'gallery', 'faq', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 120);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState(null);

  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalType, setLegalType] = useState('privacy');

  const handleOpenBooking = (initialItem = null) => {
    setSelectedBookingItem(initialItem);
    setBookingModalOpen(true);
  };

  const handleOpenLegal = (type = 'privacy') => {
    setLegalType(type);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c1917] flex flex-col font-sans selection:bg-[#292524] selection:text-[#faf9f6] overflow-x-hidden">
      {/* Sticky Luxury Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
      />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. About Section */}
        <About />

        {/* 3. Services Section */}
        <Services onSelectServiceForBooking={(service) => handleOpenBooking(service)} />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 5. Packages Section */}
        <Packages onOpenBooking={(pkgTitle) => handleOpenBooking(pkgTitle)} />

        {/* 6. Gallery Section */}
        <Gallery />

        {/* 7. Testimonials Section (Placeholder structure) */}
        <Testimonials />

        {/* 8. FAQ Section */}
        <FAQ />

        {/* 9. Contact Section */}
        <Contact onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 10. Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenLegal={handleOpenLegal}
      />

      {/* Booking Appointment Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => {
          setBookingModalOpen(false);
          setSelectedBookingItem(null);
        }}
        initialService={selectedBookingItem}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        type={legalType}
        onClose={() => setLegalModalOpen(false)}
      />
    </div>
  );
}
