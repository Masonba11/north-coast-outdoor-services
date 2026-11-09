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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.getUrl()),
  title: {
    default: `${business.name} | Window Cleaning & Exterior Cleaning Vancouver WA`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${business.name} | Window Cleaning & Exterior Cleaning Vancouver WA`,
    description: business.description,
    url: "/",
    siteName: business.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: business.ogImage,
        width: 1200,
        height: 630,
        alt: business.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Window Cleaning & Exterior Cleaning Vancouver WA`,
    description: business.description,
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
