import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CollectionPageSchema, BreadcrumbListSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { breadcrumbItems } from "@/lib/navigation";
import { createPageMetadata, absoluteUrl } from "@/lib/metadata";
import { PAGE_CONTAINER } from "@/lib/layout";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = createPageMetadata({
  title: "NSA IDR Articles | Education for Surgical Practices | Kronos Revenue",
  description:
    "Educational articles on federal IDR, open negotiation, QPA disputes, batching, filing fees, and in house IDR vs outsourcing for surgical practices.",
  path: "/resources/articles",
});

export default function ArticlesIndexPage() {
  const pageUrl = absoluteUrl("/resources/articles");
  const crumbs = breadcrumbItems([{ name: "Articles", path: "/resources/articles" }]);

  return (
    <div className="bg-stone-100 min-h-dvh">
      <BreadcrumbListSchema items={crumbs} />
      <CollectionPageSchema
        name="NSA IDR Articles"
        description="Educational articles on No Surprises Act independent dispute resolution."
        url={pageUrl}
        items={ARTICLES.map((a) => ({
          name: a.title,
          url: absoluteUrl(`/resources/articles/${a.slug}`),
        }))}
      />

      <section
        className="relative overflow-hidden pt-safe-top"
        style={{ background: "linear-gradient(160deg, #001A0A 0%, #003D1A 45%, #005C2A 100%)" }}
        aria-labelledby="articles-heading"
      >
        <div className={`relative z-10 ${PAGE_CONTAINER} py-10 sm:py-14 lg:py-16`}>
          <Breadcrumbs items={crumbs} variant="dark" />
          <h1
            id="articles-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5 max-w-3xl"
          >
            NSA IDR articles for surgical practices.
          </h1>
          <p className="font-body text-sm text-white/90 font-light leading-relaxed max-w-2xl">
            Plain English guides on federal IDR, deadlines, evidence, and the economics of recovery.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className={PAGE_CONTAINER}>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ARTICLES.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/resources/articles/${article.slug}`}
                  className="block border border-gray-200 p-6 hover:border-kronos-cyan transition-colors h-full"
                >
                  <p className="font-body text-xs uppercase tracking-widest text-kronos-cyan mb-2">
                    {article.category} · Article {String(article.number).padStart(2, "0")}
                  </p>
                  <h2 className="font-heading text-lg text-gray-900 mb-2">{article.title}</h2>
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
    </div>
  );
}
