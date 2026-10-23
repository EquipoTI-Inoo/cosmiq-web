import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import Container from "./Container";

export default function FunnelHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/images/isotipo-azul.png" alt="Cosmiq" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-black tracking-tight text-slate-900">Cosmiq</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 text-sm text-slate-500 sm:flex">
            <Clock className="h-3.5 w-3.5" />
            Demo gratis de 30 min
          </span>
        </div>
      </Container>
    </header>
  );
}
