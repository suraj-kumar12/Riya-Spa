import { MessageSquareQuote, Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: "The ambience at Lotus Spa is incredibly peaceful. From the warm herbal welcome tea to the deep tissue therapy, every single detail made me feel truly relaxed.",
      author: "Priya S.",
      location: "Viman Nagar, Pune",
      tag: "Deep Tissue Therapy"
    },
    {
      id: 2,
      quote: "We booked the Couple Serenity Sanctuary for our anniversary. The suite was immaculate, candlelit, and so calming. Highly recommend Lotus Spa for anyone in Pune.",
      author: "Rahul & Ananya M.",
      location: "Koregaon Park, Pune",
      tag: "Couples Spa Ritual"
    },
    {
      id: 3,
      quote: "As someone who spends 10+ hours a day on a laptop, the Balinese and hot stone session completely unclenched my shoulders and back. Professional and hygienic.",
      author: "Vikram K.",
      location: "Kharadi, Pune",
      tag: "Hot Stone Therapy"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#8C7A6B] font-semibold">
            Guest Experiences
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C2724] tracking-tight">
            Client Reflections
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
          <p className="text-base text-[#6E675F] font-light leading-relaxed pt-2">
            Hear how our peaceful sanctuary and tailored massotherapy sessions help guests restore physical balance and mental ease.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-[#E8E2D9] p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300 rounded-sm relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>
                  <span className="text-[10px] tracking-wider uppercase text-[#C5A059] font-medium px-2.5 py-1 bg-[#FAF8F5] border border-[#E8E2D9] rounded-full">
                    {rev.tag}
                  </span>
                </div>

                <blockquote className="text-sm font-serif italic text-[#2C2724] leading-relaxed mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#F0EBE1] flex items-center justify-between text-xs">
                <div>
                  <p className="font-medium text-[#2C2724]">{rev.author}</p>
                  <p className="text-[10px] text-[#8C7A6B]">{rev.location}</p>
                </div>
                <MessageSquareQuote className="w-5 h-5 text-[#C5A059] opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Note */}
        <div className="mt-12 p-4 border border-[#E8E2D9] bg-white max-w-xl mx-auto text-center rounded-sm shadow-2xs">
          <p className="text-xs text-[#8C7A6B] font-light">
            We hold ourselves to the highest standard of guest comfort, privacy, and clinical hygiene in Viman Nagar, Pune.
          </p>
        </div>

      </div>
    </section>
  );
}
