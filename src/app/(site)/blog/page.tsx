import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import BlogCard, { CategoryPill } from "@/components/BlogCard";
import FooterCta from "@/components/FooterCta";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Vende más con IA — aprende cómo. Casos reales, tutoriales y estrategias para automatizar ventas en LATAM.",
};

export default function BlogIndexPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => p.slug !== featured?.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-[#051528] to-navy-800 pt-32 pb-16 text-white">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />
        <Container className="relative flex flex-col items-center gap-4 text-center">
          <Eyebrow tone="dark">Blog Cosmiq</Eyebrow>
          <h1 className="max-w-2xl text-4xl font-bold sm:text-5xl">Vende más con IA — aprende cómo</h1>
          <p className="max-w-xl text-slate-300">
            Casos reales, tutoriales y estrategias para automatizar ventas en LATAM.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="flex flex-col gap-10">
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="grid overflow-hidden rounded-2xl border border-slate-100 sm:grid-cols-2"
            >
              <div className="flex min-h-[220px] flex-col justify-center gap-3 bg-brand-gradient p-8 text-white">
                <CategoryPill category={featured.category} />
                <p className="text-lg font-bold">{featured.title}</p>
              </div>
              <div className="flex flex-col gap-3 p-8">
                <div className="flex items-center gap-2">
                  <CategoryPill category={featured.category} />
                  <span className="text-xs font-semibold text-slate-400">Destacado</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900">{featured.title}</h2>
                <p className="text-sm text-slate-500">{featured.excerpt}</p>
                <span className="mt-auto text-xs text-slate-400">
                  {featured.date} · {featured.readTime}
                </span>
                <span className="text-sm font-semibold text-brand-blue">Leer artículo →</span>
              </div>
            </Link>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <FooterCta />
    </>
  );
}
