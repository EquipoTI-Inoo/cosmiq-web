// Mirrors the future Strapi `LegalPage` collection-type.
//
// IMPORTANT: the original COSMIQ.LAT privacy policy and terms were only
// recoverable as a list of section headings (the full paragraph text wasn't
// captured in the static export analysis). The body text below is a
// reasonable reconstruction matching those exact headings and counts —
// it has NOT been reviewed by a lawyer and should be checked against the
// original before this replaces the live pages.

export type LegalPage = {
  slug: string;
  title: string;
  lastUpdated: string;
  sections: { heading: string; body: string }[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "privacidad",
    title: "Política de Privacidad",
    lastUpdated: "1 de junio de 2026",
    sections: [
      { heading: "1. Quiénes somos", body: "Cosmiq Inc. (\"Cosmiq\", \"nosotros\") opera la plataforma cosmiq.lat y los servicios asociados de agentes de inteligencia artificial para ventas." },
      { heading: "2. Datos que recopilamos", body: "Recopilamos datos de registro (nombre, email, empresa), datos de uso de la plataforma, datos de pago procesados por nuestro proveedor (Stripe), datos técnicos (IP, dispositivo, navegador) y cookies." },
      { heading: "3. Cómo usamos tus datos", body: "Usamos tus datos para operar el servicio, procesar pagos, brindar soporte, mejorar la plataforma y comunicarte novedades relevantes." },
      { heading: "4. Base legal del tratamiento", body: "Tratamos tus datos en base a la ejecución del contrato de servicio, tu consentimiento y nuestro interés legítimo en mejorar el producto." },
      { heading: "5. Compartición de datos", body: "No vendemos tus datos. Los compartimos únicamente con proveedores necesarios para operar el servicio (procesamiento de pagos, mensajería, infraestructura en la nube)." },
      { heading: "6. Cookies", body: "Usamos cookies esenciales para el funcionamiento del sitio y cookies analíticas para entender el uso de la plataforma. Puedes gestionar tus preferencias desde tu navegador." },
      { heading: "7. Retención de datos", body: "Conservamos tus datos mientras tu cuenta esté activa y durante el periodo adicional exigido por obligaciones legales o contables." },
      { heading: "8. Tus derechos", body: "Puedes solicitar acceso, corrección o eliminación de tus datos personales escribiendo a hello@cosmiq.lat." },
      { heading: "9. Seguridad", body: "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos, incluyendo cifrado en tránsito y controles de acceso." },
      { heading: "10. Menores de edad", body: "Nuestros servicios están dirigidos a negocios y no están destinados a menores de edad." },
      { heading: "11. Cambios a esta política", body: "Podemos actualizar esta política periódicamente. Notificaremos cambios relevantes a través del sitio o por correo." },
      { heading: "12. Contacto", body: "Para cualquier consulta sobre privacidad, escríbenos a hello@cosmiq.lat." },
    ],
  },
  {
    slug: "terminos",
    title: "Términos y Condiciones",
    lastUpdated: "1 de junio de 2026",
    sections: [
      { heading: "1. Aceptación de los términos", body: "Al usar Cosmiq aceptas estos Términos y Condiciones en su totalidad." },
      { heading: "2. Descripción del servicio", body: "Cosmiq ofrece agentes de inteligencia artificial para ventas (conversacionales y de voz) y un CRM, bajo un modelo de suscripción." },
      { heading: "3. Cuentas y registro", body: "Eres responsable de la información proporcionada al crear tu cuenta y de mantener la confidencialidad de tus credenciales." },
      { heading: "4. Planes y pagos", body: "Los precios de cada plan se detallan en cosmiq.lat/precios. Los pagos se procesan a través de Stripe de forma recurrente según el ciclo de facturación elegido." },
      { heading: "5. Cancelación y reembolsos", body: "Puedes cancelar tu suscripción en cualquier momento desde tu panel. No se realizan reembolsos por periodos ya facturados, salvo que la ley aplicable indique lo contrario." },
      { heading: "6. Uso aceptable", body: "No está permitido usar Cosmiq para fines ilegales, envío de spam o contenido que infrinja derechos de terceros." },
      { heading: "7. Propiedad intelectual", body: "Cosmiq y sus marcas, logos y software son propiedad de Cosmiq Inc. El contenido que subas a la plataforma sigue siendo de tu propiedad." },
      { heading: "8. Datos y privacidad", body: "El tratamiento de datos personales se rige por nuestra Política de Privacidad." },
      { heading: "9. Disponibilidad y SLA", body: "Nos esforzamos por mantener una disponibilidad del servicio del 99.9%, con SLA formal disponible para planes Enterprise." },
      { heading: "10. Limitación de responsabilidad", body: "Cosmiq no será responsable por daños indirectos derivados del uso de la plataforma, en la máxima medida permitida por la ley." },
      { heading: "11. Modificaciones", body: "Podemos modificar estos términos periódicamente. Te notificaremos sobre cambios sustanciales." },
      { heading: "12. Ley aplicable y jurisdicción", body: "Estos términos se rigen por las leyes del estado de Wyoming, Estados Unidos." },
      { heading: "13. Contacto", body: "Para consultas sobre estos términos, escríbenos a hello@cosmiq.lat." },
    ],
  },
];

export const getLegalPageBySlug = (slug: string) =>
  legalPages.find((page) => page.slug === slug);
