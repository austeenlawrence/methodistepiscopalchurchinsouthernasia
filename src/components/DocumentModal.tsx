import React, { useEffect } from 'react';
import { HistoricalDocument } from '../types';
import { X, FileText, Calendar, ShieldCheck, Info } from 'lucide-react';

interface DocumentModalProps {
  document: HistoricalDocument | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({
  document: docItem,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !docItem) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-xl shadow-2xl border border-[#E0D7C6] overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0F1D2F] text-white p-6 relative border-b-2 border-[#C59B27] flex justify-between items-start">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded bg-[#C59B27]/20 border border-[#C59B27] text-[#E8C860] text-[10px] font-bold uppercase tracking-wider mb-2">
              {docItem.category} • {docItem.documentType}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-white leading-tight">
              {docItem.title}
            </h3>
            <p className="text-xs text-gray-300 mt-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Period: {docItem.date}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0 ml-4"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Document Summary */}
          <div className="bg-white p-4 rounded-lg border border-[#E5DDD0] space-y-2">
            <h4 className="text-xs font-bold text-[#0F1D2F] uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#C59B27]" />
              <span>Archival Summary</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#3E4D5E] leading-relaxed">
              {docItem.description}
            </p>
          </div>

          {/* Excerpt Simulation / Preview */}
          {docItem.previewExcerpt && (
            <div className="bg-[#F4EFE6] p-4 rounded-lg border border-[#E0D5C3] space-y-1.5 font-serif">
              <span className="text-[11px] uppercase tracking-wider font-sans font-bold text-[#8C6D1F] block">
                Historical Excerpt Preview:
              </span>
              <p className="text-xs sm:text-sm italic text-[#2C3B4D] leading-relaxed">
                &ldquo;{docItem.previewExcerpt}&rdquo;
              </p>
            </div>
          )}

          {/* Document Placeholder Notice */}
          <div className="p-4 rounded-lg bg-[#FAF4E5] border border-[#E5D5A8] text-xs text-[#7A5C13] space-y-1">
            <div className="flex items-center gap-1.5 font-bold">
              <Info className="w-4 h-4 text-[#C59B27]" />
              <span>Digital Archive Repository Notice</span>
            </div>
            <p className="leading-relaxed">
              {docItem.filePlaceholderNotice}
            </p>
          </div>

          {/* Bottom actions */}
          <div className="pt-3 border-t border-[#E8E1D5] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-1.5 text-gray-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>MECSA Bulandshahr Historical Preservation Project</span>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#0F1D2F] hover:bg-[#1A314E] text-white font-semibold transition-colors cursor-pointer"
            >
              Close Record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
