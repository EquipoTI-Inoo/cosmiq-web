import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import FaqAccordion from "@/components/FaqAccordion";
import FooterCta from "@/components/FooterCta";
import PricingSection from "@/components/PricingSection";
import { services, getServiceBySlug } from "@/lib/data/services";
import { crmSeatPlans } from "@/lib/data/pricing";
import { siteSettings } from "@/lib/data/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.title, description: service.metaDescription };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-[#051528] to-navy-800 pt-32 pb-20 text-white">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <Link href="/" className="text-sm text-slate-300 hover:text-white">
            ← Volver al inicio
          </Link>
          <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">{service.hero.headline}</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
            {service.hero.stats.map((s) => (
              <span key={s} className="rounded-full bg-white/10 px-4 py-1.5">
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>El problema</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-bold text-slate-900 sm:text-4xl">
            {service.problem.headline}
          </h2>
          <ul className="flex flex-col gap-2 text-left">
            {service.problem.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-slate-600">
                <span className="text-brand-blue">✓</span> {b}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container className="flex flex-col items-center gap-10 text-center">
          <Eyebrow>Cómo funciona</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-bold text-slate-900 sm:text-4xl">
            {service.howItWorks.headline}
          </h2>
          <div className="grid w-full gap-6 sm:grid-cols-3">
            {service.howItWorks.steps.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-card">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-[#2462E8]">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-bold text-slate-900">{step.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-center gap-10 text-center">
          <Eyebrow>Todo lo que hace por ti</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-bold text-slate-900 sm:text-4xl">
            Funciones diseñadas para vender, no solo para contestar
          </h2>
          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-card">
                <h3 className="font-bold text-slate-900">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{f.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {slug === "crm" && (
        <section id="planes" className="bg-slate-50 py-20">
          <Container className="flex flex-col items-center gap-10 text-center">
            <Eyebrow>Planes de CRM</Eyebrow>
            <h2 className="max-w-2xl text-3xl font-bold text-slate-900 sm:text-4xl">
              Elige tu CRM según el tamaño de tu equipo
            </h2>
            <PricingSection plans={crmSeatPlans} showGuarantee={false} />
            <p className="max-w-xl text-xs text-slate-400">
              Usuario adicional a partir del usuario 10: +$15 USD/mes. Facturación semestral o
              anual, sin opción mensual.
            </p>
          </Container>
        </section>
      )}

      <section className="py-16 text-center">
        <Link
          href="/agenda/"
          className="inline-flex items-center justify-center rounded-xl border border-blue-500/30 bg-[#2462E8] px-7 py-3 text-sm font-semibold text-white shadow-cta transition-all duration-200 hover:bg-[#1D55D4] hover:shadow-cta-lg active:scale-[0.98]"
        >
          Agenda tu demo hoy
        </Link>
      </section>

      <section className="bg-slate-50 py-20">
        <Container className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <Eyebrow>Preguntas frecuentes</Eyebrow>
          </div>
          <div className="w-full max-w-3xl">
            <FaqAccordion items={service.faq} defaultOpenIndex={0} />
          </div>
          <p className="text-sm text-slate-500">
            ¿Tienes otra pregunta?{" "}
            <a href={siteSettings.whatsappLink} className="font-semibold text-brand-blue hover:underline">
              Escríbenos por WhatsApp
            </a>
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-center gap-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Descubre los demás servicios</h2>
          <div className="grid w-full gap-6 sm:grid-cols-2">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-card transition-shadow duration-200 hover:shadow-card-hover"
              >
                <h3 className="font-bold text-slate-900">{s.hero.headline}</h3>
                <p className="mt-1 text-sm text-slate-500">{s.metaDescription}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FooterCta />
    </>
  );
}
