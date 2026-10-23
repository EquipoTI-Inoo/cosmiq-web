import Link from "next/link";
import { Zap, Star, Rocket, Check, Sparkles } from "lucide-react";
import type { PricingPlan } from "@/lib/data/pricing";

const planIcon: Record<string, typeof Zap> = {
  ignition: Zap,
  orbit: Star,
  avanzado: Rocket,
  solo: Zap,
  equipo: Star,
  escala: Rocket,
};

const topBar: Record<string, string> = {
  ignition: "bg-gradient-to-r from-blue-500 to-indigo-600",
  orbit: "bg-gradient-to-r from-[#2462E8] to-indigo-500",
  avanzado: "bg-gradient-to-r from-indigo-500 to-violet-600",
};

export default function PricingCard({ plan, annual }: { plan: PricingPlan; annual: boolean }) {
  const price = annual ? plan.annualPrice : plan.monthlyPrice;
  const isExternal = plan.checkoutUrl.startsWith("http");
  const Icon = planIcon[plan.id] ?? Zap;
  const highlighted = plan.highlighted;
  const isCrmAnchor = plan.isStartingFrom;

  const linkClasses = highlighted
    ? "bg-white text-[#2462E8] hover:bg-blue-50 shadow-lg"
    : "bg-[#2462E8] text-white hover:bg-[#1D55D4] shadow-cta hover:shadow-cta-lg border border-blue-500/30";

  const link = (
    <span
      className={`mb-6 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-base font-bold transition-all duration-200 active:scale-[0.98] ${linkClasses}`}
    >
      {plan.cta}
    </span>
  );

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 ${
        highlighted
          ? "pricing-highlight scale-[1.03] bg-[#020B1A] text-white shadow-2xl"
          : "border border-slate-200 bg-white shadow-lg hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
      }`}
    >
      <div className={`h-1.5 w-full ${topBar[plan.id] ?? "bg-gradient-to-r from-blue-500 to-indigo-600"}`} />

      {plan.badge && (
        <div className="absolute top-5 right-5">
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wide ${
              highlighted
                ? "bg-[#2462E8] text-white"
                : plan.id === "avanzado"
                  ? "border border-blue-100 bg-blue-50 text-[#2462E8]"
                  : "bg-blue-50 text-[#2462E8]"
            }`}
          >
            {plan.badge}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-7">
        <div className="mb-4 flex items-center gap-3">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
              highlighted
                ? "bg-blue-600 text-white"
                : plan.id === "avanzado"
                  ? "bg-indigo-50 text-indigo-600"
                  : "bg-blue-50 text-[#2462E8]"
            }`}
          >
            <Icon className="h-[18px] w-[18px]" />
          </div>
          <h3 className={`text-xl font-extrabold ${highlighted ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
        </div>

        {plan.subtitle && !isCrmAnchor && (
          <p className={`mb-2 text-sm leading-relaxed ${highlighted ? "text-blue-300" : "text-slate-500"}`}>
            {plan.subtitle}
          </p>
        )}
        {plan.subtitle && (
          <span
            className={`mb-5 inline-block w-fit rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase ${
              highlighted ? "bg-white/10 text-blue-200" : "bg-slate-100 text-slate-500"
            }`}
          >
            {plan.subtitle}
          </span>
        )}

        <div className={`mb-5 pb-5 ${highlighted ? "border-b border-white/10" : "border-b border-slate-100"}`}>
          {isCrmAnchor ? (
            <>
              <div className="mb-1 flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-indigo-500" />
                <span className="text-xs font-bold tracking-wider text-indigo-500 uppercase">Desde</span>
              </div>
              <div className="relative flex items-end gap-1.5">
                <div className="pointer-events-none absolute -inset-x-2 -inset-y-1 animate-pulse-slow rounded-full bg-indigo-400/25 blur-xl" />
                <span className="relative bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-600 bg-clip-text text-5xl font-black tracking-tight text-transparent">
                  {plan.priceLabel}
                </span>
                <span className="relative mb-2 text-sm text-slate-400">{plan.priceUnit}</span>
              </div>
              <p className="mt-1.5 text-xs text-slate-400">Según el número de usuarios que necesites</p>
            </>
          ) : (
            <>
              <div className="flex items-end gap-1.5">
                <span className={`text-5xl font-black tracking-tight ${highlighted ? "text-white" : "text-slate-900"}`}>
                  ${price}
                </span>
                <span className={`mb-2 text-sm ${highlighted ? "text-blue-300" : "text-slate-400"}`}>/mes</span>
              </div>
              <p className={`mt-1.5 text-xs ${highlighted ? "text-blue-400/70" : "text-slate-400"}`}>
                o ${plan.annualPrice}/mes con plan anual
              </p>
            </>
          )}
        </div>

        {isExternal ? (
          <a href={plan.checkoutUrl}>{link}</a>
        ) : (
          <Link href={plan.checkoutUrl}>{link}</Link>
        )}

        <ul className="flex-1 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <div
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                  highlighted ? "bg-blue-500/30" : "bg-blue-50"
                }`}
              >
                <Check className={`h-2.5 w-2.5 ${highlighted ? "text-blue-200" : "text-[#2462E8]"}`} strokeWidth={3} />
              </div>
              <span className={`text-sm leading-relaxed ${highlighted ? "text-blue-100" : "text-slate-600"}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
