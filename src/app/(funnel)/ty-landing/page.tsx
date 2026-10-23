import type { Metadata } from "next";
import { PartyPopper } from "lucide-react";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "¡Demo agendada!",
  description: "Tu demo con Cosmiq ya quedó agendada.",
};

const pillars = [
  { title: "Velocidad", description: "Tu agente responde en segundos, no en horas." },
  { title: "Automatización total", description: "Desde el primer mensaje hasta el cierre, sin intervención manual." },
  { title: "Hecho para LATAM", description: "Pensado para cómo tus clientes realmente compran." },
];

export default function TyLandingPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-[#051528] to-navy-800 py-20 text-white">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-brand-sky">
          <PartyPopper className="h-8 w-8" />
        </span>
        <h1 className="text-3xl font-bold sm:text-4xl">Estás a un paso de vender con IA</h1>
        <p className="max-w-xl text-slate-300">
          Tu demo ya quedó agendada y te enviamos la confirmación con el horario a tu correo. En 30
          minutos vas a ver cómo tu negocio puede vender 24/7.
        </p>

        <div className="mt-6 grid w-full gap-6 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
              <h3 className="font-bold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{p.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
