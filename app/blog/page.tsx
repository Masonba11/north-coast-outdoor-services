import Image from "next/image";
import Link from "next/link";
import { FinalCTA } from "@/components/FinalCTA";
import { blogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Exterior Cleaning Blog | Tips for Vancouver WA Homeowners",
  description:
    "Helpful articles on window cleaning, soft washing, pressure washing, and gutter care for Vancouver, WA and Southwest Washington homeowners.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold text-ink sm:text-5xl">
              Exterior Cleaning Tips & Local Guidance
            </h1>
            <p className="mt-4 text-muted">
              Practical articles for Pacific Northwest homeowners who want clearer windows,
              cleaner hardscapes, and better gutter maintenance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_12px_36px_rgba(16,20,18,0.06)]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-forest">
                    {post.date} · {post.readingTime}
                  </p>
                  <h2 className="text-xl font-bold text-ink">
                    <Link href={`/blog/${post.slug}`} className="hover:text-forest">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-muted">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex text-sm font-bold text-forest"
                  >
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
