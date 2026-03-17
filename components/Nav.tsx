"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { LogoImage } from "@/components/LogoImage";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How It Works" },
  { href: "#why-us", label: "Why Us" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
];

const parentLink = {
  href: "https://kronos-health.vercel.app/?utm_source=kronosrev&utm_medium=nav",
  label: "Kronos Health",
};

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;
    const menu = menuRef.current;
    if (mobileMenuOpen) {
      menu.style.opacity = "0";
      menu.style.transform = "translateY(-8px)";
      requestAnimationFrame(() => {
        menu.style.transition = "opacity 0.25s ease, transform 0.25s ease";
        menu.style.opacity = "1";
        menu.style.transform = "translateY(0)";
      });
    }
  }, [mobileMenuOpen]);

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
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const handleAnchorClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-kronos-bg/90 backdrop-blur-md border-b border-white/5 pt-safe-top">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-kronos-cyan focus:ring-offset-2 focus:ring-offset-kronos-bg"
            aria-label="Kronos Revenue — Home"
          >
            <LogoImage width={160} textSize="text-xl sm:text-2xl" priority />
          </Link>

          {/* Center nav links — desktop */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-xs text-white/50 hover:text-white uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={parentLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-white/25 hover:text-white/60 uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg border-l border-white/10 pl-8"
            >
              {parentLink.label}
            </a>
          </div>

          {/* Right — CTA + hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 bg-kronos-cyan text-kronos-bg py-2.5 px-5 text-xs uppercase tracking-widest font-light hover:gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
            >
              Free Revenue Review
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>

            <button
              className="lg:hidden text-white/60 hover:text-white p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="lg:hidden bg-kronos-bg/95 backdrop-blur-md border-t border-white/5"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-4 sm:space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center min-h-[44px] font-body text-sm text-white/60 hover:text-white uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
                onClick={handleAnchorClick}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 bg-kronos-cyan text-kronos-bg py-3 px-6 uppercase tracking-widest text-xs font-light hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={handleAnchorClick}
              >
                Free Revenue Review
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
              <a
                href={parentLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-white/30 hover:text-white/60 uppercase tracking-widest transition-colors"
              >
                ← {parentLink.label}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
