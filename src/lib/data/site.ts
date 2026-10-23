// Mirrors the future Strapi `SiteSettings` single-type.

export const siteSettings = {
  companyName: "Cosmiq",
  legalName: "Cosmiq Inc.",
  address: "30 N Gould St STE N, Sheridan, WY 82801",
  email: "hello@cosmiq.lat",
  whatsappLink: "https://wa.link/ak3ygj",
  appUrl: "https://app.cosmiq.lat",
  social: {
    instagram: "https://www.instagram.com/cosmiq.lat",
    facebook: "https://web.facebook.com/people/Cosmiqlat/61554803884470/",
    linkedin: "https://www.linkedin.com/company/cosmiq-crm/",
  },
  ghl: {
    bookingWidgetUrl:
      "https://api.leadconnectorhq.com/widget/booking/TMbpjDnKs2m52WiYsQGX",
    chatWidgetIds: [
      "6a8deafb22a10921063e52d8",
      "6a8de96f22a10921063ddcc6",
    ],
  },
};

export const navLinks = [
  {
    label: "Servicios",
    children: [
      { label: "Agente Conversacional", href: "/servicios/agente-conversacional" },
      { label: "Agentes de Voz", href: "/servicios/agentes-de-voz" },
      { label: "CRM Inteligente", href: "/servicios/crm" },
    ],
  },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Cómo Funciona", href: "/#como-funciona" },
  { label: "Precios", href: "/precios" },
  { label: "Socios", href: "/socios" },
  { label: "FAQ", href: "/#faq" },
];

export const footerLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Precios", href: "/precios" },
  { label: "Socios", href: "/socios" },
  { label: "Blog", href: "/blog" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Términos", href: "/terminos" },
];

export const footerCta = {
  headline: "Tu agente AI puede estar trabajando esta noche.",
  body: "Cada hora que pasa sin Cosmiq, son mensajes sin responder, ventas perdidas, clientes yéndose a la competencia.",
  cta: "Agenda tu demo hoy",
  href: "/agenda/",
  badges: [
    { icon: "🛡️", label: "Sin compromiso" },
    { icon: "✅", label: "Sin contratos" },
    { icon: "⚡", label: "Listo en 15 minutos" },
  ],
};
