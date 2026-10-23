import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { footerCta } from "@/lib/data/site";

export default function FooterCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020B1A] via-[#051528] to-[#0A214E] py-28">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2462E8]/[0.06] blur-3xl" />
      <Container className="relative max-w-4xl text-center">
        <Image
          src="/images/emojis/raised_hands.png"
          alt=""
          width={56}
          height={56}
          className="mx-auto mb-6 h-14 w-14 drop-shadow-lg"
        />
        <h2 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {footerCta.headline}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-blue-200/80 sm:text-xl">
          {footerCta.body}
        </p>
        <Link
          href={footerCta.href}
          className="mb-8 inline-flex items-center justify-center rounded-xl bg-white px-10 py-5 text-xl font-bold text-[#2462E8] shadow-lg transition-all duration-200 hover:bg-blue-50 active:scale-[0.98]"
        >
          {footerCta.cta}
        </Link>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {footerCta.badges.map((badge) => (
            <span
              key={badge.label}
              className="rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 text-sm font-medium text-blue-200"
            >
              {badge.icon} {badge.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
