import { PAGE_GUTTERS } from "@/lib/layout";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={`w-full mx-auto max-w-[1440px] ${PAGE_GUTTERS}`}>
      {children}
    </div>
  );
}
