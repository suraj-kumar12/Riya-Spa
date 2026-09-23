import { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, Phone } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function BookingModal({ isOpen, onClose, initialService = null }) {
  const initialServiceName = initialService
    ? (typeof initialService === 'string' ? initialService : initialService.name)
    : (SERVICES[0]?.name || 'Swedish Massage');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialServiceName,
    date: '',
    timeSlot: 'Morning (10:00 AM – 1:00 PM)',
    guests: '1 Person',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync service if initialService prop changes
  const [prevInitialService, setPrevInitialService] = useState(initialService);
  if (initialService !== prevInitialService) {
    setPrevInitialService(initialService);
    const newService = initialService
      ? (typeof initialService === 'string' ? initialService : initialService.name)
      : (SERVICES[0]?.name || 'Swedish Massage');
    setFormData((prev) => ({ ...prev, service: newService }));
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || (!formData.phone.trim() && !formData.email.trim())) {
      return;
    }
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white border border-[#E8E2D9] shadow-2xl p-6 sm:p-8 my-8 rounded-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-[#8C7A6B] hover:text-[#2C2724] border border-[#E8E2D9] hover:border-[#C5A059] transition-colors rounded-full"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-in fade-in">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#FAF8F5] border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-[#2C2724]">Appointment Requested</h3>
            <div className="text-xs text-[#6E675F] space-y-2 max-w-md mx-auto leading-relaxed">
              <p>
                Thank you, <span className="font-medium text-[#2C2724]">{formData.name}</span>. We have received your appointment request for:
              </p>
              <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D9] text-[#2C2724] font-medium text-xs rounded-2xs">
                {formData.service} • {formData.guests} {formData.date ? `• ${formData.date}` : ''}
              </div>
              <p className="pt-2 text-[11px] text-[#8C7A6B]">
                Our reception at Lotus Spa, Viman Nagar will contact you via {formData.phone || formData.email} to confirm available time and therapist allocation.
              </p>
            </div>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 text-xs tracking-wider uppercase text-white bg-[#C5A059] hover:bg-[#B38E46] transition-colors rounded-2xs shadow-2xs cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 flex items-center space-x-3 pb-4 border-b border-[#E8E2D9]">
              <img src="/logo.jpg" alt="Lotus Spa Logo" className="h-11 w-auto rounded-full border border-[#E8E2D9]" />
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A059] font-medium">Lotus Spa Reservations</span>
                <h2 id="booking-modal-title" className="font-serif text-2xl font-normal text-[#2C2724]">
                  Reserve Your Appointment
                </h2>
                <p className="text-[11px] text-[#8C7A6B]">
                  Lunkad Classic, Viman Nagar, Pune
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] tracking-wider uppercase text-[#6E675F] mb-1 font-medium">
                  Treatment / Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] rounded-2xs"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                  <option value="Signature Rejuvenation Ritual">Signature Rejuvenation Ritual (Package)</option>
                  <option value="Couple Serenity Sanctuary">Couple Serenity Sanctuary (Package)</option>
                  <option value="Deep Muscle Recovery Suite">Deep Muscle Recovery Suite (Package)</option>
                  <option value="Express Mind & Body Reset">Express Mind & Body Reset (Package)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#6E675F] mb-1 font-medium">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Guest name"
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] rounded-2xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#6E675F] mb-1 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] rounded-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#6E675F] mb-1 font-medium">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] rounded-2xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#6E675F] mb-1 font-medium">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] rounded-2xs"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#6E675F] mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] rounded-2xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#6E675F] mb-1 font-medium">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] rounded-2xs"
                  >
                    <option value="1 Person (Individual)">1 Person (Individual)</option>
                    <option value="2 People (Couple / Duo)">2 People (Couple / Duo)</option>
                    <option value="Small Group">Small Group</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] tracking-wider uppercase text-[#6E675F] mb-1 font-medium">
                  Preferences or Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Target muscle tightness, pressure preferences..."
                  className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] rounded-2xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.18em] uppercase font-medium text-white bg-[#C5A059] hover:bg-[#B38E46] transition-all cursor-pointer rounded-2xs shadow-2xs active:scale-[0.99]"
                >
                  <Calendar className="w-3.5 h-3.5 mr-2" />
                  Request Booking
                </button>
              </div>

              {BUSINESS_INFO.contact.phoneTel && (
                <div className="text-center pt-1">
                  <p className="text-[11px] text-[#8C7A6B]">
                    Or speak directly with reception:
                  </p>
                  <a
                    href={BUSINESS_INFO.contact.phoneTel}
                    className="inline-flex items-center text-xs font-medium text-[#2C2724] hover:text-[#C5A059] mt-0.5"
                  >
                    <Phone className="w-3 h-3 mr-1 text-[#C5A059]" />
                    {BUSINESS_INFO.contact.phoneDisplay}
                  </a>
                </div>
              )}

              <div className="text-[10px] text-[#8C7A6B] text-center pt-2 border-t border-[#F0EBE1]">
                Lotus Spa • No. 1, Lunkad Classic, Viman Nagar, Pune
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
