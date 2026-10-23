"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Check, ShieldCheck } from "lucide-react";
import PricingCard from "./PricingCard";
import BillingToggle from "./BillingToggle";
import type { PricingPlan } from "@/lib/data/pricing";
import { pricingHero } from "@/lib/data/pricing";

export default function PricingSection({
  plans,
  showGuarantee = true,
}: {
  plans: PricingPlan[];
  showGuarantee?: boolean;
}) {
  const [annual, setAnnual] = useState(false);
  const cardPlans = plans.filter((p) => p.id !== "enterprise");
  const enterprise = plans.find((p) => p.id === "enterprise");

  return (
    <div className="flex w-full flex-col items-center">
      <BillingToggle annual={annual} setAnnual={setAnnual} />

      <div className="mt-10 grid w-full gap-6 md:grid-cols-3">
        {cardPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} annual={annual} />
        ))}
      </div>

      {enterprise && (
        <div className="mt-6 w-full overflow-hidden rounded-3xl">
          <div className="flex flex-col gap-8 bg-gradient-to-r from-slate-900 via-[#020B1A] to-[#0A214E] p-7 sm:p-8 lg:flex-row lg:items-center">
            <div className="flex-shrink-0 lg:w-64">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Building2 className="h-[18px] w-[18px]" />
                </div>
                <span className="inline-block rounded-full bg-[#2462E8] px-3 py-1 text-xs font-bold text-white">
                  {enterprise.badge}
                </span>
              </div>
              <h3 className="mb-1 text-2xl font-extrabold text-white">{enterprise.name}</h3>
              <p className="mb-1 text-sm text-blue-300">Precio a medida para tu equipo</p>
              <p className="mt-3 text-3xl font-black text-white">A medida</p>
              <Link
                href={enterprise.checkoutUrl}
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-bold text-[#2462E8] shadow-lg transition-all duration-200 hover:bg-blue-50 active:scale-[0.98] lg:w-auto"
              >
                {enterprise.cta}
              </Link>
            </div>
            <div className="hidden w-px self-stretch bg-white/10 lg:block" />
            <ul className="grid flex-1 grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {enterprise.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/30">
                    <Check className="h-2.5 w-2.5 text-blue-200" strokeWidth={3} />
                  </div>
                  <span className="text-sm leading-relaxed text-blue-100">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {showGuarantee && (
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white px-6 py-4 shadow-sm">
            <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-500" />
            <div>
              <p className="text-sm font-bold text-slate-800">Garantía sin compromiso</p>
              <p className="text-sm text-slate-500">{pricingHero.guarantee}</p>
            </div>
          </div>
          <p className="text-center text-sm text-slate-400">
            {pricingHero.enterpriseText}{" "}
            <Link href="/agenda" className="font-semibold text-[#2462E8] underline underline-offset-2 hover:text-[#1D55D4]">
              {pricingHero.enterpriseCta}
            </Link>
          </p>
        </div>
      )}

      <p className="mt-6 text-center text-xs text-slate-400">{pricingHero.usersNote}</p>
    </div>
  );
}
