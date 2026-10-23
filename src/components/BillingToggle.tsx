"use client";

export default function BillingToggle({
  annual,
  setAnnual,
  discountLabel = "−20%",
}: {
  annual: boolean;
  setAnnual: (v: boolean) => void;
  discountLabel?: string;
}) {
  return (
    <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
      <span className={`text-sm font-semibold transition-colors ${!annual ? "text-slate-900" : "text-slate-400"}`}>
        Mensual
      </span>
      <button
        aria-label="Cambiar período de facturación"
        aria-pressed={annual}
        onClick={() => setAnnual(!annual)}
        className="relative h-6 w-12 rounded-full bg-slate-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#2462E8] focus:ring-offset-2"
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${
            annual ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
      <span className={`text-sm font-semibold transition-colors ${annual ? "text-slate-900" : "text-slate-400"}`}>
        Anual
        <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
          {discountLabel}
        </span>
      </span>
    </div>
  );
}
