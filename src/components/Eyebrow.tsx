export default function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`mb-4 inline-block rounded-full px-4 py-1.5 font-mono text-xs font-bold tracking-[0.14em] uppercase ${
        tone === "dark"
          ? "border border-white/15 bg-white/10 text-blue-200"
          : "border border-blue-100 bg-blue-50 text-blue-700"
      }`}
    >
      {children}
    </span>
  );
}
