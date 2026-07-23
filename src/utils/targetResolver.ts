import { FeatureAnnotation, ResolutionResult } from '../types';

export function resolveFeatureTarget(
  feature: FeatureAnnotation,
  rootElement: HTMLElement | DocumentFragment
): ResolutionResult {
  const result: ResolutionResult = {
    featureId: feature.id,
    featureNumber: feature.number,
    featureName: feature.name,
    status: 'unresolved',
    attemptedDataAttr: feature.target.dataAttribute,
    attemptedCss: feature.target.css,
    attemptedText: feature.target.text?.value
  };

  let resolvedEl: HTMLElement | null = null;

  // 1. Try dataAttribute matching
  if (feature.target.dataAttribute) {
    const selector = `[data-deck-target="${feature.target.dataAttribute}"]`;
    resolvedEl = rootElement.querySelector<HTMLElement>(selector);
    if (resolvedEl) {
      result.status = 'resolved';
      result.resolvedBy = 'dataAttribute';
    }
  }

  // 2. Try CSS matching
  if (!resolvedEl && feature.target.css) {
    try {
      resolvedEl = rootElement.querySelector<HTMLElement>(feature.target.css);
      if (resolvedEl) {
        result.status = 'resolved';
        result.resolvedBy = 'css';
      }
    } catch {
      // invalid CSS selector fallback
    }
  }

  // 3. Try Text matching
  if (!resolvedEl && feature.target.text?.value) {
    const targetText = feature.target.text.value.trim().toLowerCase();
    const tag = feature.target.text.tag ? feature.target.text.tag.toLowerCase() : '*';
    const elements = Array.from(rootElement.querySelectorAll<HTMLElement>(tag));
    
    // Exact text match first
    let matchingEls = elements.filter(el => {
      const elText = (el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
      return elText === targetText;
    });

    // Contains match second if exact yields no result
    if (matchingEls.length === 0) {
      matchingEls = elements.filter(el => {
        const elText = (el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
        return elText.includes(targetText);
      });
    }

    const occurrence = (feature.target.text.occurrence || 1) - 1;
    if (matchingEls[occurrence]) {
      resolvedEl = matchingEls[occurrence];
      result.status = 'resolved';
      result.resolvedBy = 'text';
    }
  }

  if (resolvedEl) {
    // Add data-deck-target attribute
    resolvedEl.setAttribute('data-deck-target', feature.id);
    
    // Store bounding rectangle relative to screen container
    const containerRect = (rootElement as HTMLElement).getBoundingClientRect
      ? (rootElement as HTMLElement).getBoundingClientRect()
      : { top: 0, left: 0, width: 800, height: 600 };
      
    const rect = resolvedEl.getBoundingClientRect();
    
    const relativeRect = {
      top: rect.top - containerRect.top,
      left: rect.left - containerRect.left,
      width: rect.width,
      height: rect.height
    };

    result.boundingClientRect = relativeRect;

    // Compute optimal callout position
    const preferredSide = feature.target.preferredSide || 'right';
    let posX = 0;
    let posY = 0;

    switch (preferredSide) {
      case 'right':
        posX = relativeRect.left + relativeRect.width + 12;
        posY = relativeRect.top + relativeRect.height / 2 - 16;
        break;
      case 'left':
        posX = relativeRect.left - 40;
        posY = relativeRect.top + relativeRect.height / 2 - 16;
        break;
      case 'top':
        posX = relativeRect.left + relativeRect.width / 2 - 16;
        posY = relativeRect.top - 40;
        break;
      case 'bottom':
        posX = relativeRect.left + relativeRect.width / 2 - 16;
        posY = relativeRect.top + relativeRect.height + 12;
        break;
    }

    // Clamp to viewport boundary (assuming 600px x 500px container bounds)
    const clampedX = Math.max(10, Math.min(posX, 560));
    const clampedY = Math.max(10, Math.min(posY, 460));

    result.computedPosition = {
      x: clampedX,
      y: clampedY,
      side: preferredSide
    };
  } else {
    result.errorDetails = `Failed to resolve target for callout #${feature.number} (${feature.id}). Attempted dataAttr: "${feature.target.dataAttribute}", CSS: "${feature.target.css}", Text: "${feature.target.text?.value}".`;
  }

  return result;
}
