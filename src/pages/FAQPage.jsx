import FAQ from '../components/FAQ';

export default function FAQPage() {
  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF8F5]">
      {/* Header Banner */}
      <div className="bg-[#F4F0EA] border-b border-[#E8E2D9] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#8C7A6B] font-semibold">
            Help & Spa Guidelines
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2724] font-normal tracking-tight">
            Frequently Asked Questions | Luxury Spa in Viman Nagar Pune
          </h1>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto rounded-full" />
          <p className="max-w-2xl mx-auto text-base text-[#6E675F] font-light leading-relaxed">
            Find answers about full body massage in Pune, couple spa Pune packages, booking guidelines, and arrival times at Lotus Spa in Clover Park, Viman Nagar, Pune, Maharashtra 411014.
          </p>
        </div>
      </div>

      <FAQ />
    </main>
  );
}
