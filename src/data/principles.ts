import { PrincipleDefinition } from '../types';

export const PRINCIPLES_DATA: Record<string, PrincipleDefinition> = {
  convenience: {
    id: 'convenience',
    label: 'Convenience',
    shortLabel: 'C',
    definition: 'Design the desired action as the easiest and shortest path for the user.',
    lectureSummary: 'Reduce effort, uncertainty and unnecessary choice so users can act with minimal friction.',
    theme: {
      accent: '#E85D5D',
      accentSoft: '#FCE8E8',
      textOnAccent: '#FFFFFF',
      icon: 'route'
    },
    subPrinciples: [
      {
        id: 'shortest-path',
        label: 'Shortest Path',
        definition: "Place the user's primary goal on the most direct route.",
        featureExamples: ['1-Click Buy', '1-Click Checkout', 'Direct Buy Now', 'Task shortcuts']
      },
      {
        id: 'smart-defaults',
        label: 'Smart Defaults',
        definition: 'Preselect likely choices while keeping them visible and editable.',
        featureExamples: ['Saved payment', 'Saved address', 'Preferred delivery option']
      },
      {
        id: 'progressive-disclosure',
        label: 'Progressive Disclosure',
        definition: 'Reveal optional complexity only when it becomes relevant.',
        featureExamples: ['Collapsed specifications', 'Expandable descriptions', 'Advanced filters']
      },
      {
        id: 'choice-reduction',
        label: 'Choice Reduction',
        definition: 'Limit or narrow the visible choice set to reduce cognitive load.',
        featureExamples: ['Personalised recommendations', 'Category filters', 'Curated products']
      },
      {
        id: 'clear-action-hierarchy',
        label: 'Clear Action Hierarchy',
        definition: 'Make the primary action visually dominant over secondary actions.',
        featureExamples: ['High-contrast CTA', 'Verb-led labels', 'Secondary wishlist action']
      },
      {
        id: 'resume-not-restart',
        label: 'Resume, Don\'t Restart',
        definition: 'Preserve user progress and prior context across sessions.',
        featureExamples: ['Continue Shopping', 'Recently Viewed', 'Saved Cart']
      }
    ],
    ethicalGuardrails: [
      'Keep important prices, fees, terms and consequences visible.',
      'Do not use defaults that conceal material choices.',
      'Provide an obvious way to review or change preselected values.'
    ]
  },
  'loss-avoidance': {
    id: 'loss-avoidance',
    label: 'Loss Avoidance',
    shortLabel: 'L',
    definition: 'Frame inaction as the risk of losing value, progress, access or an existing benefit.',
    lectureSummary: 'Users often react more strongly to potential loss than to an equivalent gain.',
    theme: {
      accent: '#E7A726',
      accentSoft: '#FFF2D2',
      textOnAccent: '#201600',
      icon: 'timer'
    },
    subPrinciples: [
      {
        id: 'time-scarcity',
        label: 'Time Scarcity',
        definition: 'Make a genuine opportunity visibly temporary.',
        featureExamples: ['Flash deal timer', 'Offer expiry', 'Double Progress Hour']
      },
      {
        id: 'quantity-scarcity',
        label: 'Quantity Scarcity',
        definition: 'Show when limited inventory creates a real risk of unavailability.',
        featureExamples: ['Only 3 left', 'Low-stock alert', 'Reserved cart']
      },
      {
        id: 'reference-dependence',
        label: 'Reference Dependence',
        definition: 'Help users evaluate the current outcome relative to a meaningful reference point.',
        featureExamples: ['Original price', 'Amount saved', 'Member price']
      },
      {
        id: 'progress-preservation',
        label: 'Progress Preservation',
        definition: 'Make accumulated progress and the remaining gap visible.',
        featureExamples: ['Tier progress bar', 'Distance to Gold', 'Free-shipping threshold']
      },
      {
        id: 'privilege-preservation',
        label: 'Privilege Preservation',
        definition: 'Remind users of benefits or access they currently possess.',
        featureExamples: ['Free priority shipping', 'Early access', 'Expiring rewards']
      },
      {
        id: 'temporary-acceleration',
        label: 'Temporary Acceleration',
        definition: 'Offer a genuine limited window to advance faster.',
        featureExamples: ['Double tier credits', 'Bonus points hour', 'Limited multiplier']
      }
    ],
    ethicalGuardrails: [
      'Use genuine deadlines, inventory and eligibility conditions.',
      'Never reset countdown timers deceptively.',
      'Avoid encouraging harmful or unaffordable spending.',
      'State clearly what will be lost or changed when the offer expires.'
    ]
  },
  status: {
    id: 'status',
    label: 'Status',
    shortLabel: 'S',
    definition: 'Make rank, progression, exclusivity and earned privileges visible and meaningful.',
    lectureSummary: 'Users are motivated by recognised standing, advancement and access to differentiated benefits.',
    theme: {
      accent: '#2F9B68',
      accentSoft: '#E3F4EB',
      textOnAccent: '#FFFFFF',
      icon: 'crown'
    },
    subPrinciples: [
      {
        id: 'visible-rank',
        label: 'Visible Rank',
        definition: 'Show the user\'s current tier or level clearly.',
        featureExamples: ['Elite Silver badge', 'Member identity card']
      },
      {
        id: 'climbing-the-ladder',
        label: 'Climbing the Ladder',
        definition: 'Show the current position, next tier and remaining distance.',
        featureExamples: ['Progress to Elite Gold', 'Tier progress bar']
      },
      {
        id: 'exclusive-access',
        label: 'Exclusive Access',
        definition: 'Translate status into differentiated access or privileges.',
        featureExamples: ['Elite-only deals', 'Early access', 'VIP support']
      },
      {
        id: 'aspirational-identity',
        label: 'Aspirational Identity',
        definition: 'Preview an attractive higher-tier identity and its benefits.',
        featureExamples: ['Elite Platinum preview', 'Premium tier card']
      },
      {
        id: 'benefit-validation',
        label: 'Benefit Validation',
        definition: 'Demonstrate that the current rank already delivers real value.',
        featureExamples: ['Unlocked benefit checklist', 'Free express shipping']
      }
    ],
    ethicalGuardrails: [
      'Make tier requirements and benefit differences transparent.',
      'Do not make lower tiers feel intentionally devalued.',
      'Ensure status benefits are real and consistently delivered.'
    ]
  }
};
