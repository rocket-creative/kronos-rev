import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SPECIALTIES } from "@/lib/specialties";
import { STATES } from "@/lib/states";
import { ARTICLES } from "@/lib/articles";

const LAST_CONTENT_UPDATE = new Date("2026-06-15");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/lawyer-problem`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/how-we-work`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/specialties`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/results`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/pricing`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/team`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/faq`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/case-review`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/what-is-idr`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/sydra`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/resources`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/resources/articles`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/resources/idr-checklist`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.7 },
  ];

  const specialtyPages: MetadataRoute.Sitemap = SPECIALTIES.map((s) => ({
    url: `${SITE_URL}/specialties/${s.slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: "monthly",
    priority: s.slug === "plastic-surgery" || s.slug === "anesthesia" || s.slug === "general-surgery" ? 0.8 : 0.85,
  }));

  const statePages: MetadataRoute.Sitemap = STATES.map((s) => ({
    url: `${SITE_URL}/states/${s.slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: "monthly",
    priority: s.slug === "texas" || s.slug === "new-york" ? 0.8 : 0.75,
  }));

  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${SITE_URL}/resources/articles/${a.slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticPages, ...specialtyPages, ...statePages, ...articlePages];
}
