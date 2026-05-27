import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const LAST_CONTENT_UPDATE = new Date("2026-05-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/lawyer-problem", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/how-we-work", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/specialties", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/results", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/team", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/case-review", priority: 0.95, changeFrequency: "monthly" as const },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${SITE_URL}${path}` : SITE_URL,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency,
    priority,
  }));
}
