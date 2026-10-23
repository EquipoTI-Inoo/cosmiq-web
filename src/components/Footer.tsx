import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import Container from "./Container";
import { siteSettings, footerLinks } from "@/lib/data/site";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[17px] w-[17px]">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[17px] w-[17px]">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[17px] w-[17px]">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-400">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/images/isotipo-blanco.png"
                alt="Cosmiq"
                width={28}
                height={28}
                className="h-7 w-7 object-contain opacity-90"
              />
              <span className="text-lg font-black tracking-tight text-white opacity-90">Cosmiq</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-[13px] w-[13px]" />
              <span>{siteSettings.address}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-[13px] w-[13px]" />
              <a href={`mailto:${siteSettings.email}`} className="transition-colors hover:text-white">
                {siteSettings.email}
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              aria-label="Instagram"
              href={siteSettings.social.instagram}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors duration-200 hover:bg-[#2462E8] hover:text-white"
            >
              <InstagramIcon />
            </a>
            <a
              aria-label="Facebook"
              href={siteSettings.social.facebook}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors duration-200 hover:bg-[#2462E8] hover:text-white"
            >
              <FacebookIcon />
            </a>
            <a
              aria-label="LinkedIn"
              href={siteSettings.social.linkedin}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors duration-200 hover:bg-[#2462E8] hover:text-white"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-xs text-slate-600">
          © 2026 Cosmiq.lat — Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
