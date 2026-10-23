import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import FooterCta from "@/components/FooterCta";
import { siteSettings } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la misión de Cosmiq: ayudar a negocios de LATAM a vender más con Agentes AI, sin contratar más gente ni complicarse con tecnología.",
};

const values = [
  { title: "Obsesión por resultados", description: "Medimos el éxito en ventas cerradas, no en funciones bonitas." },
  { title: "Hecho para LATAM", description: "Diseñado para la forma en que tus clientes realmente compran: por WhatsApp e Instagram." },
  { title: "Simplicidad primero", description: "Si necesita un manual de 50 páginas, no lo construimos." },
  { title: "Sin letra pequeña", description: "Precios claros, sin contratos forzosos ni sorpresas." },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-[#051528] to-navy-800 pt-32 pb-24 text-white">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <Eyebrow tone="dark">Quiénes somos</Eyebrow>
          <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Existimos para que ningún negocio en LATAM pierda otra venta por no contestar a tiempo
          </h1>
          <p className="max-w-2xl text-slate-300">
            Nacimos viendo a dueños de negocio perder clientes simplemente porque no podían responder
            a todos a tiempo. Construimos Cosmiq para que eso dejara de pasar.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>Nuestra misión</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-bold text-slate-900 sm:text-4xl">
            Que vender más no dependa de contratar más gente
          </h2>
          <p className="max-w-2xl text-slate-600">
            En LATAM, miles de negocios pierden ventas todos los días porque no tienen la capacidad de
            responder a cada cliente a tiempo, a cualquier hora, en cada canal.
          </p>
          <p className="max-w-2xl text-slate-600">
            Cosmiq existe para resolver eso: un Agente AI que atiende, califica y agenda por ti —
            para que crecer no signifique contratar más personal ni complicarte con tecnología.
          </p>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container className="flex flex-col items-center gap-10 text-center">
          <Eyebrow>Cómo trabajamos</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-bold text-slate-900 sm:text-4xl">
            Los principios detrás de cada decisión
          </h2>
          <div className="grid w-full gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-card">
                <h3 className="font-bold text-slate-900">{v.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="flex flex-wrap items-center justify-center gap-10 text-center">
          <div>
            <p className="text-2xl font-bold text-brand-blue">500+</p>
            <p className="text-sm text-slate-500">negocios activos</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-brand-blue">24/7</p>
            <p className="text-sm text-slate-500">atención automática</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-brand-blue">1M+</p>
            <p className="text-sm text-slate-500">leads atendidos por IA</p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="flex flex-col items-center gap-2 text-center">
          <h3 className="text-lg font-bold text-slate-900">Dónde estamos</h3>
          <p className="text-sm text-slate-500">{siteSettings.address}</p>
          <h3 className="mt-6 text-lg font-bold text-slate-900">Escríbenos</h3>
          <a href={`mailto:${siteSettings.email}`} className="text-sm font-semibold text-brand-blue">
            {siteSettings.email}
          </a>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            ¿Quieres ver a Cosmiq trabajando en tu negocio?
          </h2>
          <p className="max-w-xl text-slate-500">
            Agenda una demo de 30 minutos y te mostramos cómo funcionaría en tu caso específico.
          </p>
          <Link
            href="/agenda/"
            className="inline-flex items-center justify-center rounded-xl border border-blue-500/30 bg-[#2462E8] px-7 py-3 text-sm font-semibold text-white shadow-cta transition-all duration-200 hover:bg-[#1D55D4] hover:shadow-cta-lg active:scale-[0.98]"
          >
            Agenda tu demo hoy
          </Link>
        </Container>
      </section>

      <FooterCta />
    </>
  );
}
