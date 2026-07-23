import React from 'react';
import { SlideConfig } from '../types';
import { SCREENS_DATA } from '../data/screens';
import { PRINCIPLES_DATA } from '../data/principles';

interface ThumbnailOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideConfig[];
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
}

export const ThumbnailOverviewModal: React.FC<ThumbnailOverviewModalProps> = ({
  isOpen,
  onClose,
  slides,
  currentSlideIndex,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 text-white z-50 flex flex-col p-8 backdrop-blur-xl animate-fade-in font-sans overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-white/20 shrink-0">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-amber-500"></span>
          <h2 className="text-xl font-mono font-bold text-white uppercase tracking-widest">
            LECTURE DECK SLIDE OVERVIEW [O]
          </h2>
        </div>

        <button
          onClick={onClose}
          className="px-4 py-2 bg-amber-500 text-black font-black uppercase text-xs tracking-wider hover:bg-amber-400 transition-colors"
        >
          Close Overview [ESC]
        </button>
      </div>

      {/* Grid of Slide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {slides.map((slide, idx) => {
          const isSelected = idx === currentSlideIndex;
          const principle = slide.principle ? PRINCIPLES_DATA[slide.principle] : null;
          const screenData = slide.annotationFile ? SCREENS_DATA[slide.id] : null;

          return (
            <div
              key={slide.id}
              onClick={() => {
                onSelectSlide(idx);
                onClose();
              }}
              className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-4 relative overflow-hidden group ${
                isSelected
                  ? 'bg-[#27272a] border-amber-500 ring-2 ring-amber-500/50 scale-[1.02]'
                  : 'bg-[#18181b] border-white/10 hover:border-white/40 hover:bg-[#202023]'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-amber-500">
                  Slide {String(idx + 1).padStart(2, '0')}
                </span>
                {principle && (
                  <span
                    className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded text-black"
                    style={{ backgroundColor: principle.theme.accent }}
                  >
                    {principle.label}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-lg font-serif italic font-bold text-white group-hover:text-amber-400 transition-colors">
                  {slide.title}
                </h3>
                {screenData && (
                  <p className="text-xs text-white/50 mt-1 line-clamp-2">
                    {screenData.subtitle} • {screenData.features.length} Annotated Features
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-white/40 pt-2 border-t border-white/10">
                <span>Type: {slide.type.toUpperCase()}</span>
                <span className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                  Jump to Slide →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
