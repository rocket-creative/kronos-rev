import Link from "next/link";
import type { Article } from "@/lib/articles";
import { getAuthorProfile } from "@/lib/articles";
import {
  loadArticleBody,
  splitArticleBody,
  splitForMidCta,
} from "@/lib/article-loader";
import {
  ArticleBody,
  ArticleCloseCta,
  ArticleMidCta,
  ArticleRelatedLinks,
} from "@/components/ArticleBody";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MedicallyReviewedBlock } from "@/components/MedicallyReviewedBlock";
import { BreadcrumbListSchema, ArticleSchema } from "@/components/JsonLd";
import { breadcrumbItems } from "@/lib/navigation";
import { PAGE_CONTAINER } from "@/lib/layout";
import { absoluteUrl } from "@/lib/metadata";
import { FOUNDER_PERSON_ID, SITE_URL } from "@/lib/site";

type ArticlePageProps = {
  article: Article;
};

export function ArticlePageLayout({ article }: ArticlePageProps) {
  const path = `/resources/articles/${article.slug}`;
  const pageUrl = absoluteUrl(path);
  const crumbs = breadcrumbItems([
    { name: "Resources", path: "/resources" },
    { name: "Articles", path: "/resources/articles" },
    { name: article.title, path },
  ]);

  const rawBody = loadArticleBody(article);
  const { content } = splitArticleBody(rawBody);
  const { beforeMid, afterMid } = splitForMidCta(content);
  const authorProfile = getAuthorProfile(article.author);

  const authorSchema =
    article.author === "Dr. John M. Abrahams, MD"
      ? {
          authorType: "Person" as const,
          authorName: article.author,
          authorUrl: FOUNDER_PERSON_ID,
        }
      : {
          authorType: "Person" as const,
          authorName: article.author,
          authorUrl: `${SITE_URL}/team#person-heisha-rivera`,
        };

  return (
    <div className="bg-stone-100 min-h-dvh">
      <BreadcrumbListSchema items={crumbs} />
      <ArticleSchema
        title={article.title}
        description={article.description}
        url={pageUrl}
        datePublished={article.date}
        authorName={authorSchema.authorName}
        authorUrl={authorSchema.authorUrl}
      />

      <section
        className="relative overflow-hidden pt-safe-top"
        style={{ background: "linear-gradient(160deg, #001A0A 0%, #003D1A 45%, #005C2A 100%)" }}
        aria-labelledby="article-heading"
      >
        <div className={`relative z-10 ${PAGE_CONTAINER} py-10 sm:py-14 lg:py-16`}>
          <Breadcrumbs items={crumbs} variant="dark" />
          <p className="font-body text-xs text-kronos-cyan uppercase tracking-widest mb-2 mt-2">
            {article.category} · Article {String(article.number).padStart(2, "0")}
          </p>
          <h1
            id="article-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5 max-w-3xl"
          >
            {article.title}
          </h1>
          <p className="font-body text-sm text-white/80 font-light">
            By{" "}
            <Link href={authorProfile.href} className="text-white underline hover:text-kronos-cyan">
              {authorProfile.label}
            </Link>
            {" · "}
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      <article className="bg-white py-12 sm:py-16">
        <div className={`${PAGE_CONTAINER} max-w-3xl`}>
          <ArticleBody markdown={beforeMid} />
          <ArticleMidCta />
          <ArticleBody markdown={afterMid} />
          <ArticleCloseCta />
          <ArticleRelatedLinks links={article.relatedLinks} />
          {article.medicallyReviewed && (
            <div className="mt-10">
              <MedicallyReviewedBlock variant="light" lastReviewed="June 2026" />
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
