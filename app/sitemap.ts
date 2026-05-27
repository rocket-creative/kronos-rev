import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.kronosrevenue.health";
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
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
