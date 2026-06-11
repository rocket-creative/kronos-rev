"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { LogoImage } from "@/components/LogoImage";
import { useNavScrollEffect } from "@/components/animations";
import { headerNavLinks, mainNavLinks } from "@/lib/navigation";
import { PAGE_CONTAINER_WIDE, SHELL_MAX } from "@/lib/layout";
import { CTA } from "@/lib/ctas";
import { KRONOS_HEALTH_URL, SYDRA_URL } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useNavScrollEffect();

  useEffect(() => {
    if (!mobileMenuOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileMenuOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const menuWasOpen = useRef(false);
  useEffect(() => {
    if (mobileMenuOpen) {
      closeButtonRef.current?.focus();
    } else if (menuWasOpen.current) {
      menuButtonRef.current?.focus();
    }
    menuWasOpen.current = mobileMenuOpen;
  }, [mobileMenuOpen]);

  const handleNavClick = () => setMobileMenuOpen(false);

  const linkClass = (href: string) => {
    const isActive =
      pathname === href || (href === "/resources" && pathname.startsWith("/resources"));
    return `font-body text-xs uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan min-h-[44px] inline-flex items-center whitespace-nowrap ${
      isActive ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"
    }`;
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 mx-auto w-full ${SHELL_MAX} z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm pt-safe-top`}
      >
        <nav className={PAGE_CONTAINER_WIDE} aria-label="Main navigation">
          {/* Mobile / tablet: single row */}
          <div className="flex xl:hidden items-center h-14 lg:h-16 gap-4">
            <Link
              href="/"
              className="shrink-0 flex items-center hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[44px] min-w-[44px]"
              aria-label="Kronos Revenue home"
            >
              <LogoImage
                width={140}
                textSize="text-xl sm:text-2xl"
                priority
                className="logo-dark-green max-w-[min(140px,40vw)] h-auto"
              />
            </Link>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto">
              <Link
                href={CTA.caseReview.href}
                className="hidden lg:inline-flex items-center gap-2 bg-kronos-cyan text-white py-2.5 px-4 text-xs uppercase tracking-widest font-light hover:bg-kronos-green-dark hover:gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[44px] whitespace-nowrap"
              >
                Free IDR review
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>

              <button
                ref={menuButtonRef}
                type="button"
                className="flex items-center justify-center w-11 h-11 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white select-none"
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu-overlay"
                aria-label="Open menu"
              >
                <Menu size={22} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Desktop: logo + CTA row, then wrapping nav links */}
          <div className="hidden xl:block">
            <div className="flex items-center justify-between gap-4 py-3">
              <Link
                href="/"
                className="shrink-0 flex items-center hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[44px]"
                aria-label="Kronos Revenue home"
              >
                <LogoImage
                  width={160}
                  textSize="text-2xl"
                  priority
                  className="logo-dark-green h-auto"
                />
              </Link>

              <Link
                href={CTA.caseReview.href}
                className="inline-flex items-center gap-2 bg-kronos-cyan text-white py-2.5 px-5 text-xs uppercase tracking-widest font-light hover:bg-kronos-green-dark hover:gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[44px] whitespace-nowrap shrink-0"
              >
                {CTA.caseReview.label}
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 2xl:gap-x-8 gap-y-1 border-t border-gray-100 py-3">
              <Link href="/" className={linkClass("/")} aria-label="Home">
                Home
              </Link>
              {headerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass(link.href)}
                  aria-label={link.ariaLabel ?? link.label}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SYDRA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={CTA.seeSydra.ariaLabel}
                className="font-body text-xs text-kronos-cyan hover:text-kronos-green-dark uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan flex items-center min-h-[44px] shrink-0 whitespace-nowrap"
              >
                Sydra
              </a>
            </div>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-[100] bg-white flex flex-col pt-safe-top pb-safe-bottom xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div
            className={`${PAGE_CONTAINER_WIDE} flex items-center justify-between h-14 border-b border-gray-200 shrink-0`}
          >
            <Link
              href="/"
              className="min-h-[44px] inline-flex items-center"
              onClick={handleNavClick}
              aria-label="Kronos Revenue home"
            >
              <LogoImage width={120} textSize="text-lg" className="logo-dark-green" />
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              className="flex items-center justify-center w-11 h-11 text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan select-none"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 pt-8 pb-6" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href="/"
                  className="flex items-center min-h-[48px] py-2 font-heading text-[clamp(1.5rem,7vw,2.25rem)] leading-tight text-gray-900 border-b border-gray-100 hover:text-kronos-cyan transition-colors"
                  onClick={handleNavClick}
                >
                  Home
                </Link>
              </li>
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center min-h-[48px] py-2 font-heading text-[clamp(1.5rem,7vw,2.25rem)] leading-tight text-gray-900 border-b border-gray-100 hover:text-kronos-cyan transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SYDRA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={CTA.seeSydra.ariaLabel}
                  className="flex items-center min-h-[48px] py-2 font-heading text-[clamp(1.5rem,7vw,2.25rem)] leading-tight text-kronos-cyan border-b border-gray-100"
                >
                  Sydra
                </a>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href={CTA.caseReview.href}
                className="inline-flex items-center justify-center gap-3 min-h-[48px] bg-kronos-cyan text-white py-3 px-6 uppercase tracking-widest text-xs font-light hover:bg-kronos-green-dark transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
                onClick={handleNavClick}
              >
                {CTA.caseReview.label}
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
              <a
                href={KRONOS_HEALTH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-gray-500 hover:text-gray-700 uppercase tracking-widest min-h-[44px] inline-flex items-center"
              >
                ← Kronos Health
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
