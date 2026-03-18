export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100] focus-visible:bg-kronos-cyan focus-visible:text-kronos-bg focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-bold"
    >
      Skip to main content
    </a>
  );
}
