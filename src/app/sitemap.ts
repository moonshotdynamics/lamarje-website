import type { MetadataRoute } from "next";

const BASE_URL = "https://lamarje.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = [
    { path: "", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/structure", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/divisions/capital", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/divisions/infrastructure", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/divisions/supply-chain", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/divisions/consulting", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/divisions/fmcg", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/divisions/procurement", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
