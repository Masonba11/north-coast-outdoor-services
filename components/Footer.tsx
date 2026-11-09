import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { business } from "@/lib/business-config";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="container-page section-pad grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="relative block h-16 w-[200px]">
            <Image
              src={business.logo.path}
              alt={business.logo.alt}
              fill
              className="object-contain object-left"
              sizes="200px"
            />
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-white/75">
            {business.description}
          </p>
          <div className="flex gap-3">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="North Coast Outdoor Services on Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white text-forest shadow-[0_0_0_2px_rgba(255,255,255,0.45),0_0_14px_rgba(255,255,255,0.35)] transition hover:bg-yellow hover:text-ink"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="North Coast Outdoor Services on Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-yellow text-ink shadow-[0_0_0_2px_rgba(255,255,255,0.45),0_0_14px_rgba(255,255,255,0.35)] transition hover:bg-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-bold">Services</h2>
          <ul className="space-y-2 text-sm text-white/80">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={service.href} className="transition hover:text-yellow">
                  {service.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="transition hover:text-yellow">
                All Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-bold">Service Areas</h2>
          <ul className="grid grid-cols-1 gap-2 text-sm text-white/80 sm:grid-cols-2 lg:grid-cols-1">
            {locations.map((location) => (
              <li key={location.slug}>
                <Link href={location.href} className="transition hover:text-yellow">
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-bold">Contact</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <a
                href={`tel:${business.phoneTel}`}
                className="inline-flex items-center gap-2 transition hover:text-yellow"
              >
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}`}
                className="inline-flex items-center gap-2 transition hover:text-yellow"
              >
                <Mail className="h-4 w-4" />
                {business.email}
              </a>
            </li>
            <li className="pt-2">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-5 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-yellow">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-yellow">
              Terms
            </Link>
            <Link href="/blog" className="hover:text-yellow">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
