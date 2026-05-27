import Link from "next/link";
import { PAGE_CONTAINER } from "@/lib/layout";

export type BreadcrumbSegment = { name: string; url: string };

export function Breadcrumbs({ items }: { items: BreadcrumbSegment[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`${PAGE_CONTAINER} pt-6 pb-2`}
    >
      <ol className="flex flex-wrap items-center gap-2 font-body text-xs text-white/50">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-white/30" aria-hidden="true">
                  /
                </span>
              )}
              {isLast ? (
                <span className="inline-flex items-center min-h-[44px] text-white/80" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url.replace(/^https:\/\/www\.kronosrevenue\.health/, "") || "/"}
                  className="inline-flex items-center min-h-[44px] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan rounded"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
