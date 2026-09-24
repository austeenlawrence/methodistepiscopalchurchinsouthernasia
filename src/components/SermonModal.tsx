import React, { useEffect } from 'react';
import { Sermon } from '../types';
import { churchData } from '../data/churchData';
import { X, Play, Calendar, User, BookOpen, ExternalLink, Info } from 'lucide-react';

interface SermonModalProps {
  sermon: Sermon | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SermonModal: React.FC<SermonModalProps> = ({ sermon, isOpen, onClose }) => {
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

  if (!isOpen || !sermon) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-xl shadow-2xl border border-[#E0D7C6] overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0F1D2F] text-white p-5 sm:p-6 relative border-b-2 border-[#C59B27] flex justify-between items-start">
          <div>
            <div className="text-[#D4AF37] text-xs font-cinzel font-semibold uppercase tracking-wider mb-1">
              Latest Sermon Broadcast & Message
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-white leading-snug">
              {sermon.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0 ml-4"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Frame Area */}
        <div className="bg-black relative aspect-video w-full flex items-center justify-center">
          <img
            src={sermon.thumbnailUrl}
            alt={sermon.title}
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/40">
            <div className="w-16 h-16 rounded-full bg-[#C59B27] flex items-center justify-center text-[#0F1D2F] shadow-lg mb-3">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <p className="text-white font-serif-heading text-lg font-bold">
              {sermon.title}
            </p>
            <p className="text-gray-300 text-xs mt-1">
              Methodist Episcopal Church in Southern Asia — Bulandshahr
            </p>
          </div>
        </div>

        {/* Sermon Details & Notice */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-white p-4 rounded-lg border border-[#E5DDD0]">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#C59B27] shrink-0" />
              <div>
                <span className="text-gray-500 block">Speaker</span>
                <span className="font-semibold text-[#0F1D2F]">{sermon.speaker}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C59B27] shrink-0" />
              <div>
                <span className="text-gray-500 block">Delivered On</span>
                <span className="font-semibold text-[#0F1D2F]">{sermon.date}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#C59B27] shrink-0" />
              <div>
                <span className="text-gray-500 block">Scripture Passage</span>
                <span className="font-semibold text-[#0F1D2F]">{sermon.passage}</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-[#4A5568] leading-relaxed bg-[#F4EFE6] p-4 rounded-lg border border-[#E0D5C3]">
            <h4 className="font-semibold text-[#0F1D2F] mb-1">Message Synopsis</h4>
            <p>{sermon.summary}</p>
          </div>

          {sermon.isPlaceholder && (
  <div className="rounded-lg overflow-hidden border border-[#E0D5C3]">
    <iframe
      className="w-full aspect-video"
      src="https://www.youtube.com/embed/5S5tz48E0Dg"
      title="Official MECSA Sermon Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
)}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <a
              href={churchData.social.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#CC0000] hover:bg-[#B30000] text-white text-xs font-semibold transition-colors"
            >
              <span>Watch on Official YouTube Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
