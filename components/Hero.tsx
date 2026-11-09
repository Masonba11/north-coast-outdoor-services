import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { business } from "@/lib/business-config";

type HeroProps = {
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryHref?: string;
  primaryLabel?: string;
  showCallButton?: boolean;
  compact?: boolean;
};

export function Hero({
  title,
  subtitle,
  imageSrc = "/images/hero-home.jpg",
  imageAlt = "Pacific Northwest home exterior",
  primaryHref = "/contact",
  primaryLabel = "Get a Free Quote",
  showCallButton = true,
  compact = false,
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden ${compact ? "min-h-[52vh]" : "min-h-[78vh]"}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/70 to-forest/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,206,72,0.18),transparent_35%)]" />

      <div className="container-page relative flex min-h-[inherit] items-center py-20">
        <div className={`max-w-3xl text-white ${compact ? "" : "fade-up"}`}>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-yellow">
            Vancouver, WA · Clark County · SW Washington
          </p>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            {business.name}
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
            </Link>
            {showCallButton ? (
              <a href={`tel:${business.phoneTel}`} className="btn-secondary">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {business.phoneDisplay}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
