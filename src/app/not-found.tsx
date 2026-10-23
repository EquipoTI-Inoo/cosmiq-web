import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="hero-grid relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden bg-gradient-to-br from-[#020B1A] via-[#051528] to-[#0A214E] px-4 text-center text-white">
      <Image src="/images/logo-blanco.png" alt="Cosmiq" width={140} height={36} className="relative z-10" />
      <p className="relative z-10 text-sm font-semibold tracking-wide text-blue-300 uppercase">Error 404</p>
      <h1 className="relative z-10 max-w-lg text-3xl font-bold sm:text-4xl">
        No encontramos esta página
      </h1>
      <p className="relative z-10 max-w-md text-slate-300">
        Puede que el enlace esté roto o la página ya no exista. Volvamos a donde sí vendes más.
      </p>
      <Link
        href="/"
        className="relative z-10 inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-semibold text-[#2462E8] shadow-lg transition-all duration-200 hover:bg-blue-50 active:scale-[0.98]"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
