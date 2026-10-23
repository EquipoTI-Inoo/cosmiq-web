import { Bot, Calendar, TrendingUp, Zap } from "lucide-react";
import { hero } from "@/lib/data/home";

const icons = { "trending-up": TrendingUp, calendar: Calendar, zap: Zap };

export default function HeroWidget() {
  const { widget } = hero;

  return (
    <div className="relative mx-auto w-full max-w-lg animate-float">
      <div className="glass-card rounded-2xl p-4 shadow-glass">
        <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#2462E8]">
            <Bot className="h-[13px] w-[13px] text-white" />
          </div>
          <span className="text-sm font-semibold text-white">{widget.title}</span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="h-2 w-2 animate-pulse-slow rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-emerald-300">{widget.status}</span>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-2">
          {widget.metrics.map((m) => {
            const Icon = icons[m.icon];
            return (
              <div key={m.label} className="glass-card rounded-xl p-2.5 text-center">
                <div className={`mb-1 flex items-center justify-center gap-1 ${m.color}`}>
                  <Icon className="h-[11px] w-[11px]" />
                  <span className="text-[10px] font-medium">{m.label}</span>
                </div>
                <div className="text-lg font-bold tabular-nums text-white">{m.value}</div>
              </div>
            );
          })}
        </div>

        <div className="space-y-2">
          <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold tracking-widest text-blue-300/80 uppercase">
            <div className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-emerald-400" />
            {widget.conversationLabel}
          </div>
          {widget.messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                  m.from === "user" ? "rounded-tr-sm bg-slate-600/50" : "rounded-tl-sm bg-[#2462E8]/80"
                }`}
              >
                <p className="text-xs leading-relaxed text-white">{m.text}</p>
                <p className="mt-0.5 text-right text-[10px] text-white/40">{m.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -top-3 -right-3 flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
        <Bot className="h-[11px] w-[11px]" />
        {widget.floatingBadge}
      </div>

      <div className="absolute -bottom-5 -left-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-card-hover">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
          ✓
        </span>
        <div>
          <p className="text-xs font-bold text-slate-900">{widget.toastTitle}</p>
          <p className="text-[10px] text-slate-400">{widget.toastSubtitle}</p>
        </div>
      </div>
    </div>
  );
}
