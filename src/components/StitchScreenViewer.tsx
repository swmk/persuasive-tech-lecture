import React, { useEffect, useRef, useState, useTransition } from 'react';
import { FeatureAnnotation, PrincipleId, ResolutionResult, ScreenData } from '../types';
import { resolveFeatureTarget } from '../utils/targetResolver';
import { PRINCIPLES_DATA } from '../data/principles';

interface StitchScreenViewerProps {
  screenData: ScreenData;
  activeFeatureId: string;
  onSelectFeature: (featureId: string) => void;
  onResolutionResults: (results: ResolutionResult[]) => void;
  showCallouts: boolean;
  principleId: PrincipleId;
}

export const StitchScreenViewer: React.FC<StitchScreenViewerProps> = ({
  screenData,
  activeFeatureId,
  onSelectFeature,
  onResolutionResults,
  showCallouts,
  principleId
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [resolutionResults, setResolutionResults] = useState<ResolutionResult[]>([]);
  const [, startTransition] = useTransition();

  // Perform resolution after DOM render
  useEffect(() => {
    if (!containerRef.current) return;

    const results: ResolutionResult[] = screenData.features.map(feature => {
      return resolveFeatureTarget(feature, containerRef.current!);
    });

    startTransition(() => {
      setResolutionResults(results);
      onResolutionResults(results);
    });
  }, [screenData, onResolutionResults]);

  const activePrinciple = PRINCIPLES_DATA[principleId] || PRINCIPLES_DATA['convenience'];

  return (
    <div className="w-full h-full bg-[#1A1A1A] p-6 flex flex-col justify-center items-center relative overflow-hidden select-none">
      {/* Screen Header Label */}
      <div className="absolute top-4 left-6 flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-white/50 z-20">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activePrinciple.theme.accent }}></span>
        <span>Stitch Import: Screen_{screenData.id}</span>
      </div>

      {/* Viewport Scaler Wrapper - Styled like a sleek desktop/mobile web app window */}
      <div className="w-full max-w-[680px] h-[calc(100%-2.5rem)] max-h-[840px] min-h-[580px] bg-[#0d0d0f] rounded-2xl shadow-2xl border border-white/15 relative overflow-hidden flex flex-col shrink-0 my-auto ring-1 ring-white/10">
        
        {/* App Browser Chrome Header Bar */}
        <div className="bg-[#141417] px-4 py-2.5 border-b border-white/10 flex items-center justify-between shrink-0 select-none z-10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 hover:bg-[#FF5F56]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 hover:bg-[#FFBD2E]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 hover:bg-[#27C93F]"></div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 bg-[#08080A] rounded-md border border-white/10 text-[11px] font-mono text-white/60 max-w-[340px] w-full justify-center shadow-inner">
            <span className="text-emerald-400 font-bold">🔒</span>
            <span className="truncate tracking-tight text-white/80">https://luxe.store/app/{screenData.id}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono uppercase text-white/70 font-semibold tracking-wider">
              E-Commerce App
            </span>
          </div>
        </div>

        {/* Rendered Stitch HTML Screen Container */}
        <div
          ref={containerRef}
          className="w-full flex-1 overflow-y-auto relative p-3 sm:p-5 bg-[#0A0A0C]"
          dangerouslySetInnerHTML={{ __html: screenData.htmlCode }}
        />

        {/* Overlayed Callout Badges & Highlights */}
        {showCallouts &&
          resolutionResults.map(res => {
            const feature = screenData.features.find(f => f.id === res.featureId);
            if (!feature) return null;

            const isSelected = feature.id === activeFeatureId;
            const isResolved = res.status === 'resolved';
            const featurePrinciple = PRINCIPLES_DATA[feature.principle] || activePrinciple;

            // Position computation
            const pos = res.computedPosition || { x: 30, y: 30 + feature.number * 40 };

            return (
              <React.Fragment key={feature.id}>
                {/* Target Highlight Box on Selected Element */}
                {isSelected && res.boundingClientRect && (
                  <div
                    className="absolute pointer-events-none z-20 border-2 rounded transition-all duration-300 animate-pulse"
                    style={{
                      top: `${res.boundingClientRect.top}px`,
                      left: `${res.boundingClientRect.left}px`,
                      width: `${res.boundingClientRect.width}px`,
                      height: `${res.boundingClientRect.height}px`,
                      borderColor: featurePrinciple.theme.accent,
                      boxShadow: `0 0 20px ${featurePrinciple.theme.accent}80`
                    }}
                  />
                )}

                {/* Callout Number Pin */}
                <button
                  onClick={() => onSelectFeature(feature.id)}
                  title={`Feature ${feature.number}: ${feature.name}`}
                  aria-label={`Select Feature ${feature.number}: ${feature.name}`}
                  className={`absolute z-30 transform -translate-x-1/2 -translate-y-1/2 font-bold font-mono text-xs rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'w-9 h-9 text-black shadow-lg ring-4 ring-black/40 scale-110'
                      : 'w-7 h-7 text-white bg-black/60 border border-white/40 hover:scale-105'
                  }`}
                  style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    backgroundColor: isSelected
                      ? featurePrinciple.theme.accent
                      : !isResolved
                      ? '#f97316'
                      : undefined
                  }}
                >
                  {String(feature.number).padStart(2, '0')}
                </button>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};
