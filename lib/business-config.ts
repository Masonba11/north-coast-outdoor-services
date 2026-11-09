export const business = {
  name: "North Coast Outdoor Services",
  legalName: "North Coast Outdoor Services",
  tagline: "Vancouver, WA exterior cleaning for Clark County & SW Washington",
  description:
    "North Coast Outdoor Services provides professional window cleaning, soft washing, pressure washing, and gutter cleaning for homes and businesses in Vancouver, WA, Clark County, and surrounding Southwest Washington communities.",
  phoneDisplay: "(360) 213-3784",
  phoneTel: "+13602133784",
  email: "info@northcoastoutdoorservices.com",
  primaryCity: "Vancouver, WA",
  region: "Southwest Washington",
  /** Provided quote form identifier — provider not confirmed in repo; used as a reference ID. */
  quoteFormId: "543f6c71-1eeb-4be4-bf17-9e5916087b08",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61595978131881",
    instagram: "https://www.instagram.com/northcoastoutdoorservices/",
  },
  logo: {
    path: "/images/north-coast-logo.jpg",
    width: 960,
    height: 535,
    alt: "North Coast Outdoor Services logo",
  },
  ogImage: "/og-image.png",
} as const;

export const siteConfig = {
  name: business.name,
  /** Production domain used for canonical/OG URLs when NEXT_PUBLIC_SITE_URL is unset at build time. */
  productionUrl: "https://north-coast-outdoor-services.vercel.app",
  getUrl() {
    return (
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      this.productionUrl
    );
  },
} as const;

