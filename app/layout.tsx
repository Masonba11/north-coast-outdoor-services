import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { FloatingSocialStickers } from "@/components/FloatingSocialStickers";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileCTA } from "@/components/MobileCTA";
import { business, siteConfig } from "@/lib/business-config";
import { localBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const defaultTitle = "Window Cleaning Vancouver WA | North Coast Outdoor Services";
const defaultDescription =
  "Professional window cleaning, pressure washing, and gutter cleaning in Vancouver, WA. Serving Camas, Ridgefield, Battle Ground & surrounding areas. Get a free quote!";
const ogTitle = "North Coast Outdoor Services | Vancouver, WA";
const ogDescription =
  "Professional Window Cleaning, Pressure Washing & Gutter Cleaning in Vancouver and Southwest Washington. Call (360) 213-3784 for a free quote.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.getUrl()),
  title: {
    default: defaultTitle,
    template: `%s | ${business.name}`,
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: "/",
    siteName: business.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: business.ogImage,
        width: 1200,
        height: 630,
        alt: `${business.name} — Window Cleaning, Pressure Washing & Gutter Cleaning in Vancouver, WA`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [business.ogImage],
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${outfit.variable} antialiased`}>
        <JsonLd data={localBusinessJsonLd()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingSocialStickers />
        <MobileCTA />
      </body>
    </html>
  );
}
