import { BUSINESS_INFO } from '../data/businessInfo';

export default function TermsPage() {
  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF8F5]">
      {/* Header Banner */}
      <div className="bg-[#F4F0EA] border-b border-[#E8E2D9] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#8C7A6B] font-semibold">
            Spa Guidelines
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2724] font-normal tracking-tight">
            Terms & Conditions
          </h1>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto rounded-full" />
          <p className="max-w-2xl mx-auto text-base text-[#6E675F] font-light leading-relaxed">
            General guidelines and reservation policies for guests at Lotus Spa.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border border-[#E8E2D9] p-8 sm:p-12 shadow-2xs rounded-sm space-y-8 text-[#6E675F] font-light leading-relaxed text-sm">
          
          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#2C2724] font-normal">1. Reservation & Arrival Etiquette</h2>
            <p>
              To ensure a calm, unhurried experience, we recommend arriving 10-15 minutes prior to your scheduled appointment time. Late arrivals may result in a shortened session duration to accommodate subsequent guest reservations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#2C2724] font-normal">2. Cancellation & Rescheduling</h2>
            <p>
              We kindly request at least 2 to 4 hours notice for cancellations or rescheduling. This allows us to adjust therapist schedules and offer sanctuary slots to other waiting guests.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#2C2724] font-normal">3. Health & Medical Considerations</h2>
            <p>
              Please inform your therapist prior to treatment if you have any medical conditions, high blood pressure, skin allergies, injuries, or if you are pregnant. Our therapists will adjust pressures and products accordingly.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#2C2724] font-normal">4. Professional Standards</h2>
            <p>
              Lotus Spa is a legitimate wellness and massotherapy establishment. All services provided are strictly therapeutic. Any inappropriate behavior will result in immediate termination of the session without refund.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#2C2724] font-normal">5. Location</h2>
            <p>
              Lotus Spa is located at {BUSINESS_INFO.address.full}. Contact reception at {BUSINESS_INFO.contact.phoneDisplay}.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
