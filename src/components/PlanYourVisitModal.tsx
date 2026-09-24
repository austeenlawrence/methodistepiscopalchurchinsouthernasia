import React, { useEffect } from 'react';
import { churchData } from '../data/churchData';
import { X, Clock, MapPin, Phone, Heart, ExternalLink, CheckCircle2, Navigation } from 'lucide-react';

interface PlanYourVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const PlanYourVisitModal: React.FC<PlanYourVisitModalProps> = ({
  isOpen,
  onClose,
  onContactClick,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-xl shadow-2xl border border-[#E0D7C6] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0F1D2F] text-white p-6 sm:p-8 relative border-b-2 border-[#C59B27]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="inline-block px-3 py-1 rounded bg-[#C59B27]/20 border border-[#C59B27] text-[#E8C860] text-xs font-semibold uppercase tracking-wider mb-2">
            Welcome to MECSA Bulandshahr
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-white">
            Plan Your Visit
          </h2>
          <p className="text-gray-300 text-sm mt-1 max-w-xl">
            We warmly invite you, your family, and friends to join us in worship, fellowship, and prayer at Methodist Episcopal Church in Southern Asia.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Section 1: Service Timings */}
          <div>
            <h3 className="text-lg font-cinzel font-bold text-[#0F1D2F] flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[#C59B27]" />
              <span>Weekly Gathering Timings</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {churchData.serviceSchedules.map((svc) => (
                <div key={svc.id} className="bg-white p-4 rounded-lg border border-[#E5DDD0] shadow-xs">
                  <div className="text-xs font-bold text-[#8C6D1F] uppercase tracking-wide">
                    {svc.day}
                  </div>
                  <div className="text-base font-bold text-[#0F1D2F] mt-1">
                    {svc.name}
                  </div>
                  <div className="text-sm font-semibold text-[#C59B27] mt-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{svc.time}</span>
                  </div>
                  <p className="text-xs text-[#556376] mt-2 leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: What to Expect */}
          <div className="bg-[#F4EFE6] p-5 rounded-lg border border-[#E0D5C3]">
            <h3 className="text-base font-cinzel font-bold text-[#0F1D2F] flex items-center gap-2 mb-3">
              <Heart className="w-4 h-4 text-[#C59B27]" />
              <span>What to Expect as a Visitor</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#3E4D5E]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D1F] shrink-0 mt-0.5" />
                <span><strong>Liturgical & Reverent Worship:</strong> Traditional hymn singing, Scripture readings, and Christ-centered pastoral preaching.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D1F] shrink-0 mt-0.5" />
                <span><strong>Warm Christian Welcome:</strong> Friendly ushers and congregation members ready to assist you upon arrival.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D1F] shrink-0 mt-0.5" />
                <span><strong>Family-Friendly Atmosphere:</strong> All generations worship together, and visitors are welcomed as esteemed guests.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D1F] shrink-0 mt-0.5" />
                <span><strong>Post-Service Fellowship:</strong> Opportunity to meet pastors, elders, and church members for prayer and greeting.</span>
              </div>
            </div>
          </div>

          {/* Section 3: Accessibility */}
          <div className="bg-white p-4 rounded-lg border border-[#E5DDD0]">
            <h3 className="text-sm font-cinzel font-bold text-[#0F1D2F] mb-1">
              Accessibility & Assistance
            </h3>
            <p className="text-xs text-[#556376] leading-relaxed">
              Our church facilitates accessible entry into the main sanctuary. Ushers and volunteers are available at the entrance to assist elderly attendees, persons with mobility requirements, or young families.
            </p>
          </div>

          {/* Section 4: Church Location & Map */}
          <div>
            <h3 className="text-lg font-cinzel font-bold text-[#0F1D2F] flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-[#C59B27]" />
              <span>Location & Directions</span>
            </h3>
            
            <div className="bg-white p-4 rounded-lg border border-[#E5DDD0] mb-4 space-y-2">
              <p className="text-sm font-bold text-[#0F1D2F]">{churchData.churchName}</p>
              <p className="text-xs text-[#556376]">{churchData.location.addressLine}</p>
              <p className="text-xs text-[#556376]">{churchData.location.landmark}</p>
              <p className="text-xs text-[#556376] font-medium">{churchData.location.city}, {churchData.location.state} – {churchData.location.pinCode}, India</p>
              
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={churchData.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0F1D2F] hover:bg-[#1A314E] text-white text-xs font-semibold transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FAF4E5] text-[#8C6D1F] border border-[#E5D5A8] text-xs font-semibold">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Visitor Inquiry: {churchData.contact.phoneFormatted}</span>
                </div>
              </div>
            </div>

            {/* Google Map Embed Frame */}
            <div className="w-full h-56 rounded-lg overflow-hidden border border-[#E0D5C3] shadow-inner bg-[#EAE6DF]">
              <iframe
                title="Church Location Map - Bulandshahr, Uttar Pradesh"
                src={churchData.location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#F4EFE6] px-6 py-4 border-t border-[#E0D5C3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#556376]">
            Questions prior to visiting? Contact our pastoral team.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="px-4 py-2 rounded-lg bg-[#C59B27] hover:bg-[#B38A1F] text-[#0F1D2F] hover:text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Contact Pastorate
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white hover:bg-gray-100 text-[#0F1D2F] text-xs font-medium border border-[#D5CBBF] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
