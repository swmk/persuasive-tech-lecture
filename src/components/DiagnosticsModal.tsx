import React from 'react';
import { ResolutionResult, SlideConfig } from '../types';
import { SCREENS_DATA } from '../data/screens';

interface DiagnosticsModalProps {
  isOpen: boolean;
  onClose: () => void;
  slideResolutionMap: Record<string, ResolutionResult[]>;
  slides: SlideConfig[];
}

export const DiagnosticsModal: React.FC<DiagnosticsModalProps> = ({
  isOpen,
  onClose,
  slideResolutionMap,
  slides
}) => {
  if (!isOpen) return null;

  // Aggregate stats
  let totalCallouts = 0;
  let resolvedCallouts = 0;
  let unresolvedCallouts = 0;
  const duplicateIdSet = new Set<string>();
  const seenIds = new Set<string>();

  Object.values(SCREENS_DATA).forEach(screen => {
    screen.features.forEach(f => {
      totalCallouts++;
      if (seenIds.has(f.id)) {
        duplicateIdSet.add(f.id);
      } else {
        seenIds.add(f.id);
      }
    });
  });

  (Object.values(slideResolutionMap) as ResolutionResult[][]).forEach(results => {
    results.forEach(res => {
      if (res.status === 'resolved') {
        resolvedCallouts++;
      } else {
        unresolvedCallouts++;
      }
    });
  });

  return (
    <div className="fixed inset-0 bg-black/90 text-white z-50 flex flex-col p-8 backdrop-blur-xl animate-fade-in font-sans">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-white/20 shrink-0">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-amber-500"></span>
          <h2 className="text-xl font-mono font-bold text-amber-500 uppercase tracking-widest">
            TARGET RESOLUTION DIAGNOSTICS [Ctrl+Shift+D]
          </h2>
        </div>

        <button
          onClick={onClose}
          className="px-4 py-2 bg-amber-500 text-black font-black uppercase text-xs tracking-wider hover:bg-amber-400 transition-colors"
        >
          Close Diagnostics [ESC]
        </button>
      </div>

      {/* Stats Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 shrink-0">
        <div className="bg-[#18181b] border border-white/10 p-4 rounded-lg">
          <div className="text-[10px] font-mono text-white/50 uppercase">Total Callouts</div>
          <div className="text-2xl font-bold font-mono text-white mt-1">{totalCallouts}</div>
        </div>

        <div className="bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-lg">
          <div className="text-[10px] font-mono text-emerald-400 uppercase">Resolved Targets</div>
          <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">{resolvedCallouts}</div>
        </div>

        <div className="bg-amber-950/40 border border-amber-500/30 p-4 rounded-lg">
          <div className="text-[10px] font-mono text-amber-400 uppercase">Unresolved Targets</div>
          <div className="text-2xl font-bold font-mono text-amber-400 mt-1">{unresolvedCallouts}</div>
        </div>

        <div className="bg-[#18181b] border border-white/10 p-4 rounded-lg">
          <div className="text-[10px] font-mono text-white/50 uppercase">Duplicate IDs</div>
          <div className={`text-2xl font-bold font-mono mt-1 ${duplicateIdSet.size > 0 ? 'text-red-400' : 'text-emerald-400'}`}>
            {duplicateIdSet.size}
          </div>
        </div>
      </div>

      {/* Detailed Resolution Breakdown Table */}
      <div className="flex-1 bg-[#18181b] border border-white/10 rounded-lg p-6 overflow-y-auto">
        <h3 className="text-xs font-mono uppercase text-amber-400 font-bold mb-4">
          Per-Slide Callout Resolution Logs
        </h3>

        <div className="space-y-6">
          {slides.filter(s => s.type === 'screen').map(slide => {
            const screen = SCREENS_DATA[slide.id];
            const results = slideResolutionMap[slide.id] || [];

            return (
              <div key={slide.id} className="border border-white/10 rounded-lg p-4 bg-black/40">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-bold text-white font-mono">
                    Screen: {slide.title} ({slide.id})
                  </span>
                  <span className="text-xs text-white/50 font-mono">
                    Principle: {slide.sectionTitle}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                      <tr className="border-b border-white/20 text-white/50">
                        <th className="py-2 px-3">#</th>
                        <th className="py-2 px-3">Feature Name</th>
                        <th className="py-2 px-3">Status</th>
                        <th className="py-2 px-3">Match Source</th>
                        <th className="py-2 px-3">Selector / Target</th>
                      </tr>
                    </thead>
                    <tbody>
                      {screen.features.map(f => {
                        const res = results.find(r => r.featureId === f.id);
                        const isResolved = res?.status === 'resolved';

                        return (
                          <tr key={f.id} className="border-b border-white/5 hover:bg-white/5">
                            <td className="py-2 px-3 text-amber-500 font-bold">{f.number}</td>
                            <td className="py-2 px-3 text-white font-sans">{f.name}</td>
                            <td className="py-2 px-3">
                              {isResolved ? (
                                <span className="text-emerald-400 font-bold">✓ RESOLVED</span>
                              ) : (
                                <span className="text-amber-400 font-bold">⚠ UNRESOLVED</span>
                              )}
                            </td>
                            <td className="py-2 px-3 text-white/60">
                              {res?.resolvedBy || '—'}
                            </td>
                            <td className="py-2 px-3 text-white/40 truncate max-w-xs">
                              {f.target.dataAttribute ? `data-deck-target="${f.target.dataAttribute}"` : f.target.css ? `css: ${f.target.css}` : `text: "${f.target.text?.value}"`}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
