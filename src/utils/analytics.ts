import { AnalyticsEvent } from '../types';

// Google Analytics 4 event tracking
export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined tracking functions
export const trackWhatsAppClick = (source: string) => {
  trackEvent({
    action: 'whatsapp_click',
    category: 'engagement',
    label: source,
  });
};

export const trackFormSubmission = (formType: string) => {
  trackEvent({
    action: 'form_submit',
    category: 'conversion',
    label: formType,
  });
};

export const trackPriceCalculation = (product: string, quantity: number) => {
  trackEvent({
    action: 'price_calculation',
    category: 'engagement',
    label: product,
    value: quantity,
  });
};

export const trackGalleryFilter = (category: string) => {
  trackEvent({
    action: 'gallery_filter',
    category: 'engagement',
    label: category,
  });
};

// Page view tracking
export const trackPageView = (page: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}