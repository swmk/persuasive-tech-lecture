import React from 'react';
import { FeatureAnnotation, PrincipleId } from '../types';
import { PRINCIPLES_DATA } from '../data/principles';

interface LecturePanelProps {
  feature?: FeatureAnnotation;
  screenTitle: string;
  principleId: PrincipleId;
  totalFeatures: number;
}

export const LecturePanel: React.FC<LecturePanelProps> = ({
  feature,
  screenTitle,
  principleId,
  totalFeatures
}) => {
  const mainPrinciple = PRINCIPLES_DATA[principleId] || PRINCIPLES_DATA['convenience'];
  const featurePrinciple = feature ? PRINCIPLES_DATA[feature.principle] || mainPrinciple : mainPrinciple;

  // Find sub-principle details
  const subPrincipleObj = feature
    ? featurePrinciple.subPrinciples.find(s => s.id === feature.subPrinciple)
    : null;

  const supportingSubPrincipleObj = (feature?.supportingSubPrinciple && featurePrinciple)
    ? featurePrinciple.subPrinciples.find(s => s.id === feature.supportingSubPrinciple)
    : null;

  return (
    <aside className="w-full h-full bg-white text-slate-900 p-8 lg:p-10 flex flex-col overflow-y-auto border-l border-slate-200 select-text">
      {/* Principle Banner */}
      <div className="mb-6 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span
            className="px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-black rounded-sm"
            style={{ backgroundColor: mainPrinciple.theme.accent }}
          >
            Main Principle
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {screenTitle}
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-serif italic mt-3 text-slate-900 font-bold">
          {mainPrinciple.label}
        </h2>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
          {mainPrinciple.lectureSummary}
        </p>
      </div>

      {feature ? (
        <div aria-live="polite" className="flex-1 flex flex-col gap-6">
          {/* Feature Heading */}
          <div
            className="pl-4 border-l-4 transition-colors"
            style={{ borderColor: featurePrinciple.theme.accent }}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-mono tracking-widest uppercase text-slate-400">
                Feature {String(feature.number).padStart(2, '0')} of {String(totalFeatures).padStart(2, '0')}
              </span>
            </div>
            <h3 className="text-2xl font-bold mt-1 text-slate-900">
              {feature.name}
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <div
                className="inline-block text-xs font-bold font-mono uppercase tracking-wider px-2 py-0.5 rounded"
                style={{
                  backgroundColor: featurePrinciple.theme.accentSoft,
                  color: featurePrinciple.theme.accent
                }}
              >
                Sub-Principle: {subPrincipleObj?.label || feature.subPrinciple}
              </div>
              {supportingSubPrincipleObj && (
                <div className="inline-block text-xs font-medium font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  Supporting: {supportingSubPrincipleObj.label}
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-[10px] uppercase font-mono tracking-widest font-black text-slate-400 mb-1.5">
              Overview
            </h4>
            <p className="text-sm leading-relaxed text-slate-700">
              {feature.description}
            </p>
          </div>

          {/* Rationale */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h4 className="text-[10px] uppercase font-mono tracking-widest font-black text-slate-500 mb-1.5">
              Psychological Rationale ("Why It Works")
            </h4>
            <p className="text-xs leading-relaxed text-slate-800">
              {feature.rationale}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-slate-400">
          <span className="text-3xl mb-2">👆</span>
          <p className="text-xs">Click any numbered callout pin on the screen to view its feature breakdown.</p>
        </div>
      )}
    </aside>
  );
};
