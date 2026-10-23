// Homepage content — mirrors the future Strapi `HomePage` single-type.

export const hero = {
  eyebrow: "La plataforma más completa de LATAM para vender con IA",
  headline: "Cierra más ventas",
  headlineAccent: "con tu Agente AI",
  subtitle:
    "Tu Agente AI atiende, califica y agenda a tus clientes 24/7 por WhatsApp, Instagram y más — mientras tú duermes.",
  badge: "Tu Agente AI ya está disponible",
  stats: [
    { label: "negocios activos", value: "500+" },
    { label: "atención automática", value: "24/7" },
    { label: "personalizada gratis", value: "Demo" },
  ],
  cta: "Agenda tu demo hoy",
  ctaHref: "/agenda/",
  secondaryCta: "Ver cómo funciona ↓",
  trustBullets: ["Sin tarjeta de crédito", "Sin contratos", "Cancela cuando quieras"],
  widget: {
    title: "Agente AI · Cosmiq",
    status: "Activo 24/7",
    metrics: [
      { label: "Leads hoy", value: "24", icon: "trending-up" as const, color: "text-blue-300" },
      { label: "Citas", value: "8", icon: "calendar" as const, color: "text-emerald-300" },
      { label: "Conversión", value: "42%", icon: "zap" as const, color: "text-amber-300" },
    ],
    conversationLabel: "WhatsApp — conversación activa",
    messages: [
      { from: "user" as const, text: "Hola, ¿cuánto cuesta una consulta?", time: "12:04" },
      { from: "ai" as const, text: "¡Hola! La consulta es $80. ¿Te agendamos esta semana?", time: "12:04 · Agente AI" },
      { from: "user" as const, text: "Sí, el jueves si hay.", time: "12:05" },
      { from: "ai" as const, text: "Perfecto, cita confirmada para el jueves 29 a las 10am ✅", time: "12:05 · Agente AI" },
    ],
    floatingBadge: "Vendiendo ahora",
    toastTitle: "Venta cerrada",
    toastSubtitle: "Agente AI · hace 2 min",
  },
};

export const certificationBadges = [
  "/images/certifications/badge-01.gif",
  "/images/certifications/badge-02.gif",
  "/images/certifications/badge-03.gif",
  "/images/certifications/badge-04.gif",
  "/images/certifications/badge-05.gif",
  "/images/certifications/badge-06.gif",
  "/images/certifications/badge-07.png",
];

export const howItWorks = {
  eyebrow: "Sin complicaciones",
  headline: "Listo en menos de 15 minutos",
  subtitle: "Nuestro equipo te acompaña en el proceso. No estás solo.",
  steps: [
    {
      title: "Crea tu cuenta",
      description: "Agenda en 2 minutos. Sin tarjeta de crédito. Demo personalizada para explorar todo.",
      time: "2 minutos",
    },
    {
      title: "Configura tu Agente AI",
      description:
        "Ingresa la info de tu negocio y el agente aprende tu tono, productos y cómo quieres responder. No se necesita código.",
      time: "10 minutos",
    },
    {
      title: "Empieza a vender",
      description:
        "Conecta tu WhatsApp e Instagram. Desde ese momento, tu agente atiende 24/7. Tú recibes las notificaciones de ventas.",
      time: "3 minutos",
    },
  ],
  cta: "Empieza ahora, es gratis",
};

export const liveCounter = {
  eyebrow: "Crecimiento real · En vivo",
  headline: "Cada vez más usuarios",
  headlineAccent: "confían en Cosmiq",
  counters: [
    { label: "Hoy", value: "332" },
    { label: "Ayer", value: "107" },
    { label: "Total", value: "90.133" },
  ],
};

export const mediaStrip = {
  eyebrow: "Integrado con las herramientas que ya usas",
  partners: [
    { name: "Meta Business Partner", logo: "/images/partners/meta.png", className: "h-14" },
    { name: "Google Premier Partner", logo: "/images/partners/google.png", className: "h-12" },
    { name: "Anthropic", logo: "/images/partners/anthropic.png", className: "h-8" },
    { name: "NVIDIA", logo: "/images/partners/nvidia.png", className: "h-16" },
  ],
};

export const featureBlocks = [
  {
    eyebrow: "Mensajería Inteligente 24/7",
    headline: "Tu vendedor más productivo",
    headlineAccent: "nunca duerme",
    bullets: [
      "Atiende, califica y agenda por WhatsApp, Instagram, SMS y web",
      "Aprende tu marca, tono y productos — responde como tú",
      "Sincroniza citas directo a tu calendario sin links externos",
    ],
    cta: "Agenda tu demo hoy",
    mock: "chat" as const,
  },
  {
    eyebrow: "Inteligencia de Ventas con IA",
    headline: "Tu Agente AI sabe",
    headlineAccent: "quién va a comprar",
    bullets: [
      "La IA prioriza automáticamente los leads con más probabilidad de cierre",
      "Seguimiento inteligente: el Agente AI contacta, recuerda y empuja sin que tú intervengas",
      "Métricas en tiempo real de qué conversaciones convierten y por qué",
    ],
    cta: "Agenda tu demo hoy",
    mock: "kanban" as const,
  },
  {
    eyebrow: "Automatizaciones y Campañas",
    headline: "Una plataforma.",
    headlineAccent: "Todos tus canales.",
    bullets: [
      "Automatizaciones de seguimiento que nutren leads sin intervención humana",
      "Campañas masivas por WhatsApp, email y redes sociales desde un solo lugar",
      "Todo conectado: captación → calificación → agente IA → cierre",
    ],
    cta: "Agenda tu demo hoy",
    mock: "campaign" as const,
  },
];

