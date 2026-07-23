import React from 'react';
import { PRINCIPLES_DATA } from '../data/principles';

interface TitleSlideProps {
  onStart: () => void;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ onStart }) => {
  return (
    <div className="flex-1 bg-[#0F0F0F] text-[#E0E0E0] p-12 flex flex-col justify-between overflow-y-auto relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full my-auto flex flex-col gap-10 z-10">
        <div>
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-bold font-mono uppercase tracking-widest rounded-full mb-6">
            <span>Interactive UX Masterclass</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-serif italic text-white tracking-tight leading-tight">
            Persuasive Technology in E-Commerce
          </h1>
          <p className="text-xl text-white/60 font-light mt-4 max-w-2xl leading-relaxed">
            How Convenience, Loss Avoidance, and Status architectures shape user decision-making across modern e-commerce interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {Object.values(PRINCIPLES_DATA).map(p => (
            <div
              key={p.id}
              className="p-6 rounded-lg border bg-[#18181b] flex flex-col gap-3 transition-all hover:border-white/30"
              style={{ borderColor: `${p.theme.accent}40` }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="w-8 h-8 rounded-full font-bold font-mono text-xs flex items-center justify-center text-black"
                  style={{ backgroundColor: p.theme.accent }}
                >
                  {p.shortLabel}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  {p.subPrinciples.length} Sub-Principles
                </span>
              </div>
              <h3 className="text-xl font-serif italic font-bold text-white mt-1">
                {p.label}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {p.definition}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end pt-6 border-t border-white/10">

          <button
            onClick={onStart}
            className="px-8 py-3.5 bg-amber-500 text-black font-black uppercase text-xs tracking-widest hover:bg-amber-400 transition-colors shadow-lg flex items-center gap-3 group"
          >
            <span>Begin Lecture Deck</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
