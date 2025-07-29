declare global {
  interface Window {
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
    fbq: (command: string, event: string, parameters?: any) => void;
    gtag: (command: string, event: string, parameters?: any) => void;
    dataLayer: any[];
  }
}

export {};