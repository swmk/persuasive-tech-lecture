import { DeckConfig } from '../types';

export const DECK_CONFIG: DeckConfig = {
  version: '1.0',
  deck: {
    id: 'luxe-platform-persuasive-technology',
    title: 'Persuasive Technology in E-Commerce',
    subtitle: 'An Interactive UX Lecture',
    author: 'UX Masterclass',
    aspectRatio: '16:9',
    defaultTheme: 'light',
    openingSlide: {
      title: 'Persuasive Technology in E-Commerce',
      subtitle: 'How Convenience, Loss Avoidance and Status shape user behaviour',
      showPrinciples: ['convenience', 'loss-avoidance', 'status']
    },
    closingSlide: {
      title: 'Design for Influence, Not Manipulation',
      summary: 'Persuasive design should reduce effort, clarify value and support informed choice without using deceptive pressure.'
    }
  },
  navigation: {
    keyboard: {
      next: ['ArrowRight', 'PageDown', 'Space'],
      previous: ['ArrowLeft', 'PageUp', 'Shift+Space'],
      first: ['Home'],
      last: ['End'],
      overview: ['O', 'o'],
      speakerMode: ['S', 's'],
      fullscreen: ['F', 'f'],
      toggleCallouts: ['C', 'c'],
      toggleNotes: ['N', 'n'],
      darkMode: ['D', 'd'],
      diagnostics: ['Ctrl+Shift+D']
    },
    showButtons: true,
    showProgressBar: true,
    showSlideNumber: true,
    enableTouchSwipe: true,
    enableThumbnailOverview: true
  },
  presentation: {
    calloutRevealMode: 'click',
    initialCallout: 1,
    dimUnselectedTargets: true,
    autoScrollExplanationPanel: true,
    respectReducedMotion: true,
    transition: 'fade-slide',
    transitionDurationMs: 320,
    highlightAnimation: 'pulse-outline',
    calloutPlacement: {
      strategy: 'anchor-to-target',
      preferredSides: ['right', 'left', 'top', 'bottom'],
      avoidOverlap: true,
      clampToViewport: true
    }
  },
  speakerMode: {
    enabled: true,
    showCurrentSlide: true,
    showNextSlide: true,
    showSpeakerNotes: true,
    showTimer: true,
    timerStartsOnOpen: false
  },
  accessibility: {
    minimumContrast: 'WCAG AA',
    visibleFocus: true,
    ariaLiveForFeaturePanel: 'polite',
    allInteractiveElementsKeyboardAccessible: true,
    calloutAriaTemplate: 'Show feature {number}: {feature}',
    avoidColorOnlyMeaning: true
  },
  slides: [
    {
      id: 'intro',
      type: 'title',
      title: 'Persuasive Technology in E-Commerce',
      principle: null
    },
    {
      id: 'home',
      type: 'screen',
      title: 'Luxe Store Homepage',
      annotationFile: 'screens/home.json',
      sectionTitle: 'Convenience',
      principle: 'convenience'
    },
    {
      id: 'product-listing',
      type: 'screen',
      title: 'Curated Product Catalog',
      annotationFile: 'screens/product-listing.json',
      sectionTitle: 'Loss Avoidance',
      principle: 'loss-avoidance'
    },
    {
      id: 'product-details',
      type: 'screen',
      title: 'Product Detail Page',
      annotationFile: 'screens/product-details.json',
      sectionTitle: 'Convenience',
      principle: 'convenience'
    },
    {
      id: 'shopping-cart',
      type: 'screen',
      title: 'Shopping Cart & Bag',
      annotationFile: 'screens/shopping-cart.json',
      sectionTitle: 'Loss Avoidance',
      principle: 'loss-avoidance'
    },
    {
      id: 'checkout',
      type: 'screen',
      title: 'Express Checkout Page',
      annotationFile: 'screens/checkout.json',
      sectionTitle: 'Convenience',
      principle: 'convenience'
    },
    {
      id: 'membership',
      type: 'screen',
      title: 'VIP Membership Lounge',
      annotationFile: 'screens/membership.json',
      sectionTitle: 'Status',
      principle: 'status'
    },
    {
      id: 'account',
      type: 'screen',
      title: 'Member Profile & Pass',
      annotationFile: 'screens/account.json',
      sectionTitle: 'Status',
      principle: 'status'
    }
  ]
};
