import React from 'react';
import { FeatureAnnotation, ResolutionResult, ScreenData } from '../types';
import { StitchScreenViewer } from './StitchScreenViewer';
import { LecturePanel } from './LecturePanel';

interface ScreenSlideProps {
  screenData: ScreenData;
  selectedFeatureId: string;
  onSelectFeature: (featureId: string) => void;
  onResolutionResults: (results: ResolutionResult[]) => void;
  showCallouts: boolean;
  showSpeakerNotes: boolean;
}

export const ScreenSlide: React.FC<ScreenSlideProps> = ({
  screenData,
  selectedFeatureId,
  onSelectFeature,
  onResolutionResults,
  showCallouts,
  showSpeakerNotes
}) => {
  const currentFeature = screenData.features.find(f => f.id === selectedFeatureId) || screenData.features[0];

  return (
    <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
      {/* Left Pane: Stitch Interactive Screen UI (65% width) */}
      <div className="w-full lg:w-[65%] h-1/2 lg:h-full relative flex flex-col bg-[#1A1A1A]">
        <StitchScreenViewer
          screenData={screenData}
          activeFeatureId={currentFeature?.id || ''}
          onSelectFeature={onSelectFeature}
          onResolutionResults={onResolutionResults}
          showCallouts={showCallouts}
          principleId={screenData.principle}
        />

        {/* Inline Speaker Notes Drawer if toggled */}
        {showSpeakerNotes && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/90 text-amber-200 p-4 border-t border-amber-500/30 text-xs font-mono backdrop-blur-md z-40 max-h-40 overflow-y-auto">
            <div className="text-[10px] uppercase font-bold text-amber-500 mb-1">
              🎙️ Lecturer Speaker Notes [N]
            </div>
            <p className="leading-relaxed opacity-90">{screenData.speakerNotes}</p>
          </div>
        )}
      </div>

      {/* Right Pane: Lecture Explanation Panel (35% width) */}
      <div className="w-full lg:w-[35%] h-1/2 lg:h-full relative overflow-hidden bg-white">
        <LecturePanel
          feature={currentFeature}
          screenTitle={screenData.title}
          principleId={screenData.principle}
          totalFeatures={screenData.features.length}
        />
      </div>
    </div>
  );
};
