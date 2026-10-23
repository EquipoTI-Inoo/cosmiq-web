"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import Container from "./Container";
import { navLinks } from "@/lib/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 shadow-sm backdrop-blur border-b border-slate-100" : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src={solid ? "/images/logo-color.png" : "/images/logo-blanco.png"}
            alt="Cosmiq"
            width={120}
            height={32}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                    solid ? "text-slate-700 hover:text-brand-blue" : "text-blue-100 hover:text-blue-300"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-64 rounded-xl border border-slate-100 bg-white p-2 shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-brand-blue"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  solid ? "text-slate-700 hover:text-brand-blue" : "text-blue-100 hover:text-blue-300"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://app.cosmiq.lat"
            className={`rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              solid
                ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                : "border-white/25 text-white/80 hover:bg-white/10 hover:text-white"
            }`}
          >
            Iniciar sesión
          </a>
          <Link
            href="/agenda/"
            className="rounded-xl border border-blue-500/30 bg-[#2462E8] px-4 py-2.5 text-sm font-semibold text-white shadow-cta transition-all duration-200 hover:bg-[#1D55D4] hover:shadow-cta-lg active:scale-[0.98]"
          >
            Agenda tu demo hoy
          </Link>
        </div>

        <button
          className={`flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${
            solid ? "text-slate-800" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6" />
        </button>
      </Container>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-900">{link.label}</span>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="pl-3 text-sm text-slate-600"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-700"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <a href="https://app.cosmiq.lat" className="text-sm font-medium text-slate-700">
              Iniciar sesión
            </a>
            <Link
              href="/agenda/"
              className="rounded-xl border border-blue-500/30 bg-[#2462E8] px-5 py-2.5 text-center text-sm font-semibold text-white shadow-cta"
              onClick={() => setOpen(false)}
            >
              Agenda tu demo hoy
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
