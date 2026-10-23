import type { Metadata } from "next";
import Script from "next/script";
import Container from "@/components/Container";
import GhlBookingWidget from "@/components/GhlBookingWidget";
import FunnelHeader from "@/components/FunnelHeader";
import FunnelFooter from "@/components/FunnelFooter";

export const metadata: Metadata = {
  title: "Demo Gratis del Agente IA — Cosmiq",
  description:
    "Este Agente IA ya logró +60% en ventas de +500 negocios. Mira el video de 2 minutos y agenda tu demo.",
};

export default function ConvertionPage() {
  return (
    <>
      <FunnelHeader />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-[#051528] to-navy-800 py-16 text-white">
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
          <Container className="relative flex flex-col items-center gap-6 text-center">
            <h1 className="max-w-3xl text-3xl font-bold sm:text-4xl">
              Este Agente IA ya logró +60% en ventas de +500 negocios… ¿Serás tú el siguiente?
            </h1>
            <p className="text-sm font-semibold text-brand-sky">Duración del video: 2 minutos</p>

            <div className="aspect-video w-full max-w-2xl overflow-hidden rounded-2xl shadow-lg">
              <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
              <Script
                src="https://fast.wistia.com/embed/t2kxo0wccb.js"
                strategy="afterInteractive"
                type="module"
              />
              <wistia-player media-id="t2kxo0wccb" aspect="1.7777777777777777" />
            </div>

            <div className="w-full max-w-2xl">
              <GhlBookingWidget />
            </div>
          </Container>
        </section>
      </main>

      <FunnelFooter />
    </>
  );
}
