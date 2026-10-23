import type { Metadata } from "next";
import Container from "@/components/Container";
import GhlBookingWidget from "@/components/GhlBookingWidget";

export const metadata: Metadata = {
  title: "Agenda tu demo",
  description:
    "En 30 minutos te mostramos en vivo cómo negocios como el tuyo duplican sus ventas con un Agente AI.",
};

const bullets = [
  "Demo en vivo personalizada para tu negocio",
  "Te mostramos cómo responde el agente en tiempo real",
  "Un plan de automatización a tu medida",
  "Sin presión de venta",
  "Equipo que habla español, en vivo",
];

const stats = ["500+ negocios activos", "24/7 atención automática", "Demo 100% gratis"];

export default function AgendaPage() {
  return (
    <section className="py-16">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Descubre cómo un Agente AI puede vender por ti mientras duermes
          </h1>
          <p className="mt-4 text-slate-600">
            En 30 minutos te mostramos en vivo cómo negocios como el tuyo duplican sus ventas — sin
            contratar más personal, sin complicaciones técnicas.
          </p>
          <ul className="mt-6 flex flex-col gap-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="text-brand-blue">✓</span> {b}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
            {stats.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>

        <GhlBookingWidget />
      </Container>
    </section>
  );
}
