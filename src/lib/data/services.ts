// Mirrors the future Strapi `Service` collection-type.

export type Service = {
  slug: string;
  title: string;
  metaDescription: string;
  hero: {
    headline: string;
    stats: string[];
  };
  problem: {
    headline: string;
    bullets: string[];
  };
  howItWorks: {
    headline: string;
    steps: { title: string }[];
  };
  features: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "agente-conversacional",
    title: "Agente Conversacional IA — WhatsApp, Instagram y SMS 24/7",
    metaDescription:
      "Tu Agente Conversacional atiende WhatsApp, Instagram, Facebook y SMS desde un solo cerebro. Responde, califica y agenda 24/7.",
    hero: {
      headline: "Un chat. Todos tus canales.",
      stats: ["4 canales en uno", "<10s tiempo de respuesta", "24/7 atención activa"],
    },
    problem: {
      headline: "Responder en 4 canales a la vez es imposible manualmente",
      bullets: [
        "Cada canal (WhatsApp, Instagram, Facebook, Web) vive separado y nadie los revisa todos a tiempo",
        "Los clientes esperan respuesta inmediata — cada minuto de demora es una venta perdida",
        "Tu equipo repite las mismas respuestas una y otra vez en vez de vender",
      ],
    },
    howItWorks: {
      headline: "Conecta tus canales, entrena a tu agente, y listo",
      steps: [
        { title: "Conecta tus canales" },
        { title: "Enséñale tu negocio" },
        { title: "Deja que converse" },
      ],
    },
    features: [
      { title: "Bandeja unificada", description: "Todas las conversaciones de WhatsApp, Instagram, Facebook y Web en un solo lugar." },
      { title: "Respuestas que suenan a ti", description: "El agente aprende el tono y la información de tu negocio para responder de forma natural." },
      { title: "Calificación automática de leads", description: "Identifica a los prospectos listos para comprar y los prioriza para tu equipo." },
      { title: "Agenda citas dentro del chat", description: "El cliente reserva su cita sin salir de la conversación." },
      { title: "Seguimiento que no se olvida", description: "El agente retoma conversaciones pendientes automáticamente." },
      { title: "Métricas de cada conversación", description: "Ve qué tan bien está funcionando tu agente en tiempo real." },
    ],
    faq: [
      {
        question: "¿Necesito WhatsApp Business API o sirve con mi WhatsApp normal?",
        answer: "Podemos conectar la API oficial de WhatsApp Business sin riesgo de bloqueos, además de Instagram y Facebook Messenger.",
      },
      {
        question: "¿El agente puede vender productos o solo responde preguntas?",
        answer: "Puede mostrar catálogo, precios, tomar pedidos simples y agendar — no solo contesta, avanza la venta.",
      },
      {
        question: "¿Qué pasa si un cliente escribe algo que el agente no sabe responder?",
        answer: "Avisa a tu equipo y transfiere la conversación con todo el historial, sin que el cliente tenga que repetir nada.",
      },
      {
        question: "¿Puedo revisar y editar lo que dice el agente?",
        answer: "Sí, tienes acceso a cada conversación y puedes ajustar las respuestas del agente cuando quieras.",
      },
      {
        question: "¿Cuánto tarda en estar activo en mis redes?",
        answer: "Conectar los canales toma minutos; entrenar al agente con tu información toma menos de un día.",
      },
    ],
  },
  {
    slug: "agentes-de-voz",
    title: "Agentes de Voz con IA — Contesta y Vende por Teléfono 24/7",
    metaDescription:
      "Tu Agente de Voz AI contesta llamadas, califica leads y agenda citas por teléfono las 24 horas. Voz natural, sin robots.",
    hero: {
      headline: "Contesta cada llamada. Cierra cada oportunidad.",
      stats: ["0% llamadas perdidas", "24/7 disponibilidad", "<2s tiempo de respuesta"],
    },
    problem: {
      headline: "Cada llamada perdida es una venta que se va a la competencia",
      bullets: [
        "Fuera de horario, nadie contesta el teléfono",
        "Tu equipo solo puede atender una llamada a la vez",
        "Las llamadas de seguimiento quedan pendientes y se olvidan",
      ],
    },
    howItWorks: {
      headline: "Conecta tu número, entrena a tu agente, y empieza a contestar",
      steps: [
        { title: "Conecta tu número" },
        { title: "Entrena a tu Agente" },
        { title: "Empieza a contestar" },
      ],
    },
    features: [
      { title: "Llamadas entrantes 24/7", description: "Nunca más una llamada sin contestar, a cualquier hora del día." },
      { title: "Llamadas de seguimiento automáticas", description: "El agente llama de vuelta a leads fríos o recordatorios de citas." },
      { title: "Agenda citas durante la llamada", description: "El cliente reserva su cita mientras habla con el agente." },
      { title: "Voz natural en español latino", description: "Conversaciones fluidas que no suenan robóticas." },
      { title: "Transferencia a humano cuando hace falta", description: "Si el cliente lo pide, la llamada pasa a tu equipo con todo el contexto." },
      { title: "Transcripción y grabación automática", description: "Cada llamada queda registrada y transcrita para revisión." },
    ],
    faq: [
      {
        question: "¿Mis clientes van a notar que hablan con una IA?",
        answer: "El agente está entrenado para sonar natural. Si preguntan directamente, el agente es transparente.",
      },
      {
        question: "¿Puedo usar mi número de teléfono actual?",
        answer: "Sí. Conectamos tu línea existente o te damos una nueva, según prefieras.",
      },
      {
        question: "¿Qué pasa si el cliente pide hablar con una persona?",
        answer: "El agente transfiere la llamada a tu equipo de inmediato, con el contexto completo de la conversación.",
      },
      {
        question: "¿Funciona para llamadas salientes también?",
        answer: "Sí. Puede hacer campañas de seguimiento, recordatorios de citas y reactivación de leads fríos.",
      },
      {
        question: "¿Cuánto tarda en estar funcionando?",
        answer: "La configuración base toma menos de un día.",
      },
    ],
  },
  {
    slug: "crm",
    title: "CRM Inteligente para Ventas con IA",
    metaDescription:
      "El CRM de Cosmiq organiza cada contacto, cada conversación y cada oportunidad en un solo pipeline — conectado directo con tus Agentes AI.",
    hero: {
      headline: "Cada lead en su lugar. Ninguna venta se olvida.",
      stats: ["1 pipeline para todo", "100% de leads capturados", "0 hojas de cálculo"],
    },
    problem: {
      headline: "Sin un sistema, los leads se pierden entre chats y hojas de cálculo",
      bullets: [
        "Cada vendedor lleva su propio registro — o no lleva ninguno",
        "Nadie sabe en qué etapa está cada oportunidad",
        "Los seguimientos dependen de que alguien se acuerde de hacerlos",
      ],
    },
    howItWorks: {
      headline: "Todo llega a un solo lugar, organizado y automatizado",
      steps: [
        { title: "Todo llega a un solo lugar" },
        { title: "Organiza tu pipeline visual" },
        { title: "Automatiza el seguimiento" },
      ],
    },
    features: [
      { title: "Pipeline visual por etapas", description: "Arrastra y suelta cada oportunidad según su progreso." },
      { title: "Bandeja unificada de conversaciones", description: "Todos los canales conectados a cada contacto." },
      { title: "Automatizaciones sin código", description: "Crea secuencias de seguimiento sin tocar una sola línea de código." },
      { title: "Calendario y recordatorios de citas", description: "Confirmaciones y recordatorios automáticos por WhatsApp, SMS o email." },
      { title: "Segmentación con etiquetas", description: "Organiza tus contactos como necesites." },
      { title: "Reportes en tiempo real", description: "Visibilidad completa de todo tu embudo de ventas." },
    ],
    faq: [
      {
        question: "¿El CRM funciona solo o necesito los Agentes AI también?",
        answer: "Funciona de forma independiente, pero su verdadero potencial aparece cuando se conecta con tus Agentes de Voz y Conversacional.",
      },
      {
        question: "¿Puedo importar mis contactos actuales?",
        answer: "Sí, importamos tu base de datos actual (Excel, Google Sheets u otro CRM) sin perder información.",
      },
      {
        question: "¿Necesito capacitar a mi equipo para usarlo?",
        answer: "El pipeline es visual y funciona por arrastrar y soltar — la mayoría de los equipos lo dominan en su primer día.",
      },
      {
        question: "¿Puedo automatizar recordatorios de citas?",
        answer: "Sí, configuras secuencias que confirman y recuerdan citas automáticamente por WhatsApp, SMS o email.",
      },
      {
        question: "¿Cuántos usuarios pueden acceder al CRM?",
        answer: "Depende de tu plan — desde equipos pequeños hasta empresas con múltiples vendedores y roles distintos.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
