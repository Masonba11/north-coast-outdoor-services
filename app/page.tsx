import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  MapPinned,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { getFeaturedLocation, locations } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata = buildMetadata({
  title: "Window Cleaning Vancouver WA | North Coast Outdoor Services",
  description:
    "Professional window cleaning, pressure washing, and gutter cleaning in Vancouver, WA. Serving Camas, Ridgefield, Battle Ground & surrounding areas. Get a free quote!",
  path: "/",
  image: "/og-image.png",
  openGraphTitle: "North Coast Outdoor Services | Vancouver, WA",
  openGraphDescription:
    "Professional Window Cleaning, Pressure Washing & Gutter Cleaning in Vancouver and Southwest Washington. Call (360) 213-3784 for a free quote.",
  keywords: [
    "window cleaning Vancouver WA",
    "soft washing Vancouver WA",
    "pressure washing Vancouver WA",
    "gutter cleaning Vancouver WA",
    "exterior cleaning Vancouver WA",
  ],
});

const reasons = [
  {
    icon: MapPinned,
    title: "Built for Vancouver & Clark County",
    text: "Local exterior cleaning for Vancouver, Camas, Washougal, Battle Ground, and nearby SW Washington cities.",
  },
  {
    icon: Sparkles,
    title: "Ready for PNW weather",
    text: "Rain, pollen, moss, and leaf debris are part of life here—our services are built around those conditions.",
  },
  {
    icon: CalendarDays,
    title: "Convenient local scheduling",
    text: "Request a quote and plan service around your property and timing needs.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    text: "Straightforward estimates and project details before work begins.",
  },
  {
    icon: CheckCircle2,
    title: "Free estimates",
    text: "Tell us what you need cleaned and get a free quote for your Vancouver-area property.",
  },
];

export default function HomePage() {
  const featured = getFeaturedLocation();

  return (
    <>
      <Hero
        title="Professional Window Cleaning & Exterior Cleaning in Vancouver, WA"
        subtitle="From rainy Clark County winters to pollen-heavy springs, North Coast Outdoor Services keeps Vancouver-area homes and businesses looking sharp with window cleaning, soft washing, pressure washing, and gutter cleaning across Southwest Washington."
      />

      <section className="border-b border-line bg-white">
        <div className="container-page flex flex-col gap-3 py-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm font-semibold text-forest">
            Serving the Columbia River corridor & inland communities
          </p>
          <p className="text-sm text-muted">
            Vancouver · Camas · Washougal · Battle Ground · Ridgefield · Woodland · Brush Prairie · La Center · Kalama
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              Exterior Cleaning Services That Make a Difference
            </h2>
            <p className="mt-4 text-muted">
              Window cleaning, soft washing, pressure washing, and gutter cleaning for homes and businesses across Vancouver, WA and nearby Clark County communities.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.name}
                description={service.cardDescription}
                href={service.href}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad grain">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              Local Exterior Cleaning You Can Count On
            </h2>
            <p className="mt-4 text-muted">
              Practical reasons homeowners and businesses choose North Coast Outdoor Services.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[1.5rem] border border-line bg-white/90 p-5 shadow-[0_10px_30px_rgba(16,20,18,0.04)]"
              >
                <reason.icon className="h-6 w-6 text-forest" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-ink sm:text-4xl">
                Serving Vancouver & Nearby Communities
              </h2>
              <p className="mt-4 text-muted">
                Rooted in Vancouver, WA—with dedicated pages for Camas, Washougal, Battle Ground, Ridgefield, and the rest of our Clark County / SW Washington coverage.
              </p>
            </div>
            <Link href="/service-areas" className="btn-dark w-fit">
              View All Service Areas
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link
              href={featured.href}
              className="rounded-[1.75rem] bg-forest p-7 text-white md:col-span-1"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow">
                Featured
              </p>
              <h3 className="mt-3 text-3xl font-bold">{featured.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Our home base for window cleaning, soft washing, pressure washing, and gutter cleaning.
              </p>
            </Link>
            <div className="grid gap-3 sm:grid-cols-2 md:col-span-2">
              {locations
                .filter((location) => !location.featured)
                .map((location) => (
                  <Link
                    key={location.slug}
                    href={location.href}
                    className="rounded-2xl border border-line bg-white px-4 py-4 text-sm font-semibold text-ink transition hover:border-forest hover:text-forest"
                  >
                    {location.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <FinalCTA />
    </>
  );
}
