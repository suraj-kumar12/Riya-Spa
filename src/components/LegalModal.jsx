import { useEffect } from 'react';
import { X, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function LegalModal({ type, isOpen, onClose }) {
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

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#faf9f6] border border-[#d6d3d1] shadow-2xl p-6 sm:p-8 my-8 max-h-[85vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#78716c] hover:text-[#1c1917] border border-[#e7e5e4] hover:border-[#1c1917] transition-colors"
          aria-label="Close legal modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-[#78716c]">
            <Shield className="w-4 h-4" />
            <span className="text-[10px] tracking-[0.2em] uppercase">Lotus Spa Legal Policy</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#1c1917]">
            {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
          </h2>

          <div className="text-xs sm:text-sm text-[#57534e] space-y-4 font-light leading-relaxed pt-2">
            {isPrivacy ? (
              <>
                <p>
                  At <strong>{BUSINESS_INFO.name}</strong>, located at {BUSINESS_INFO.address.full}, we respect and value your privacy.
                </p>
                <p>
                  <strong>Information Collection:</strong> We only collect guest contact information (such as name, phone number, and email address) submitted voluntarily through our appointment inquiry forms for the sole purpose of scheduling and confirming spa visits.
                </p>
                <p>
                  <strong>Data Use:</strong> We do not sell, rent, or trade your personal details to external marketing third parties. All treatment preferences are kept in strict professional confidence.
                </p>
                <p>
                  <strong>Inquiries:</strong> If you wish to review, update, or remove your contact records from our booking system, please contact our front desk at Lotus Spa, Viman Nagar, Pune.
                </p>
              </>
            ) : (
              <>
                <p>
                  Welcome to <strong>{BUSINESS_INFO.name}</strong>. By reserving a treatment or visiting our premises at {BUSINESS_INFO.address.full}, you agree to the following conditions:
                </p>
                <p>
                  <strong>Health Disclosures:</strong> Guests are requested to inform our spa therapists of any pre-existing medical conditions, allergies, pregnancy, or recent surgeries prior to commencing treatment.
                </p>
                <p>
                  <strong>Arrival & Timing:</strong> We recommend arriving 10 minutes prior to your scheduled time to enjoy our welcome tea and settle in comfortably.
                </p>
                <p>
                  <strong>Rescheduling & Etiquette:</strong> Please provide reasonable advance notice if you need to reschedule your appointment slot. To preserve tranquility for all visitors, mobile phones must be silenced within the therapy zones.
                </p>
              </>
            )}
          </div>

          <div className="pt-6 border-t border-[#e7e5e4] flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-xs tracking-wider uppercase text-[#faf9f6] bg-[#1c1917] hover:bg-[#292524] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
