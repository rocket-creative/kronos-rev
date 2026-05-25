import type { ReactNode } from "react";

/** Wraps new or inferred copy for client review per SEO implement prompt. */
export function ReviewHighlight({ children }: { children: ReactNode }) {
  return (
    <span className="bg-yellow-100 dark:bg-yellow-900/40">{children}</span>
  );
}
