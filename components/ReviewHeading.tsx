import type { ComponentProps, ReactNode } from "react";

type ReviewHeadingProps = ComponentProps<"h2"> & {
  /** @deprecated No longer applies styling; kept for call-site compatibility. */
  review?: boolean;
  children: ReactNode;
};

export function ReviewHeading({ children, ...props }: ReviewHeadingProps) {
  return <h2 {...props}>{children}</h2>;
}
