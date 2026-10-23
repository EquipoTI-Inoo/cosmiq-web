import type { Metadata } from "next";
import { Check, Mail } from "lucide-react";
import Container from "@/components/Container";
import { siteSettings } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "¡Registro Completado!",
  description: "Gracias por registrarte en Cosmiq.",
};

const steps = ["Pago confirmado", "Cuenta creada", "Cosmiq activado"];

export default function SuccessPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-navy-950 via-[#051528] to-navy-800 px-4 py-16 text-white sm:px-6">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />
      <Container className="relative flex max-w-xl flex-col items-center gap-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
          <Check className="h-8 w-8" />
        </span>
        <h1 className="text-3xl font-bold sm:text-4xl">¡Gracias por registrarte en Cosmiq!</h1>
        <p className="text-slate-300">
          Te acaba de llegar un correo a tu dirección registrada para que puedas completar tus datos
          y empezar a disfrutar de tu plan Cosmiq.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          {steps.map((s) => (
            <span
              key={s}
              className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300"
            >
              <Check className="h-4 w-4" /> {s}
            </span>
          ))}
        </div>

        <div className="mt-4 flex w-full flex-col items-start gap-2 rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
          <p className="flex items-center gap-2 text-sm font-semibold text-white">
            <Mail className="h-4 w-4 text-brand-sky" /> Paso 1: Revisa tu correo
          </p>
          <p className="text-sm text-slate-300">
            Completa tus datos desde el enlace que te enviamos para activar tu cuenta.
          </p>
        </div>

        <a href={siteSettings.appUrl} className="text-sm font-semibold text-brand-sky hover:underline">
          Ir a mi panel de Cosmiq →
        </a>
      </Container>
    </section>
  );
}
