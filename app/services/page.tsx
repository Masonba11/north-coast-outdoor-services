import Link from "next/link";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata = buildMetadata({
  title: "Exterior Cleaning Services in Vancouver WA",
  description:
    "Explore window cleaning, soft washing, pressure washing, and gutter cleaning services from North Coast Outdoor Services in Vancouver, WA and surrounding cities.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <Hero
        title="Exterior Cleaning Services in Vancouver, WA"
        subtitle="Professional window cleaning, soft washing, pressure washing, and gutter cleaning for homes and businesses across Southwest Washington."
        compact
      />
      <section className="section-pad">
        <div className="container-page grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.name}
              description={service.cardDescription}
              href={service.href}
              image={service.image}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
        <div className="container-page mt-10 text-center">
          <Link href="/service-areas" className="btn-dark">
            Browse Service Areas
          </Link>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
