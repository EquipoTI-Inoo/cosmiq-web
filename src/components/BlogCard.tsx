import Link from "next/link";
import type { BlogPost } from "@/lib/data/blog";
import { categoryColor } from "@/lib/data/blog";

const colorClasses: Record<string, string> = {
  blue: "bg-blue-500",
  emerald: "bg-emerald-500",
  violet: "bg-violet-500",
  pink: "bg-pink-500",
  amber: "bg-amber-500",
};

const pillClasses: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700",
  emerald: "bg-emerald-50 text-emerald-700",
  violet: "bg-violet-50 text-violet-700",
  pink: "bg-pink-50 text-pink-700",
  amber: "bg-amber-50 text-amber-700",
};

export function CategoryPill({ category }: { category: string }) {
  const color = categoryColor[category] ?? "blue";
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${pillClasses[color]}`}>
      {category}
    </span>
  );
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const color = categoryColor[post.category] ?? "blue";
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition hover:shadow-lg"
    >
      <div className={`flex h-36 items-start p-4 ${colorClasses[color]}`}>
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="line-clamp-2 text-lg font-bold text-slate-900">{post.title}</h3>
        <p className="line-clamp-2 text-sm text-slate-500">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-2 text-xs text-slate-400">
          <span>
            {post.date} · {post.readTime}
          </span>
          <span className="font-semibold text-brand-blue">Leer →</span>
        </div>
      </div>
    </Link>
  );
}
