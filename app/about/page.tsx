import Image from "next/image";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { business } from "@/lib/business-config";
import { locations } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata = buildMetadata({
  title: "About North Coast Outdoor Services | Vancouver WA",
  description:
    "Learn about North Coast Outdoor Services, a Vancouver, WA exterior cleaning company offering window cleaning, soft washing, pressure washing, and gutter cleaning across Southwest Washington.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Your Local Exterior Cleaning Team in Southwest Washington"
        subtitle="North Coast Outdoor Services helps homeowners and businesses keep exteriors looking clean with professional window cleaning, soft washing, pressure washing, and gutter cleaning."
        imageSrc="/images/about-exterior.jpg"
        compact
      />

      <section className="section-pad">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-ink">Built Around Clear, Practical Exterior Care</h2>
            <div className="prose-ncos mt-5">
              <p>
                North Coast Outdoor Services provides exterior cleaning for properties across
                Vancouver, WA and surrounding Southwest Washington communities. Our focus is
                straightforward: help homes and businesses look cleaner with reliable window
                cleaning, soft washing, pressure washing, and gutter cleaning.
              </p>
              <p>
                We keep communication clear from the first quote request through the finished
                visit. Every property is different, so we ask about the surfaces you need cleaned,
                access considerations, and timing before work begins.
              </p>
              <p>
                Whether you manage a single-family home, a local storefront, or a property that
                simply needs a seasonal reset, we are here to help with free estimates and
                professional service.
              </p>
            </div>
          </div>
          <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem]">
            <Image
              src={business.logo.path}
              alt={business.logo.alt}
              fill
              className="object-contain bg-white p-10"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section-pad grain">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-ink">Services We Provide</h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li
                  key={service.slug}
                  className="rounded-2xl border border-line bg-white px-5 py-4"
                >
                  <p className="font-bold text-ink">{service.name}</p>
                  <p className="mt-1 text-sm text-muted">{service.cardDescription}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-ink">Where We Work</h2>
            <p className="mt-4 text-muted">
              Vancouver is our primary service city, with coverage across nearby communities:
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {locations.map((location) => (
                <span
                  key={location.slug}
                  className="rounded-full border border-line bg-white px-3 py-1.5 text-sm font-semibold text-ink"
                >
                  {location.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        heading="Let’s Talk About Your Property"
        body="Request a free quote and tell us which exterior cleaning services you need."
      />
    </>
  );
}
