const messages = [
  { from: "user" as const, text: "¿Tienen turno para hoy?", time: "14:22" },
  { from: "ai" as const, text: "¡Hola! 👋 Sí. ¿Le queda mejor tarde o mañana temprano?", time: "14:22 · AI" },
  { from: "user" as const, text: "Mañana a las 10", time: "14:23" },
  { from: "ai" as const, text: "Perfecto, cita confirmada para mañana 29/05 a las 10:00am ✅", time: "14:23 · AI" },
];

export default function MockChatWidget() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#0A214E] via-[#0F2D6B] to-[#1645B0] p-5 shadow-glass">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <span className="ml-2 text-xs font-medium text-white/50">Agente AI • WhatsApp</span>
      </div>
      <div className="space-y-3 p-2">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-xl px-3 py-2 ${
                m.from === "user" ? "rounded-tr-sm bg-slate-500/40" : "rounded-tl-sm bg-[#2462E8]/70"
              }`}
            >
              <p className="text-xs leading-relaxed text-white">{m.text}</p>
              <p className="mt-0.5 text-right text-[10px] text-white/40">{m.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
