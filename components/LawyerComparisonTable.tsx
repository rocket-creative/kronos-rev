type LawyerComparisonTableProps = {
  variant?: "light" | "dark";
  className?: string;
};

import {
  ATTORNEY_FEE,
  KRONOS_FEE_CONTRAST,
  KRONOS_FEE_SHORT,
} from "@/lib/pricing-copy";

const ROWS = [
  {
    label: "Fee model",
    attorney: ATTORNEY_FEE,
    kronos: KRONOS_FEE_CONTRAST,
  },
  {
    label: "Specialty depth",
    attorney: "Generalist — IDR is a side practice",
    kronos: "Specialty trained: ortho / neuro / spine / plastics",
  },
  {
    label: "Filing approach",
    attorney: "Often batches CPT codes",
    kronos: "One claim per CPT — the way IDR was designed",
  },
  {
    label: "Who's on the file",
    attorney: "Junior associates",
    kronos: "RCM specialists trained by Dr. Abrams (surgeon founder)",
  },
  {
    label: "Communication",
    attorney: "Quarterly, if you're lucky",
    kronos: "Live 9–5 M–F, 24 hr email, monthly review",
  },
  {
    label: "What you keep per dollar won",
    attorney: "About eighty cents — after the 20% contingency",
    kronos: "About ninety cents or more — quoted to your volume, not skimmed from every award",
  },
  {
    label: "Total practice savings",
    attorney: "20% fee on fewer won IDR disputes",
    kronos: "Greater share of every award — plus more disputes won at IDR",
  },
] as const;

export function LawyerComparisonTable({
  variant = "light",
  className = "",
}: LawyerComparisonTableProps) {
  const isDark = variant === "dark";

  return (
    <div className={className}>
      <p
        className={`font-body text-xs mb-2 sm:hidden ${isDark ? "text-white/50" : "text-gray-400"}`}
      >
        Scroll horizontally to compare
      </p>
      <div
        className="-mx-5 px-5 sm:mx-0 sm:px-0 overflow-x-auto"
        role="region"
        aria-label="Attorney versus Kronos Revenue comparison"
      >
      <table
        className={`w-full min-w-[540px] border-collapse text-left ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        <caption className="sr-only">
          Comparison of NSA IDR handling by attorneys versus Kronos Revenue
        </caption>
        <thead>
          <tr
            className={
              isDark
                ? "border-b border-white/20"
                : "border-b-2 border-gray-900"
            }
          >
            <th scope="col" className="py-4 pr-4 font-body text-xs uppercase tracking-widest font-normal opacity-60 w-1/4">
              &nbsp;
            </th>
            <th
              scope="col"
              className={`py-4 px-4 font-heading text-sm sm:text-base uppercase tracking-wide ${
                isDark ? "text-white/50" : "text-gray-400"
              }`}
            >
              Your attorney
            </th>
            <th
              scope="col"
              className={`py-4 pl-4 font-heading text-sm sm:text-base uppercase tracking-wide ${
                isDark ? "text-kronos-cyan" : "text-kronos-green-dark"
              }`}
            >
              Kronos Revenue
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr
              key={row.label}
              className={
                isDark ? "border-b border-white/10" : "border-b border-gray-100"
              }
            >
              <th
                scope="row"
                className={`py-4 pr-4 font-body text-xs uppercase tracking-widest align-top ${
                  isDark ? "text-white/50" : "text-gray-400"
                }`}
              >
                {row.label}
              </th>
              <td
                className={`py-4 px-4 font-body text-sm font-light align-top ${
                  isDark ? "text-white/60" : "text-gray-500"
                }`}
              >
                {row.attorney}
              </td>
              <td
                className={`py-4 pl-4 font-body text-sm font-light align-top ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {row.kronos}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
