import { useState } from 'react';
import { Calendar, CheckCircle2, Phone, Clock, MapPin } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { BUSINESS_INFO } from '../data/businessInfo';
import { LOGO_IMAGE } from '../data/images';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICES[0]?.name || 'Swedish Massage',
    date: '',
    timeSlot: 'Morning (10:00 AM – 1:00 PM)',
    guests: '1 Person',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || (!formData.phone.trim() && !formData.email.trim())) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF8F5]">
      {/* Header Banner */}
      <div className="bg-[#F4F0EA] border-b border-[#E8E2D9] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#8C7A6B] font-semibold">
            Lotus Spa Reservations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2724] font-normal tracking-tight">
            Book Your Appointment
          </h1>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto rounded-full" />
          <p className="max-w-2xl mx-auto text-base text-[#6E675F] font-light leading-relaxed">
            Select your preferred treatment, date, and timing. Our reception will contact you to confirm availability.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-[#E8E2D9] p-8 sm:p-12 shadow-sm rounded-sm">
          
          <div className="flex items-center space-x-4 pb-6 mb-8 border-b border-[#E8E2D9]">
            <img src={LOGO_IMAGE} alt="Lotus Spa Logo" className="h-12 w-auto object-contain rounded-full border border-[#E8E2D9]" />
            <div>
              <p className="font-serif text-xl text-[#2C2724] font-medium">Lotus Spa • Viman Nagar</p>
              <p className="text-xs text-[#8C7A6B]">Clover Park, Viman Nagar, Pune, Maharashtra 411014</p>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF8F5] border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-3xl text-[#2C2724]">Appointment Request Logged</h2>
              <p className="text-sm text-[#6E675F] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-medium text-[#2C2724]">{formData.name}</span>. We have received your booking request for <span className="font-medium text-[#2C2724]">{formData.service}</span>.
              </p>
              <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D9] max-w-sm mx-auto text-xs text-[#2C2724] rounded-2xs">
                {formData.guests} {formData.date ? `• Date: ${formData.date}` : ''} • {formData.timeSlot}
              </div>
              <p className="text-xs text-[#8C7A6B]">
                Our reception team will call or message you shortly to finalize your therapy slot.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#6E675F] mb-2 font-medium">
                  Select Treatment / Package
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] rounded-2xs"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.duration})
                    </option>
                  ))}
                  <option value="Signature Rejuvenation Ritual">Signature Rejuvenation Ritual (Package)</option>
                  <option value="Couple Serenity Sanctuary">Couple Serenity Sanctuary (Package)</option>
                  <option value="Deep Muscle Recovery Suite">Deep Muscle Recovery Suite (Package)</option>
                  <option value="Express Mind & Body Reset">Express Mind & Body Reset (Package)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#6E675F] mb-2 font-medium">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter guest full name"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] rounded-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#6E675F] mb-2 font-medium">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 8092631411"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] rounded-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#6E675F] mb-2 font-medium">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] rounded-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#6E675F] mb-2 font-medium">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] rounded-2xs"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#6E675F] mb-2 font-medium">
                  Special Notes or Requests
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention target physical tightness, oil preferences, or guest requests..."
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] rounded-2xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-4 text-xs tracking-[0.18em] uppercase font-medium text-white bg-[#C5A059] hover:bg-[#B38E46] transition-colors rounded-2xs shadow-sm cursor-pointer active:scale-[0.99]"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Submit Booking Request
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </main>
  );
}
