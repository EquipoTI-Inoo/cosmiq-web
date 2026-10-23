import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import FaqAccordion from "@/components/FaqAccordion";
import FooterCta from "@/components/FooterCta";
import PricingSection from "@/components/PricingSection";
import ComparisonTable from "@/components/ComparisonTable";
import { pricingHero, agentPlans, comparisonTable, pricingFaq } from "@/lib/data/pricing";
import { siteSettings } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Planes transparentes para automatizar tus ventas con IA. Sin costos ocultos, sin contratos. Compara Ignition, Orbit, Avanzado y Enterprise.",
};

export default function PreciosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-[#051528] to-navy-800 pt-32 pb-20">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />
        <Container className="relative flex flex-col items-center gap-4 text-center">
          <Eyebrow tone="dark">{pricingHero.eyebrow}</Eyebrow>
          <h1 className="max-w-2xl text-4xl font-bold text-white sm:text-5xl">
            {pricingHero.headline}
          </h1>
          <p className="max-w-xl text-slate-300">{pricingHero.subtitle}</p>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <PricingSection plans={agentPlans} />
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container className="flex flex-col items-center gap-8">
          <h2 className="text-2xl font-bold text-slate-900">Comparación completa de planes</h2>
          <ComparisonTable table={comparisonTable} />
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <Eyebrow>Preguntas frecuentes</Eyebrow>
          </div>
          <div className="w-full max-w-3xl">
            <FaqAccordion items={pricingFaq} defaultOpenIndex={0} />
          </div>
          <p className="text-sm text-slate-500">
            ¿Tienes otra pregunta?{" "}
            <a href={siteSettings.whatsappLink} className="font-semibold text-brand-blue hover:underline">
              Escríbenos por WhatsApp
            </a>
          </p>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 text-center">
        <Container className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-slate-900">¿Listo para elegir tu plan?</h2>
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
