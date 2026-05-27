import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { MarketingPage, MarketingSection } from "@/components/MarketingPage";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { PAGE_SEO } from "@/lib/page-seo";
import { marketingServiceSchema } from "@/lib/service-schema";
import { getStateBySlug, STATES } from "@/lib/states";
import { CTA } from "@/lib/ctas";

type Props = { params: Promise<{ state: string }> };

export function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return {};
  const seo = PAGE_SEO.state[state.seoKey];
  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/states/${slug}`,
  });
}

export default async function StateLandingPage({ params }: Props) {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) notFound();

  const path = `/states/${slug}`;
  const crumbs = breadcrumbItems([
    { name: "States", path: "/states/texas" },
    { name: state.name, path },
  ]);

  const service = marketingServiceSchema(
    path,
    `NSA IDR for ${state.name} Surgical Practices`,
    PAGE_SEO.state[state.seoKey].description,
    "No Surprises Act IDR"
  );

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      currentPath={path}
      service={service}
      eyebrow={`NSA · ${state.name}`}
      h1={state.h1}
      intro={state.paragraphs[0]}
      bottomCtaHeading={state.ctaLabel}
      showRelated={false}
    >
      <MarketingSection variant="white" labelledById="state-detail">
        <div className="max-w-3xl space-y-4 font-body text-gray-600 font-light leading-relaxed">
          {state.paragraphs.slice(1).map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
        <Link
          href={CTA.caseReview.href}
          className="inline-flex items-center gap-3 mt-8 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-5 transition-all"
        >
          {state.ctaLabel}
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </Link>
        <p className="mt-6">
          <Link href="/specialties" className="text-kronos-green-dark text-sm underline">
            Specialties we serve
          </Link>
        </p>
      </MarketingSection>
    </MarketingPage>
  );
}
