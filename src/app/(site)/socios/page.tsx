import type { Metadata } from "next";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import FooterCta from "@/components/FooterCta";
import { siteSettings } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Programa de Socios",
  description:
    "Súmate al programa de socios de Cosmiq: 40% de comisión recurrente, de por vida, sin límite de referidos.",
};

const valueProps = [
  { title: "Aumenta tus ingresos", description: "40% de comisión recurrente por cada cliente que refieras." },
  { title: "Suma un servicio más", description: "Revende los Agentes AI y el CRM de Cosmiq sin tener que construirlo." },
  { title: "Crece con soporte real", description: "Material de ventas, demos y soporte dedicado para socios." },
];

const benefits = [
  { title: "40% de comisión recurrente", description: "En cada suscripción y cada renovación de tus referidos." },
  { title: "Ganas mientras el cliente se queda", description: "La comisión no tiene fecha de expiración." },
  { title: "Sin límite de referidos", description: "Refiere tantos negocios como quieras." },
];

export default function SociosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-[#051528] to-navy-800 pt-32 pb-24 text-white">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <Eyebrow tone="dark">Programa de Socios</Eyebrow>
          <h1 className="max-w-2xl text-4xl font-bold sm:text-5xl">
            Gana 40% recurrente por cada negocio que refieras a Cosmiq
          </h1>
          <a
            href={siteSettings.whatsappLink}
            className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-semibold text-[#2462E8] shadow-lg transition-all duration-200 hover:bg-blue-50 active:scale-[0.98]"
          >
            Postúlate como socio
          </a>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-6 sm:grid-cols-3">
          {valueProps.map((v) => (
            <div key={v.title} className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-card">
              <h3 className="font-bold text-slate-900">{v.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{v.description}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container className="grid gap-6 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-card">
              <h3 className="font-bold text-slate-900">{b.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{b.description}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-16 text-center">
        <Container className="flex flex-col items-center gap-4">
          <a
            href={siteSettings.whatsappLink}
            className="inline-flex items-center justify-center rounded-xl border border-blue-500/30 bg-[#2462E8] px-7 py-3 text-sm font-semibold text-white shadow-cta transition-all duration-200 hover:bg-[#1D55D4] hover:shadow-cta-lg active:scale-[0.98]"
          >
            Postúlate como socio
          </a>
          <a href="/agenda/" className="text-sm font-semibold text-[#2462E8] hover:underline">
            Habla con nuestro equipo
          </a>
          <p className="text-xs text-slate-400">Sin costo para postularte · Aprobación rápida</p>
        </Container>
      </section>

      <FooterCta />
    </>
  );
}
