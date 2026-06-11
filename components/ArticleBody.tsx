import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NavLink } from "@/lib/navigation";
import { CTA } from "@/lib/ctas";

type ArticleBodyProps = {
  markdown: string;
};

type InlineSegment = { type: "text"; value: string } | { type: "link"; label: string; href: string };

function parseInline(text: string): InlineSegment[] {
  const segments: InlineSegment[] = [];
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: "text", value: text.slice(lastIndex, match.index) });
    }
    segments.push({ type: "link", label: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    segments.push({ type: "text", value: text.slice(lastIndex) });
  }

  return segments.length > 0 ? segments : [{ type: "text", value: text }];
}

function InlineContent({ text }: { text: string }) {
  const segments = parseInline(text);
  return (
    <>
      {segments.map((seg, i) =>
        seg.type === "link" ? (
          <Link
            key={`${seg.href}-${i}`}
            href={seg.href}
            className="text-kronos-green-dark underline underline-offset-2 hover:opacity-80"
          >
            {seg.label}
          </Link>
        ) : (
          <span key={i}>{seg.value}</span>
        )
      )}
    </>
  );
}

export function ArticleBody({ markdown }: ArticleBodyProps) {
  const blocks = markdown.split(/\n\n+/).filter(Boolean);

  return (
    <div className="font-body text-gray-600 font-light leading-relaxed space-y-6">
      {blocks.map((block, index) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="font-heading text-xl sm:text-2xl text-gray-900 pt-2"
            >
              {block.replace(/^##\s+/, "")}
            </h2>
          );
        }

        return (
          <p key={index}>
            <InlineContent text={block.replace(/\n/g, " ")} />
          </p>
        );
      })}
    </div>
  );
}

export function ArticleMidCta() {
  return (
    <div className="my-10 py-8 px-6 bg-kronos-gray-200 border-l-4 border-kronos-cyan">
      <p className="font-body text-sm text-gray-700 font-light mb-4">
        Want to see what your claims are worth under current federal win rates and deadlines?
      </p>
      <Link
        href={CTA.caseReview.href}
        className="inline-flex items-center gap-2 bg-kronos-green-dark text-white py-3 px-6 uppercase tracking-widest text-xs font-bold hover:gap-3 transition-all"
      >
        {CTA.caseReview.label}
        <ArrowRight className="w-3 h-3" aria-hidden="true" />
      </Link>
    </div>
  );
}

export function ArticleRelatedLinks({ links }: { links: NavLink[] }) {
  if (links.length === 0) return null;

  return (
    <nav className="mt-12 pt-8 border-t border-gray-200" aria-label="Related reading">
      <h2 className="font-heading text-lg text-gray-900 mb-4">Related reading</h2>
      <ul className="flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-[44px] items-center px-4 py-2 border border-gray-200 font-body text-xs uppercase tracking-widest text-gray-600 hover:border-kronos-cyan hover:text-kronos-green-dark transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function ArticleCloseCta() {
  return (
    <div className="mt-10">
      <Link
        href={CTA.caseReview.href}
        className="inline-flex items-center gap-3 bg-kronos-cyan text-white py-3 px-8 uppercase tracking-widest text-xs font-bold hover:opacity-90 hover:gap-5 transition-all"
      >
        Get a free IDR review
        <ArrowRight className="w-3 h-3" aria-hidden="true" />
      </Link>
    </div>
  );
}
