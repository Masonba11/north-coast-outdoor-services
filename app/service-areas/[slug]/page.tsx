import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import {
  getLocation,
  getLocationSlugs,
  locations,
} from "@/lib/locations";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
} from "@/lib/seo";
import { services } from "@/lib/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return buildMetadata({
    title: location.seoTitle,
    description: location.seoDescription,
    path: location.href,
  });
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const nearby = locations.filter((item) => location.nearby.includes(item.slug));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
            { name: location.name, path: location.href },
          ]),
          faqJsonLd(location.faqs),
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: location.name },
        ]}
      />

      <section className="section-pad pt-8">
        <div className="container-page grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-forest">
              Service Area
            </p>
            <h1 className="mt-3 text-4xl font-bold text-ink sm:text-5xl">
              {location.h1}
            </h1>
            <div className="prose-ncos mt-6">
              {location.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 space-y-5">
              <article className="rounded-[1.5rem] border border-line bg-white p-6">
                <h2 className="text-2xl font-bold text-ink">
                  Window Cleaning in {location.shortName}
                </h2>
                <p className="mt-3 text-muted">{location.localNotes.windows}</p>
                <Link
                  href="/services/window-cleaning"
                  className="mt-4 inline-flex text-sm font-bold text-forest"
                >
                  Learn about window cleaning →
                </Link>
              </article>
              <article className="rounded-[1.5rem] border border-line bg-white p-6">
                <h2 className="text-2xl font-bold text-ink">
                  Soft Washing in {location.shortName}
                </h2>
                <p className="mt-3 text-muted">{location.localNotes.softWash}</p>
                <Link
                  href="/services/soft-washing"
                  className="mt-4 inline-flex text-sm font-bold text-forest"
                >
                  Learn about soft washing →
                </Link>
              </article>
              <article className="rounded-[1.5rem] border border-line bg-white p-6">
                <h2 className="text-2xl font-bold text-ink">
                  Pressure Washing in {location.shortName}
                </h2>
                <p className="mt-3 text-muted">{location.localNotes.pressure}</p>
                <Link
                  href="/services/pressure-washing"
                  className="mt-4 inline-flex text-sm font-bold text-forest"
                >
                  Learn about pressure washing →
                </Link>
              </article>
              <article className="rounded-[1.5rem] border border-line bg-white p-6">
                <h2 className="text-2xl font-bold text-ink">
                  Gutter Cleaning in {location.shortName}
                </h2>
                <p className="mt-3 text-muted">{location.localNotes.gutters}</p>
                <Link
                  href="/services/gutter-cleaning"
                  className="mt-4 inline-flex text-sm font-bold text-forest"
                >
                  Learn about gutter cleaning →
                </Link>
              </article>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-ink">Popular Services</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.href}
                    className="rounded-full border border-line bg-cream px-4 py-2 text-sm font-semibold text-ink hover:border-forest"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-ink">Nearby Communities</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {nearby.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.href}
                    className="rounded-full border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink hover:border-forest"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/about"
                  className="rounded-full border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink hover:border-forest"
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  className="rounded-full border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink hover:border-forest"
                >
                  Blog Tips
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <QuoteForm />
          </div>
        </div>
      </section>

      <FAQSection faqs={location.faqs} heading={`FAQs for ${location.name}`} />
      <FinalCTA
        heading={`Need Exterior Cleaning in ${location.shortName}?`}
        body={`Request a free quote for window cleaning, soft washing, pressure washing, or gutter cleaning in ${location.name}.`}
      />
    </>
  );
}
