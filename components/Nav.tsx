"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { LogoImage } from "@/components/LogoImage";
import { useNavScrollEffect, useMobileMenuAnimation } from "@/components/animations";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How It Works" },
  { href: "#why-us", label: "Why Us" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const sydraLink = { href: "https://www.sydrahealth.com/", label: "Sydra" };

const parentLink = {
  href: "https://www.kronosgroup.health/?utm_source=kronosrev&utm_medium=nav",
  label: "Kronos Health",
};

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useNavScrollEffect();
  useMobileMenuAnimation(mobileMenuOpen, menuRef);

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
    <header ref={navRef} className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm pt-safe-top">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-14 sm:h-16 xl:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-label="Kronos Revenue — Home"
          >
            <LogoImage width={160} textSize="text-xl sm:text-2xl" priority className="logo-dark-green" />
          </Link>

          {/* Center nav links — desktop */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-xs text-gray-500 hover:text-gray-900 uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={sydraLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-kronos-cyan hover:text-kronos-green-dark uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white border-l border-gray-200 pl-6 flex items-center gap-1.5"
            >
              {sydraLink.label}
              <span className="text-[8px] bg-kronos-cyan/15 text-kronos-cyan px-1 py-0.5 tracking-wider">LIVE</span>
            </a>
            <a
              href={parentLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-gray-400 hover:text-gray-600 uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white border-l border-gray-200 pl-6"
            >
              {parentLink.label}
            </a>
          </div>

          {/* Right — CTA + hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="#contact"
              className="hidden xl:inline-flex items-center gap-2 bg-kronos-cyan text-white py-2.5 px-5 text-xs uppercase tracking-widest font-light hover:bg-kronos-green-dark hover:gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Free Revenue Review
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>

            <button
              className="xl:hidden text-gray-500 hover:text-gray-900 p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
          className="xl:hidden bg-white border-t border-gray-100"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-4 sm:space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center min-h-[44px] font-body text-sm text-gray-500 hover:text-gray-900 uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
                onClick={handleAnchorClick}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={sydraLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 min-h-[44px] font-body text-sm text-kronos-cyan hover:text-kronos-green-dark uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
            >
              {sydraLink.label}
              <span className="text-[8px] bg-kronos-cyan/15 text-kronos-cyan px-1 py-0.5 tracking-wider">LIVE</span>
            </a>
            <div className="pt-4 sm:pt-6 border-t border-gray-100 flex flex-col gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 bg-kronos-cyan text-white py-3 px-6 uppercase tracking-widest text-xs font-light hover:bg-kronos-green-dark hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
                onClick={handleAnchorClick}
              >
                Free Revenue Review
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
              <a
                href={parentLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-gray-400 hover:text-gray-600 uppercase tracking-widest transition-colors"
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
