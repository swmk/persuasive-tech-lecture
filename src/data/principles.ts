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
        id: 'aspirational-marketing',
        label: 'Creating Desire Through Aspirational Marketing',
        definition: 'Make the product, membership or higher tier feel desirable before asking the user to pursue it.',
        patterns: [
          'Secrecy and hype',
          'Scarcity and exclusivity',
          'Identity and association',
          'Premium aesthetics and design',
          'Functionality and uniqueness'
        ],
        featureExamples: [
          'Elite-only products',
          'Premium visual design',
          'Platinum lifestyle imagery',
          'Exclusive member collections',
          'Limited-edition products',
          'Member-only launches'
        ]
      },
      {
        id: 'inspiring-aspiration',
        label: 'Inspiring Aspiration Through Status',
        definition: 'Show users what higher status looks like and how their future experience could improve.',
        patterns: [
          'Aspirational imagery',
          'Lifestyle branding',
          'Realistic and attainable goals'
        ],
        featureExamples: [
          'Previewing Elite Platinum benefits',
          'Showing the lifestyle or privileges associated with higher tiers',
          'Presenting the next tier as achievable',
          'Comparing current and future benefits positively'
        ]
      },
      {
        id: 'pre-ownership',
        label: 'Pre-Ownership',
        definition: 'Create emotional investment and insider identity before the user fully owns the product, service or status.',
        patterns: [
          'Early access and betas',
          'Pre-orders',
          'Wishlists',
          'Insider communication',
          'Membership previews',
          'Sneak peeks'
        ],
        featureExamples: [
          'Elite members receiving early access',
          'Adding premium items to a wishlist',
          'Joining a waitlist',
          'Previewing upcoming Elite benefits',
          'Member-exclusive product previews'
        ]
      },
      {
        id: 'status-differences',
        label: 'Establishing Status Differences',
        definition: 'Make the difference between membership levels, achievements or access rights visible and understandable.',
        patterns: [
          'Tiered rewards and badges',
          'Visible ranks',
          'Member-only privileges',
          'Social proof',
          'Community recognition',
          'Public celebrations'
        ],
        featureExamples: [
          'Elite Silver, Elite Gold and Elite Platinum badges',
          'Tier badges',
          'Exclusive deals',
          'Different benefits by tier',
          'Priority service',
          'Premium shipping',
          'VIP access'
        ]
      },
      {
        id: 'reward-achievement',
        label: 'Reward and Achievement Structures',
        definition: 'Connect continued behaviour to incremental progress, milestones and rewards.',
        patterns: [
          'Points',
          'Badges',
          'Progress bars',
          'Regular rewards',
          'Initial head starts',
          'Shared goals'
        ],
        featureExamples: [
          'Progress to Elite Gold',
          'Membership points',
          'Percentage completed',
          'Remaining spend to the next tier',
          'Unlocked benefits',
          'Tier milestones',
          'Bonus progress'
        ]
      },
      {
        id: 'payment-vs-achievement',
        label: 'Payment Versus Achievement',
        definition: 'Allow users to attain or accelerate status through spending, payment or achievement, while keeping the distinction transparent and fair.',
        patterns: [
          'Paid upgrades',
          'Buying points',
          'Spending-based tier progress',
          'Accelerated status',
          'Membership fees',
          'Bonus tier credits'
        ],
        featureExamples: [
          'Spend $200 to receive double Elite credits',
          'Paid premium membership',
          'Spending thresholds that contribute to tier status',
          'Purchasing additional points',
          'Tier accelerators'
        ],
        ethicalConsiderations: [
          'Explanations must acknowledge fairness.',
          'Clearly explain what can be earned, what can be purchased, and what can be accelerated.'
        ]
      },
      {
        id: 'public-status-display',
        label: 'Encouraging Public Status Displays',
        definition: 'Allow users to visibly display their rank, achievements or exclusive access.',
        patterns: [
          'Profile badges',
          'Member titles',
          'Shareable achievements',
          'Public recognition',
          'Exclusive physical or digital symbols',
          'User-generated content'
        ],
        featureExamples: [
          'Elite badge beside the user\'s name',
          'Shareable Gold or Platinum achievement',
          'Member profile insignia',
          'Exclusive member card',
          'VIP luggage tag or digital emblem'
        ]
      },
      {
        id: 'customer-importance',
        label: 'Making Customers Feel Important',
        definition: 'Recognise and elevate customers so they feel valued by the platform.',
        patterns: [
          'Personalised recognition',
          'Milestone celebrations',
          'Featured contributions',
          'Surprise rewards',
          'Advisory or insider roles',
          'Platform influence'
        ],
        featureExamples: [
          'Congratulations on reaching Elite Gold',
          'Thank-you for the tenth purchase',
          'Surprise shipping upgrade',
          'Personalised member recognition',
          'Invitation to preview new products',
          'VIP customer feedback group'
        ]
      },
      {
        id: 'ethical-status-design',
        label: 'Ethical Status Design',
        definition: 'Keep status aspirational, attainable and constructive.',
        patterns: [
          'Emphasise positive aspiration rather than humiliation',
          'Provide realistic incremental goals',
          'Give newcomers a visible path forward',
          'Use exclusivity carefully',
          'Avoid portraying non-members or lower tiers as inferior',
          'Preserve fairness between users who earn status and users who pay for it',
          'Explain tier requirements and benefits clearly',
          'Avoid encouraging unaffordable or harmful spending',
          'Encourage cooperation where appropriate'
        ],
        featureExamples: [
          'Transparent tier requirements',
          'Realistic incremental goals',
          'Clear spend multipliers',
          'Fairness between earned and paid status'
        ]
      }
    ],
    ethicalGuardrails: [
      'Emphasise positive aspiration rather than humiliation or devaluation.',
      'Provide realistic incremental goals and give newcomers a visible path forward.',
      'Avoid portraying non-members or lower tiers as inferior.',
      'Preserve fairness between users who earn status and users who pay for or accelerate it.',
      'Explain tier requirements, multipliers and benefits clearly, avoiding encouraging unaffordable or harmful spending.'
    ]
  }
};
