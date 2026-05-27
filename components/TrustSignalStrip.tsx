import { ReviewHighlight } from "@/components/ReviewHighlight";

type TrustSignalStripProps = {
  variant?: "hero" | "cta";
};

const SIGNALS = [
  "Surgeon founded",
  "HIPAA compliant · BAA on request",
  "One claim per CPT at federal IDR",
] as const;

export function TrustSignalStrip({ variant = "hero" }: TrustSignalStripProps) {
  const isHero = variant === "hero";

  return (
    <ul
      className={`flex flex-wrap gap-x-4 gap-y-2 ${
        isHero ? "mt-6" : "mt-4 justify-center"
      }`}
      aria-label="Trust signals"
    >
      {SIGNALS.map((signal) => (
        <li
          key={signal}
          className={`font-body text-[10px] sm:text-xs uppercase tracking-widest ${
            isHero ? "text-white/50" : "text-white/70"
          }`}
        >
          <ReviewHighlight>{signal}</ReviewHighlight>
        </li>
      ))}
    </ul>
  );
}
