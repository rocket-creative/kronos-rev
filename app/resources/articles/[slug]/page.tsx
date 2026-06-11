import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePageLayout } from "@/components/ArticlePageLayout";
import { createPageMetadata } from "@/lib/metadata";
import { ARTICLES, getArticleBySlug } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return createPageMetadata({
    title: `${article.title} | Kronos Revenue`,
    description: article.description,
    path: `/resources/articles/${slug}`,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return <ArticlePageLayout article={article} />;
}
