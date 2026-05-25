"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { LogoImage } from "@/components/LogoImage";
import { useNavScrollEffect } from "@/components/animations";
import { homeSectionLinks, serviceLinks, homeAnchor } from "@/lib/navigation";
import { PAGE_CONTAINER_WIDE } from "@/lib/layout";

const sydraLink = { href: "https://www.sydrahealth.com/", label: "Sydra" };

const parentLink = {
  href: "https://www.kronosgroup.health/?utm_source=kronosrev&utm_medium=nav",
  label: "Kronos Health",
};

const mobileNavLinks = [
  ...homeSectionLinks,
  ...serviceLinks,
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useNavScrollEffect();

  const sectionLinks = homeSectionLinks.map((link) => ({
    ...link,
    href: isHome ? link.href.replace(/^\//, "") : homeAnchor(link.href),
  }));

  const ctaHref = isHome ? "#contact" : "/contact";

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

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const openMenu = () => setMobileMenuOpen(true);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm pt-safe-top"
      >
        <nav className={PAGE_CONTAINER_WIDE} aria-label="Main navigation">
          <div className="flex items-center justify-between h-14 lg:h-16 xl:h-20">
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[44px] min-w-[44px]"
              aria-label="Kronos Revenue home"
            >
              <LogoImage
                width={140}
                textSize="text-xl sm:text-2xl"
                priority
                className="logo-dark-green max-w-[min(140px,40vw)] h-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              {sectionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-xs text-gray-500 hover:text-gray-900 uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[44px] inline-flex items-center"
                >
                  {link.label}
                </Link>
              ))}
              {serviceLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-xs text-gray-600 hover:text-gray-900 uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[44px] inline-flex items-center"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={sydraLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-kronos-cyan hover:text-kronos-green-dark uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white border-l border-gray-200 pl-4 flex items-center min-h-[44px]"
              >
                {sydraLink.label}
              </a>
              <a
                href={parentLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-gray-400 hover:text-gray-600 uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white border-l border-gray-200 pl-4 min-h-[44px] inline-flex items-center"
              >
                {parentLink.label}
              </a>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href={ctaHref}
                className="hidden lg:inline-flex items-center gap-2 bg-kronos-cyan text-white py-2.5 px-5 text-xs uppercase tracking-widest font-light hover:bg-kronos-green-dark hover:gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[44px]"
              >
                Free Revenue Review
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>

              <button
                ref={menuButtonRef}
                type="button"
                className="lg:hidden flex items-center justify-center w-11 h-11 text-gray-500 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white select-none"
                onClick={openMenu}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu-overlay"
                aria-label="Open menu"
              >
                <Menu size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-[100] bg-white flex flex-col pt-safe-top pb-safe-bottom lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className={`${PAGE_CONTAINER_WIDE} flex items-center justify-between h-14 border-b border-gray-200 shrink-0`}>
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
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <nav
            className="flex-1 overflow-y-auto px-5 pt-8 pb-6"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {mobileNavLinks.map((link) => {
                const href =
                  link.href.startsWith("/#") || link.href.startsWith("#")
                    ? isHome
                      ? link.href.replace(/^\//, "")
                      : homeAnchor(link.href)
                    : link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={href}
                      className="flex items-center min-h-[48px] py-2 font-heading text-[clamp(1.5rem,7vw,2.25rem)] leading-tight text-gray-900 border-b border-gray-100 hover:text-kronos-cyan transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
                      onClick={handleNavClick}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a
                  href={sydraLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center min-h-[48px] py-2 font-heading text-[clamp(1.5rem,7vw,2.25rem)] leading-tight text-kronos-cyan border-b border-gray-100"
                >
                  {sydraLink.label}
                </a>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center gap-3 min-h-[48px] bg-kronos-cyan text-white py-3 px-6 uppercase tracking-widest text-xs font-light hover:bg-kronos-green-dark transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
                onClick={handleNavClick}
              >
                Free Revenue Review
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
              <a
                href={parentLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-gray-400 hover:text-gray-600 uppercase tracking-widest min-h-[44px] inline-flex items-center"
              >
                ← {parentLink.label}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
