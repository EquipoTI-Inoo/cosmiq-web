import { Mail } from "lucide-react";

export default function MockCampaignStats() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#162454] via-[#0F2D6B] to-[#1D55D4] p-5 shadow-glass">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <span className="ml-2 text-xs font-medium text-white/50">Automatizaciones • Campañas</span>
      </div>
      <div className="space-y-2 p-2">
        <div className="rounded-lg bg-white/10 px-3 py-2.5">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-[#2462E8]" />
            <span className="text-xs font-bold text-white">Campaña de Bienvenida</span>
            <span className="ml-auto rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300">
              Activa
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-sm font-bold text-white">38%</p>
              <p className="text-[10px] text-white/50">Apertura</p>
            </div>
            <div>
              <p className="text-sm font-bold text-white">12%</p>
              <p className="text-[10px] text-white/50">Clicks</p>
            </div>
            <div>
              <p className="text-sm font-bold text-white">94</p>
              <p className="text-[10px] text-white/50">Enviados</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
          <Mail className="h-[11px] w-[11px] shrink-0 text-blue-300" />
          <span className="text-xs text-white/70">cosmiq.lat/promo</span>
          <span className="ml-auto text-xs font-semibold text-blue-300">↗ 234 visitas</span>
        </div>
      </div>
    </div>
  );
}
