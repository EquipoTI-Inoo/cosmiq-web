import Image from "next/image";
import { testimonials } from "@/lib/data/testimonials";

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="w-[320px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white text-slate-900 shadow-card">
      <div className="flex flex-col gap-3 p-6">
        <div className="flex flex-row items-center gap-3">
          <Image
            src={t.photo}
            alt={t.name}
            width={44}
            height={44}
            className="flex-shrink-0 rounded-full ring-2 ring-white shadow-md"
          />
          <div className="flex min-w-0 flex-col">
            <p className="truncate text-sm font-semibold text-slate-900">{t.name}</p>
            <div className="mt-0.5 flex items-center gap-1.5">
              <Image src={t.countryFlag} alt={t.country} width={16} height={12} className="rounded-[2px] object-cover" />
              <p className="truncate text-xs text-slate-500">
                {t.company} · {t.country}
              </p>
            </div>
          </div>
        </div>
        <p className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-bold text-brand-blue">
          &quot;{t.quoteHeadline}&quot;
        </p>
        <p className="line-clamp-4 text-sm leading-relaxed text-slate-600">{t.quote}</p>
      </div>
    </div>
  );
}

export default function TestimonialMarquee() {
  return (
    <div className="marquee-group relative mt-6 flex w-full flex-col items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-4 p-2">
        <div className="animate-marquee flex shrink-0 gap-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 gap-4" aria-hidden="true">
          {testimonials.map((t) => (
            <TestimonialCard key={`${t.name}-dup`} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
