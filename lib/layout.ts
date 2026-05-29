/** Magazine shell: fixed-width white page centered over the muted body frame.
 *  Width sourced from --shell-max in globals.css so fixed elements (nav, sticky
 *  CTA) stay aligned with the page edges. */
export const SHELL_MAX = "max-w-[var(--shell-max)]";

/** Mobile-first page gutters (375px floor = px-5 / 20px each side). */
export const PAGE_GUTTERS = "px-5 sm:px-8 lg:px-12 xl:px-16";

export const PAGE_CONTAINER = `max-w-6xl mx-auto ${PAGE_GUTTERS}`;

export const PAGE_CONTAINER_WIDE = `max-w-7xl mx-auto ${PAGE_GUTTERS}`;

/** Clears fixed mobile sticky CTA (56px) + iOS home indicator safe area. */
export const MOBILE_CTA_CLEARANCE = "pb-[calc(3.5rem+env(safe-area-inset-bottom))] lg:pb-0";

/** Matches fixed nav height: single row until xl, then 2–3 row desktop nav. */
export const MAIN_TOP_OFFSET = "pt-14 lg:pt-16 xl:pt-40 2xl:pt-28";
