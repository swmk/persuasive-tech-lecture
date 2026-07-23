import React, { useEffect, useState } from 'react';
import { SlideConfig } from '../types';
import { SCREENS_DATA } from '../data/screens';

interface SpeakerModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlideIndex: number;
  totalSlides: number;
  slides: SlideConfig[];
  activeFeatureId?: string;
}

export const SpeakerModeModal: React.FC<SpeakerModeModalProps> = ({
  isOpen,
  onClose,
  currentSlideIndex,
  totalSlides,
  slides,
  activeFeatureId
}) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: any = null;
    if (isRunning && isOpen) {
      interval = setInterval(() => {
        setElapsedSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, isOpen]);

  if (!isOpen) return null;

  const currentSlide = slides[currentSlideIndex];
  const nextSlide = currentSlideIndex < totalSlides - 1 ? slides[currentSlideIndex + 1] : null;
  const currentScreenData = currentSlide?.annotationFile
    ? SCREENS_DATA[currentSlide.id]
    : null;

  const currentFeature = currentScreenData?.features.find(f => f.id === activeFeatureId) || currentScreenData?.features[0];

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/90 text-white z-50 flex flex-col p-8 backdrop-blur-xl animate-fade-in font-sans">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-6 border-b border-white/20">
        <div className="flex items-center gap-4">
          <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
          <h2 className="text-xl font-bold font-mono text-emerald-400 uppercase tracking-widest">
            SYNCHRONIZED SPEAKER VIEW
          </h2>
          <span className="text-xs text-white/50 font-mono">
            [Slide {currentSlideIndex + 1} of {totalSlides}]
          </span>
        </div>

        {/* Presentation Timer */}
        <div className="flex items-center gap-4 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
          <span className="text-xs font-mono text-white/60">ELAPSED TIME:</span>
          <span className="text-2xl font-mono font-bold text-amber-400">{formatTimer(elapsedSeconds)}</span>
          <div className="flex gap-1.5 ml-2">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="px-2 py-1 text-[10px] uppercase font-bold bg-white/20 hover:bg-white/30 rounded"
            >
              {isRunning ? 'Pause' : 'Start'}
            </button>
            <button
              onClick={() => setElapsedSeconds(0)}
              className="px-2 py-1 text-[10px] uppercase font-bold bg-white/20 hover:bg-white/30 rounded"
            >
              Reset
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="px-4 py-2 bg-amber-500 text-black font-black uppercase text-xs tracking-wider hover:bg-amber-400 transition-colors"
        >
          Close [ESC]
        </button>
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6 overflow-hidden">
        {/* Left Column: Speaker Notes */}
        <div className="lg:col-span-2 flex flex-col gap-6 bg-[#18181b] p-6 border border-white/10 rounded-xl overflow-y-auto">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-amber-500">
              Current Slide: {currentSlide.title}
            </span>
            <h3 className="text-2xl font-serif italic text-white mt-1">
              {currentScreenData?.subtitle || currentSlide.title}
            </h3>
          </div>

          {currentFeature && (
            <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg">
              <div className="text-[10px] uppercase font-bold text-amber-400 font-mono">
                Active Callout #{currentFeature.number}: {currentFeature.name}
              </div>
              <p className="text-xs text-amber-200 mt-1 leading-relaxed">
                {currentFeature.description}
              </p>
            </div>
          )}

          <div className="border-t border-white/10 pt-4">
            <h4 className="text-xs font-mono uppercase text-white/50 font-bold mb-3">
              Speaker Notes & Talking Points
            </h4>
            <div className="text-sm leading-relaxed text-slate-200 font-sans space-y-3 whitespace-pre-line">
              {currentScreenData?.speakerNotes || (
                <p className="italic text-white/50">
                  Introductory slide. Set expectations regarding the three core persuasive principles (Convenience, Loss Avoidance, Status).
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Next Slide Preview */}
        <div className="flex flex-col gap-6 bg-[#18181b] p-6 border border-white/10 rounded-xl">
          <h4 className="text-xs font-mono uppercase text-white/50 font-bold">
            Up Next Preview
          </h4>

          {nextSlide ? (
            <div className="p-4 bg-black/50 border border-white/20 rounded-lg flex flex-col gap-3">
              <span className="text-[10px] font-mono uppercase text-amber-500">
                Slide {currentSlideIndex + 2}: {nextSlide.type.toUpperCase()}
              </span>
              <h5 className="text-lg font-bold text-white">
                {nextSlide.title}
              </h5>
              {nextSlide.sectionTitle && (
                <span className="text-xs text-white/60">
                  Focus Principle: {nextSlide.sectionTitle}
                </span>
              )}
            </div>
          ) : (
            <div className="p-4 bg-black/50 border border-white/20 rounded-lg text-xs text-white/40 italic">
              End of lecture deck.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
