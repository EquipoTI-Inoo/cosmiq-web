import type { Metadata } from "next";
import Container from "@/components/Container";
import FooterCta from "@/components/FooterCta";
import { getLegalPageBySlug } from "@/lib/data/legal";
import { notFound } from "next/navigation";

export const metadata: Metadata = { title: "Política de Privacidad" };

export default function PrivacidadPage() {
  const page = getLegalPageBySlug("privacidad");
  if (!page) notFound();

  return (
    <>
      <section className="pt-28 pb-16">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-bold text-slate-900">{page.title}</h1>
          <p className="mt-2 text-sm text-slate-400">Última actualización: {page.lastUpdated}</p>

          <div className="mt-10 flex flex-col gap-8">
            {page.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-lg font-bold text-slate-900">{section.heading}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{section.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <FooterCta />
    </>
  );
}
