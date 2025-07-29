// Component Props Types
export interface NotificationProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  onClose: () => void;
}

export interface FormData {
  nombre: string;
  correo: string;
  whatsapp: string;
  empresa: string;
  cargo: string;
  tarea_proceso: string;
  recaptcha_token?: string;
}

export interface HeroWord {
  text: string;
  index: number;
}

export interface BenefitData {
  icon: string;
  title: string;
  description: string;
  color: string;
  stat: string;
}

export interface MethodologyStep {
  phase: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  side: 'left' | 'right';
}

export interface UseCase {
  title: string;
  description: string;
  metrics: string[];
  industry: string;
  icon: string;
}

export interface BeforeAfterItem {
  icon: string;
  text: string;
  subtext: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface CTAFeature {
  icon: string;
  text: string;
}

// Analytics Types
export interface AnalyticsTracker {
  trackPageView: (title: string, url: string) => void;
  trackCTAClick: (buttonText: string, section: string) => void;
  trackWhatsAppClick: (source: string) => void;
  trackDemoRequest: (source: string) => void;
}

// Hook Types
export interface ScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

export interface TrackingData {
  buttonText: string;
  section: string;
}

// Component State Types
export interface VisibleSections extends Set<string> {}

export interface VisibleMethodologyCards extends Set<string> {}

export interface MousePosition {
  x: number;
  y: number;
}

// API Response Types
export interface ContactResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Icon mapping type
export type IconName = 
  | 'Shield' 
  | 'Rocket' 
  | 'TrendingUp' 
  | 'Brain' 
  | 'Users' 
  | 'Target' 
  | 'Cog' 
  | 'Star';

export {}