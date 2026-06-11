import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CollectionPageSchema, BreadcrumbListSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { breadcrumbItems } from "@/lib/navigation";
import { createPageMetadata, absoluteUrl } from "@/lib/metadata";
import { PAGE_CONTAINER } from "@/lib/layout";
import { ARTICLES } from "@/lib/articles";
import { RESOURCE_HUB_PRIMARY } from "@/lib/resources-hub";
import { PAGE_SEO } from "@/lib/page-seo";
import { CTA } from "@/lib/ctas";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_SEO.resources.title,
  description: PAGE_SEO.resources.description,
  path: "/resources",
});

export default function ResourcesPage() {
  const pageUrl = absoluteUrl("/resources");
  const crumbs = breadcrumbItems([{ name: "Resources", path: "/resources" }]);

  const collectionItems = [
    ...RESOURCE_HUB_PRIMARY.map((item) => ({
      name: item.label,
      url: absoluteUrl(item.href),
    })),
    ...ARTICLES.map((article) => ({
      name: article.title,
      url: absoluteUrl(`/resources/articles/${article.slug}`),
    })),
  ];

  return (
    <div className="bg-stone-100 min-h-dvh">
      <BreadcrumbListSchema items={crumbs} />
      <CollectionPageSchema
        name="NSA IDR Resources"
        description={PAGE_SEO.resources.description}
        url={pageUrl}
        items={collectionItems}
      />

      <section
        className="relative overflow-hidden pt-safe-top"
        style={{ background: "linear-gradient(160deg, #001A0A 0%, #003D1A 45%, #005C2A 100%)" }}
        aria-labelledby="resources-heading"
      >
        <div className={`relative z-10 ${PAGE_CONTAINER} py-10 sm:py-14 lg:py-16`}>
          <Breadcrumbs items={crumbs} variant="dark" />
          <h1
            id="resources-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5 max-w-3xl"
          >
            NSA IDR resources for surgical practices.
          </h1>
          <p className="font-body text-sm text-white/90 font-light leading-relaxed max-w-2xl">
            Guides, checklists, and articles on federal independent dispute resolution. No legal
            jargon. Built for surgeons and billing teams deciding whether to file.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16" aria-labelledby="primary-resources-heading">
        <div className={PAGE_CONTAINER}>
          <h2
            id="primary-resources-heading"
            className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8"
          >
            Start with these
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESOURCE_HUB_PRIMARY.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block border border-gray-200 p-6 hover:border-kronos-cyan transition-colors h-full"
                >
                  <p className="font-body text-xs uppercase tracking-widest text-kronos-cyan mb-2">
                    {item.eyebrow}
                  </p>
                  <h3 className="font-heading text-lg text-gray-900 mb-2">{item.label}</h3>
                  <p className="font-body text-sm text-gray-600 font-light">{item.description}</p>
                  <span className="inline-flex items-center gap-2 mt-4 text-kronos-green-dark uppercase tracking-widest text-xs font-bold">
                    Open
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-stone-100 py-12 sm:py-16" aria-labelledby="articles-heading">
        <div className={PAGE_CONTAINER}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h2
                id="articles-heading"
                className="font-heading text-2xl sm:text-3xl text-gray-900 mb-3"
              >
                IDR articles
              </h2>
              <p className="font-body text-sm text-gray-600 font-light max-w-2xl">
                Timelines, attorney economics, evidence, batching, filing fees, and state
                pathways. Every article ends with a path to a free case review.
              </p>
            </div>
            <Link
              href="/resources/articles"
              className="inline-flex items-center gap-2 text-kronos-green-dark uppercase tracking-widest text-xs font-bold shrink-0 hover:gap-3 transition-all"
            >
              View all articles
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ARTICLES.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/resources/articles/${article.slug}`}
                  className="block bg-white border border-gray-200 p-6 hover:border-kronos-cyan transition-colors h-full"
                >
                  <p className="font-body text-xs uppercase tracking-widest text-kronos-cyan mb-2">
                    {article.category} · Article {String(article.number).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading text-lg text-gray-900 mb-2">{article.title}</h3>
                  <p className="font-body text-sm text-gray-600 font-light">{article.description}</p>
                  <span className="inline-flex items-center gap-2 mt-4 text-kronos-green-dark uppercase tracking-widest text-xs font-bold">
                    Read
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 border-t border-gray-200">
        <div className={`${PAGE_CONTAINER} flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6`}>
          <div>
            <p className="font-heading text-xl text-gray-900 mb-2">
              Ready to see what your practice is leaving on the table?
            </p>
            <p className="font-body text-sm text-gray-600 font-light max-w-xl">
              Send 3 to 5 EOBs. We review eligibility and compare recovery against your current
              arrangement. One business day.
            </p>
          </div>
          <Link
            href={CTA.caseReview.href}
            className="inline-flex items-center justify-center gap-3 bg-kronos-cyan text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:opacity-90 hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan min-h-[48px] shrink-0"
            aria-label={CTA.caseReview.ariaLabel}
          >
            {CTA.caseReview.label}
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
