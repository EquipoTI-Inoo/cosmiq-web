// Mirrors the future Strapi `Testimonial` collection-type.
// Text recovered verbatim from the original COSMIQ.LAT homepage testimonial marquee.

export type Testimonial = {
  name: string;
  company: string;
  country: string;
  countryFlag: string;
  quoteHeadline: string;
  quote: string;
  photo: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Carlos Mendoza",
    company: "Clínica San Rafael",
    country: "Perú",
    countryFlag: "/images/emojis/flag-peru.png",
    quoteHeadline: "Aumenté mis citas un 45% en el primer mes",
    quote:
      "Antes perdía pacientes porque no podíamos responder rápido fuera del horario. Ahora el agente de Cosmiq atiende en segundos y yo solo confirmo las citas. Es increíble.",
    photo: "/images/testimonials/carlos-mendoza.png",
  },
  {
    name: "Ana Gutiérrez",
    company: "AG Inmobiliaria",
    country: "México",
    countryFlag: "/images/emojis/flag-mexico.png",
    quoteHeadline: "Cerré 3 ventas en la primera semana",
    quote:
      "El agente califica a los interesados antes de que yo hable con ellos. Llego a cada llamada sabiendo exactamente qué busca el cliente. Mi tasa de cierre subió al 60%.",
    photo: "/images/testimonials/ana-gutierrez.png",
  },
  {
    name: "Roberto Vargas",
    company: "Vargas Legal",
    country: "Colombia",
    countryFlag: "/images/emojis/flag-colombia.png",
    quoteHeadline: "Reduje 70% el tiempo en atención inicial",
    quote:
      "Mis clientes siempre preguntan lo mismo. Ahora el agente responde esas preguntas y agenda la consulta. Yo llego preparado y la reunión dura 20 minutos en vez de una hora.",
    photo: "/images/testimonials/roberto-vargas.png",
  },
  {
    name: "Valeria Santos",
    company: "Academia Fit Pro",
    country: "Argentina",
    countryFlag: "/images/emojis/flag-argentina.png",
    quoteHeadline: "Pasé de 50 a 180 alumnos en 3 meses",
    quote:
      "Cosmiq maneja todas las consultas de WhatsApp e Instagram. Antes tardaba horas respondiendo. Ahora todo es automático y puedo enfocarme en dar clases de calidad.",
    photo: "/images/testimonials/valeria-santos.png",
  },
  {
    name: "Diego Fernández",
    company: "Óptica Modern",
    country: "Chile",
    countryFlag: "/images/emojis/flag-chile.png",
    quoteHeadline: "ROI del 300% en los primeros 60 días",
    quote:
      "Pensé que sería complicado pero en 15 minutos ya estaba funcionando. El CRM me ayuda a ver qué clientes necesitan seguimiento. Nunca había vendido tanto de forma tan organizada.",
    photo: "/images/testimonials/diego-fernandez.png",
  },
  {
    name: "Mariana López",
    company: "Agencia Creativa ML",
    country: "Uruguay",
    countryFlag: "/images/emojis/flag-uruguay.png",
    quoteHeadline: "Automaticé el 80% de mi proceso de ventas",
    quote:
      "Tengo una agencia pequeña y no puedo contratar más gente. Cosmiq me permite operar como una empresa grande con mi equipo actual. Es como tener 3 vendedores extra 24/7.",
    photo: "/images/testimonials/mariana-lopez.png",
  },
];
