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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#faf9f6] border border-[#d6d3d1] shadow-2xl p-6 sm:p-8 my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-[#78716c] hover:text-[#1c1917] border border-[#e7e5e4] hover:border-[#1c1917] transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-in fade-in">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#f5f2eb] border border-[#d6d3d1] flex items-center justify-center text-[#1c1917]">
              <CheckCircle2 className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl text-[#1c1917]">Appointment Requested</h3>
            <div className="text-xs text-[#57534e] space-y-2 max-w-md mx-auto leading-relaxed">
              <p>
                Thank you, <span className="font-medium text-[#1c1917]">{formData.name}</span>. We have received your appointment request for:
              </p>
              <div className="p-3 bg-[#f5f2eb]/70 border border-[#e7e5e4] text-[#1c1917] font-medium text-xs">
                {formData.service} • {formData.guests} {formData.date ? `• ${formData.date}` : ''}
              </div>
              <p className="pt-2 text-[11px] text-[#78716c]">
                Our reception at Lotus Spa, Viman Nagar will contact you via {formData.phone || formData.email} to confirm available time and therapist allocation.
              </p>
            </div>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 text-xs tracking-wider uppercase text-[#faf9f6] bg-[#1c1917] hover:bg-[#292524] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#78716c]">Lotus Spa Reservations</span>
              <h2 id="booking-modal-title" className="font-serif text-2xl sm:text-3xl font-normal text-[#1c1917]">
                Reserve Your Appointment
              </h2>
              <p className="text-xs text-[#57534e] font-light">
                Lotus Spa, Viman Nagar, Pune
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] tracking-wider uppercase text-[#57534e] mb-1 font-medium">
                  Treatment / Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#d6d3d1] text-xs text-[#1c1917] focus:outline-hidden focus:border-[#1c1917] rounded-none"
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
                  <label className="block text-[11px] tracking-wider uppercase text-[#57534e] mb-1 font-medium">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Guest name"
                    className="w-full px-3 py-2 bg-white border border-[#d6d3d1] text-xs text-[#1c1917] focus:outline-hidden focus:border-[#1c1917] rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#57534e] mb-1 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3 py-2 bg-white border border-[#d6d3d1] text-xs text-[#1c1917] focus:outline-hidden focus:border-[#1c1917] rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#57534e] mb-1 font-medium">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#d6d3d1] text-xs text-[#1c1917] focus:outline-hidden focus:border-[#1c1917] rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#57534e] mb-1 font-medium">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#d6d3d1] text-xs text-[#1c1917] focus:outline-hidden focus:border-[#1c1917] rounded-none"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#57534e] mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 bg-white border border-[#d6d3d1] text-xs text-[#1c1917] focus:outline-hidden focus:border-[#1c1917] rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-[#57534e] mb-1 font-medium">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#d6d3d1] text-xs text-[#1c1917] focus:outline-hidden focus:border-[#1c1917] rounded-none"
                  >
                    <option value="1 Person (Individual)">1 Person (Individual)</option>
                    <option value="2 People (Couple / Duo)">2 People (Couple / Duo)</option>
                    <option value="Small Group">Small Group</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] tracking-wider uppercase text-[#57534e] mb-1 font-medium">
                  Preferences or Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Target muscle tightness, pressure preferences..."
                  className="w-full px-3 py-2 bg-white border border-[#d6d3d1] text-xs text-[#1c1917] focus:outline-hidden focus:border-[#1c1917] rounded-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.18em] uppercase font-medium text-[#faf9f6] bg-[#1c1917] hover:bg-[#292524] border border-[#1c1917] transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 mr-2" />
                  Request Booking
                </button>
              </div>

              {BUSINESS_INFO.contact.phoneTel && (
                <div className="text-center pt-1">
                  <p className="text-[11px] text-[#78716c]">
                    Or speak directly with our reception:
                  </p>
                  <a
                    href={BUSINESS_INFO.contact.phoneTel}
                    className="inline-flex items-center text-xs font-medium text-[#1c1917] hover:underline mt-0.5"
                  >
                    <Phone className="w-3 h-3 mr-1 text-[#1c1917]" />
                    {BUSINESS_INFO.contact.phoneDisplay}
                  </a>
                </div>
              )}

              <div className="text-[10px] text-[#78716c] text-center pt-1 border-t border-[#f0ece5]">
                Lotus Spa • No. 1, Lunkad Classic, Viman Nagar, Pune
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
