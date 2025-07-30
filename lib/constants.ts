export const ANIMATION_CONSTANTS = {
  HERO_WORDS_ROTATION_INTERVAL: 3000,
  NOTIFICATION_AUTO_CLOSE_DELAY: 6000,
  INTERSECTION_THRESHOLD: 0.1,
  METHODOLOGY_INTERSECTION_THRESHOLD: 0.3,
  VIDEO_RESTART_DELAY: 5000,
} as const;

export const HERO_WORDS = ["crezca", "fluya", "escale", "respire", "evolucione"] as const;

export const BENEFITS_DATA = [
  {
    icon: "Shield",
    title: "Precisión sin margen de error",
    description: "Adiós a las fallas manuales: nuestros sistemas aprenden y mejoran solos para alcanzar una exactitud del 99.9%.",
    color: "from-green-400 to-emerald-500",
    stat: "99.9% precisión",
  },
  {
    icon: "Rocket",
    title: "Velocidad que rompe récords", 
    description: "Lo que antes tomaba días, ahora sucede en segundos gracias a procesos hasta 1000x más rápidos.",
    color: "from-[#00bce7] to-blue-500",
    stat: "1000x más rápido",
  },
  {
    icon: "TrendingUp",
    title: "Escala sin límites",
    description: "Crece sin preocuparte por el volumen: nuestros sistemas evolucionan contigo y no pierden calidad.",
    color: "from-yellow-400 to-orange-500",
    stat: "Escalabilidad infinita",
  },
  {
    icon: "Brain",
    title: "Inteligencia que se adapta a ti",
    description: "Los sistemas aprenden de tus procesos y se ajustan automáticamente a nuevos retos.",
    color: "from-purple-400 to-pink-500",
    stat: "Aprendizaje continuo",
  },
] as const;

export const METHODOLOGY_STEPS = [
  {
    phase: "01",
    title: "People — Personas primero",
    description: "Comprendemos a las personas que viven el cambio, más allá de los organigramas, para diseñar soluciones que realmente les ayuden.",
    icon: "Users",
    color: "from-purple-500 to-pink-500",
    side: "left",
  },
  {
    phase: "02", 
    title: "Perception — Cómo se percibe",
    description: "Medimos cómo se siente y percibe el cambio en la organización para asegurar su aceptación y adopción.",
    icon: "Brain",
    color: "from-[#00bce7] to-blue-500",
    side: "right",
  },
  {
    phase: "03",
    title: "Performance — Enfocados en resultados",
    description: "Definimos y alineamos los objetivos antes de mover cualquier pieza, para que cada acción tenga propósito.",
    icon: "Target",
    color: "from-green-500 to-emerald-500", 
    side: "left",
  },
  {
    phase: "04",
    title: "Process — Optimizar con sentido",
    description: "Solo entonces optimizamos los flujos de trabajo y sumamos tecnología donde realmente genera valor.",
    icon: "Cog",
    color: "from-yellow-500 to-orange-500",
    side: "right",
  },
] as const;

export const USE_CASES = [
  {
    title: "Atención al cliente 24/7",
    description: "Desarrollamos un chatbot que atiende de manera autónoma las consultas de los clientes las 24 horas, los 7 días de la semana, resolviendo la mayoría de las interacciones sin intervención humana. Esto permitió a la empresa liberar a su equipo para enfocarse en tareas de mayor valor.",
    metrics: [
      "80% de las consultas resueltas automáticamente",
      "Reducción de tiempos de respuesta a segundos", 
      "Incremento en la satisfacción de los clientes",
    ],
    industry: "Servicios",
  },
  {
    title: "Agente calificador de leads",
    description: "Automatizamos la calificación de prospectos para priorizar los más valiosos, reduciendo el tiempo de seguimiento y aumentando significativamente la efectividad del equipo comercial.",
    metrics: [
      "50% de aumento en la tasa de cierre",
      "Respuesta a leads en menos de 5 minutos",
      "Mejora en la calidad de los prospectos contactados",
    ],
    industry: "Legal",
  },
  {
    title: "Generación automática de imágenes",
    description: "Implementamos un sistema que genera fotografías de productos en minutos con IA, eliminando la necesidad de sesiones fotográficas costosas y lentas. Esto permitió lanzar nuevos productos más rápido y con menor costo.",
    metrics: [
      "Producción de imágenes en minutos",
      "Reducción de costos en más de 60%",
      "Mayor velocidad en lanzamientos y campañas",
    ],
    industry: "Retail",
  },
] as const;

export const BEFORE_AFTER_DATA = {
  before: [
    {
      icon: "📅",
      text: "Más de 8 horas semanales",
      subtext: "dedicadas a tareas repetitivas",
    },
    {
      icon: "🧠",
      text: "Tu equipo consumido resolviendo imprevistos",
      subtext: "en lugar de innovar",
    },
    {
      icon: "🐢",
      text: "Procesos manuales lentos",
      subtext: "y propensos a errores",
    },
    {
      icon: "🔌",
      text: "Sistemas aislados",
      subtext: "sin seguimiento claro",
    },
  ],
  after: [
    {
      icon: "⚡",
      text: "Reducción de hasta 70%",
      subtext: "del tiempo operativo",
    },
    {
      icon: "📈",
      text: "Procesos medibles, escalables",
      subtext: "y predecibles",
    },
    {
      icon: "🤖",
      text: "Flujos automáticos con IA",
      subtext: "y bots 24/7",
    },
    {
      icon: "🍀",
      text: "Integración completa entre equipos,",
      subtext: "procesos y sistemas",
    },
  ],
} as const;

export const TESTIMONIALS = [
  { 
    quote: "Con Meikify optimizamos nuestros procesos y vimos resultados inmediatos.", 
    author: "Ana G., Retail" 
  },
  { 
    quote: "El equipo de Meikify nos permitió escalar con IA sin complicaciones.", 
    author: "Carlos L., Legal" 
  },
  { 
    quote: "Nuestra productividad subió un 50% gracias a su enfoque personalizado.", 
    author: "María P., Tecnología" 
  },
] as const;

export const NAVIGATION_ITEMS = [
  { name: "Soluciones", href: "#soluciones" },
  { name: "Metodología", href: "#metodologia" },
  { name: "Casos", href: "#casos" },
] as const;

export const CTA_FEATURES = [
  { icon: "Star", text: "Diagnóstico express" },
  { icon: "Shield", text: "Garantía de resultados" },
  { icon: "Users", text: "Soporte 24/7 especializado" },
] as const;