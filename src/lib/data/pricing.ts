// Content model mirrors the future Strapi `PricingPlan` / `PricingPage` content-types.
// Recovered verbatim from the original COSMIQ.LAT static export (precios/ page data).

export type PricingPlan = {
  id: string;
  group: "agent" | "crm-seat";
  name: string;
  badge?: string;
  subtitle?: string;
  checkoutUrl: string;
  monthlyPrice: number;
  annualPrice: number;
  isStartingFrom?: boolean;
  priceLabel?: string;
  priceUnit?: string;
  customPrice?: boolean;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const pricingHero = {
  eyebrow: "Planes transparentes",
  headline: "Elige el plan ideal para tu negocio",
  subtitle: "Sin costos ocultos. Sin sorpresas. Sin contratos.",
  guarantee:
    "Sin compromiso — si no es lo que buscas, no pagas nada. Sin preguntas.",
  enterpriseText: "¿Necesitas algo más grande?",
  enterpriseCta: "Contáctanos para Enterprise",
  usersNote:
    "* El plan Avanzado incluye CRM desde $45/usuario/mes según el número de usuarios que elijas. Ver planes de CRM. Usuario adicional: +$15/mes.",
};

export const agentPlans: PricingPlan[] = [
  {
    id: "ignition",
    group: "agent",
    name: "Ignition",
    subtitle: "Solo agentes IA · no incluye CRM",
    checkoutUrl: "https://checkout.cosmiq.lat/registro-ignition",
    monthlyPrice: 55,
    annualPrice: 44,
    features: [
      "WhatsApp Business API activado",
      "Conversaciones ilimitadas — sin tope",
      "FB, Instagram, WA, Web — todas las RRSS",
      "Basic Contact Module (hasta 1,000 contactos)",
      "Automatizaciones de respuesta 24/7",
      "1,000 emails / mes",
    ],
    cta: "Elegir Ignition",
  },
  {
    id: "orbit",
    group: "agent",
    name: "Orbit",
    badge: "⭐ MÁS ELEGIDO",
    subtitle: "Solo agentes IA · no incluye CRM",
    checkoutUrl: "https://checkout.cosmiq.lat/registro-orbit",
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      "Todo lo de Ignition incluido",
      "Middle Contact Module (hasta 2,000 contactos)",
      "Agentes de Voz IA — llamadas automatizadas",
      "Campañas masivas por WhatsApp",
      "Calendario con agendamiento online",
      "Formularios de captura de leads",
      "Todos los informes — analytics completo",
      "2,000 emails / mes",
    ],
    cta: "Elegir Orbit",
    highlighted: true,
  },
  {
    id: "avanzado",
    group: "agent",
    name: "Avanzado",
    badge: "CRM COMPLETO",
    subtitle: "Único plan con CRM · elige tu número de usuarios",
    checkoutUrl: "/servicios/crm#planes",
    monthlyPrice: 45,
    annualPrice: 45,
    isStartingFrom: true,
    priceLabel: "$45",
    priceUnit: "/usuario/mes",
    features: [
      "Todo lo de Orbit incluido",
      "Agentes de Voz IA ilimitados — sin tope de agentes",
      "Advanced Contact Module (contactos ilimitados)",
      "Números de WhatsApp ilimitados",
      "Agentes IA ilimitados configurables",
      "CRM completo — planes desde $45/usuario/mes",
      "Usuario adicional fuera de tu plan: +$15/mes c/u",
      "Pipeline de ventas — tableros Kanban (Oportunidades)",
      "Facturación y cobros — Factura, Texto para pagar, Suscripciones",
      "Embudos y Sitios web — constructor completo",
      "Gestión de reputación + Google My Business",
      "Soporte prioritario con SLA garantizado",
    ],
    cta: "Ver planes de CRM",
  },
  {
    id: "enterprise",
    group: "agent",
    name: "Enterprise",
    badge: "A LA MEDIDA",
    checkoutUrl: "/agenda",
    monthlyPrice: 0,
    annualPrice: 0,
    customPrice: true,
    features: [
      "Todo lo de Avanzado incluido",
      "Onboarding personalizado completo",
      "Integraciones y desarrollos a la medida",
      "SLA garantizado — uptime 99.9%",
      "Account manager dedicado",
      "Capacitaciones ilimitadas",
      "Reportes ejecutivos personalizados",
      "Facturación y contratos flexibles",
    ],
    cta: "Habla con un asesor",
  },
];

