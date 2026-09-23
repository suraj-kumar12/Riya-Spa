import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/faqData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#faf9f6] border-t border-[#e7e5e4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#78716c] font-medium">
            Frequently Asked Questions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1c1917] tracking-tight">
            Guest Inquiries
          </h2>
          <div className="w-12 h-px bg-[#78716c] mx-auto mt-4" />
          <p className="text-base text-[#57534e] font-light leading-relaxed pt-2">
            Key details about visiting Lotus Spa in Viman Nagar, Pune.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-[#e7e5e4] border-t border-b border-[#e7e5e4]">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 sm:py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-hidden group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#1c1917] font-normal group-hover:text-[#57534e] transition-colors pr-6">
                    {faq.question}
                  </span>
                  <span className="p-1 border border-[#d6d3d1] shrink-0 text-[#1c1917] group-hover:border-[#1c1917] transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-10 text-xs sm:text-sm text-[#57534e] font-light leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions note */}
        <div className="mt-12 text-center text-xs text-[#78716c] font-light">
          Have an additional question? Feel free to reach out via our contact inquiry form below.
        </div>

      </div>
    </section>
  );
}
