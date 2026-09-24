import React, { useEffect } from 'react';
import { ChurchEvent } from '../types';
import { churchData } from '../data/churchData';
import { X, Calendar, Clock, MapPin, ExternalLink, Info } from 'lucide-react';

interface EventModalProps {
  event: ChurchEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
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

  if (!isOpen || !event) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-xl shadow-2xl border border-[#E0D7C6] overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-52 sm:h-64 w-full bg-[#0F1D2F]">
          <img
            src={event.image}
            alt={event.imageAlt}
            className="w-full h-full object-cover opacity-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D2F] via-[#0F1D2F]/40 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-2.5 py-0.5 rounded bg-[#C59B27] text-[#0F1D2F] text-[11px] font-bold uppercase tracking-wider mb-2">
              Church Activity
            </span>
            <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-white leading-tight">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Body content */}
        <div className="p-6 space-y-5">
          {/* Metadata Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 bg-white p-3.5 rounded-lg border border-[#E5DDD0] text-xs">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C59B27] shrink-0" />
              <div>
                <span className="text-gray-400 block text-[10px]">Date</span>
                <span className="font-semibold text-[#0F1D2F]">{event.date}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C59B27] shrink-0" />
              <div>
                <span className="text-gray-400 block text-[10px]">Time</span>
                <span className="font-semibold text-[#0F1D2F]">{event.time}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C59B27] shrink-0" />
              <div>
                <span className="text-gray-400 block text-[10px]">Venue</span>
                <span className="font-semibold text-[#0F1D2F]">{event.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2 text-xs sm:text-sm text-[#3E4D5E] leading-relaxed">
            <p className="font-medium text-[#0F1D2F]">{event.shortDescription}</p>
            <p className="text-gray-600">{event.fullDescription}</p>
          </div>

          {event.isPlaceholderDate && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-[#FAF4E5] border border-[#E5D5A8] text-[11px] text-[#7A5C13]">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>Event date and times shown are representative placeholders for upcoming parish calendar notices.</span>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-3 border-t border-[#E8E1D5] flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={churchData.social.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#1877F2] hover:bg-[#0E65D9] text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <span>See More Activities on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