// CRM seat plans — shown on /servicios/crm#planes, billed every 6 months or annually (no monthly option)
export const crmSeatPlans: PricingPlan[] = [
  {
    id: "solo",
    group: "crm-seat",
    name: "Solo",
    subtitle: "1 usuario incluido",
    checkoutUrl: "https://checkout.cosmiq.lat/registro-crm-solo",
    monthlyPrice: 45,
    annualPrice: 45,
    priceLabel: "$45",
    priceUnit: "/usuario/mes",
    features: [
      "CRM completo (contactos ilimitados)",
      "Pipeline de ventas y oportunidades",
      "Facturación/cobros/suscripciones",
      "Embudos y sitios web incluidos",
      "Integraciones externas",
    ],
    cta: "Elegir Solo",
  },
  {
    id: "equipo",
    group: "crm-seat",
    name: "Equipo",
    badge: "MÁS ELEGIDO",
    subtitle: "5 usuarios incluidos",
    checkoutUrl: "https://checkout.cosmiq.lat/registro-crm-equipo",
    monthlyPrice: 30,
    annualPrice: 30,
    priceLabel: "$30",
    priceUnit: "/usuario/mes",
    features: [
      "CRM completo (contactos ilimitados)",
      "Pipeline de ventas y oportunidades",
      "Facturación/cobros/suscripciones",
      "Embudos y sitios web incluidos",
      "Integraciones externas",
    ],
    cta: "Elegir Equipo",
    highlighted: true,
  },
  {
    id: "escala",
    group: "crm-seat",
    name: "Escala",
    badge: "MEJOR PRECIO",
    subtitle: "10 usuarios incluidos",
    checkoutUrl: "https://checkout.cosmiq.lat/registro-crm-escala",
    monthlyPrice: 23,
    annualPrice: 23,
    priceLabel: "$23",
    priceUnit: "/usuario/mes",
    features: [
      "CRM completo (contactos ilimitados)",
      "Pipeline de ventas y oportunidades",
      "Facturación/cobros/suscripciones",
      "Embudos y sitios web incluidos",
      "Integraciones externas",
    ],
    cta: "Elegir Escala",
  },
];

export const comparisonTable = {
  columns: ["Ignition", "Orbit", "Avanzado", "Enterprise"],
  rows: [
    { feature: "Precio mensual", values: ["$55", "$99", "desde $45/usuario", "A medida"] },
    { feature: "Módulo de contactos", values: ["Basic (1,000)", "Middle (2,000)", "Advanced (ilimitado)", "Advanced (ilimitado)"] },
    { feature: "Campañas masivas por WhatsApp", values: [false, true, true, true] },
    { feature: "Calendario y formularios de captura", values: [false, true, true, true] },
    { feature: "Agentes de Voz IA (llamadas)", values: [false, true, true, true] },
    { feature: "CRM (gestor de contactos)", values: [false, false, true, true] },
    { feature: "Usuarios incluidos en el CRM", values: ["—", "—", "1, 5 o 10", "A medida"] },
    { feature: "Usuario adicional", values: ["—", "—", "+$15/mes", "A medida"] },
    { feature: "Pipeline de ventas (Oportunidades)", values: [false, false, true, true] },
    { feature: "Facturación y cobros (Factura, SMS)", values: [false, false, true, true] },
    { feature: "Embudos y Sitios web", values: [false, false, true, true] },
    { feature: "Gestión de reputación / GMB", values: [false, false, true, true] },
    { feature: "Soporte con SLA garantizado", values: [false, false, true, true] },
    { feature: "Onboarding personalizado", values: [false, false, false, true] },
    { feature: "Account manager dedicado", values: [false, false, false, true] },
  ] as { feature: string; values: (string | boolean)[] }[],
};

// NOTE: original FAQ #4 referenced a plan named "Galaxy" that no longer exists on
// the live site (likely renamed to "Avanzado" at some point). Corrected here —
// flag to the client during the Strapi migration step per the implementation plan.
export const pricingFaq = [
  {
    question: "¿Qué pasa si quiero cancelar?",
    answer:
      "Cancelas en cualquier momento desde tu panel, sin llamadas ni trámites. Sin cargos de cancelación. Sin períodos de permanencia.",
  },
  {
    question: "¿Los precios son fijos o hay costos ocultos?",
    answer:
      "Lo que ves es lo que pagas. Sin cargos por instalación, sin comisiones por venta, sin costos ocultos. El precio del plan es todo lo que pagas.",
  },
  {
    question: "¿Puedo cambiar de plan si mi negocio crece?",
    answer:
      "Sí, subes o bajas de plan en cualquier momento desde tu panel. El ajuste se aplica inmediatamente.",
  },
  {
    question: "¿Tienen soporte si tengo problemas?",
    answer:
      "Sí. Todos los planes incluyen soporte por chat. Los planes Orbit y Avanzado incluyen sesiones 1-a-1 con nuestro equipo para ayudarte a sacar el máximo.",
  },
];
