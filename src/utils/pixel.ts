/**
 * Meta Pixel Event Tracking Helper
 */
export const trackPixel = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      if (params) {
        window.fbq('track', eventName, params);
      } else {
        window.fbq('track', eventName);
      }
    } catch (err) {
      console.warn('[Meta Pixel] Error tracking event:', err);
    }
  }
};
