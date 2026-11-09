import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { business } from "@/lib/business-config";
import { locations } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact & Free Quote | North Coast Outdoor Services",
  description:
    "Request a free exterior cleaning quote from North Coast Outdoor Services. Call (360) 213-3784 or email info@northcoastoutdoorservices.com.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-forest">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold text-ink sm:text-5xl">
            Get Your Free Exterior Cleaning Quote
          </h1>
          <p className="mt-4 text-muted">
            Tell us about your windows, outdoor surfaces, or gutters and we will follow up
            with next steps. Prefer to talk now? Call or email anytime.
          </p>

          <div className="relative mt-8 h-28 w-56 overflow-hidden rounded-2xl border border-line bg-white p-3">
            <Image
              src={business.logo.path}
              alt={business.logo.alt}
              fill
              className="object-contain p-2"
              sizes="224px"
            />
          </div>

          <div className="mt-8 space-y-4">
            <a
              href={`tel:${business.phoneTel}`}
              className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-4 font-semibold text-ink transition hover:border-forest"
            >
              <Phone className="h-5 w-5 text-forest" />
              {business.phoneDisplay}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-4 font-semibold text-ink transition hover:border-forest"
            >
              <Mail className="h-5 w-5 text-forest" />
              {business.email}
            </a>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-ink">Service Areas</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={location.href}
                  className="rounded-full border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink hover:border-forest"
                >
                  {location.shortName}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-ink">Follow Along</h2>
            <div className="mt-3 flex gap-3">
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-deep"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-yellow px-4 py-2 text-sm font-semibold text-ink transition hover:bg-[#f0d85a]"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
