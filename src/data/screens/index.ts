import { ScreenData } from '../../types';

export const SCREENS_DATA: Record<string, ScreenData> = {
  home: {
    id: 'home',
    title: 'Luxe Store Homepage',
    subtitle: 'Convenience Patterns & Direct Purchase Pathways',
    principle: 'convenience',
    speakerNotes: `Welcome to Slide 2. Here we examine how the Convenience principle removes cognitive and physical friction on the main store landing page. Notice how 1-Click Buy eliminates standard cart steps for repeat users, reducing drop-off by up to 22%. Preselected defaults for delivery addresses save valuable time while respecting user autonomy through clear edit links.`,
    features: [
      {
        id: 'home-c1',
        number: 1,
        name: 'Smart Preselected Shipping Address',
        principle: 'convenience',
        subPrinciple: 'smart-defaults',
        description: 'Automatically preselects the user\'s primary delivery destination while offering an accessible inline edit option.',
        rationale: 'Leverages smart defaults to eliminate repetitive form entry for returning shoppers.',
        businessValue: 'Reduces address selection drop-off by 35%.',
        implementationNotes: 'Store default shipping profile in secure user preferences cache with prominent "Change" link.',
        ethicalGuardrail: 'Never default to paid expedited delivery add-ons without explicit user opting.',
        target: {
          dataAttribute: 'home-smart-default-address',
          css: '.default-address-chip',
          text: { value: 'Deliver to: 742 Evergreen Terr (Primary)', tag: 'div' },
          preferredSide: 'right'
        }
      },
      {
        id: 'home-c2',
        number: 2,
        name: 'Resume Previous Shopping Session',
        principle: 'convenience',
        subPrinciple: 'resume-not-restart',
        description: 'Restores cart contents and recently viewed items immediately upon returning to the site.',
        rationale: 'Preserves user context across visits, preventing frustration caused by lost carts or having to re-search items.',
        businessValue: '+18% session restoration completion rate.',
        implementationNotes: 'Synchronize cart state across client storage and account profile.',
        target: {
          dataAttribute: 'home-resume-banner',
          css: '.resume-session-bar',
          text: { value: 'Welcome back, Stephen! You have 2 items in your cart', tag: 'div' },
          preferredSide: 'right'
        }
      },
      {
        id: 'home-c3',
        number: 3,
        name: '1-Click Instant Express Buy',
        principle: 'convenience',
        subPrinciple: 'shortest-path',
        description: 'Bypasses traditional cart and checkout pages, allowing authenticated users to complete purchases in a single click.',
        rationale: 'Eliminates friction and decision fatigue by reducing a multi-step checkout funnel down to one immediate, single-action trigger.',
        businessValue: '+22% higher conversion on impulse and repeat purchases.',
        implementationNotes: 'Requires saved payment tokenization (Apple Pay / One-Touch) with an obligatory 15-second instant undo window.',
        ethicalGuardrail: 'Always display total price clearly with taxes and provide an accessible 15-second order cancellation mechanism.',
        target: {
          dataAttribute: 'home-express-buy',
          css: '.express-buy-btn',
          text: { value: '1-Click Express Buy', tag: 'button' },
          preferredSide: 'right'
        }
      }
    ],
    htmlCode: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Plus Jakarta Sans', sans-serif; background-color: #f5f5f7; color: #1d1d1f; padding: 20px; border-radius: 12px; display: flex; flex-direction: column; gap: 16px;">
        <!-- App Top Navigation Bar -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e0e0e0; padding-bottom: 12px; background: #ffffff; padding: 12px 16px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 28px; height: 28px; background: #0066cc; border-radius: 7px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 14px; color: white;">L</div>
            <div>
              <div style="font-size: 13px; font-weight: 700; letter-spacing: -0.01em; color: #1d1d1f;">LUXE STORE</div>
              <div style="font-size: 9px; color: #7a7a7a; text-transform: uppercase; letter-spacing: 0.05em;">Flagship Experience</div>
            </div>
          </div>

          <!-- Smart Default Address Chip -->
          <div data-deck-target="home-smart-default-address" class="default-address-chip" style="background: #eef6ff; border: 1px solid #b3d7ff; padding: 5px 12px; border-radius: 9999px; font-size: 11px; display: flex; align-items: center; gap: 6px; cursor: pointer; color: #1d1d1f;">
            <span style="width: 7px; height: 7px; background: #0066cc; border-radius: 50%;"></span>
            <span>Deliver to: <strong style="color: #0066cc;">742 Evergreen Terr (Primary)</strong></span>
            <span style="color: #0066cc; font-weight: 700; margin-left: 2px;">Edit</span>
          </div>

          <!-- Quick Actions -->
          <div style="display: flex; align-items: center; gap: 12px; font-size: 12px;">
            <div style="background: #f5f5f7; border: 1px solid #e0e0e0; padding: 5px 10px; border-radius: 9999px; font-size: 11px; font-weight: 600; color: #1d1d1f;">
              🛍️ Bag <span style="background: #0066cc; color: white; border-radius: 9999px; padding: 1px 6px; font-size: 9px; font-weight: 700; margin-left: 4px;">2</span>
            </div>
            <div style="width: 26px; height: 26px; border-radius: 50%; background: #0066cc; color: white; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700;">S</div>
          </div>
        </div>

        <!-- Resume Session Banner -->
        <div data-deck-target="home-resume-banner" class="resume-session-bar" style="background: #ffffff; border: 1px solid #0066cc; padding: 10px 16px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 8px rgba(0,102,204,0.06);">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 13px;">🛍️</span>
            <span style="font-size: 11px; font-weight: 600; color: #1d1d1f;">Welcome back, Stephen! You have 2 items saved in your bag</span>
          </div>
          <button style="background: #0066cc; color: white; border: none; padding: 6px 14px; border-radius: 9999px; font-size: 10px; font-weight: 600; cursor: pointer;">Resume Bag</button>
        </div>

        <!-- Hero Feature Card -->
        <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 16px; padding: 20px; display: grid; grid-template-columns: 160px 1fr; gap: 20px; align-items: center; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
          <!-- Product Visual Frame -->
          <div style="background: #f5f5f7; border: 1px solid #e0e0e0; border-radius: 12px; padding: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
            <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="46" y="2" width="28" height="24" rx="4" fill="#3a3a3c"/>
              <rect x="46" y="94" width="28" height="24" rx="4" fill="#3a3a3c"/>
              <rect x="26" y="22" width="68" height="76" rx="20" fill="#1d1d1f" stroke="#e0e0e0" stroke-width="2"/>
              <rect x="94" y="52" width="5" height="16" rx="2" fill="#0066cc"/>
              <rect x="94" y="38" width="3" height="10" rx="1.5" fill="#8e8e93"/>
              <rect x="94" y="72" width="3" height="10" rx="1.5" fill="#8e8e93"/>
              <circle cx="60" cy="60" r="32" fill="#000000" stroke="#3a3a3c" stroke-width="3"/>
              <circle cx="60" cy="60" r="28" fill="#1c1c1e"/>
              <circle cx="60" cy="36" r="1.5" fill="#0066cc"/>
              <circle cx="84" cy="60" r="1.5" fill="#ffffff"/>
              <circle cx="60" cy="84" r="1.5" fill="#ffffff"/>
              <circle cx="36" cy="60" r="1.5" fill="#ffffff"/>
              <circle cx="60" cy="70" r="6" stroke="#0066cc" stroke-width="0.8" fill="#1d1d1f"/>
              <line x1="60" y1="60" x2="60" y2="44" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="60" y1="60" x2="72" y2="60" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
              <line x1="60" y1="60" x2="48" y2="72" stroke="#0066cc" stroke-width="1.2" stroke-linecap="round"/>
              <circle cx="60" cy="60" r="2.5" fill="#0066cc"/>
            </svg>
            <div style="font-size: 10px; font-weight: 600; color: #7a7a7a; margin-top: 8px; text-align: center;">Titanium Black • 44mm</div>
          </div>

          <!-- Product Details & Primary Express CTA -->
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div>
              <span style="font-size: 9px; font-weight: 800; color: #0066cc; text-transform: uppercase; letter-spacing: 0.08em;">FLAGSHIP COLLECTION</span>
              <h2 style="font-size: 20px; font-weight: 600; color: #1d1d1f; margin: 2px 0 4px 0; letter-spacing: -0.02em;">Chronos Titan Edition</h2>
              <div style="font-size: 18px; font-weight: 700; color: #1d1d1f;">$1,299.00</div>
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; gap: 8px;">
              <button data-deck-target="home-express-buy" class="express-buy-btn" style="background: #0066cc; color: white; border: none; padding: 10px 18px; border-radius: 9999px; font-size: 11px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: 0 2px 10px rgba(0,102,204,0.25);">
                ⚡ Buy Now – Express Buy
              </button>
              <button style="background: #f5f5f7; color: #0066cc; border: 1px solid #d2d2d7; padding: 10px 14px; border-radius: 9999px; font-size: 11px; font-weight: 600; cursor: pointer;">
                + Add to Cart
              </button>
            </div>

            <!-- Technical Specs Accordion -->
            <div style="background: #fafafc; border: 1px solid #e0e0e0; border-radius: 8px; padding: 8px 12px; font-size: 10px; font-weight: 600; color: #515154; display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
              <span>Technical Specifications & Materials</span>
              <span>▼</span>
            </div>

            <!-- Complete The Set Box -->
            <div style="background: #f0f7ff; border: 1px dashed #0066cc; border-radius: 8px; padding: 10px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 9px; font-weight: 800; color: #0066cc; text-transform: uppercase;">COMPLETE THE SET (SAVE 15%)</div>
                <div style="font-size: 10px; color: #1d1d1f; margin-top: 2px;">+ Leather Strap + Charger Stand</div>
              </div>
              <button style="background: #0066cc; color: white; border: none; padding: 5px 10px; border-radius: 9999px; font-size: 9px; font-weight: 600; cursor: pointer;">Add Set (+$120)</button>
            </div>
          </div>
        </div>

        <!-- Featured Categories Grid -->
        <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 4px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="font-size: 13px; font-weight: 700; color: #1d1d1f; letter-spacing: -0.01em;">Explore Featured Categories</div>
            <span style="font-size: 11px; font-weight: 600; color: #0066cc; cursor: pointer;">View All Categories →</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
            <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; p: 10px; text-align: center; padding: 12px 8px; cursor: pointer;">
              <div style="font-size: 18px; margin-bottom: 4px;">🎧</div>
              <div style="font-size: 11px; font-weight: 600; color: #1d1d1f;">Audio</div>
              <div style="font-size: 9px; color: #7a7a7a;">Lossless Tech</div>
            </div>
            <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; p: 10px; text-align: center; padding: 12px 8px; cursor: pointer;">
              <div style="font-size: 18px; margin-bottom: 4px;">⌚</div>
              <div style="font-size: 11px; font-weight: 600; color: #1d1d1f;">Timepieces</div>
              <div style="font-size: 9px; color: #7a7a7a;">Titanium Craft</div>
            </div>
            <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; p: 10px; text-align: center; padding: 12px 8px; cursor: pointer;">
              <div style="font-size: 18px; margin-bottom: 4px;">📷</div>
              <div style="font-size: 11px; font-weight: 600; color: #1d1d1f;">Optics</div>
              <div style="font-size: 9px; color: #7a7a7a;">8K Cinema</div>
            </div>
            <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; p: 10px; text-align: center; padding: 12px 8px; cursor: pointer;">
              <div style="font-size: 18px; margin-bottom: 4px;">💼</div>
              <div style="font-size: 11px; font-weight: 600; color: #1d1d1f;">Leatherware</div>
              <div style="font-size: 9px; color: #7a7a7a;">Hand-crafted</div>
            </div>
          </div>
        </div>

        <!-- Curated Express Picks Carousel -->
        <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 4px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="font-size: 13px; font-weight: 700; color: #1d1d1f; letter-spacing: -0.01em;">Curated Express Picks for You</div>
            <span style="font-size: 11px; font-weight: 600; color: #0066cc; cursor: pointer;">See Full Catalog →</span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
            <!-- Pick 1 -->
            <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; padding: 12px; display: flex; flex-direction: column; gap: 8px;">
              <div style="background: #f5f5f7; border-radius: 8px; height: 80px; display: flex; align-items: center; justify-content: center; font-size: 28px;">🎧</div>
              <div>
                <div style="font-size: 11px; font-weight: 600; color: #1d1d1f;">AeroNoise Pro</div>
                <div style="font-size: 10px; color: #7a7a7a;">Studio ANC</div>
                <div style="font-size: 12px; font-weight: 700; color: #1d1d1f; margin-top: 2px;">$349.00</div>
              </div>
              <button style="background: #0066cc; color: white; border: none; padding: 6px; border-radius: 9999px; font-size: 10px; font-weight: 600; cursor: pointer; margin-top: auto;">+ Quick Add</button>
            </div>

            <!-- Pick 2 -->
            <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; padding: 12px; display: flex; flex-direction: column; gap: 8px;">
              <div style="background: #f5f5f7; border-radius: 8px; height: 80px; display: flex; align-items: center; justify-content: center; font-size: 28px;">📷</div>
              <div>
                <div style="font-size: 11px; font-weight: 600; color: #1d1d1f;">Optix Cinema 8K</div>
                <div style="font-size: 10px; color: #7a7a7a;">Full-Frame Sensor</div>
                <div style="font-size: 12px; font-weight: 700; color: #1d1d1f; margin-top: 2px;">$2,499.00</div>
              </div>
              <button style="background: #0066cc; color: white; border: none; padding: 6px; border-radius: 9999px; font-size: 10px; font-weight: 600; cursor: pointer; margin-top: auto;">+ Quick Add</button>
            </div>

            <!-- Pick 3 -->
            <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; padding: 12px; display: flex; flex-direction: column; gap: 8px;">
              <div style="background: #f5f5f7; border-radius: 8px; height: 80px; display: flex; align-items: center; justify-content: center; font-size: 28px;">💍</div>
              <div>
                <div style="font-size: 11px; font-weight: 600; color: #1d1d1f;">Aura Smart Ring</div>
                <div style="font-size: 10px; color: #7a7a7a;">Biometric Sensing</div>
                <div style="font-size: 12px; font-weight: 700; color: #1d1d1f; margin-top: 2px;">$299.00</div>
              </div>
              <button style="background: #0066cc; color: white; border: none; padding: 6px; border-radius: 9999px; font-size: 10px; font-weight: 600; cursor: pointer; margin-top: auto;">+ Quick Add</button>
            </div>
          </div>
        </div>

        <!-- Trust Badges Bar -->
        <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; padding: 14px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; text-align: center; margin-top: 4px;">
          <div>
            <div style="font-size: 11px; font-weight: 700; color: #1d1d1f;">🚀 Express Delivery</div>
            <div style="font-size: 9px; color: #7a7a7a; margin-top: 2px;">Free 2-Day Air on orders over $150</div>
          </div>
          <div style="border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0;">
            <div style="font-size: 11px; font-weight: 700; color: #1d1d1f;">🛡️ 2-Year Hardware Warranty</div>
            <div style="font-size: 9px; color: #7a7a7a; margin-top: 2px;">Comprehensive damage coverage</div>
          </div>
          <div>
            <div style="font-size: 11px; font-weight: 700; color: #1d1d1f;">💬 24/7 VIP Concierge</div>
            <div style="font-size: 9px; color: #7a7a7a; margin-top: 2px;">Instant human support anytime</div>
          </div>
        </div>
      </div>
    `
  },

  'product-listing': {
    id: 'product-listing',
    title: 'Curated Product Catalog',
    subtitle: 'Loss Avoidance Patterns: Scarcity & Reference Price Anchoring',
    principle: 'loss-avoidance',
    speakerNotes: `On Slide 3, we explore Loss Avoidance. Psychologically, users experience loss twice as intensely as equivalent gain. Here, dynamic timers create genuine time scarcity, while strikethrough prices establish a high reference anchor so current discounts feel like captured value that shouldn't be lost.`,
    features: [
      {
        id: 'plp-l1',
        number: 1,
        name: 'Flash Deal Countdown Timer',
        principle: 'loss-avoidance',
        subPrinciple: 'time-scarcity',
        description: 'Displays a live ticking countdown badge indicating when the current promotional pricing will expire.',
        rationale: 'Establishes a firm time boundary, triggering fear of missing out (FOMO) and encouraging immediate decision making.',
        businessValue: '+28% purchase velocity during timed promotional events.',
        implementationNotes: 'Server-synchronized timestamps ensure timers do not reset upon page refresh.',
        ethicalGuardrail: 'Countdowns must correspond to real promotional expiration dates and never restart spuriously.',
        target: {
          dataAttribute: 'plp-flash-timer',
          css: '.flash-countdown-badge',
          text: { value: 'Ends in 02:14:59', tag: 'div' },
          preferredSide: 'right'
        }
      },
      {
        id: 'plp-l2',
        number: 2,
        name: 'Critical Inventory Stock Indicator',
        principle: 'loss-avoidance',
        subPrinciple: 'quantity-scarcity',
        description: 'Shows explicit low inventory counts when stock drops below 5 units.',
        rationale: 'Highlights potential unavailability, motivating buyers to act before inventory runs out.',
        businessValue: '+16% conversion boost on low-inventory SKUs.',
        implementationNotes: 'Triggered automatically via real-time warehouse inventory feeds.',
        ethicalGuardrail: 'Stock alerts must accurately reflect true physical inventory levels.',
        target: {
          dataAttribute: 'plp-stock-alert',
          css: '.low-stock-pill',
          text: { value: 'Only 3 left in stock', tag: 'span' },
          preferredSide: 'right'
        }
      },
      {
        id: 'plp-l3',
        number: 3,
        name: 'MSRP Reference Price Anchor',
        principle: 'loss-avoidance',
        subPrinciple: 'reference-dependence',
        description: 'Displays original price strikethrough beside discounted member pricing.',
        rationale: 'Establishes the higher original price as a cognitive anchor, maximizing perceived savings value.',
        businessValue: '+24% increase in catalog item click-through rate.',
        implementationNotes: 'Include savings calculation percentage badge ($ Saved) alongside strikethrough text.',
        target: {
          dataAttribute: 'plp-price-strike',
          css: '.reference-price-tag',
          text: { value: '$499.00', tag: 'span' },
          preferredSide: 'right'
        }
      }
    ],
    htmlCode: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Plus Jakarta Sans', sans-serif; background-color: #f5f5f7; color: #1d1d1f; padding: 20px; border-radius: 12px; display: flex; flex-direction: column; gap: 16px;">
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e0e0e0; padding-bottom: 12px;">
          <div>
            <div style="font-size: 14px; font-weight: 700; letter-spacing: -0.01em; color: #1d1d1f;">LUXE CATALOG • FLASH SALE</div>
            <div style="font-size: 10px; color: #7a7a7a;">Curated Luxury Tech & Accessories</div>
          </div>
          
          <!-- Flash Deal Countdown Timer -->
          <div data-deck-target="plp-flash-timer" class="flash-countdown-badge" style="background: #fef3c7; border: 1px solid #fde68a; color: #b45309; font-weight: 700; font-size: 11px; padding: 6px 14px; border-radius: 9999px; display: flex; align-items: center; gap: 6px;">
            <span>⏱️ Flash Deal:</span>
            <strong style="font-family: monospace; font-size: 12px; letter-spacing: 0.05em;">02:14:59</strong>
          </div>
        </div>

        <!-- Filter & Sort Bar -->
        <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 2px;">
          <button style="background: #1d1d1f; color: white; border: none; padding: 5px 12px; border-radius: 9999px; font-size: 10px; font-weight: 600; cursor: pointer; white-space: nowrap;">All Products (24)</button>
          <button style="background: #ffffff; color: #1d1d1f; border: 1px solid #e0e0e0; padding: 5px 12px; border-radius: 9999px; font-size: 10px; font-weight: 600; cursor: pointer; white-space: nowrap;">Flash Deals (8)</button>
          <button style="background: #ffffff; color: #1d1d1f; border: 1px solid #e0e0e0; padding: 5px 12px; border-radius: 9999px; font-size: 10px; font-weight: 600; cursor: pointer; white-space: nowrap;">Audio & Sound</button>
          <button style="background: #ffffff; color: #1d1d1f; border: 1px solid #e0e0e0; padding: 5px 12px; border-radius: 9999px; font-size: 10px; font-weight: 600; cursor: pointer; white-space: nowrap;">Timepieces</button>
        </div>

        <!-- Catalog Grid -->
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
          <!-- Item Card 1 -->
          <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 14px; padding: 16px; display: flex; flex-direction: column; gap: 10px; position: relative; box-shadow: 0 2px 10px rgba(0,0,0,0.03);">
            <div style="background: #f5f5f7; border: 1px solid #e0e0e0; height: 120px; border-radius: 10px; display: flex; align-items: center; justify-content: center; position: relative;">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 55 C22 25, 78 25, 78 55" stroke="#1d1d1f" stroke-width="6" stroke-linecap="round" fill="none"/>
                <path d="M26 50 C26 30, 74 30, 74 50" stroke="#7a7a7a" stroke-width="2" fill="none"/>
                <rect x="14" y="48" width="16" height="28" rx="8" fill="#1d1d1f" stroke="#0066cc" stroke-width="1.5"/>
                <rect x="18" y="52" width="8" height="20" rx="4" fill="#3a3a3c"/>
                <rect x="70" y="48" width="16" height="28" rx="8" fill="#1d1d1f" stroke="#0066cc" stroke-width="1.5"/>
                <rect x="74" y="52" width="8" height="20" rx="4" fill="#3a3a3c"/>
              </svg>

              <!-- Low Stock Pill -->
              <span data-deck-target="plp-stock-alert" class="low-stock-pill" style="position: absolute; top: 8px; right: 8px; background: #fff7ed; border: 1px solid #ffedd5; color: #c2410c; font-size: 9px; font-weight: 700; padding: 3px 8px; border-radius: 9999px;">
                🔥 Only 3 left in stock
              </span>
            </div>

            <div>
              <div style="font-size: 13px; font-weight: 600; color: #1d1d1f;">AeroNoise Pro Wireless ANC</div>
              <div style="font-size: 10px; color: #7a7a7a; margin-top: 2px;">Studio Lossless Audio • Carbon Black</div>
            </div>
            
            <div style="display: flex; align-items: baseline; gap: 8px;">
              <span style="font-size: 16px; font-weight: 700; color: #1d1d1f;">$349.00</span>
              <!-- MSRP Reference Strike -->
              <span data-deck-target="plp-price-strike" class="reference-price-tag" style="font-size: 11px; color: #7a7a7a; text-decoration: line-through;">$499.00</span>
              <span style="font-size: 9px; font-weight: 700; color: #15803d; background: #dcfce7; padding: 2px 6px; border-radius: 4px;">Save $150</span>
            </div>

            <button style="background: #0066cc; color: white; border: none; padding: 8px; border-radius: 9999px; font-size: 11px; font-weight: 600; cursor: pointer; margin-top: 2px;">+ Add to Bag</button>
          </div>

          <!-- Item Card 2 -->
          <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 14px; padding: 16px; display: flex; flex-direction: column; gap: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.03);">
            <div style="background: #f5f5f7; border: 1px solid #e0e0e0; height: 120px; border-radius: 10px; display: flex; align-items: center; justify-content: center; position: relative;">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="32" width="70" height="46" rx="8" fill="#1d1d1f" stroke="#3a3a3c" stroke-width="2"/>
                <rect x="32" y="24" width="22" height="10" rx="3" fill="#3a3a3c"/>
                <circle cx="50" cy="55" r="18" fill="#000000" stroke="#0066cc" stroke-width="2"/>
                <circle cx="50" cy="55" r="12" fill="#1c1c1e" stroke="#52525b" stroke-width="1.5"/>
                <circle cx="46" cy="51" r="4" fill="white" opacity="0.4"/>
                <circle cx="74" cy="40" r="3" fill="#ef4444"/>
              </svg>
              <span style="position: absolute; top: 8px; right: 8px; background: #dcfce7; border: 1px solid #bbf7d0; color: #15803d; font-size: 9px; font-weight: 700; padding: 3px 8px; border-radius: 9999px;">
                ✓ In Stock
              </span>
            </div>

            <div>
              <div style="font-size: 13px; font-weight: 600; color: #1d1d1f;">Optix Cinema 8K Sensor</div>
              <div style="font-size: 10px; color: #7a7a7a; margin-top: 2px;">Full-Frame Mirrorless • Titanium Body</div>
            </div>
            
            <div style="display: flex; align-items: baseline; gap: 8px;">
              <span style="font-size: 16px; font-weight: 700; color: #1d1d1f;">$2,499.00</span>
              <span style="font-size: 11px; color: #7a7a7a; text-decoration: line-through;">$2,899.00</span>
            </div>

            <button style="background: #0066cc; color: white; border: none; padding: 8px; border-radius: 9999px; font-size: 11px; font-weight: 600; cursor: pointer; margin-top: 2px;">+ Add to Bag</button>
          </div>

          <!-- Item Card 3 -->
          <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 14px; padding: 16px; display: flex; flex-direction: column; gap: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.03);">
            <div style="background: #f5f5f7; border: 1px solid #e0e0e0; height: 120px; border-radius: 10px; display: flex; align-items: center; justify-content: center; position: relative;">
              <span style="font-size: 36px;">💍</span>
              <span style="position: absolute; top: 8px; right: 8px; background: #fef3c7; border: 1px solid #fde68a; color: #b45309; font-size: 9px; font-weight: 700; padding: 3px 8px; border-radius: 9999px;">
                ⚡ Limited Edition
              </span>
            </div>
            <div>
              <div style="font-size: 13px; font-weight: 600; color: #1d1d1f;">Aura Titanium Smart Ring</div>
              <div style="font-size: 10px; color: #7a7a7a; margin-top: 2px;">Biometric Sleep & Readiness • Matte Gold</div>
            </div>
            <div style="display: flex; align-items: baseline; gap: 8px;">
              <span style="font-size: 16px; font-weight: 700; color: #1d1d1f;">$299.00</span>
              <span style="font-size: 11px; color: #7a7a7a; text-decoration: line-through;">$349.00</span>
            </div>
            <button style="background: #0066cc; color: white; border: none; padding: 8px; border-radius: 9999px; font-size: 11px; font-weight: 600; cursor: pointer; margin-top: 2px;">+ Add to Bag</button>
          </div>

          <!-- Item Card 4 -->
          <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 14px; padding: 16px; display: flex; flex-direction: column; gap: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.03);">
            <div style="background: #f5f5f7; border: 1px solid #e0e0e0; height: 120px; border-radius: 10px; display: flex; align-items: center; justify-content: center; position: relative;">
              <span style="font-size: 36px;">💼</span>
              <span style="position: absolute; top: 8px; right: 8px; background: #eef6ff; border: 1px solid #b3d7ff; color: #0066cc; font-size: 9px; font-weight: 700; padding: 3px 8px; border-radius: 9999px;">
                ⭐ Member Choice
              </span>
            </div>
            <div>
              <div style="font-size: 13px; font-weight: 600; color: #1d1d1f;">Nomad Italian Leather Bag</div>
              <div style="font-size: 10px; color: #7a7a7a; margin-top: 2px;">Full-Grain Calfskin • Weatherproof</div>
            </div>
            <div style="display: flex; align-items: baseline; gap: 8px;">
              <span style="font-size: 16px; font-weight: 700; color: #1d1d1f;">$420.00</span>
              <span style="font-size: 11px; color: #7a7a7a; text-decoration: line-through;">$520.00</span>
            </div>
            <button style="background: #0066cc; color: white; border: none; padding: 8px; border-radius: 9999px; font-size: 11px; font-weight: 600; cursor: pointer; margin-top: 2px;">+ Add to Bag</button>
          </div>
        </div>

        <!-- Customer Rating Summary -->
        <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; padding: 14px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-size: 12px; font-weight: 700; color: #1d1d1f;">4.9 ★★★★★ Rating Across 1,420 Verified Buyers</div>
            <div style="font-size: 10px; color: #7a7a7a; margin-top: 2px;">"Outstanding build quality, ultra-fast delivery, and premium packaging."</div>
          </div>
          <button style="background: #f5f5f7; border: 1px solid #d2d2d7; color: #1d1d1f; padding: 6px 12px; border-radius: 9999px; font-size: 10px; font-weight: 600; cursor: pointer; white-space: nowrap;">Read All Reviews</button>
        </div>
      </div>
    `
  },

  'product-details': {
    id: 'product-details',
    title: 'Product Detail Page',
    subtitle: 'Convenience Patterns: Clear Hierarchy & Choice Reduction',
    principle: 'convenience',
    speakerNotes: `Slide 4 demonstrates Convenience on product details. A prominent CTA establishes clear visual hierarchy, directing 80%+ of user attention to immediate purchase. Progressive disclosure drawers hide technical specs until requested, while curated pairings reduce choice overload.`,
    features: [
      {
        id: 'pdp-c1',
        number: 1,
        name: 'Dominant Purchase Action Hierarchy',
        principle: 'convenience',
        subPrinciple: 'clear-action-hierarchy',
        description: 'Employs a high-contrast primary CTA button alongside secondary outline actions.',
        rationale: 'Establishes clear focal hierarchy, guiding the eye directly to the primary conversion path.',
        businessValue: '+19% direct checkout flow entries.',
        implementationNotes: 'Ensure primary CTA meets high accessibility contrast guidelines.',
        target: {
          dataAttribute: 'pdp-buy-cta',
          css: '.primary-buy-now',
          text: { value: 'Buy Now - Express Checkout', tag: 'button' },
          preferredSide: 'right'
        }
      },
      {
        id: 'pdp-c2',
        number: 2,
        name: 'Progressive Disclosure Specification Accordion',
        principle: 'convenience',
        subPrinciple: 'progressive-disclosure',
        description: 'Collapses technical specifications into expandable accordions to streamline visual clutter.',
        rationale: 'Keeps main product view clean and accessible while providing detailed information on demand.',
        businessValue: 'Reduces bounce rates by 14% on mobile devices.',
        implementationNotes: 'Use accessible aria-expanded attributes with smooth CSS transitions.',
        target: {
          dataAttribute: 'pdp-specs-drawer',
          css: '.specifications-accordion',
          text: { value: 'Technical Specifications & Materials', tag: 'div' },
          preferredSide: 'right'
        }
      },
      {
        id: 'pdp-c3',
        number: 3,
        name: 'Curated 2-Item Accessory Pairing',
        principle: 'convenience',
        subPrinciple: 'choice-reduction',
        description: 'Presents exactly two pre-matched accessory items instead of endless catalog listings.',
        rationale: 'Limits options to mitigate decision paralysis and simplify cross-selling.',
        businessValue: '+22% average order value (AOV) via accessory bundles.',
        implementationNotes: 'Provide single-click "Add Bundle" button that calculates bundle discount.',
        target: {
          dataAttribute: 'pdp-curated-sets',
          css: '.curated-pairings-grid',
          text: { value: 'Complete the Set (Save 15%)', tag: 'div' },
          preferredSide: 'right'
        }
      }
    ],
    htmlCode: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Plus Jakarta Sans', sans-serif; background-color: #f5f5f7; color: #1d1d1f; padding: 20px; border-radius: 12px; display: flex; flex-direction: column; gap: 16px;">
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">
          <div style="font-size: 11px; color: #0066cc; font-weight: 600; cursor: pointer;">← Back to Timepieces</div>
          <div style="font-size: 11px; font-weight: 700; color: #1d1d1f;">LUXE PRODUCT DETAILS</div>
          <div style="font-size: 12px; color: #7a7a7a;">🔖 Share</div>
        </div>

        <div style="display: grid; grid-template-columns: 170px 1fr; gap: 20px; align-items: start;">
          <!-- Product Image Frame -->
          <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 14px; padding: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 230px; box-shadow: 0 2px 10px rgba(0,0,0,0.03);">
            <svg width="110" height="110" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="46" y="2" width="28" height="24" rx="4" fill="#3a3a3c"/>
              <rect x="46" y="94" width="28" height="24" rx="4" fill="#3a3a3c"/>
              <rect x="26" y="22" width="68" height="76" rx="20" fill="#1d1d1f" stroke="#e0e0e0" stroke-width="2"/>
              <rect x="94" y="52" width="5" height="16" rx="2" fill="#0066cc"/>
              <rect x="94" y="38" width="3" height="10" rx="1.5" fill="#8e8e93"/>
              <rect x="94" y="72" width="3" height="10" rx="1.5" fill="#8e8e93"/>
              <circle cx="60" cy="60" r="32" fill="#000000" stroke="#3a3a3c" stroke-width="3"/>
              <circle cx="60" cy="60" r="28" fill="#1c1c1e"/>
              <circle cx="60" cy="36" r="1.5" fill="#0066cc"/>
              <circle cx="84" cy="60" r="1.5" fill="#ffffff"/>
              <circle cx="60" cy="84" r="1.5" fill="#ffffff"/>
              <circle cx="36" cy="60" r="1.5" fill="#ffffff"/>
              <circle cx="60" cy="70" r="6" stroke="#0066cc" stroke-width="0.8" fill="#1d1d1f"/>
              <line x1="60" y1="60" x2="60" y2="44" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="60" y1="60" x2="72" y2="60" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
              <line x1="60" y1="60" x2="48" y2="72" stroke="#0066cc" stroke-width="1.2" stroke-linecap="round"/>
              <circle cx="60" cy="60" r="2.5" fill="#0066cc"/>
            </svg>
            <div style="font-size: 10px; font-weight: 600; color: #7a7a7a; margin-top: 8px;">Titanium Black • 44mm</div>
          </div>

          <!-- Product Buy Column -->
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div>
              <span style="font-size: 9px; color: #0066cc; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em;">FLAGSHIP COLLECTION</span>
              <h1 style="font-size: 20px; font-weight: 600; color: #1d1d1f; margin: 2px 0; letter-spacing: -0.02em;">Chronos Titan Edition</h1>
              <div style="display: flex; align-items: center; gap: 10px; margin-top: 4px;">
                <div style="font-size: 18px; font-weight: 700; color: #1d1d1f;">$1,299.00</div>
                <div style="font-size: 11px; color: #d97706;">★★★★★ <span style="color: #7a7a7a;">(128)</span></div>
              </div>
            </div>

            <!-- Action Hierarchy Buttons -->
            <div style="display: flex; gap: 10px;">
              <button data-deck-target="pdp-buy-cta" class="primary-buy-now" style="flex: 1; background: #0066cc; color: white; border: none; padding: 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; cursor: pointer; box-shadow: 0 2px 10px rgba(0,102,204,0.25);">
                ⚡ Buy Now - Express Checkout
              </button>
              <button style="background: #ffffff; color: #0066cc; border: 1px solid #0066cc; padding: 12px 14px; border-radius: 9999px; font-size: 11px; font-weight: 600; cursor: pointer;">
                + Add to Cart
              </button>
            </div>

            <!-- Progressive Disclosure Accordion -->
            <div data-deck-target="pdp-specs-drawer" class="specifications-accordion" style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 10px 14px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 11px; font-weight: 600; color: #1d1d1f;">Technical Specifications & Materials</span>
              <span style="font-size: 12px; color: #7a7a7a;">▼</span>
            </div>

            <!-- Choice Reduction Curated Set -->
            <div data-deck-target="pdp-curated-sets" class="curated-pairings-grid" style="background: #eef6ff; border: 1px dashed #0066cc; border-radius: 10px; padding: 12px;">
              <div style="font-size: 10px; font-weight: 800; color: #0066cc; text-transform: uppercase; margin-bottom: 6px;">COMPLETE THE SET (SAVE 15%)</div>
              <div style="display: flex; gap: 10px; align-items: center; justify-content: space-between;">
                <div style="font-size: 11px; color: #1d1d1f;">➕ Leather Strap + Magnetic Charger Stand</div>
                <button style="background: #0066cc; color: white; border: none; padding: 5px 12px; border-radius: 9999px; font-size: 10px; font-weight: 600; cursor: pointer;">Add Set (+$120)</button>
              </div>
            </div>
          </div>
        </div>

        <!-- In-Depth Specs Breakdown -->
        <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; padding: 14px; display: flex; flex-direction: column; gap: 10px;">
          <div style="font-size: 12px; font-weight: 700; color: #1d1d1f;">Craftsmanship & Technical Material Architecture</div>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; font-size: 10px;">
            <div style="background: #f5f5f7; p: 8px; padding: 8px 10px; border-radius: 8px;">
              <div style="color: #7a7a7a; font-weight: 600;">CHASSIS MATERIAL</div>
              <div style="color: #1d1d1f; font-weight: 700; margin-top: 2px;">Grade 5 Aerospace Titanium</div>
            </div>
            <div style="background: #f5f5f7; p: 8px; padding: 8px 10px; border-radius: 8px;">
              <div style="color: #7a7a7a; font-weight: 600;">GLASS CRYSTAL</div>
              <div style="color: #1d1d1f; font-weight: 700; margin-top: 2px;">Dual Anti-Reflective Sapphire</div>
            </div>
            <div style="background: #f5f5f7; p: 8px; padding: 8px 10px; border-radius: 8px;">
              <div style="color: #7a7a7a; font-weight: 600;">WATER RATING</div>
              <div style="color: #1d1d1f; font-weight: 700; margin-top: 2px;">100 Meters / 10 ATM</div>
            </div>
            <div style="background: #f5f5f7; p: 8px; padding: 8px 10px; border-radius: 8px;">
              <div style="color: #7a7a7a; font-weight: 600;">POWER RESERVE</div>
              <div style="color: #1d1d1f; font-weight: 700; margin-top: 2px;">72 Hours Continuous Precision</div>
            </div>
          </div>
        </div>

        <!-- Verified Purchaser Reviews -->
        <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; padding: 14px; display: flex; flex-direction: column; gap: 8px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="font-size: 12px; font-weight: 700; color: #1d1d1f;">Verified VIP Reviews (128)</div>
            <div style="font-size: 10px; color: #0066cc; font-weight: 600; cursor: pointer;">Write Review (+100 Points)</div>
          </div>
          <div style="background: #fafafc; border: 1px solid #f0f0f2; border-radius: 8px; padding: 10px; font-size: 10px;">
            <div style="display: flex; justify-content: space-between; color: #1d1d1f; font-weight: 700;">
              <span>Marcus V. <span style="color: #15803d; font-weight: 600;">✓ Verified Buyer</span></span>
              <span style="color: #d97706;">★★★★★</span>
            </div>
            <p style="color: #515154; margin: 4px 0 0 0; line-height: 1.4;">"The weight of the titanium is perfect—subtle yet unmistakably high quality. Express delivery arrived in under 36 hours."</p>
          </div>
        </div>
      </div>
    `
  },

  'shopping-cart': {
    id: 'shopping-cart',
    title: 'Shopping Cart & Bag',
    subtitle: 'Loss Avoidance Patterns: Progress Preservation & Reservation Timers',
    principle: 'loss-avoidance',
    speakerNotes: `Slide 5 looks at Loss Avoidance in the Shopping Cart. Users hate losing progress towards perks like free shipping. Showing a progress bar motivates add-on purchases. Additionally, hold timers give gentle urgency by holding reserved items temporarily.`,
    features: [
      {
        id: 'cart-l1',
        number: 1,
        name: 'Temporary Cart Reservation Timer',
        principle: 'loss-avoidance',
        subPrinciple: 'time-scarcity',
        description: 'Guarantees item reservation for 10 minutes before releasing stock back to public inventory.',
        rationale: 'Creates legitimate temporary ownership and gentle urgency to finalize purchase before item expires.',
        businessValue: 'Accelerates cart-to-checkout progression time by 25%.',
        implementationNotes: '10-minute server session lock with clear reset warnings.',
        ethicalGuardrail: 'Do not use fake countdown timers that immediately restart upon page refresh.',
        target: {
          dataAttribute: 'cart-hold-timer',
          css: '.cart-reservation-banner',
          text: { value: 'Cart Reserved: Items held for 08:42', tag: 'div' },
          preferredSide: 'right'
        }
      },
      {
        id: 'cart-l2',
        number: 2,
        name: 'Free Shipping Threshold Progress Rail',
        principle: 'loss-avoidance',
        subPrinciple: 'progress-preservation',
        description: 'Visual progress bar indicating distance remaining to unlock free express shipping.',
        rationale: 'Leverages goal-gradient effects; users want to preserve accumulated progress and avoid paying shipping fees.',
        businessValue: '+31% item add-on rate near threshold amounts.',
        implementationNotes: 'Updates dynamically whenever cart item quantities are modified.',
        target: {
          dataAttribute: 'cart-shipping-progress',
          css: '.shipping-progress-card',
          text: { value: 'Add $21.00 more to unlock FREE Express Delivery', tag: 'div' },
          preferredSide: 'right'
        }
      },
      {
        id: 'cart-l3',
        number: 3,
        name: 'VIP Unlocked Savings Lock',
        principle: 'loss-avoidance',
        subPrinciple: 'privilege-preservation',
        description: 'Highlights $48 in unlocked VIP member discounts that would be lost if order is abandoned.',
        rationale: 'Reminds members of earned privileges, framing abandonment as a direct monetary loss.',
        businessValue: '+21% cart retention for authenticated members.',
        implementationNotes: 'Display clear savings breakdown before checkout button.',
        target: {
          dataAttribute: 'cart-savings-lock',
          css: '.member-discount-lock',
          text: { value: 'VIP Status Savings Locked: -$48.00', tag: 'div' },
          preferredSide: 'right'
        }
      }
    ],
    htmlCode: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Plus Jakarta Sans', sans-serif; background-color: #f5f5f7; color: #1d1d1f; padding: 20px; border-radius: 12px; display: flex; flex-direction: column; gap: 14px;">
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">
          <h2 style="font-size: 16px; font-weight: 700; color: #1d1d1f;">YOUR BAG (2 Items)</h2>
          
          <!-- Hold Timer -->
          <div data-deck-target="cart-hold-timer" class="cart-reservation-banner" style="background: #fef3c7; border: 1px solid #fde68a; color: #b45309; font-size: 10px; font-weight: 700; padding: 5px 12px; border-radius: 9999px;">
            🔒 Cart Reserved: Items held for <strong style="font-family: monospace;">08:42</strong>
          </div>
        </div>

        <!-- Shipping Progress Rail -->
        <div data-deck-target="cart-shipping-progress" class="shipping-progress-card" style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; padding: 14px; display: flex; flex-direction: column; gap: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
          <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 600;">
            <span style="color: #0066cc;">Add $21.00 more to unlock FREE Express Delivery</span>
            <span style="color: #7a7a7a;">$179 / $200</span>
          </div>
          <div style="height: 7px; background: #e0e0e0; border-radius: 4px; overflow: hidden;">
            <div style="width: 88%; height: 100%; background: #0066cc; border-radius: 4px;"></div>
          </div>
        </div>

        <!-- Cart Items List -->
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <!-- Item 1 -->
          <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; padding: 12px; display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; gap: 10px; align-items: center;">
              <div style="width: 40px; height: 40px; background: #f5f5f7; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <svg width="30" height="30" viewBox="0 0 100 100" fill="none">
                  <path d="M22 55 C22 25, 78 25, 78 55" stroke="#1d1d1f" stroke-width="8" fill="none"/>
                  <rect x="14" y="48" width="16" height="28" rx="8" fill="#0066cc"/>
                  <rect x="70" y="48" width="16" height="28" rx="8" fill="#0066cc"/>
                </svg>
              </div>
              <div>
                <div style="font-size: 12px; font-weight: 600; color: #1d1d1f;">AeroNoise Pro Headphones</div>
                <div style="font-size: 10px; color: #7a7a7a;">Qty: 1 • Carbon Black</div>
              </div>
            </div>
            <div style="font-size: 13px; font-weight: 700; color: #1d1d1f;">$179.00</div>
          </div>

          <!-- Item 2 -->
          <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; padding: 12px; display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; gap: 10px; align-items: center;">
              <div style="width: 40px; height: 40px; background: #f5f5f7; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px;">
                💼
              </div>
              <div>
                <div style="font-size: 12px; font-weight: 600; color: #1d1d1f;">Italian Leather Strap Accessory</div>
                <div style="font-size: 10px; color: #7a7a7a;">Qty: 1 • Espresso Brown</div>
              </div>
            </div>
            <div style="font-size: 13px; font-weight: 700; color: #1d1d1f;">$48.00</div>
          </div>
        </div>

        <!-- Recommended 1-Click Add-Ons -->
        <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; padding: 12px; display: flex; flex-direction: column; gap: 8px;">
          <div style="font-size: 11px; font-weight: 700; color: #1d1d1f;">Recommended One-Click Add-Ons</div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div style="background: #f5f5f7; border-radius: 8px; padding: 8px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 10px; font-weight: 600; color: #1d1d1f;">Magnetic Dock</div>
                <div style="font-size: 9px; color: #7a7a7a;">+$39.00</div>
              </div>
              <button style="background: #0066cc; color: white; border: none; padding: 3px 8px; border-radius: 9999px; font-size: 9px; font-weight: 600; cursor: pointer;">+ Add</button>
            </div>
            <div style="background: #f5f5f7; border-radius: 8px; padding: 8px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 10px; font-weight: 600; color: #1d1d1f;">2-Yr Luxe Care</div>
                <div style="font-size: 9px; color: #7a7a7a;">+$29.00</div>
              </div>
              <button style="background: #0066cc; color: white; border: none; padding: 3px 8px; border-radius: 9999px; font-size: 9px; font-weight: 600; cursor: pointer;">+ Add</button>
            </div>
          </div>
        </div>

        <!-- VIP Unlocked Savings Lock -->
        <div data-deck-target="cart-savings-lock" class="member-discount-lock" style="background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 8px; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 11px; font-weight: 700; color: #15803d;">✨ VIP Status Savings Locked: -$48.00</span>
          <span style="font-size: 10px; color: #166534; font-weight: 600;">Applied at Checkout</span>
        </div>

        <!-- Order Total Summary Calculation -->
        <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; padding: 12px; display: flex; flex-direction: column; gap: 6px; font-size: 11px;">
          <div style="display: flex; justify-content: space-between; color: #515154;">
            <span>Subtotal (2 items)</span>
            <span>$227.00</span>
          </div>
          <div style="display: flex; justify-content: space-between; color: #15803d; font-weight: 600;">
            <span>VIP Member Savings</span>
            <span>-$48.00</span>
          </div>
          <div style="display: flex; justify-content: space-between; color: #515154;">
            <span>Estimated Standard Shipping</span>
            <span style="color: #0066cc; font-weight: 600;">FREE</span>
          </div>
          <div style="height: 1px; background: #e0e0e0; margin: 4px 0;"></div>
          <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 700; color: #1d1d1f;">
            <span>Estimated Total</span>
            <span>$179.00</span>
          </div>
        </div>

        <button style="background: #0066cc; color: white; border: none; padding: 12px; border-radius: 9999px; font-size: 13px; font-weight: 600; cursor: pointer; box-shadow: 0 2px 10px rgba(0,102,204,0.25); margin-top: 2px;">
          Proceed to Express Checkout ($179.00)
        </button>
      </div>
    `
  },

  checkout: {
    id: 'checkout',
    title: 'Express Checkout Page',
    subtitle: 'Convenience Patterns: Shortest Path & Smart Form Sync',
    principle: 'convenience',
    speakerNotes: `Slide 6 covers Checkout Convenience. Speed is everything at checkout. Biometric payment integration removes typing friction, while default address syncing reduces form fields from 12 down to a single click.`,
    features: [
      {
        id: 'chk-c1',
        number: 1,
        name: 'Collapsible Order Summary Drawer',
        principle: 'convenience',
        subPrinciple: 'progressive-disclosure',
        description: 'Collapses item detail breakdown into an expandable drawer to keep checkout UI clean.',
        rationale: 'Keeps final pay button visible above fold on mobile screens.',
        businessValue: 'Improves mobile conversion completion.',
        implementationNotes: 'Expandable drawer toggle with responsive height animation.',
        target: {
          dataAttribute: 'checkout-summary-drawer',
          css: '.summary-disclosure-toggle',
          text: { value: 'Order Total: $1,299.00 (Show Details)', tag: 'div' },
          preferredSide: 'right'
        }
      },
      {
        id: 'chk-c2',
        number: 2,
        name: 'Express Biometric One-Touch Payment',
        principle: 'convenience',
        subPrinciple: 'shortest-path',
        description: 'Single-touch Apple Pay / Google Pay authentication button bypassing standard manual credit card inputs.',
        rationale: 'Replaces manual form filling with native device authentication, eliminating form drop-off.',
        businessValue: '+38% increase in mobile checkout speed.',
        implementationNotes: 'Native Web Payments API with seamless fallback.',
        target: {
          dataAttribute: 'checkout-express-pay',
          css: '.express-checkout-btn',
          text: { value: 'Pay with Apple Pay', tag: 'button' },
          preferredSide: 'right'
        }
      },
      {
        id: 'chk-c3',
        number: 3,
        name: 'Default Billing & Shipping Sync',
        principle: 'convenience',
        subPrinciple: 'smart-defaults',
        description: 'Preselects "Billing address same as shipping" checkbox by default.',
        rationale: 'Eliminates redundant input fields for 92% of transactions.',
        businessValue: 'Removes friction on address entry step.',
        implementationNotes: 'Keep checkbox visible with accessible uncheck toggle.',
        target: {
          dataAttribute: 'checkout-billing-sync',
          css: '.sync-address-checkbox',
          text: { value: 'Billing address matches shipping destination', tag: 'div' },
          preferredSide: 'right'
        }
      }
    ],
    htmlCode: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Plus Jakarta Sans', sans-serif; background-color: #f5f5f7; color: #1d1d1f; padding: 20px; border-radius: 12px; display: flex; flex-direction: column; gap: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">
          <h2 style="font-size: 16px; font-weight: 700; color: #1d1d1f;">EXPRESS CHECKOUT</h2>
          <span style="font-size: 10px; color: #15803d; background: #dcfce7; padding: 3px 8px; border-radius: 9999px;">🔒 256-bit Encrypted</span>
        </div>

        <!-- Order Summary Drawer -->
        <div data-deck-target="checkout-summary-drawer" class="summary-disclosure-toggle" style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
          <span style="font-size: 11px; font-weight: 600; color: #1d1d1f;">Order Total: $1,299.00 (Show Details)</span>
          <span style="font-size: 11px; color: #7a7a7a;">▼</span>
        </div>

        <!-- Express Pay Button -->
        <button data-deck-target="checkout-express-pay" class="express-checkout-btn" style="background: #1d1d1f; color: #ffffff; border: none; padding: 14px; border-radius: 9999px; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer; box-shadow: 0 2px 10px rgba(0,0,0,0.12);">
          <span></span> <span>Pay with Apple Pay</span>
        </button>

        <div style="text-align: center; font-size: 10px; color: #7a7a7a; margin: 2px 0;">— OR CONTINUE WITH SAVED PROFILE —</div>

        <!-- Saved Delivery Address Card -->
        <div style="background: #ffffff; border: 1px solid #0066cc; border-radius: 10px; padding: 12px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 8px rgba(0,102,204,0.06);">
          <div>
            <div style="font-size: 9px; font-weight: 800; color: #0066cc; text-transform: uppercase;">SHIPPING DESTINATION</div>
            <div style="font-size: 11px; font-weight: 700; color: #1d1d1f; margin-top: 2px;">Stephen Miller • 742 Evergreen Terr</div>
            <div style="font-size: 10px; color: #7a7a7a;">Springfield, OR 97477 • (555) 019-2834</div>
          </div>
          <button style="background: #f5f5f7; border: 1px solid #d2d2d7; color: #0066cc; padding: 4px 10px; border-radius: 9999px; font-size: 10px; font-weight: 600; cursor: pointer;">Change</button>
        </div>

        <!-- Delivery Speed Method Selector -->
        <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; padding: 12px; display: flex; flex-direction: column; gap: 8px;">
          <div style="font-size: 11px; font-weight: 700; color: #1d1d1f;">Select Delivery Speed</div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <label style="display: flex; justify-content: space-between; align-items: center; background: #eef6ff; border: 1px solid #b3d7ff; border-radius: 8px; padding: 8px 10px; font-size: 10px; cursor: pointer;">
              <div style="display: flex; align-items: center; gap: 6px;">
                <input type="radio" name="speed" checked style="accent-color: #0066cc;" />
                <span style="font-weight: 700; color: #1d1d1f;">🚀 Express 2-Day Air</span>
              </div>
              <span style="font-weight: 700; color: #0066cc;">FREE (VIP)</span>
            </label>
            <label style="display: flex; justify-content: space-between; align-items: center; background: #fafafc; border: 1px solid #e0e0e0; border-radius: 8px; padding: 8px 10px; font-size: 10px; cursor: pointer;">
              <div style="display: flex; align-items: center; gap: 6px;">
                <input type="radio" name="speed" style="accent-color: #0066cc;" />
                <span style="color: #515154;">Standard Ground (3-5 Days)</span>
              </div>
              <span style="color: #7a7a7a;">FREE</span>
            </label>
          </div>
        </div>

        <!-- Billing Sync -->
        <div data-deck-target="checkout-billing-sync" class="sync-address-checkbox" style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 10px 14px; display: flex; align-items: center; gap: 8px; cursor: pointer;">
          <input type="checkbox" checked style="accent-color: #0066cc; width: 15px; height: 15px;" />
          <span style="font-size: 11px; color: #1d1d1f; font-weight: 600;">Billing address matches shipping destination</span>
        </div>

        <!-- Saved Payment Card Option -->
        <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; font-size: 11px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 16px;">💳</span>
            <div>
              <div style="font-weight: 600; color: #1d1d1f;">Saved Visa ending in •••• 4242</div>
              <div style="font-size: 9px; color: #7a7a7a;">Expires 09/28 • VIP Primary</div>
            </div>
          </div>
          <span style="color: #0066cc; font-weight: 600; font-size: 10px; cursor: pointer;">Select</span>
        </div>

        <button style="background: #0066cc; color: white; border: none; padding: 12px; border-radius: 9999px; font-size: 13px; font-weight: 600; cursor: pointer; box-shadow: 0 2px 10px rgba(0,102,204,0.25);">
          Complete Order ($1,299.00)
        </button>
      </div>
    `
  },

  membership: {
    id: 'membership',
    title: 'VIP Membership Lounge',
    subtitle: 'A Visible Status Ladder',
    principle: 'status',
    speakerNotes: `On Slide 7, we examine the Status principle. The current Silver tier establishes a visible status difference through a named rank and badge. The progress bar demonstrates Reward and Achievement Structures by showing accumulated progress and the exact remaining distance to Gold. This turns aspiration into a realistic, actionable goal while preserving a constructive, transparent path forward.`,
    features: [
      {
        id: 'vip-s1',
        number: 1,
        name: 'Elite Silver Tier Badge Identity',
        principle: 'status',
        subPrinciple: 'status-differences',
        description: 'Displays active VIP tier status with metallic badge styling and member serial ID, making position in the hierarchy visible.',
        rationale: 'The named Silver tier and badge establish a visible status difference, making the member\'s position in the hierarchy clear, transparent, and recognizable.',
        businessValue: 'Drives 2.4x higher repeat brand engagement through recognized rank.',
        implementationNotes: 'Includes metallic badge styling and member tier level.',
        ethicalGuardrail: 'Make tier requirements and benefit differences transparent without portraying lower tiers as inferior.',
        target: {
          dataAttribute: 'vip-tier-badge',
          css: '.current-tier-card',
          text: { value: 'ELITE SILVER MEMBER', tag: 'div' },
          preferredSide: 'right'
        }
      },
      {
        id: 'vip-s2',
        number: 2,
        name: 'Ladder Spend Progress to Elite Gold',
        principle: 'status',
        subPrinciple: 'reward-achievement',
        supportingSubPrinciple: 'inspiring-aspiration',
        description: 'Visual progress bar displaying current spend ($650 / $1,000) and remaining distance ($350) toward unlocking Elite Gold status.',
        rationale: 'Connects continued spending to incremental progress. Showing progress already achieved and a realistic remaining distance to Gold turns a vague aspiration into an actionable goal.',
        businessValue: 'Increases customer spend trajectory toward tier unlocks by 29%.',
        implementationNotes: 'Shows exact remaining spend amount required to reach Gold.',
        ethicalGuardrail: 'Tier requirements and qualifying thresholds must be transparent, attainable, and designed not to encourage harmful or unaffordable overspending.',
        target: {
          dataAttribute: 'vip-tier-ladder',
          css: '.tier-progress-track',
          text: { value: '$350.00 spend remaining to reach Elite Gold', tag: 'div' },
          preferredSide: 'right'
        }
      },
      {
        id: 'vip-s3',
        number: 3,
        name: 'Unlocked Member Privilege Checklist',
        principle: 'status',
        subPrinciple: 'status-differences',
        supportingSubPrinciple: 'customer-importance',
        description: 'Displays unlocked perks (Free Express Shipping, Early Flash Drop Access, 1.5x Points Multiplier, 24/7 VIP Chat Queue).',
        rationale: 'The benefits demonstrate that the member\'s tier provides tangible privileges rather than only a decorative label, validating current rank.',
        businessValue: '+40% loyalty program satisfaction score.',
        implementationNotes: 'Checklist renders active unlocked badges dynamically per member level.',
        ethicalGuardrail: 'Ensure status benefits are real, accurately described, and consistently delivered.',
        target: {
          dataAttribute: 'vip-benefits-grid',
          css: '.unlocked-perks-list',
          text: { value: 'Active Silver Tier Privileges', tag: 'div' },
          preferredSide: 'right'
        }
      }
    ],
    htmlCode: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Plus Jakarta Sans', sans-serif; background-color: #f5f5f7; color: #1d1d1f; padding: 20px; border-radius: 12px; display: flex; flex-direction: column; gap: 14px;">
        <!-- Member Badge -->
        <div data-deck-target="vip-tier-badge" class="current-tier-card" style="background: linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%); border: 1px solid #d2d2d7; border-radius: 14px; padding: 18px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
          <div>
            <span style="font-size: 9px; font-weight: 800; color: #0066cc; background: #eef6ff; padding: 3px 8px; border-radius: 9999px; text-transform: uppercase;">Active Rank</span>
            <div style="font-size: 18px; font-weight: 700; color: #1d1d1f; margin-top: 4px; letter-spacing: -0.01em;">ELITE SILVER MEMBER</div>
            <div style="font-size: 10px; color: #7a7a7a; margin-top: 2px;">Member ID: #LX-88902 • VIP Status Verified</div>
          </div>
          <div style="font-size: 36px;">🥈</div>
        </div>

        <!-- Tier Ladder Progress -->
        <div data-deck-target="vip-tier-ladder" class="tier-progress-track" style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; padding: 14px; display: flex; flex-direction: column; gap: 8px;">
          <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 600;">
            <span style="color: #0066cc;">$350.00 spend remaining to reach Elite Gold</span>
            <span style="color: #b45309;">$650 / $1,000</span>
          </div>
          <div style="height: 8px; background: #e0e0e0; border-radius: 4px; overflow: hidden;">
            <div style="width: 65%; height: 100%; background: #0066cc; border-radius: 4px;"></div>
          </div>
        </div>

        <!-- Unlocked Benefits Checklist -->
        <div data-deck-target="vip-benefits-grid" class="unlocked-perks-list" style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; padding: 14px;">
          <div style="font-size: 10px; font-weight: 800; color: #0066cc; text-transform: uppercase; margin-bottom: 8px;">ACTIVE SILVER TIER PRIVILEGES</div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 11px; color: #1d1d1f;">
            <div>✅ Free Express Delivery</div>
            <div>✅ Early Flash Drop Access</div>
            <div>✅ 1.5x Points Multiplier</div>
            <div>✅ 24/7 VIP Chat Queue</div>
          </div>
        </div>

        <!-- Reward Points Balance Card -->
        <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; padding: 14px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-size: 9px; font-weight: 800; color: #7a7a7a; text-transform: uppercase;">REWARD POINTS BALANCE</div>
            <div style="font-size: 16px; font-weight: 700; color: #1d1d1f; margin-top: 2px;">1,450 Luxe Points <span style="font-size: 11px; color: #15803d; font-weight: 600;">($14.50 Voucher)</span></div>
          </div>
          <button style="background: #0066cc; color: white; border: none; padding: 6px 12px; border-radius: 9999px; font-size: 10px; font-weight: 600; cursor: pointer;">Redeem Points</button>
        </div>
      </div>
    `
  },

  account: {
    id: 'account',
    title: 'Member Profile & Pass',
    subtitle: 'Status Becomes Part of Identity',
    principle: 'status',
    speakerNotes: `On Slide 8, we explore how Status becomes part of user identity. The Gold tier preview illustrates Inspiring Aspiration Through Status by presenting an attractive future vision. The VIP Concierge demonstrates Making Customers Feel Important through elevated recognition. Finally, the Double Tier Credits event shows Payment Versus Achievement by offering accelerated status progress during a transparent campaign window.`,
    features: [
      {
        id: 'acc-s1',
        number: 1,
        name: 'VIP Concierge Priority Channel',
        principle: 'status',
        subPrinciple: 'customer-importance',
        supportingSubPrinciple: 'status-differences',
        description: 'Direct 24/7 dedicated concierge button reserved for ranked members with personalized recognition.',
        rationale: 'Recognises and elevates members through dedicated, priority service, proving that higher status brings genuine platform importance.',
        businessValue: 'Boosts high-value client retention.',
        implementationNotes: 'Direct integration with priority customer support chat queue.',
        ethicalGuardrail: 'Service quality promises for ranked members must be consistently maintained.',
        target: {
          dataAttribute: 'account-vip-concierge',
          css: '.concierge-access-button',
          text: { value: 'Connect to VIP Concierge (24/7)', tag: 'button' },
          preferredSide: 'right'
        }
      },
      {
        id: 'acc-s2',
        number: 2,
        name: 'Double Tier Points Event Banner',
        principle: 'status',
        subPrinciple: 'payment-vs-achievement',
        supportingPrinciple: 'loss-avoidance',
        supportingSubPrinciple: 'time-scarcity',
        description: 'Limited-time 2X Tier Credits event allowing members to accelerate tier progression on qualifying purchases.',
        rationale: 'Allows users to advance faster through qualifying spend during a limited period. The primary purpose is status acceleration; the timer is the Loss Avoidance mechanism.',
        businessValue: 'Generates significant revenue spikes during campaign windows.',
        implementationNotes: 'Server multiplier engine automatically doubles calculated tier points during campaign window.',
        ethicalGuardrail: 'The qualifying spend, multiplier, time window and effect on tier progress must be transparent. The design should not encourage harmful overspending.',
        target: {
          dataAttribute: 'account-double-points',
          css: '.double-tier-event-card',
          text: { value: '⚡ 2X TIER CREDITS ACTIVE (Ends in 18h)', tag: 'div' },
          preferredSide: 'right'
        }
      },
      {
        id: 'acc-s3',
        number: 3,
        name: 'Aspirational Gold Tier Preview',
        principle: 'status',
        subPrinciple: 'inspiring-aspiration',
        supportingSubPrinciple: 'aspirational-marketing',
        description: 'Previews exclusive benefits (Personal Styling Assistant & Private Lounge Invites) unlocked upon reaching Elite Gold rank.',
        rationale: 'The premium tier gives the user an aspirational future identity and shows what higher status could unlock, motivating progression while keeping the path visible and realistic.',
        businessValue: '+33% upsell engagement.',
        implementationNotes: 'Interactive preview modal showing Gold-only benefits and perks.',
        ethicalGuardrail: 'Ensure previewed higher-tier benefits are genuinely delivered and that the path to reach them remains transparent and fair.',
        target: {
          dataAttribute: 'account-gold-preview',
          css: '.aspirational-tier-banner',
          text: { value: 'Preview Elite Gold Privileges', tag: 'div' },
          preferredSide: 'right'
        }
      }
    ],
    htmlCode: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Plus Jakarta Sans', sans-serif; background-color: #f5f5f7; color: #1d1d1f; padding: 20px; border-radius: 12px; display: flex; flex-direction: column; gap: 14px;">
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">
          <div>
            <h2 style="font-size: 15px; font-weight: 700; color: #1d1d1f;">MEMBER DASHBOARD</h2>
            <div style="font-size: 10px; color: #7a7a7a;">Welcome, Stephen (Silver Member)</div>
          </div>

          <button data-deck-target="account-vip-concierge" class="concierge-access-button" style="background: #0066cc; color: white; border: none; padding: 8px 14px; border-radius: 9999px; font-size: 11px; font-weight: 600; cursor: pointer; box-shadow: 0 2px 10px rgba(0,102,204,0.25);">
            💬 Connect to VIP Concierge (24/7)
          </button>
        </div>

        <!-- Double Points Event -->
        <div data-deck-target="account-double-points" class="double-tier-event-card" style="background: #eef6ff; border: 1px solid #b3d7ff; border-radius: 10px; padding: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 16px;">🚀</span>
            <span style="font-size: 11px; font-weight: 700; color: #0066cc;">⚡ 2X TIER CREDITS ACTIVE (Ends in 18h)</span>
          </div>
          <span style="font-size: 10px; color: #b45309; font-weight: 700;">Earn Double Gold Credits</span>
        </div>

        <!-- Aspirational Gold Preview -->
        <div data-deck-target="account-gold-preview" class="aspirational-tier-banner" style="background: linear-gradient(135deg, #fefce8 0%, #fef08a 100%); border: 1px solid #fde047; border-radius: 12px; padding: 16px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 10px rgba(234,179,8,0.12);">
          <div>
            <div style="font-size: 9px; font-weight: 800; color: #a16207; text-transform: uppercase;">NEXT TIER PREVIEW</div>
            <div style="font-size: 16px; font-weight: 700; color: #713f12; margin-top: 2px;">Preview Elite Gold Privileges</div>
            <div style="font-size: 10px; color: #854d0e; margin-top: 2px;">Includes Personal Styling Assistant & Private Lounge Invites</div>
          </div>
          <div style="font-size: 32px;">🥇</div>
        </div>

        <!-- Active Shipment Card -->
        <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; padding: 14px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-size: 9px; font-weight: 800; color: #15803d; text-transform: uppercase;">ACTIVE SHIPMENT IN TRANSIT</div>
            <div style="font-size: 12px; font-weight: 700; color: #1d1d1f; margin-top: 2px;">Order #LX-99120 • Chronos Titan Edition</div>
            <div style="font-size: 10px; color: #7a7a7a;">Estimated Delivery: Tomorrow by 3:00 PM via FedEx Express</div>
          </div>
          <button style="background: #f5f5f7; border: 1px solid #d2d2d7; color: #0066cc; padding: 6px 12px; border-radius: 9999px; font-size: 10px; font-weight: 600; cursor: pointer; white-space: nowrap;">Track Package</button>
        </div>
      </div>
    `
  }
};
