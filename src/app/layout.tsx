import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import GhlChatWidget from "@/components/GhlChatWidget";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmiq.lat"),
  title: {
    default: "Cosmiq — Cierra más ventas con tu Agente AI | Agenda tu demo",
    template: "%s | Cosmiq",
  },
  description:
    "Tu Agente AI atiende, califica y agenda a tus clientes 24/7 por WhatsApp, Instagram y más. Sin contratos. Sin compromiso. Agenda tu demo hoy.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <GhlChatWidget />
      </body>
    </html>
  );
}
