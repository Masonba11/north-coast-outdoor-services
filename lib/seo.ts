import type { Metadata } from "next";
import { business, siteConfig } from "./business-config";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
  openGraphTitle?: string;
  openGraphDescription?: string;
};

export function absoluteUrl(path = "/"): string {
  const base = siteConfig.getUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = business.ogImage,
  keywords,
  noIndex = false,
  openGraphTitle,
  openGraphDescription,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const ogDescription = openGraphDescription ?? description;

  const fullTitle = title.includes("North Coast Outdoor Services")
    ? title
    : `${title} | North Coast Outdoor Services`;

  const fullOgTitle = openGraphTitle ?? fullTitle;

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullOgTitle,
      description: ogDescription,
      url,
      siteName: business.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${business.name} — Window Cleaning, Pressure Washing & Gutter Cleaning in Vancouver, WA`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullOgTitle,
      description: ogDescription,
      images: [imageUrl],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl("/")}/#business`,
    name: business.name,
    description: business.description,
    url: absoluteUrl("/"),
    telephone: business.phoneTel,
    email: business.email,
    image: absoluteUrl(business.ogImage),
    logo: absoluteUrl(business.logo.path),
    areaServed: [
      "Vancouver, WA",
      "Camas, WA",
      "Washougal, WA",
      "Battle Ground, WA",
      "Ridgefield, WA",
      "Woodland, WA",
      "Brush Prairie, WA",
      "La Center, WA",
      "Kalama, WA",
    ],
    sameAs: [business.social.facebook, business.social.instagram],
    knowsAbout: [
      "Window Cleaning",
      "Soft Washing",
      "Pressure Washing",
      "Gutter Cleaning",
    ],
    priceRange: "$$",
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phoneTel,
      email: business.email,
      url: absoluteUrl("/"),
    },
    areaServed: "Southwest Washington",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
