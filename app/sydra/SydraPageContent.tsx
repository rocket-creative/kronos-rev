"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Clock,
  BarChart3,
  FileText,
  Shield,
  Zap,
  CheckCircle,
  AlertTriangle,
  Plug,
} from "lucide-react";
import { useSectionReveal, useStaggeredCards, useHeroAnimation } from "@/components/animations";

const features = [
  {
    title: "AI Generated Submissions",
    description:
      "Sydra drafts compelling IDR submissions incorporating your clinical evidence, provider credentials, market rate data, and specialty specific arguments — in minutes, not days.",
    icon: Brain,
  },
  {
    title: "Automated Deadline Tracking",
    description:
      "The No Surprises Act has strict statutory deadlines. Miss the 4 business day IDR initiation window and you permanently lose your dispute rights. Sydra tracks every deadline automatically, accounting for federal holidays.",
    icon: Clock,
  },
  {
    title: "Real Time Analytics",
    description:
      "Track IDR win rates by CPT code, by insurer, and over time. See which insurers settle early, which fight to determination, and which cases to prioritize for maximum revenue recovery.",
    icon: BarChart3,
  },
  {
    title: "EMR Integration",
    description:
      "Sydra connects directly to your EMR to pull patient encounters, operative notes, and clinical data. AI extracts relevant information automatically — no manual data entry.",
    icon: Plug,
  },
  {
    title: "Specialty Specific Arguments",
    description:
      "Generic templates do not win complex surgical cases. Sydra generates arguments that highlight operative complexity, implant costs, fellowship training, and outcomes data — the factors IDR entities actually weigh.",
    icon: FileText,
  },
  {
    title: "HIPAA Compliant Infrastructure",
    description:
      "Built on AWS with HIPAA eligible services. All PHI stays within encrypted infrastructure. Audit logs track every action. Compliance was designed in from day one.",
    icon: Shield,
  },
];

const painPoints = [
  {
    number: "01",
    problem: "Revenue Leakage",
    description:
      "Surgical practices lose thousands per case when insurers underpay and practices lack resources to challenge every denial.",
  },
  {
    number: "02",
    problem: "Missed Deadlines",
    description:
      "The IDR process has strict statutory deadlines. Miss the 4 business day window and you permanently lose your right to dispute.",
  },
  {
    number: "03",
    problem: "Manual Burden",
    description:
      "Traditional IDR submissions take billing staff days to research, draft, and compile — pulling them away from other revenue cycle work.",
  },
  {
    number: "04",
    problem: "No Visibility",
    description:
      "Most practices have no idea what their IDR win rate is, which insurers to prioritize, or which CPT codes yield the best outcomes.",
  },
];

const stats = [
  { value: "300K+", label: "IDR disputes filed since January 2022" },
  { value: "70–77%", label: "Provider win rate per CMS data" },
  { value: "4 days", label: "Statutory window to initiate IDR" },
  { value: "$50K+", label: "Disputed reimbursement per complex surgical case" },
];

const audiences = [
  "Orthopedic, Neurosurgery, Cardiothoracic and Spine practices",
  "Multi physician groups with dedicated billing departments",
  "Out of network providers facing frequent insurance denials",
  "Revenue cycle management companies handling multiple practices",
  "Ambulatory surgery centers with high out of network volume",
  "Academic medical centers with large case volumes",
];

