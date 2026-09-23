import { ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function PrivacyPage() {
  return (
    <main className="flex-grow pt-28 pb-20 bg-[#FAF8F5]">
      {/* Header Banner */}
      <div className="bg-[#F4F0EA] border-b border-[#E8E2D9] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#8C7A6B] font-semibold">
            Legal & Guest Trust
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2C2724] font-normal tracking-tight">
            Privacy Policy
          </h1>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto rounded-full" />
          <p className="max-w-2xl mx-auto text-base text-[#6E675F] font-light leading-relaxed">
            How Lotus Spa, Viman Nagar protects and respects guest information.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border border-[#E8E2D9] p-8 sm:p-12 shadow-2xs rounded-sm space-y-8 text-[#6E675F] font-light leading-relaxed text-sm">
          
          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#2C2724] font-normal">1. Commitment to Guest Confidentiality</h2>
            <p>
              At Lotus Spa, accessible from lotusspa-pune.com, one of our main priorities is the privacy of our guests. This Privacy Policy document contains types of information that is collected and recorded by Lotus Spa and how we use it.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#2C2724] font-normal">2. Information We Collect</h2>
            <p>
              When you submit an appointment inquiry or contact request through our website, we may ask for personal contact details including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Full Name</li>
              <li>Mobile Phone Number & Email Address</li>
              <li>Preferred appointment date, timing, and treatment selection</li>
              <li>Optional notes regarding therapy preferences</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#2C2724] font-normal">3. How We Use Your Information</h2>
            <p>
              The information we collect is used solely to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Confirm appointment scheduling and therapy suite availability.</li>
              <li>Respond to direct guest inquiries regarding spa services.</li>
              <li>Maintain high standards of hospitality and tailored care during your visit.</li>
            </ul>
            <p>
              We do NOT sell, rent, trade, or share guest personal data with third-party marketers or external advertisers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-[#2C2724] font-normal">4. Contact Us</h2>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us directly at {BUSINESS_INFO.address.full} or call {BUSINESS_INFO.contact.phoneDisplay}.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
