import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LogoImage } from "@/components/LogoImage";

const anchorLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How It Works" },
  { href: "#why-us", label: "Why Us" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
  { href: "/contact", label: "Contact Page" },
];

export default function Footer() {
  return (
    <footer className="bg-[#00542A] text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 mb-10 sm:mb-12 lg:mb-16">
          {/* Logo and tagline */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link
              href="/"
              className="inline-block mb-4 sm:mb-6 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00542A]"
              aria-label="Kronos Revenue — Home"
            >
              <LogoImage width={120} textSize="text-lg" className="brightness-0 invert" />
            </Link>
            <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed max-w-xs">
              Expert revenue cycle management. Stronger reimbursements. Powered by medicine, guided by clarity.
            </p>
          </div>

          {/* Links */}
          <nav className="lg:col-span-3" aria-label="Footer navigation">
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/50 mb-3 sm:mb-4">
              Navigate
            </p>
            <ul className="space-y-2 sm:space-y-3" role="list">
              {anchorLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[10px] sm:text-xs text-white/60 hover:text-white uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/50 mb-3 sm:mb-4">
              Contact
            </p>
            <address className="not-italic space-y-1 sm:space-y-2 font-body text-[10px] sm:text-xs text-white/60 font-light">
              <p>244 Westchester Ave, Ste 209</p>
              <p>West Harrison, NY 10604</p>
              <p className="pt-2 sm:pt-3">
                <a
                  href="tel:+19147056830"
                  className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Call us at (914) 705 6830"
                >
                  (914) 705 6830
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@kronoshealth.co"
                  className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Email us at info@kronoshealth.co"
                >
                  info@kronoshealth.co
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
                className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Follow us on LinkedIn"
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/40 text-[10px] sm:text-xs">
            © 2026 Kronos Revenue. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 sm:gap-6" aria-label="Legal links">
            <a
              href="https://www.kronosgroup.health/privacy"
              className="font-body text-white/40 text-[10px] sm:text-xs hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.kronosgroup.health/terms"
              className="font-body text-white/40 text-[10px] sm:text-xs hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
