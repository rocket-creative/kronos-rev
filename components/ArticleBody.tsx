import Link from "next/link";
import type { NavLink } from "@/lib/navigation";

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
