import Link from "next/link";
import { ReviewHighlight } from "@/components/ReviewHighlight";

type MedicallyReviewedBlockProps = {
  variant?: "light" | "dark";
  lastReviewed?: string;
};

export function MedicallyReviewedBlock({
  variant = "light",
  lastReviewed = "May 2026",
}: MedicallyReviewedBlockProps) {
  const isDark = variant === "dark";

  return (
    <aside
      className={`p-4 sm:p-5 border ${
        isDark ? "border-white/15 bg-white/5" : "border-gray-200 bg-gray-50"
      }`}
      aria-label="Medical review attribution"
    >
      <p
        className={`font-body text-sm font-light leading-relaxed ${
          isDark ? "text-white/70" : "text-gray-600"
        }`}
      >
        <ReviewHighlight>
          Medically reviewed by{" "}
          <Link
            href="/team#person-john-abrahams"
            className={`underline underline-offset-2 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan ${
              isDark ? "text-kronos-cyan" : "text-kronos-green-dark"
            }`}
          >
            Dr. John M. Abrahams, MD
          </Link>
          , board certified neurosurgeon and founder of Kronos Health. Last reviewed: {lastReviewed}.
        </ReviewHighlight>
      </p>
    </aside>
  );
}
