import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { locations } from "@/lib/locations";
import { absoluteUrl } from "@/lib/seo";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/service-areas",
    "/blog",
    "/privacy-policy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path || "/"),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(service.href),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...locations.map((location) => ({
      url: absoluteUrl(location.href),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: location.featured ? 0.95 : 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
