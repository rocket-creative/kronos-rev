import Link from "next/link";
import { PAGE_CONTAINER } from "@/lib/layout";

export type BreadcrumbSegment = { name: string; url: string };

type BreadcrumbsProps = {
  items: BreadcrumbSegment[];
  variant?: "light" | "dark";
};

export function Breadcrumbs({ items, variant = "dark" }: BreadcrumbsProps) {
  const isLight = variant === "light";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`${PAGE_CONTAINER} pt-6 pb-2`}
    >
      <ol
        className={`flex flex-wrap items-center gap-2 font-body text-xs ${
          isLight ? "text-gray-600" : "text-white/60"
        }`}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-2">
              {index > 0 && (
                <span
                  className={isLight ? "text-gray-300" : "text-white/30"}
                  aria-hidden="true"
                >
                  /
                </span>
              )}
              {isLast ? (
                <span
                  className={`inline-flex items-center min-h-[44px] ${
                    isLight ? "text-gray-900" : "text-white/90"
                  }`}
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url.replace(/^https:\/\/www\.kronosrevenue\.health/, "") || "/"}
                  className={`inline-flex items-center min-h-[44px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan rounded ${
                    isLight ? "hover:text-gray-900" : "hover:text-white"
                  }`}
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
