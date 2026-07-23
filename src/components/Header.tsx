import React from 'react';
import { SlideConfig } from '../types';

interface HeaderProps {
  currentSlide: SlideConfig;
  currentSlideIndex: number;
  totalSlides: number;
  onOpenSpeakerMode: () => void;
  onOpenDiagnostics: () => void;
  onOpenOverview: () => void;
  onToggleFullscreen: () => void;
  showCallouts: boolean;
  onToggleCallouts: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlide,
  currentSlideIndex,
  totalSlides,
  onOpenSpeakerMode,
  onOpenDiagnostics,
  onOpenOverview,
  onToggleFullscreen,
  showCallouts,
  onToggleCallouts,
  isDarkMode,
  onToggleDarkMode
}) => {
  return (
    <header className="h-16 bg-[#0F0F0F] text-[#E0E0E0] border-b border-white/10 flex items-center justify-between px-6 z-30 shrink-0">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
          <span className="text-xs tracking-widest uppercase text-amber-500 font-bold font-mono">
            Persuasive Tech
          </span>
        </div>
        <div className="h-4 w-px bg-white/20"></div>
        <div className="text-sm font-medium tracking-tight text-white flex items-center gap-2">
          <span className="text-white/50 text-xs font-mono">
            [{String(currentSlideIndex + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}]
          </span>
          <span>
            {currentSlide.type === 'title' && 'Module Opening'}
            {currentSlide.type === 'closing' && 'Ethical Manifesto'}
            {currentSlide.type === 'screen' && `Module 0${currentSlideIndex}: ${currentSlide.title}`}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onToggleCallouts}
          title="Toggle Callout Overlays [C]"
          className={`px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider border transition-colors ${
            showCallouts
              ? 'bg-amber-500 text-black border-amber-500'
              : 'border-white/20 text-white/70 hover:bg-white/10'
          }`}
        >
          Callouts [C]
        </button>

        <button
          onClick={onOpenOverview}
          title="Slide Thumbnail Overview [O]"
          className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider border border-white/20 text-white/80 hover:bg-white hover:text-black transition-colors"
        >
          Overview [O]
        </button>

        <button
          onClick={onOpenSpeakerMode}
          title="Open Synchronized Speaker Mode [S]"
          className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider border border-white/20 text-white/80 hover:bg-white hover:text-black transition-colors"
        >
          Speaker View [S]
        </button>

        <button
          onClick={onOpenDiagnostics}
          title="Open Resolution Diagnostics [Ctrl+Shift+D]"
          className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider bg-white text-black font-black hover:bg-amber-400 transition-colors"
        >
          Diagnostics [D]
        </button>

        <button
          onClick={onToggleFullscreen}
          title="Toggle Fullscreen Mode [F]"
          className="px-2.5 py-1.5 text-[10px] uppercase font-bold border border-white/20 text-white/70 hover:bg-white/10 transition-colors"
        >
          ⛶
        </button>
      </div>
    </header>
  );
};