export default function SydraPageContent() {
  const heroRef = useHeroAnimation();
  const featuresRef = useStaggeredCards();
  const problemRef = useStaggeredCards();
  const statsRef = useStaggeredCards();
  const audienceRef = useSectionReveal();

  return (
    <>
      {/* Coming Soon Banner */}
      <div
        className="bg-kronos-cyan text-kronos-bg px-4 py-3 text-center"
        role="banner"
        aria-label="Beta status notice"
      >
        <p className="font-body text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 flex-wrap">
          <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
          <span>Coming Soon</span>
          <span className="font-light opacity-70 normal-case tracking-normal">
            — Sydra is currently in beta testing and nearly ready to launch.
          </span>
          <span className="opacity-70">Join the waitlist below.</span>
        </p>
      </div>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative bg-kronos-bg overflow-hidden py-20 sm:py-28 lg:py-36"
        aria-labelledby="sydra-hero-heading"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,132,61,0.12)_0%,_transparent_60%)]" aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              data-hero-eyebrow
              className="text-xs tracking-widest uppercase text-kronos-cyan mb-4 sm:mb-6"
            >
              By Kronos Revenue
            </p>

            <h1
              data-hero-title
              id="sydra-hero-heading"
              className="font-heading text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white leading-none mb-6 sm:mb-8"
            >
              SYDRA
            </h1>

            <p
              data-hero-description
              className="font-body text-base sm:text-lg lg:text-xl text-white/70 font-light leading-relaxed mb-4 max-w-2xl"
            >
              AI powered IDR submission platform for the No Surprises Act. From case intake and deadline tracking to AI generated submissions — Sydra automates the entire IDR workflow so your practice can fight more cases and recover more revenue.
            </p>

            <p data-hero-description className="font-body text-sm text-white/40 font-light mb-8 sm:mb-10">
              Built for surgical specialties. Designed for compliance.
            </p>

            <div data-hero-cta className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="#waitlist"
                className="inline-flex items-center justify-center gap-3 bg-kronos-cyan text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
              >
                Join the Waitlist
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white/70 py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/5 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
              >
                See Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        ref={statsRef}
        className="py-10 sm:py-12 bg-kronos-gray-800 border-y border-white/5"
        aria-label="Key statistics"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div data-stagger-card key={stat.value} className="text-center">
                <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-kronos-cyan mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-[10px] sm:text-xs text-white/50 font-light leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section
        ref={problemRef}
        className="py-16 sm:py-20 lg:py-28 bg-kronos-bg"
        aria-labelledby="problem-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 sm:mb-14 lg:mb-20">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              The Problem
            </p>
            <h2
              id="problem-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white"
            >
              Why IDR fails most practices
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {painPoints.map((point) => (
              <article data-stagger-card key={point.number}>
                <div className="bg-kronos-gray-800 p-6 sm:p-8 h-full border-l-2 border-white/10 hover:border-kronos-cyan/40 transition-colors">
                  <span
                    className="font-heading text-5xl sm:text-6xl text-white/5 leading-none block mb-4"
                    aria-hidden="true"
                  >
                    {point.number}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl lg:text-2xl text-white mb-3">
                    {point.problem}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        ref={featuresRef}
        id="features"
        className="py-16 sm:py-20 lg:py-28 bg-kronos-card"
        aria-labelledby="features-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 sm:mb-14 lg:mb-20">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Platform Features
            </p>
            <h2
              id="features-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white"
            >
              Everything you need to win
            </h2>
            <p className="font-body text-sm sm:text-base text-white/50 font-light mt-4 max-w-2xl">
              Sydra handles the full IDR lifecycle — from the moment a claim is underpaid to the moment payment is collected.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article data-stagger-card key={feature.title}>
                  <div className="bg-kronos-gray-800/50 p-6 sm:p-8 h-full hover:bg-kronos-gray-800 transition-colors group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-kronos-cyan/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-kronos-cyan/20 transition-colors">
                      <Icon
                        className="w-4 h-4 sm:w-5 sm:h-5 text-kronos-cyan/70"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl text-white mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section
        ref={audienceRef}
        className="py-16 sm:py-20 lg:py-28 bg-kronos-bg"
        aria-labelledby="audience-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="bg-kronos-cyan/5 border border-kronos-cyan/20 p-8 sm:p-10 lg:p-12">
                <Zap
                  className="w-10 h-10 sm:w-12 sm:h-12 text-kronos-cyan/50 mb-6"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                <p className="font-heading text-4xl sm:text-5xl lg:text-6xl text-kronos-cyan leading-none mb-4">
                  Built for surgical specialties
                </p>
                <p className="font-body text-sm text-white/50 font-light leading-relaxed">
                  Generic IDR templates do not work for complex surgical cases. Sydra knows the difference between a lumbar fusion and a routine office visit.
                </p>
              </div>
            </div>

            <div data-section-content className="lg:col-span-7">
              <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
                Who It&apos;s For
              </p>
              <h2
                id="audience-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-8"
              >
                Is Sydra right for your practice?
              </h2>

              <ul className="space-y-3 sm:space-y-4" aria-label="Target audience list">
                {audiences.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <CheckCircle
                      className="w-4 h-4 sm:w-5 sm:h-5 text-kronos-cyan/60 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="font-body text-sm sm:text-base text-white/70 font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist / CTA */}
      <section
        id="waitlist"
        className="py-16 sm:py-20 lg:py-28 bg-kronos-green"
        aria-labelledby="waitlist-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-2 mb-6 sm:mb-8">
              <AlertTriangle className="w-3 h-3 text-white/70" aria-hidden="true" />
              <span className="font-body text-xs uppercase tracking-widest text-white/70">
                Beta Testing — Launching Soon
              </span>
            </div>

            <h2
              id="waitlist-heading"
              className="font-heading text-3xl sm:text-5xl lg:text-6xl text-white mb-4 sm:mb-6"
            >
              Be first in line
            </h2>

            <p className="font-body text-sm sm:text-base text-white/80 font-light mb-8 sm:mb-10 leading-relaxed">
              Sydra is in beta testing and nearly ready to launch. Contact Kronos Revenue now to get early access and be among the first practices to automate your IDR workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="tel:+19147056830"
                className="inline-flex items-center justify-center gap-3 bg-kronos-bg text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-green"
                aria-label="Call Kronos Revenue at (914) 705 6830"
              >
                (914) 705 6830
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 border border-white text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-green"
              >
                Request Early Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
