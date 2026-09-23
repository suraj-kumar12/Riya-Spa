import { MessageSquareQuote } from 'lucide-react';

export default function Testimonials() {
  // Testimonial slots configured cleanly for authentic client reviews to be inserted later
  const reviewSlots = [
    {
      id: 1,
      placeholder: "Customer testimonial will be added here.",
      status: "Awaiting verified guest feedback",
      tag: "Post-Treatment Reflection"
    },
    {
      id: 2,
      placeholder: "Customer testimonial will be added here.",
      status: "Awaiting verified guest feedback",
      tag: "Couple Spa Reflection"
    },
    {
      id: 3,
      placeholder: "Customer testimonial will be added here.",
      status: "Awaiting verified guest feedback",
      tag: "Therapeutic Massage Reflection"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f5f2eb]/30 border-t border-[#e7e5e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#78716c] font-medium">
            Guest Reflections
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1c1917] tracking-tight">
            Client Reflections & Experiences
          </h2>
          <div className="w-12 h-px bg-[#78716c] mx-auto mt-4" />
          <p className="text-base text-[#57534e] font-light leading-relaxed pt-2">
            Lotus Spa is dedicated to genuine guest comfort. Genuine client testimonials and verified reviews will appear here.
          </p>
        </div>

        {/* Testimonials Placeholders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewSlots.map((slot) => (
            <div
              key={slot.id}
              className="bg-[#faf9f6] border border-[#e7e5e4] p-8 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <MessageSquareQuote className="w-6 h-6 text-[#a8a29e] stroke-[1.25]" />
                  <span className="text-[10px] tracking-wider uppercase text-[#78716c] px-2 py-0.5 border border-[#e7e5e4] bg-[#f5f2eb]/60">
                    {slot.tag}
                  </span>
                </div>

                <blockquote className="text-sm font-serif italic text-[#44403c] leading-relaxed mb-6">
                  &ldquo;{slot.placeholder}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#f0ece5] flex items-center justify-between text-[11px] text-[#78716c]">
                <span>{slot.status}</span>
                <span className="text-[10px] uppercase tracking-wider text-[#a8a29e]">Lotus Spa Pune</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Note */}
        <div className="mt-10 p-4 border border-[#e7e5e4] bg-[#faf9f6] max-w-xl mx-auto text-center">
          <p className="text-xs text-[#78716c] font-light">
            We value genuine authenticity. We never publish fictional testimonials or unverified rating scores.
          </p>
        </div>

      </div>
    </section>
  );
}
