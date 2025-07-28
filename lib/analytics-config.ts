// Configuración centralizada de tracking
export const ANALYTICS_CONFIG = {
  // Google Analytics 4
  GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "GA_MEASUREMENT_ID",

  // Facebook Pixel
  FB_PIXEL_ID: process.env.NEXT_PUBLIC_FB_PIXEL_ID || "FB_PIXEL_ID",

  // Google Tag Manager
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || "GTM-ID",

  // Chatwoot
  CHATWOOT_TOKEN: process.env.NEXT_PUBLIC_CHATWOOT_TOKEN || "CHATWOOT_TOKEN",

  // Credenciales
  ANALYTICS_USER: process.env.NEXT_PUBLIC_ANALYTICS_USER || "user",
  ANALYTICS_PASSWORD: process.env.NEXT_PUBLIC_ANALYTICS_PASSWORD || "password",


  // Eventos personalizados
  CUSTOM_EVENTS: {
    // Google Analytics Events
    GA: {
      FORM_SUBMIT: "form_submit",
      CTA_CLICK: "cta_click",
      WHATSAPP_CLICK: "whatsapp_click",
      DEMO_REQUEST: "demo_request",
      SECTION_VIEW: "section_view",
      SCROLL_DEPTH: "scroll",
      PHONE_CLICK: "phone_click",
      EMAIL_CLICK: "email_click",
    },

    // Facebook Pixel Events
    FB: {
      LEAD: "Lead",
      CONTACT: "Contact",
      SCHEDULE: "Schedule",
      VIEW_CONTENT: "ViewContent",
      PAGE_VIEW: "PageView",
    },
  },

  // Configuración de scroll tracking
  SCROLL_THRESHOLDS: [25, 50, 75, 90, 100],

  // Secciones a trackear
  TRACKED_SECTIONS: [
    "hero",
    "soluciones",
    "metodologia",
    "casos",
    "fundador",
    "antes-despues",
    "tecnologias",
    "contacto",
  ],
}

