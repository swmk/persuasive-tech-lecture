import React from 'react';

interface ClosingSlideProps {
  onRestart: () => void;
  onOpenOverview: () => void;
}

export const ClosingSlide: React.FC<ClosingSlideProps> = ({ onRestart, onOpenOverview }) => {
  return (
    <div className="flex-1 bg-[#0F0F0F] text-[#E0E0E0] p-12 flex flex-col justify-between overflow-y-auto relative">
      <div className="max-w-4xl mx-auto w-full my-auto flex flex-col gap-8 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-mono uppercase tracking-widest rounded-full w-fit">
          <span>Ethical Design Manifesto • Final Takeaway</span>
        </div>

        <h1 className="text-4xl lg:text-5xl font-serif italic text-white tracking-tight leading-tight">
          Design for Influence, Not Manipulation
        </h1>

        <p className="text-lg text-amber-400/90 font-light leading-relaxed border-l-2 border-amber-500 pl-6 italic bg-amber-500/5 py-4 pr-4">
          "Persuasive design should reduce effort, clarify value and support informed choice without using deceptive pressure or synthetic urgency."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-5 bg-[#18181b] border border-white/10 rounded-lg">
            <h3 className="text-sm font-bold text-amber-500 uppercase font-mono tracking-wider mb-2">
              1. Transparency over Secrecy
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Always keep total costs, recurring fees, and contractual obligations clear before any final order trigger.
            </p>
          </div>

          <div className="p-5 bg-[#18181b] border border-white/10 rounded-lg">
            <h3 className="text-sm font-bold text-amber-500 uppercase font-mono tracking-wider mb-2">
              2. Authentic Urgency
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Timers and stock counts must reflect verifiable server state—never reset countdowns or fake low inventory.
            </p>
          </div>

          <div className="p-5 bg-[#18181b] border border-white/10 rounded-lg">
            <h3 className="text-sm font-bold text-amber-500 uppercase font-mono tracking-wider mb-2">
              3. User-First Defaults
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Smart defaults should benefit the user's primary goal, never default to hidden add-ons or non-consensual subscriptions.
            </p>
          </div>

          <div className="p-5 bg-[#18181b] border border-white/10 rounded-lg">
            <h3 className="text-sm font-bold text-amber-500 uppercase font-mono tracking-wider mb-2">
              4. Respectful Hierarchy
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Elevating VIP status should recognize achievement without deliberately degrading or shaming standard users.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-6">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-white/10 border border-white/20 text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            ↺ Restart Lecture
          </button>
          <button
            onClick={onOpenOverview}
            className="px-6 py-3 bg-amber-500 text-black font-black uppercase text-xs tracking-widest hover:bg-amber-400 transition-colors"
          >
            View Slide Overview [O]
          </button>
        </div>
      </div>
    </div>
  );
};
