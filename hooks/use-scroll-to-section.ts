import { useCallback } from 'react';
import { CONFIG } from '@/lib/config';

interface ScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

interface TrackingData {
  buttonText: string;
  section: string;
}

export const useScrollToSection = () => {
  const scrollToSection = useCallback((
    sectionId: string,
    analytics?: any,
    trackingData?: TrackingData,
    options: ScrollOptions = {}
  ) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const elementPosition = 
        (element as HTMLElement).offsetTop - 
        (options.offset ?? CONFIG.HEADER_HEIGHT);
      
      window.scrollTo({
        top: elementPosition,
        behavior: options.behavior ?? "smooth",
      });
      
      // Track analytics if provided
      if (analytics && trackingData) {
        analytics.trackCTAClick(trackingData.buttonText, trackingData.section);
      }
    }
  }, []);

  const createScrollHandler = useCallback((
    sectionId: string,
    analytics?: any,
    trackingData?: TrackingData,
    options: ScrollOptions = {}
  ) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      scrollToSection(sectionId, analytics, trackingData, options);
    };
  }, [scrollToSection]);

  return {
    scrollToSection,
    createScrollHandler,
  };
};