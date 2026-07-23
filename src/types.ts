export type PrincipleId = 'convenience' | 'loss-avoidance' | 'status';

export interface ThemeConfig {
  accent: string;
  accentSoft: string;
  textOnAccent: string;
  icon: string;
}

export interface SubPrinciple {
  id: string;
  label: string;
  definition: string;
  featureExamples: string[];
  patterns?: string[];
  ethicalConsiderations?: string[];
}

export interface PrincipleDefinition {
  id: PrincipleId;
  label: string;
  shortLabel: string;
  definition: string;
  lectureSummary: string;
  theme: ThemeConfig;
  subPrinciples: SubPrinciple[];
  ethicalGuardrails: string[];
}

export interface TargetConfig {
  dataAttribute?: string;
  css?: string;
  text?: {
    value: string;
    tag?: string;
    occurrence?: number;
  };
  preferredSide?: 'top' | 'right' | 'bottom' | 'left';
}

export interface FeatureAnnotation {
  id: string;
  number: number;
  name: string;
  principle: PrincipleId;
  subPrinciple: string;
  supportingSubPrinciple?: string;
  supportingPrinciple?: PrincipleId;
  description: string;
  rationale: string;
  businessValue: string;
  implementationNotes: string;
  ethicalGuardrail?: string;
  target: TargetConfig;
}

export interface ScreenData {
  id: string;
  title: string;
  subtitle: string;
  principle: PrincipleId;
  speakerNotes: string;
  features: FeatureAnnotation[];
  htmlCode: string; // Embedded Stitch HTML content
}

export type SlideType = 'title' | 'screen' | 'closing';

export interface SlideConfig {
  id: string;
  type: SlideType;
  title: string;
  sectionTitle?: string;
  principle?: PrincipleId | null;
  annotationFile?: string;
}

export interface DeckConfig {
  version: string;
  deck: {
    id: string;
    title: string;
    subtitle: string;
    author: string;
    aspectRatio: string;
    defaultTheme: string;
    openingSlide: {
      title: string;
      subtitle: string;
      showPrinciples: PrincipleId[];
    };
    closingSlide: {
      title: string;
      summary: string;
    };
  };
  navigation: {
    keyboard: Record<string, string[]>;
    showButtons: boolean;
    showProgressBar: boolean;
    showSlideNumber: boolean;
    enableTouchSwipe: boolean;
    enableThumbnailOverview: boolean;
  };
  presentation: {
    calloutRevealMode: string;
    initialCallout: number;
    dimUnselectedTargets: boolean;
    autoScrollExplanationPanel: boolean;
    respectReducedMotion: boolean;
    transition: string;
    transitionDurationMs: number;
    highlightAnimation: string;
    calloutPlacement: {
      strategy: string;
      preferredSides: ('right' | 'left' | 'top' | 'bottom')[];
      avoidOverlap: boolean;
      clampToViewport: boolean;
    };
  };
  speakerMode: {
    enabled: boolean;
    showCurrentSlide: boolean;
    showNextSlide: boolean;
    showSpeakerNotes: boolean;
    showTimer: boolean;
    timerStartsOnOpen: boolean;
  };
  accessibility: {
    minimumContrast: string;
    visibleFocus: boolean;
    ariaLiveForFeaturePanel: string;
    allInteractiveElementsKeyboardAccessible: boolean;
    calloutAriaTemplate: string;
    avoidColorOnlyMeaning: boolean;
  };
  slides: SlideConfig[];
}

export interface ResolutionResult {
  featureId: string;
  featureNumber: number;
  featureName: string;
  status: 'resolved' | 'unresolved';
  resolvedBy?: 'dataAttribute' | 'css' | 'text';
  attemptedDataAttr?: string;
  attemptedCss?: string;
  attemptedText?: string;
  errorDetails?: string;
  boundingClientRect?: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  computedPosition?: {
    x: number;
    y: number;
    side: 'top' | 'right' | 'bottom' | 'left';
  };
}
