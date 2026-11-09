import Link from "next/link";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { getFeaturedLocation, locations } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Service Areas | Vancouver WA & Southwest Washington",
  description:
    "North Coast Outdoor Services provides window cleaning, soft washing, pressure washing, and gutter cleaning across Vancouver, Camas, Washougal, Battle Ground, Ridgefield, Woodland, Brush Prairie, La Center, and Kalama.",
  path: "/service-areas",
});

export default function ServiceAreasIndexPage() {
  const featured = getFeaturedLocation();

  return (
    <>
      <Hero
        title="Exterior Cleaning Across Southwest Washington"
        subtitle="Vancouver, WA is our primary focus, with dedicated local pages for surrounding communities."
        compact
      />
      <section className="section-pad">
        <div className="container-page grid gap-4 md:grid-cols-3">
          <Link
            href={featured.href}
            className="rounded-[1.75rem] bg-forest p-8 text-white md:col-span-1"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow">
              Primary City
            </p>
            <h2 className="mt-3 text-3xl font-bold">{featured.name}</h2>
            <p className="mt-3 text-sm text-white/75">
              Window cleaning, soft washing, pressure washing, and gutter cleaning for local homes and businesses.
            </p>
          </Link>
          <div className="grid gap-3 sm:grid-cols-2 md:col-span-2">
            {locations
              .filter((location) => !location.featured)
              .map((location) => (
                <Link
                  key={location.slug}
                  href={location.href}
                  className="rounded-2xl border border-line bg-white px-5 py-5 text-lg font-semibold text-ink transition hover:border-forest hover:shadow-md"
                >
                  {location.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
