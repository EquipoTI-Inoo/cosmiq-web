import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import { CategoryPill } from "@/components/BlogCard";
import FooterCta from "@/components/FooterCta";
import { blogPosts, getPostBySlug } from "@/lib/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    url: `https://cosmiq.lat/blog/${post.slug}`,
    inLanguage: "es",
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    author: { "@type": "Organization", name: "Cosmiq" },
    publisher: { "@type": "Organization", name: "Cosmiq" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-[#051528] to-navy-800 pt-32 pb-16 text-white">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />
        <Container className="relative flex flex-col items-center gap-4 text-center">
          <Link href="/blog" className="text-sm text-slate-300 hover:text-white">
            ← Volver al Blog
          </Link>
          <CategoryPill category={post.category} />
          <h1 className="max-w-2xl text-3xl font-bold sm:text-4xl">{post.title}</h1>
          <p className="max-w-xl text-slate-300">{post.excerpt}</p>
          <p className="text-sm text-slate-400">
            {post.author} · {post.date} · {post.readTime} de lectura
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
          />

          <div className="mt-10 rounded-2xl bg-gradient-to-br from-[#020B1A] via-[#051528] to-[#0A214E] p-8 text-center text-white">
            <h2 className="text-xl font-bold">¿Listo para automatizar tus ventas?</h2>
            <Link
              href="/agenda/"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#2462E8] shadow-lg transition-all duration-200 hover:bg-blue-50 active:scale-[0.98]"
            >
              Agenda tu demo gratis
            </Link>
          </div>

          {related.length > 0 && (
            <div className="mt-12">
              <h3 className="text-lg font-bold text-slate-900">También te puede interesar</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="rounded-2xl border border-slate-100 p-5 hover:shadow-md"
                  >
                    <CategoryPill category={r.category} />
                    <p className="mt-2 font-semibold text-slate-900">{r.title}</p>
                    <p className="mt-1 text-xs text-slate-400">{r.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      <FooterCta />
    </>
  );
}
