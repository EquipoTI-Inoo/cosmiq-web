import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import FaqAccordion from "@/components/FaqAccordion";
import FooterCta from "@/components/FooterCta";
import PricingSection from "@/components/PricingSection";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import HeroWidget from "@/components/HeroWidget";
import MockChatWidget from "@/components/mocks/MockChatWidget";
import MockKanban from "@/components/mocks/MockKanban";
import MockCampaignStats from "@/components/mocks/MockCampaignStats";
import {
  hero,
  certificationBadges,
  howItWorks,
  liveCounter,
  mediaStrip,
  featureBlocks,
  testimonialsSection,
  benefits,
  industries,
  homeFaq,
} from "@/lib/data/home";
import { agentPlans } from "@/lib/data/pricing";
import { siteSettings } from "@/lib/data/site";

const mockComponents = { chat: MockChatWidget, kanban: MockKanban, campaign: MockCampaignStats };

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#020B1A] via-[#051528] to-[#0A214E]"
        id="inicio"
      >
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-[#2462E8]/[0.12] blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-blue-400/[0.08] blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>
              <h1 className="mb-6 text-5xl leading-[1.04] font-black tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5rem]">
                {hero.headline}
                <br />
                <span className="text-[#2462E8]">{hero.headlineAccent}</span>
              </h1>
              <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
                <div className="flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2">
                  <span className="h-2 w-2 animate-pulse-slow rounded-full bg-emerald-400" />
                  <span className="text-sm font-medium text-blue-200">{hero.badge}</span>
                </div>
              </div>
              <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-blue-100/75 sm:text-xl lg:mx-0">
                {hero.subtitle}
              </p>
              <div className="mb-10 flex flex-wrap justify-center gap-8 lg:justify-start">
                {hero.stats.map((s) => (
                  <div key={s.label} className="flex flex-col items-center lg:items-start">
                    <span className="text-2xl font-black text-white tabular-nums sm:text-3xl">{s.value}</span>
                    <span className="text-sm text-blue-300/80">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="mb-7 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href={hero.ctaHref}
                  className="inline-flex items-center justify-center rounded-xl border border-blue-500/30 bg-[#2462E8] px-8 py-4 text-lg font-semibold text-white shadow-cta transition-all duration-200 hover:bg-[#1D55D4] hover:shadow-cta-lg active:scale-[0.98]"
                >
                  {hero.cta}
                </Link>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold text-blue-300 underline decoration-blue-400 underline-offset-4 transition-all duration-200 hover:text-white"
                >
                  {hero.secondaryCta}
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                {hero.trustBullets.map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-sm text-blue-300/70">
                    <Check className="h-3 w-3 shrink-0 text-emerald-400" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full max-w-lg flex-1 lg:max-w-none">
              <HeroWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Certification badges strip */}
      <div className="relative z-10 -mt-16">
        <div className="relative bg-transparent py-4">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7">
              {certificationBadges.map((badge, i) => (
                <div key={badge} className={`shrink-0 ${i === 3 ? "-mt-6" : ""}`}>
                  <Image
                    src={badge}
                    alt="Cosmiq certification badge"
                    width={i === 3 ? 140 : 108}
                    height={i === 3 ? 154 : 120}
                    unoptimized
                    className={`h-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)] ${
                      i === 3 ? "w-[115px] sm:w-[134px]" : "w-24 sm:w-[106px]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section className="overflow-hidden bg-white py-20" id="como-funciona">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
          <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
            {howItWorks.headline}
          </h2>
          <p className="mt-3 max-w-lg text-base text-slate-500">{howItWorks.subtitle}</p>

          {/* Desktop: curved connector + absolutely positioned steps with ghost numbers */}
          <div className="relative mt-4 hidden h-[500px] md:block">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 960 500"
            >
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="stepLine" x1="0" x2="960" y1="0" y2="0">
                  <stop offset="0%" stopColor="#2462E8" />
                  <stop offset="100%" stopColor="#0EA5E9" />
                </linearGradient>
              </defs>
              <path
                d="M 24 454 C 160 454 260 138 379 138 C 500 138 615 24 655 24"
                stroke="url(#stepLine)"
                strokeLinecap="round"
                strokeWidth="2.5"
              />
            </svg>
            {[
              { left: "0%", top: "auto", bottom: "0" },
              { left: "37%", top: "23%", bottom: "auto" },
              { left: "67%", top: "0", bottom: "auto" },
            ].map((pos, i) => {
              const step = howItWorks.steps[i];
              return (
                <div key={step.title} className="absolute w-[260px]" style={pos}>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-10 left-16 z-0 text-[108px] leading-none font-black select-none"
                    style={{
                      background: "linear-gradient(180deg, #2462E8 0%, #93C5FD 50%, #EFF6FF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {i + 1}
                  </span>
                  <div
                    className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow-md"
                    style={{ background: "linear-gradient(135deg, #2462E8 0%, #0EA5E9 100%)" }}
                  >
                    <Check className="h-5 w-5 text-white" strokeWidth={3} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="mb-2 text-xl leading-tight font-bold text-slate-900">{step.title}</h3>
                    <p className="mb-3 text-sm leading-relaxed text-slate-500">{step.description}</p>
                    <p className="text-sm font-bold text-slate-700">*(⏱ {step.time})*</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical line + stacked steps */}
          <div className="relative mt-10 md:hidden">
            <div
              className="absolute top-6 bottom-6 w-0.5 opacity-40"
              style={{ left: "23px", background: "linear-gradient(to bottom, #2462E8, #0EA5E9)" }}
            />
            <div className="space-y-10">
              {howItWorks.steps.map((step) => (
                <div key={step.title} className="flex items-start gap-5">
                  <div
                    className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-md"
                    style={{ background: "linear-gradient(135deg, #2462E8 0%, #0EA5E9 100%)" }}
                  >
                    <Check className="h-5 w-5 text-white" strokeWidth={3} />
                  </div>
                  <div className="pt-2">
                    <h3 className="mb-1 text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="mb-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
                    <p className="text-sm font-bold text-slate-700">*(⏱ {step.time})*</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/agenda/"
              className="inline-flex items-center justify-center rounded-xl border border-blue-500/30 bg-[#2462E8] px-8 py-4 text-lg font-semibold text-white shadow-cta transition-all duration-200 hover:bg-[#1D55D4] hover:shadow-cta-lg active:scale-[0.98]"
            >
              {howItWorks.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Live counter */}
      <section className="bg-gradient-to-br from-[#020B1A] via-[#051528] to-[#0A214E] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-bold tracking-[0.28em] text-emerald-400/80 uppercase">
            {liveCounter.eyebrow}
          </p>
          <h2 className="mb-10 text-3xl leading-tight font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {liveCounter.headline} <span className="text-[#2462E8]">{liveCounter.headlineAccent}</span>
          </h2>
          <div className="flex justify-center">
            <div className="inline-flex flex-col items-center gap-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm sm:flex-row">
              <div className="flex items-center gap-2.5 border-b border-white/10 px-6 py-4 sm:border-r sm:border-b-0">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.2em] whitespace-nowrap text-white/40 uppercase">
                  En vivo
                </span>
              </div>
              {liveCounter.counters.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col items-center border-b border-white/10 px-7 py-4 last:border-0 sm:border-r sm:border-b-0"
                >
                  <span className="mb-1 text-[10px] font-bold tracking-[0.22em] text-white/30 uppercase">
                    {c.label}
                  </span>
                  <span className="text-2xl leading-none font-black tracking-tight text-white tabular-nums">
                    {c.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media strip — partner logos marquee */}
      <section aria-label="Partners y certificaciones" className="overflow-hidden border-y border-gray-100 bg-white py-14">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">{mediaStrip.eyebrow}</p>
        </div>
        <div className="marquee-container">
          <div className="marquee-track" style={{ gap: "3.5rem", alignItems: "center" }}>
            {[...mediaStrip.partners, ...mediaStrip.partners].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex shrink-0 items-center justify-center px-4 opacity-60 transition-opacity duration-200 hover:opacity-100"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={200}
                  height={120}
                  className={`w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 ${p.className}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature blocks */}
      {featureBlocks.map((block, i) => {
        const Mock = mockComponents[block.mock];
        const textCol = (
          <div className="flex-1">
            <Eyebrow>{block.eyebrow}</Eyebrow>
            <h2 className="mt-4 mb-6 text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {block.headline}
              <br />
              <span className="text-[#2462E8]">{block.headlineAccent}</span>
            </h2>
            <ul className="mb-8 space-y-4">
              {block.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-[19px] w-[19px] shrink-0 text-[#2462E8]" />
                  <span className="text-[0.9375rem] leading-relaxed text-slate-600">{b}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/agenda/"
              className="inline-flex items-center justify-center rounded-xl border border-blue-500/30 bg-[#2462E8] px-6 py-3 text-base font-semibold text-white shadow-cta transition-all duration-200 hover:bg-[#1D55D4] hover:shadow-cta-lg active:scale-[0.98]"
            >
              {block.cta}
            </Link>
          </div>
        );
        const mockCol = (
          <div className="w-full flex-1">
            <Mock />
          </div>
        );

        return (
          <section key={block.headline} className={i === 1 ? "bg-slate-50 py-20 lg:py-28" : "bg-white py-20 lg:py-28"}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                className={`flex flex-col items-center gap-14 lg:gap-20 ${
                  i === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {textCol}
                {mockCol}
              </div>
            </div>
          </section>
        );
      })}

      {/* Testimonials */}
      <section className="overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Eyebrow>{testimonialsSection.eyebrow}</Eyebrow>
            <h2 className="mt-4 mb-12 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {testimonialsSection.headline}
            </h2>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20">
              {testimonialsSection.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-5xl leading-none font-black text-[#2462E8] tabular-nums sm:text-6xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <TestimonialMarquee />
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Eyebrow>{benefits.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {benefits.headline}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.cards.map((card) => (
              <div
                key={card.title}
                className="group relative flex cursor-pointer flex-col items-center overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-card transition-all duration-300"
              >
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#2462E8] via-[#1D55D4] to-[#0EA5E9] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex w-full flex-col items-center">
                  <div className="mb-6">
                    <Image
                      src={card.emoji}
                      alt=""
                      width={64}
                      height={64}
                      className="h-16 w-16 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-white">
                    {card.title}
                  </h3>
                  <p className="flex-1 text-[0.9375rem] leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white/90">
                    {card.description}
                  </p>
                  <div className="mt-6 w-full border-t border-slate-100 pt-5 transition-colors duration-300 group-hover:border-white/20">
                    <p className="text-sm font-bold text-[#2462E8] transition-colors duration-300 group-hover:text-white">
                      {card.stat}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/agenda/"
              className="inline-flex items-center justify-center rounded-xl border border-blue-500/30 bg-[#2462E8] px-8 py-4 text-lg font-semibold text-white shadow-cta transition-all duration-200 hover:bg-[#1D55D4] hover:shadow-cta-lg active:scale-[0.98]"
            >
              {benefits.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative overflow-hidden bg-slate-50 py-24" id="precios">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="pointer-events-none absolute top-40 left-1/2 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <Eyebrow>Planes transparentes</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Elige el plan ideal para tu negocio
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-slate-500">
              Sin costos ocultos. Sin sorpresas. Sin contratos.
            </p>
          </div>
          <PricingSection plans={agentPlans} />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24" id="faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Todo lo que necesitas saber antes de empezar
            </h2>
          </div>
          <FaqAccordion items={homeFaq} />
          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-slate-500">¿Tienes otra pregunta?</p>
            <a
              href={siteSettings.whatsappLink}
              className="inline-flex items-center justify-center rounded-xl border-2 border-[#2462E8] px-6 py-3 text-base font-semibold text-[#2462E8] transition-all duration-200 hover:bg-[#2462E8] hover:text-white active:scale-[0.98]"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Eyebrow>{industries.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {industries.headline}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {industries.items.map((item) => (
              <div
                key={item.label}
                className="group flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:shadow-card"
              >
                <span className="text-3xl transition-transform duration-200 select-none group-hover:scale-110">
                  {item.emoji}
                </span>
                <span className="text-center text-sm leading-tight font-semibold text-slate-600 transition-colors group-hover:text-[#2462E8]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/agenda/"
              className="inline-flex items-center justify-center rounded-xl border border-blue-500/30 bg-[#2462E8] px-8 py-4 text-lg font-semibold text-white shadow-cta transition-all duration-200 hover:bg-[#1D55D4] hover:shadow-cta-lg active:scale-[0.98]"
            >
              {industries.cta}
            </Link>
          </div>
        </div>
      </section>

      <FooterCta />
    </>
  );
}
