import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import { locations } from "@/lib/locations";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import { getService, getServiceSlugs, services } from "@/lib/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: service.href,
    image: service.image,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: service.name,
            description: service.seoDescription,
            path: service.href,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: service.href },
          ]),
          faqJsonLd(service.faqs),
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      <section className="section-pad pt-8">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-forest">
              {service.name}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-ink sm:text-5xl">
              {service.name} in Vancouver, WA
            </h1>
            <p className="mt-4 text-lg text-muted">{service.heroSubheading}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
              <Link href="/service-areas" className="btn-dark">
                View Service Areas
              </Link>
            </div>
          </div>
          <div className="relative min-h-[20rem] overflow-hidden rounded-[2rem] sm:min-h-[26rem]">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="prose-ncos">
              {service.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <h2 className="mt-10 text-3xl font-bold text-ink">Benefits</h2>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-2xl border border-line bg-white px-4 py-3 text-sm text-muted"
                >
                  {benefit}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-3xl font-bold text-ink">Our Process</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {service.process.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-line bg-white p-5"
                >
                  <p className="text-sm font-bold text-yellow bg-forest inline-flex rounded-full px-3 py-1">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </article>
              ))}
            </div>

            <h2 className="mt-10 text-3xl font-bold text-ink">Related Services</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {services
                .filter((item) => item.slug !== service.slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={item.href}
                    className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-forest"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>

            <h2 className="mt-10 text-3xl font-bold text-ink">Cities We Serve</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={location.href}
                  className="rounded-full border border-line bg-cream px-3 py-1.5 text-sm font-medium text-ink hover:border-forest"
                >
                  {location.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <QuoteForm />
          </div>
        </div>
      </section>

      <FAQSection faqs={service.faqs} />
      <FinalCTA
        heading={`Need ${service.name}?`}
        body="Request a free quote and tell us about your property in Vancouver or a nearby community."
      />
    </>
  );
}
