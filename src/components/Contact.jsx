import { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ExternalLink, 
  Calendar, 
  CheckCircle2, 
  Send 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { SERVICES } from '../data/servicesData';
import { LOGO_IMAGE } from '../data/images';

export default function Contact({ onOpenBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Swedish Massage',
    preferredDate: '',
    preferredTime: 'Afternoon',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || (!formData.phone.trim() && !formData.email.trim())) {
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Swedish Massage',
      preferredDate: '',
      preferredTime: 'Afternoon',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#8C7A6B] font-semibold">
            Visit & Connect
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2C2724] tracking-tight">
            Connect With Lotus Spa
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 rounded-full" />
          <p className="text-base text-[#6E675F] font-light leading-relaxed pt-2">
            Located in Viman Nagar, Pune. Send an inquiry or reserve your preferred therapy session.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Business Details & Maps Column */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Business Card Box */}
            <div className="bg-white border border-[#E8E2D9] p-8 space-y-6 shadow-2xs rounded-sm">
              <div className="flex items-center space-x-4">
                <img src={LOGO_IMAGE} alt="Lotus Spa Logo" className="h-12 w-auto object-contain rounded-full border border-[#E8E2D9] p-0.5 bg-white shadow-2xs" />
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A059] font-medium">Boutique Spa Sanctuary</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2C2724] mt-0.5">
                    {BUSINESS_INFO.name}
                  </h3>
                </div>
              </div>

              {/* Exact Pune Address */}
              <div className="flex items-start space-x-3.5 pt-4 border-t border-[#F0EBE1]">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#6E675F] leading-relaxed">
                  <p className="font-medium text-[#2C2724]">Official Address:</p>
                  <p>{BUSINESS_INFO.address.full}</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#F0EBE1] text-xs text-[#6E675F]">
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2C2724]">Mobile / Phone:</p>
                    {BUSINESS_INFO.contact.phoneTel ? (
                      <a
                        href={BUSINESS_INFO.contact.phoneTel}
                        className="font-medium text-[#2C2724] hover:text-[#C5A059] transition-colors block text-sm mt-0.5 tracking-wide"
                      >
                        {BUSINESS_INFO.contact.phoneDisplay}
                      </a>
                    ) : (
                      <p className="italic text-[#8C7A6B]">{BUSINESS_INFO.contact.phoneDisplay}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2C2724]">Email:</p>
                    <p className="italic text-[#8C7A6B]">{BUSINESS_INFO.contact.emailDisplay}</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3.5 pt-4 border-t border-[#F0EBE1]">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div className="text-xs text-[#6E675F] space-y-1">
                  <p className="font-medium text-[#2C2724]">Operating Schedule:</p>
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <p key={i}>
                      <span className="text-[#2C2724]">{h.days}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>

              {/* Direct Actions */}
              <div className="pt-4 flex flex-wrap gap-3">
                {BUSINESS_INFO.contact.phoneTel && (
                  <a
                    href={BUSINESS_INFO.contact.phoneTel}
                    className="inline-flex items-center px-4 py-2.5 text-xs tracking-wider uppercase font-medium text-white bg-[#C5A059] hover:bg-[#B38E46] transition-colors rounded-2xs shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5 mr-2" />
                    Call {BUSINESS_INFO.contact.phoneRaw}
                  </a>
                )}

                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2.5 text-xs tracking-wider uppercase font-medium text-[#2C2724] bg-[#FAF8F5] hover:bg-[#F4F0EA] border border-[#E8E2D9] transition-colors rounded-2xs"
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
                  Get Directions
                </a>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center px-4 py-2.5 text-xs tracking-wider uppercase font-medium text-[#2C2724] bg-white hover:bg-[#FAF8F5] border border-[#C5A059] transition-colors rounded-2xs cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
                  Book
                </button>
              </div>

            </div>

            {/* Google Maps Visual Preview */}
            <div className="border border-[#E8E2D9] bg-white p-2.5 overflow-hidden shadow-2xs rounded-sm">
              <div className="relative aspect-[16/9] w-full bg-[#F4F0EA] rounded-2xs overflow-hidden">
                <iframe
                  title="Lotus Spa Viman Nagar Pune Location Map"
                  src={BUSINESS_INFO.mapEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="p-3 text-center text-[11px] text-[#8C7A6B]">
                <span>Clover Park, Viman Nagar, Pune, Maharashtra 411014</span>
              </div>
            </div>

          </div>

          {/* Contact & Inquiry Form */}
          <div className="lg:col-span-6 bg-white border border-[#E8E2D9] p-8 sm:p-10 shadow-2xs rounded-sm">
            <h3 className="font-serif text-2xl font-normal text-[#2C2724] mb-1">
              Appointment Inquiry Form
            </h3>
            <p className="text-xs text-[#8C7A6B] font-light mb-8">
              Submit your inquiry and our team will get in touch to confirm availability for your preferred slot.
            </p>

            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF8F5] border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl text-[#2C2724]">Inquiry Received</h4>
                <p className="text-xs text-[#6E675F] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-medium text-[#2C2724]">{formData.name}</span>. Your inquiry for <span className="font-medium text-[#2C2724]">{formData.service}</span> has been logged. Our reception at Lotus Spa, Viman Nagar will contact you promptly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2 text-xs tracking-wider uppercase text-white bg-[#C5A059] hover:bg-[#B38E46] transition-colors rounded-2xs shadow-2xs cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label htmlFor="contact-name" className="block text-[11px] tracking-wider uppercase text-[#6E675F] mb-1.5 font-medium">
                    Full Name <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] transition-colors rounded-2xs placeholder:text-[#8C7A6B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-[11px] tracking-wider uppercase text-[#6E675F] mb-1.5 font-medium">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] transition-colors rounded-2xs placeholder:text-[#8C7A6B]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] tracking-wider uppercase text-[#6E675F] mb-1.5 font-medium">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. guest@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] transition-colors rounded-2xs placeholder:text-[#8C7A6B]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-[11px] tracking-wider uppercase text-[#6E675F] mb-1.5 font-medium">
                    Select Preferred Treatment
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] transition-colors rounded-2xs"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Custom Spa Package">Custom Spa Package</option>
                    <option value="General Inquiry">General Consultation</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-date" className="block text-[11px] tracking-wider uppercase text-[#6E675F] mb-1.5 font-medium">
                      Preferred Date
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] transition-colors rounded-2xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-time" className="block text-[11px] tracking-wider uppercase text-[#6E675F] mb-1.5 font-medium">
                      Preferred Time of Day
                    </label>
                    <select
                      id="contact-time"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] transition-colors rounded-2xs"
                    >
                      <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                      <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] tracking-wider uppercase text-[#6E675F] mb-1.5 font-medium">
                    Special Requests or Notes
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention any physical target areas, preferences, or questions..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#2C2724] focus:outline-none focus:border-[#C5A059] transition-colors rounded-2xs placeholder:text-[#8C7A6B]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs tracking-[0.18em] uppercase font-medium text-white bg-[#C5A059] hover:bg-[#B38E46] transition-all cursor-pointer shadow-xs rounded-2xs active:scale-[0.99]"
                  >
                    <Send className="w-3.5 h-3.5 mr-2" />
                    Submit Appointment Inquiry
                  </button>
                </div>

                <p className="text-[10px] text-[#8C7A6B] text-center">
                  *Your contact details remain confidential and will only be used to respond to this request.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
