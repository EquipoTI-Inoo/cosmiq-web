const leads = [
  { name: "María G.", stage: "Calificado", amount: "$350", dot: "bg-emerald-500" },
  { name: "Carlos R.", stage: "Propuesta", amount: "$1,200", dot: "bg-[#2462E8]" },
  { name: "Ana P.", stage: "Cierre", amount: "$800", dot: "bg-indigo-500" },
  { name: "Luis M.", stage: "Nuevo", amount: "$500", dot: "bg-amber-500" },
];

export default function MockKanban() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#0F2D6B] via-[#1645B0] to-[#2462E8] p-5 shadow-glass">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <span className="ml-2 text-xs font-medium text-white/50">IA • Pipeline Inteligente</span>
      </div>
      <div className="space-y-2 p-2">
        {leads.map((lead) => (
          <div key={lead.name} className="flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2">
            <div className={`h-2 w-2 shrink-0 rounded-full ${lead.dot}`} />
            <span className="flex-1 text-xs font-medium text-white">{lead.name}</span>
            <span className="text-xs text-white/60">{lead.stage}</span>
            <span className="text-xs font-bold text-emerald-300">{lead.amount}</span>
          </div>
        ))}
        <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
          <span className="text-xs text-white/50">4 leads activos</span>
          <span className="text-xs font-bold text-emerald-300">$2,850 en pipeline</span>
        </div>
      </div>
    </div>
  );
}
