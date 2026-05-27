import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { LogoImage } from "@/components/LogoImage";
import { mainNavLinks } from "@/lib/navigation";
import { CTA } from "@/lib/ctas";
import { MOBILE_CTA_CLEARANCE, PAGE_CONTAINER } from "@/lib/layout";
import {
  EMAIL,
  KRONOS_HEALTH_URL,
  LINKEDIN_URL,
  OFFICE_ADDRESS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SYDRA_URL,
} from "@/lib/site";

const FOOTER_SYDRA_COPY =
  "Run NSA IDR in house with Sydra, Kronos Health's AI platform. Same specialty depth, your team operates it.";

export default function Footer() {
  return (
    <footer className={`bg-[#00542A] text-white ${MOBILE_CTA_CLEARANCE}`} role="contentinfo">
      <div className="border-b border-white/10">
        <div
          className={`${PAGE_CONTAINER} py-8 sm:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8`}
        >
          <p className="font-body text-sm text-white/70 font-light max-w-lg leading-relaxed">
            {FOOTER_SYDRA_COPY}
          </p>
          <a
            href={SYDRA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-bold text-white hover:gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
            aria-label={CTA.seeSydra.ariaLabel}
          >
            {CTA.seeSydra.label}
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className={`${PAGE_CONTAINER} py-10 sm:py-12 lg:py-16`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-10 lg:mb-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-block mb-5 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00542A] min-h-[44px]"
              aria-label="Kronos Revenue home"
            >
              <LogoImage width={120} textSize="text-lg" className="brightness-0 invert" />
            </Link>
            <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed max-w-sm">
              No Surprises Act IDR for orthopedic, neurosurgery, spine, and plastic surgery
              practices. Quoted to your volume — not a 20% contingency cut. More won disputes,
              vastly more kept.
            </p>
            <p className="font-body text-[10px] sm:text-xs text-white/50 font-light leading-relaxed max-w-sm mt-4">
              We actively support practices in Texas, California, New York, New Jersey, Florida, and
              Arizona.
            </p>
            <p className="font-body text-[10px] sm:text-xs text-white/40 font-light mt-4 leading-relaxed max-w-sm">
              Part of{" "}
              <a
                href={KRONOS_HEALTH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors underline underline-offset-2"
              >
                Kronos Health
              </a>
              . Kronos Health builds Sydra (software) and runs Kronos Revenue (full service RCM).
            </p>
          </div>

          <nav className="lg:col-span-4" aria-label="Footer navigation">
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/80 mb-4">
              Explore
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {mainNavLinks.map((link) => (
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

          <div className="lg:col-span-3">
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/80 mb-4">
              Contact
            </p>
            <address className="not-italic space-y-1 sm:space-y-2 font-body text-[10px] sm:text-xs text-white/60 font-light">
              <p>{OFFICE_ADDRESS.street}</p>
              <p>
                {OFFICE_ADDRESS.city}, {OFFICE_ADDRESS.state} {OFFICE_ADDRESS.zip}
              </p>
              <p className="pt-2">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px] inline-flex items-center"
                  aria-label={`Call us at ${PHONE_DISPLAY}`}
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
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

            <ul
              className="mt-6 flex flex-col gap-2 text-[10px] sm:text-xs tracking-widest uppercase"
              aria-label="Social and related links"
            >
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px] inline-flex items-center"
                  aria-label="Follow us on LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  href="/sydra"
                  className="text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px] inline-flex items-center"
                >
                  Sydra on Kronos
                </Link>
              </li>
              <li>
                <a
                  href={SYDRA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px] inline-flex items-center"
                >
                  Sydra Software
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/40 text-[10px] sm:text-xs">
            © 2026 Kronos Revenue. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6" aria-label="Legal links">
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
            <span className="font-body text-white/40 text-[10px] sm:text-xs">
              HIPAA / BAA on request
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
