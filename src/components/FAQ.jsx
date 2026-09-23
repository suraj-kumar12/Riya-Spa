import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/faqData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#8C7A6B] font-semibold">
            Frequently Asked Questions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C2724] tracking-tight">
            Guest Inquiries & Etiquette
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
          <p className="text-base text-[#6E675F] font-light leading-relaxed pt-2">
            Essential details regarding appointments, spa etiquette, and therapies at Lotus Spa in Viman Nagar, Pune.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-[#E8E2D9] border-t border-b border-[#E8E2D9] bg-white p-6 rounded-sm shadow-2xs">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 sm:py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#2C2724] font-normal group-hover:text-[#C5A059] transition-colors pr-6">
                    {faq.question}
                  </span>
                  <span className={`p-1.5 border shrink-0 transition-colors rounded-full ${
                    isOpen ? 'border-[#C5A059] bg-[#C5A059] text-white' : 'border-[#E8E2D9] text-[#2C2724] group-hover:border-[#C5A059]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-10 text-xs sm:text-sm text-[#6E675F] font-light leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions note */}
        <div className="mt-12 text-center text-xs text-[#8C7A6B] font-light">
          Have an additional question? Feel free to reach out via our contact inquiry page.
        </div>

      </div>
    </section>
  );
}
