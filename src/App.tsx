import { useCallback, useEffect, useState } from 'react';
import { DECK_CONFIG } from './data/deck';
import { SCREENS_DATA } from './data/screens';
import { ResolutionResult } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TitleSlide } from './components/TitleSlide';
import { ClosingSlide } from './components/ClosingSlide';
import { ScreenSlide } from './components/ScreenSlide';
import { SpeakerModeModal } from './components/SpeakerModeModal';
import { DiagnosticsModal } from './components/DiagnosticsModal';
import { ThumbnailOverviewModal } from './components/ThumbnailOverviewModal';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeFeatureMap, setActiveFeatureMap] = useState<Record<string, string>>({});
  const [slideResolutionMap, setSlideResolutionMap] = useState<Record<string, ResolutionResult[]>>({});

  const [showCallouts, setShowCallouts] = useState(true);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState(false);
  const [isSpeakerModeOpen, setIsSpeakerModeOpen] = useState(false);
  const [isDiagnosticsOpen, setIsDiagnosticsOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const slides = DECK_CONFIG.slides;
  const currentSlide = slides[currentSlideIndex];
  const totalSlides = slides.length;

  const currentScreenData = currentSlide.annotationFile
    ? SCREENS_DATA[currentSlide.id]
    : null;

  // Active feature on current screen slide
  const currentSelectedFeatureId = currentScreenData
    ? activeFeatureMap[currentSlide.id] || currentScreenData.features[0]?.id
    : undefined;

  const currentFeatureObj = currentScreenData?.features.find(f => f.id === currentSelectedFeatureId);

  // Navigation callbacks
  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex(i => Math.min(i + 1, totalSlides - 1));
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex(i => Math.max(i - 1, 0));
  }, []);

  const goToNextFeature = useCallback(() => {
    if (!currentScreenData) {
      goToNextSlide();
      return;
    }
    const features = currentScreenData.features;
    const currIdx = features.findIndex(f => f.id === currentSelectedFeatureId);
    if (currIdx < features.length - 1) {
      const nextFeatId = features[currIdx + 1].id;
      setActiveFeatureMap(prev => ({ ...prev, [currentSlide.id]: nextFeatId }));
    } else {
      goToNextSlide();
    }
  }, [currentScreenData, currentSelectedFeatureId, currentSlide.id, goToNextSlide]);

  const goToPrevFeature = useCallback(() => {
    if (!currentScreenData) {
      goToPrevSlide();
      return;
    }
    const features = currentScreenData.features;
    const currIdx = features.findIndex(f => f.id === currentSelectedFeatureId);
    if (currIdx > 0) {
      const prevFeatId = features[currIdx - 1].id;
      setActiveFeatureMap(prev => ({ ...prev, [currentSlide.id]: prevFeatId }));
    } else {
      goToPrevSlide();
    }
  }, [currentScreenData, currentSelectedFeatureId, currentSlide.id, goToPrevSlide]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events when typing inside inputs or textareas
      const targetTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (targetTag === 'input' || targetTag === 'textarea') return;

      if (e.key === 'Escape') {
        setIsSpeakerModeOpen(false);
        setIsDiagnosticsOpen(false);
        setIsOverviewOpen(false);
        return;
      }

      // Check Diagnostics shortcut Ctrl+Shift+D
      if (e.ctrlKey && e.shiftKey && (e.key === 'D' || e.key === 'd')) {
        e.preventDefault();
        setIsDiagnosticsOpen(prev => !prev);
        return;
      }

      // If a modal is open, don't trigger background slide navigation on arrow keys
      if (isSpeakerModeOpen || isDiagnosticsOpen || isOverviewOpen) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          goToNextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          goToPrevSlide();
          break;
        case ' ': // Space key
          e.preventDefault();
          if (e.shiftKey) {
            goToPrevFeature();
          } else {
            goToNextFeature();
          }
          break;
        case 'Home':
          e.preventDefault();
          setCurrentSlideIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentSlideIndex(totalSlides - 1);
          break;
        case 'c':
        case 'C':
          setShowCallouts(prev => !prev);
          break;
        case 'n':
        case 'N':
          setShowSpeakerNotes(prev => !prev);
          break;
        case 's':
        case 'S':
          setIsSpeakerModeOpen(prev => !prev);
          break;
        case 'o':
        case 'O':
          setIsOverviewOpen(prev => !prev);
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        case 'd':
        case 'D':
          if (!e.ctrlKey) {
            setIsDiagnosticsOpen(prev => !prev);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    goToNextSlide,
    goToPrevSlide,
    goToNextFeature,
    goToPrevFeature,
    totalSlides,
    isSpeakerModeOpen,
    isDiagnosticsOpen,
    isOverviewOpen,
    toggleFullscreen
  ]);

  const handleResolutionResults = useCallback((results: ResolutionResult[]) => {
    setSlideResolutionMap(prev => ({
      ...prev,
      [currentSlide.id]: results
    }));
  }, [currentSlide.id]);

  return (
    <div className="flex flex-col h-screen w-screen bg-[#0F0F0F] text-[#E0E0E0] font-sans overflow-hidden select-none">
      {/* Top Navigation Bar */}
      <Header
        currentSlide={currentSlide}
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        onOpenSpeakerMode={() => setIsSpeakerModeOpen(true)}
        onOpenDiagnostics={() => setIsDiagnosticsOpen(true)}
        onOpenOverview={() => setIsOverviewOpen(true)}
        onToggleFullscreen={toggleFullscreen}
        showCallouts={showCallouts}
        onToggleCallouts={() => setShowCallouts(prev => !prev)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(prev => !prev)}
      />

      {/* Main Slide Presentation Stage */}
      <main className="flex-1 flex overflow-hidden relative">
        {currentSlide.type === 'title' && (
          <TitleSlide onStart={() => setCurrentSlideIndex(1)} />
        )}

        {currentSlide.type === 'closing' && (
          <ClosingSlide
            onRestart={() => setCurrentSlideIndex(0)}
            onOpenOverview={() => setIsOverviewOpen(true)}
          />
        )}

        {currentSlide.type === 'screen' && currentScreenData && (
          <ScreenSlide
            screenData={currentScreenData}
            selectedFeatureId={currentSelectedFeatureId || ''}
            onSelectFeature={featId =>
              setActiveFeatureMap(prev => ({ ...prev, [currentSlide.id]: featId }))
            }
            onResolutionResults={handleResolutionResults}
            showCallouts={showCallouts}
            showSpeakerNotes={showSpeakerNotes}
          />
        )}
      </main>

      {/* Bottom Navigation Rail & Shortcut Bar */}
      <Footer
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        onPrevSlide={goToPrevSlide}
        onNextSlide={goToNextSlide}
        onPrevFeature={currentScreenData ? goToPrevFeature : undefined}
        onNextFeature={currentScreenData ? goToNextFeature : undefined}
        currentFeatureNumber={currentFeatureObj?.number}
        totalFeaturesNumber={currentScreenData?.features.length}
      />

      {/* Modal Overlays */}
      <SpeakerModeModal
        isOpen={isSpeakerModeOpen}
        onClose={() => setIsSpeakerModeOpen(false)}
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        slides={slides}
        activeFeatureId={currentSelectedFeatureId}
      />

      <DiagnosticsModal
        isOpen={isDiagnosticsOpen}
        onClose={() => setIsDiagnosticsOpen(false)}
        slideResolutionMap={slideResolutionMap}
        slides={slides}
      />

      <ThumbnailOverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        slides={slides}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={idx => setCurrentSlideIndex(idx)}
      />
    </div>
  );
}
