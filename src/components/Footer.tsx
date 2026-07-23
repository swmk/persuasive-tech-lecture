import React from 'react';

interface FooterProps {
  currentSlideIndex: number;
  totalSlides: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onPrevFeature?: () => void;
  onNextFeature?: () => void;
  currentFeatureNumber?: number;
  totalFeaturesNumber?: number;
}

export const Footer: React.FC<FooterProps> = ({
  currentSlideIndex,
  totalSlides,
  onPrevSlide,
  onNextSlide,
  onPrevFeature,
  onNextFeature,
  currentFeatureNumber,
  totalFeaturesNumber
}) => {
  const progressPercent = Math.round(((currentSlideIndex + 1) / totalSlides) * 100);

  return (
    <footer className="h-12 bg-black text-[#E0E0E0] flex items-center px-6 text-[10px] tracking-widest uppercase border-t border-white/10 shrink-0 select-none z-30">
      <div className="flex-1 flex items-center gap-4">
        <span className="font-mono font-black text-amber-500">
          Slide {String(currentSlideIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>
        <div className="flex-1 max-w-xs h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-500 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center gap-6 text-white/50">
        {currentFeatureNumber !== undefined && totalFeaturesNumber !== undefined && (
          <div className="flex items-center gap-2 border-r border-white/20 pr-4">
            <span className="text-amber-400 font-bold">Feature {currentFeatureNumber} / {totalFeaturesNumber}</span>
            <div className="flex gap-1">
              <button
                onClick={onPrevFeature}
                className="px-1.5 py-0.5 bg-white/10 hover:bg-white/20 text-white rounded text-[9px]"
                title="Previous Feature"
              >
                ▲
              </button>
              <button
                onClick={onNextFeature}
                className="px-1.5 py-0.5 bg-white/10 hover:bg-white/20 text-white rounded text-[9px]"
                title="Next Feature [SPACE]"
              >
                ▼
              </button>
            </div>
          </div>
        )}

        <div className="hidden md:flex gap-6 items-center">
          <div className="flex gap-1.5 items-center">
            <span className="px-1 bg-white/10 rounded">←</span>
            <span className="px-1 bg-white/10 rounded">→</span>
            <span>Navigate</span>
          </div>
          <div className="flex gap-1.5 items-center">
            <span className="px-1 bg-white/10 rounded">SPACE</span>
            <span>Next Feature</span>
          </div>
          <div className="flex gap-1.5 items-center">
            <span className="px-1 bg-white/10 rounded">N</span>
            <span>Notes</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onPrevSlide}
            disabled={currentSlideIndex === 0}
            className="px-3 py-1 bg-white/10 hover:bg-white text-white hover:text-black font-bold disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            ← PREV
          </button>
          <button
            onClick={onNextSlide}
            disabled={currentSlideIndex === totalSlides - 1}
            className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-black font-black disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            NEXT →
          </button>
        </div>
      </div>
    </footer>
  );
};
