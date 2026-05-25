import Link from "next/link";
import { LogoImage } from "@/components/LogoImage";
import { homeSectionLinks, serviceLinks, homeAnchor } from "@/lib/navigation";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const anchorLinks = homeSectionLinks.map((link) => ({
  ...link,
  href: homeAnchor(link.href),
}));

export default function Footer() {
  return (
    <footer className="bg-[#00542A] text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 mb-10 sm:mb-12 lg:mb-16">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              className="inline-block mb-4 sm:mb-6 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00542A] min-h-[44px]"
              aria-label="Kronos Revenue home"
            >
              <LogoImage width={120} textSize="text-lg" className="brightness-0 invert" />
            </Link>
            <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed max-w-xs">
              Specialty trained revenue cycle for orthopedic, neurosurgery, spine, and plastic
              surgery practices. Powered by medicine, guided by clarity.
            </p>
            <p className="font-body text-[10px] sm:text-xs text-white/50 font-light leading-relaxed max-w-xs mt-4 sm:mt-5">
              We actively support practices in Texas, California, New York, New Jersey, Florida, and Arizona.
            </p>
          </div>

          <nav className="lg:col-span-3" aria-label="Footer navigation">
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/50 mb-3 sm:mb-4">
              Explore
            </p>
            <ul className="space-y-2 sm:space-y-3" role="list">
              {anchorLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[10px] sm:text-xs text-white/60 hover:text-white uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px] inline-flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Service pages">
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/50 mb-3 sm:mb-4">
              Services
            </p>
            <ul className="space-y-2 sm:space-y-3" role="list">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[10px] sm:text-xs text-white/60 hover:text-white uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px] inline-flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/50 mb-3 sm:mb-4">
              Contact
            </p>
            <address className="not-italic space-y-1 sm:space-y-2 font-body text-[10px] sm:text-xs text-white/60 font-light">
              <p>244 Westchester Ave, Ste 209</p>
              <p>West Harrison, NY 10604</p>
              <p className="pt-2 sm:pt-3">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px] inline-flex items-center"
                  aria-label={`Call us at ${PHONE_DISPLAY}`}
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
              {/* Update to sales@sydrahealth.com — pending alias setup */}
              <p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={`Email us at ${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </p>
            </address>

            <nav
              className="flex gap-4 sm:gap-6 mt-4 sm:mt-6 text-[10px] sm:text-xs tracking-widest uppercase text-white/50"
              aria-label="Social media links"
            >
              <a
                href="https://linkedin.com/company/kronos-health"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px] inline-flex items-center"
                aria-label="Follow us on LinkedIn"
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/40 text-[10px] sm:text-xs">
            © 2026 Kronos Revenue. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 sm:gap-6" aria-label="Legal links">
            <a
              href="https://www.kronosgroup.health/privacy"
              className="font-body text-white/40 text-[10px] sm:text-xs hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px] inline-flex items-center"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.kronosgroup.health/terms"
              className="font-body text-white/40 text-[10px] sm:text-xs hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px] inline-flex items-center"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
