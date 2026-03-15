export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-kronos-cyan focus:text-kronos-bg focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
    >
      Skip to main content
    </a>
  );
}
