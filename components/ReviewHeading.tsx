import type { ComponentProps, ReactNode } from "react";
import { ReviewHighlight } from "@/components/ReviewHighlight";

type ReviewHeadingProps = ComponentProps<"h2"> & {
  review?: boolean;
  children: ReactNode;
};

/** H2 with optional yellow highlight for rewritten headings pending client review. */
export function ReviewHeading({ review = false, children, ...props }: ReviewHeadingProps) {
  return (
    <h2 {...props}>
      {review ? <ReviewHighlight>{children}</ReviewHighlight> : children}
    </h2>
  );
}
