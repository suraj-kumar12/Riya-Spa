import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Packages from '../components/Packages';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function HomePage({ onOpenBooking, onSelectServiceForBooking }) {
  return (
    <main className="flex-grow">
      <Hero onOpenBooking={onOpenBooking} />
      <About />
      <Services onSelectServiceForBooking={onSelectServiceForBooking} />
      <WhyChooseUs />
      <Packages onOpenBooking={onOpenBooking} />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact onOpenBooking={onOpenBooking} />
    </main>
  );
}
