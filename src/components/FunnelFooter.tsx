import Link from "next/link";
import Image from "next/image";

export default function FunnelFooter() {
  return (
    <footer className="border-t border-white/5 bg-navy-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/images/isotipo-blanco.png" alt="Cosmiq" width={28} height={28} className="h-7 w-7" />
          <span className="text-lg font-black tracking-tight text-white">Cosmiq</span>
        </Link>
        <p className="text-xs text-white/25">© 2026 Cosmiq.lat — Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
