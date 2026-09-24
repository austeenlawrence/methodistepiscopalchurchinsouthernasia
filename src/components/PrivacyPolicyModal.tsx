import React, { useEffect } from 'react';
import { churchData } from '../data/churchData';
import { X, ShieldCheck, Lock, HeartHandshake } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
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
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-xl shadow-2xl border border-[#E0D7C6] overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#0F1D2F] text-white p-6 relative border-b-2 border-[#C59B27] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#C59B27]" />
            <div>
              <h3 className="text-xl font-serif-heading font-bold text-white">
                Privacy & Confidentiality Policy
              </h3>
              <p className="text-xs text-gray-300">
                Methodist Episcopal Church in Southern Asia, Bulandshahr
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-xs sm:text-sm text-[#3E4D5E] leading-relaxed">
          <div className="bg-white p-4 rounded-lg border border-[#E5DDD0] space-y-2">
            <h4 className="font-bold text-[#0F1D2F] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#C59B27]" />
              <span>Pastoral Care & Prayer Request Confidentiality</span>
            </h4>
            <p>
              We treat all prayer petitions, spiritual inquiries, and pastoral messages submitted through this website with strict pastoral confidentiality. Prayer requests are shared exclusively with our designated church prayer intercessors and pastoral leadership to lift you and your needs in prayer before God.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-[#E5DDD0] space-y-2">
            <h4 className="font-bold text-[#0F1D2F] flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#C59B27]" />
              <span>Personal Contact Information</span>
            </h4>
            <p>
              Information collected through our Contact Form or Prayer Form (such as your full name, phone number, and email address) is used purely for direct pastoral correspondence, spiritual care, or answering your inquiries. We do not sell, rent, or publicly display your submitted details.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-[#E5DDD0] space-y-2">
            <h4 className="font-bold text-[#0F1D2F] text-xs uppercase tracking-wider text-gray-600">
              Contributions & Offerings
            </h4>
            <p>
              Voluntary tithes and offerings for MECSA Bulandshahr are handled directly through authorized UPI payment channels. This website does not capture or store banking passwords, UPI PINs, or sensitive financial account credentials.
            </p>
          </div>

          <p className="text-xs text-gray-500 pt-2 border-t border-[#E8E1D5]">
            For any inquiries regarding church data handling or pastoral care, please contact our pastorate at: <strong className="text-[#0F1D2F]">{churchData.contact.email}</strong>.
          </p>
        </div>

        <div className="bg-[#F4EFE6] px-6 py-4 border-t border-[#E0D5C3] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#0F1D2F] hover:bg-[#1A314E] text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
