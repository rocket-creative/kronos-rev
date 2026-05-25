export const PRIMARY_SPECIALTIES = [
  "Orthopedic Surgery",
  "Neurosurgery",
  "Spine Surgery",
  "Plastic Surgery",
] as const;

type PrimarySpecialtiesProps = {
  variant?: "light" | "dark";
  label?: string;
};

export function PrimarySpecialties({
  variant = "light",
  label = "Primary Specialties",
}: PrimarySpecialtiesProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`${
        isDark
          ? "bg-kronos-bg border-white/10"
          : "bg-white border-gray-100"
      } border-b py-6 sm:py-8`}
      aria-label={label}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 lg:gap-10">
          <p
            className={`font-body text-[10px] sm:text-xs tracking-widest uppercase shrink-0 ${
              isDark ? "text-white/50" : "text-gray-400"
            }`}
          >
            {label}
          </p>
          <ul
            className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6 lg:gap-x-10"
            role="list"
          >
            {PRIMARY_SPECIALTIES.map((specialty) => (
              <li
                key={specialty}
                className={`font-heading text-sm sm:text-base lg:text-lg ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {specialty}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