export const testimonialsSection = {
  eyebrow: "Historias de éxito reales",
  headline: "Empresas como la tuya ya venden más con Cosmiq",
  stats: [
    { label: "empresas activas", value: "277+" },
    { label: "renuevan cada mes", value: "52%" },
    { label: "leads atendidos por IA", value: "1M+" },
  ],
};

export const benefits = {
  eyebrow: "¿Por qué Cosmiq?",
  headline: "+Ventas, Menos Trabajo, Todo Automatizado",
  cards: [
    {
      emoji: "/images/emojis/chart_with_upwards_trend.png",
      title: "Más ventas, mismo equipo",
      description: "Tu Agente AI convierte mensajes en citas agendadas y ventas cerradas. 24/7, sin que tú intervengas.",
      stat: "↑ 40% de conversión promedio",
    },
    {
      emoji: "/images/emojis/exploding_head.png",
      title: "Cero curiosos, más compradores",
      description: "La IA califica a cada prospecto al instante. Tu equipo solo habla con personas listas para comprar.",
      stat: "↓ 70% del tiempo en atención manual",
    },
    {
      emoji: "/images/emojis/sunglasses.png",
      title: "Un solo Agente AI lo hace todo",
      description:
        "Tu Agente AI atiende, califica, agenda y cierra ventas solo — las 24 horas, todos los días. Sin que tú intervengas.",
      stat: "↑ 80% del proceso de ventas automatizado",
    },
  ],
  cta: "Agenda tu demo hoy",
};

export const industries = {
  eyebrow: "Para todo tipo de negocio",
  headline: "Cosmiq funciona para tu industria",
  items: [
    { emoji: "🏥", label: "Clínicas y salud" },
    { emoji: "⚖️", label: "Estudios legales" },
    { emoji: "🏠", label: "Inmobiliarias" },
    { emoji: "🎓", label: "Academias y cursos" },
    { emoji: "🛍️", label: "E-commerce y retail" },
    { emoji: "🏨", label: "Hoteles y turismo" },
    { emoji: "🍕", label: "Restaurantes" },
    { emoji: "🏗️", label: "Constructoras" },
    { emoji: "📣", label: "Agencias de marketing" },
    { emoji: "💼", label: "Consultores y coaches" },
    { emoji: "🦷", label: "Dentistas" },
    { emoji: "💆", label: "Centros de bienestar" },
  ],
  cta: "Agenda tu demo hoy",
};

export const homeFaq = [
  {
    question: "¿Cuánto tiempo tarda en estar funcionando?",
    answer:
      "En menos de 15 minutos tu agente ya está activo. Registro (2 min) + configuración (10 min) + conectar WhatsApp (3 min). No necesitas saber de tecnología. Nosotros te guiamos.",
  },
  {
    question: "¿Necesito conocimientos técnicos para configurarlo?",
    answer: "Cero. Cosmiq está diseñado para dueños de negocio, no para programadores. Si sabes usar WhatsApp, puedes configurar Cosmiq.",
  },
  {
    question: "¿El agente AI responde de forma natural o parece un bot?",
    answer:
      "Responde como un humano entrenado en tu negocio. Aprende tu tono, tus productos y cómo manejas las objeciones. Tus clientes no sabrán si hablan con un humano o con IA.",
  },
  {
    question: "¿Funciona con mi WhatsApp actual?",
    answer: "Sí, conectas tu número de WhatsApp Business existente o usas uno nuevo. Usamos la API oficial de WhatsApp — sin riesgo de bloqueo.",
  },
  {
    question: "¿Qué pasa si quiero cancelar?",
    answer: "Cancelas en cualquier momento desde tu panel, sin llamadas ni trámites. Sin cargos de cancelación. Sin períodos de permanencia.",
  },
  {
    question: "¿Los precios son fijos o hay costos ocultos?",
    answer: "Lo que ves es lo que pagas. Sin cargos por instalación, sin comisiones por venta, sin costos ocultos. El precio del plan es todo lo que pagas.",
  },
  {
    question: "¿Para qué tipo de negocios funciona mejor?",
    answer:
      "Para cualquier negocio que reciba consultas por WhatsApp o redes sociales: clínicas, agencias, inmobiliarias, restaurantes, e-commerce, academias, consultores, abogados, dentistas, y más.",
  },
  {
    question: "¿Puedo cambiar de plan si mi negocio crece?",
    answer: "Sí, subes o bajas de plan en cualquier momento desde tu panel. El ajuste se aplica inmediatamente.",
  },
  {
    question: "¿Tienen soporte si tengo problemas?",
    answer: "Sí. Todos los planes incluyen soporte por chat. Los planes Orbit y Avanzado incluyen sesiones 1-a-1 con nuestro equipo para ayudarte a sacar el máximo.",
  },
];
