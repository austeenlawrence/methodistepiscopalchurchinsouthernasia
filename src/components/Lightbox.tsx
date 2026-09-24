import React, { useEffect } from 'react';
import { GalleryPhoto } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onClose, onPrev, onNext]);

  if (currentIndex === null || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-center gap-3">
        <span className="text-white/70 text-xs font-mono bg-white/10 px-3 py-1.5 rounded-full">
          {currentIndex + 1} / {photos.length}
        </span>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all duration-150 cursor-pointer focus:outline-hidden hover:scale-105"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all duration-150 cursor-pointer focus:outline-hidden hover:scale-105"
        aria-label="Next photo"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Image & Caption Container */}
      <div 
        className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-lg shadow-2xl border border-white/10 bg-black">
          <img
            src={currentPhoto.url}
            alt={currentPhoto.alt}
            className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="mt-4 text-center max-w-xl px-4">
          <h4 className="text-white font-serif-heading text-lg font-semibold tracking-wide">
            {currentPhoto.title}
          </h4>
          <p className="text-gray-300 text-xs sm:text-sm mt-1 leading-relaxed">
            {currentPhoto.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
