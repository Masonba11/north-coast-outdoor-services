import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, getPost, getPostSlugs } from "@/lib/blog";
import { absoluteUrl, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: "/og-image.png",
    keywords: post.keywords,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            image: absoluteUrl(post.image),
            author: {
              "@type": "Organization",
              name: "North Coast Outdoor Services",
            },
            mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
          },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="section-pad pt-8">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-forest">
            {post.date} · {post.readingTime}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-ink sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg text-muted">{post.description}</p>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[1.75rem]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="prose-ncos mt-8">
            {post.content.map((block, index) => {
              if (block.type === "h2" && block.text) {
                return <h2 key={`${block.type}-${index}`}>{block.text}</h2>;
              }
              if (block.type === "ul" && block.items) {
                return (
                  <ul key={`${block.type}-${index}`}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={`${block.type}-${index}`}>{block.text}</p>;
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-line bg-cream p-5 text-sm text-muted">
            Looking for local service? Explore{" "}
            <Link href="/services/window-cleaning" className="font-semibold text-forest">
              window cleaning
            </Link>
            ,{" "}
            <Link href="/services/pressure-washing" className="font-semibold text-forest">
              pressure washing
            </Link>
            , and{" "}
            <Link href="/services/gutter-cleaning" className="font-semibold text-forest">
              gutter cleaning
            </Link>{" "}
            in Vancouver, WA — or{" "}
            <Link href="/contact" className="font-semibold text-forest">
              request a free quote
            </Link>
            .
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-ink">More Articles</h2>
            <ul className="mt-4 space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="font-semibold text-forest hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <FinalCTA />
    </>
  );
}
