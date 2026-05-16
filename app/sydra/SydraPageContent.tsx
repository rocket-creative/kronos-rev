"use client";

import Image from "next/image";
import Link from "next/link";
import { SydraWaitlistForm } from "@/components/SydraWaitlistForm";
import {
  ArrowRight,
  Brain,
  Clock,
  BarChart3,
  FileText,
  Shield,
  Zap,
  CheckCircle,
  Plug,
  Lock,
  ExternalLink,
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
      {/* Live Banner */}
      <div
        className="bg-kronos-cyan text-white px-4 py-3 text-center"
        role="banner"
        aria-label="Sydra platform status"
      >
        <p className="font-body text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
          <span>Sydra is Live</span>
          <span className="font-light opacity-80 normal-case tracking-normal">
            — The IDR platform is now in production at NY Brain and Spine Surgery.
          </span>
          <a
            href="https://www.sydrahealth.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity"
          >
            Visit the platform →
          </a>
        </p>
      </div>

      {/* Hero — dark green gradient */}
      <section
        ref={heroRef}
        className="relative overflow-hidden py-20 sm:py-28 lg:py-36"
        style={{ background: "linear-gradient(135deg, #003D1A 0%, #00843D 100%)" }}
        aria-labelledby="sydra-hero-heading"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.06)_0%,_transparent_60%)]" aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              data-hero-eyebrow
              className="text-xs tracking-widest uppercase text-white/60 mb-4 sm:mb-6"
            >
              By Kronos Revenue
            </p>

            <div data-hero-title className="mb-6 sm:mb-8">
              <Image
                src="/sydra-logo.png"
                alt="Sydra — NSA IDR Simplified"
                width={280}
                height={59}
                className="object-contain brightness-0 invert"
                priority
              />
            </div>

            <p
              data-hero-description
              className="font-body text-base sm:text-lg lg:text-xl text-white/80 font-light leading-relaxed mb-6 max-w-2xl"
            >
              Win more IDR disputes. Defend the whole claim. Sydra drafts winning No Surprises Act IDR submissions in minutes using AI trained on hundreds of real determinations — and runs your eligibility checks, prior authorizations, CPT review, and compliance audits.
            </p>

            {/* HIPAA + Claude badge */}
            <div data-hero-description className="flex flex-wrap items-center gap-3 mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-2">
                <Lock className="w-3 h-3 text-white/70 flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-xs text-white/70 font-light tracking-wide">
                  HIPAA Compliant
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-2">
                <Brain className="w-3 h-3 text-white/70 flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-xs text-white/70 font-light tracking-wide">
                  Powered by Claude AI
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-xs text-white/70 font-light tracking-wide">
                  Live in Production
                </span>
              </div>
            </div>

            <div data-hero-cta className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://www.sydrahealth.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#00542A] py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:bg-white/95 hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00843D]"
              >
                Visit Sydra Platform
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
              <a
                href="https://www.sydrahealth.com/#demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-white/40 text-white/80 py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00843D]"
              >
                Request Demo
              </a>
              <Link
                href="#waitlist"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white/60 py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/5 hover:text-white/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00843D]"
              >
                Join Waitlist
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Claude AI Landmark Statement — light grey */}
      <section
        className="bg-gray-50 py-16 sm:py-20 lg:py-28 relative overflow-hidden"
        aria-labelledby="claude-statement-heading"
      >
        {/* Large background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-heading text-[120px] sm:text-[180px] lg:text-[240px] xl:text-[320px] text-gray-900/[0.04] leading-none whitespace-nowrap">
            FIRST
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-gray-400 mb-6 sm:mb-8">
            A Healthcare First
          </p>

          <h2
            id="claude-statement-heading"
            className="font-heading text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-gray-900 leading-none mb-6 sm:mb-8"
          >
            The First HIPAA Compliant<br />IDR Tool Powered<br />by Claude AI
          </h2>

          <p className="font-body text-sm sm:text-base lg:text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Sydra runs on Anthropic&apos;s Claude — one of the most capable and safety focused AI models available — deployed on HIPAA eligible AWS infrastructure. Your PHI never leaves encrypted storage. Every action is logged. Every submission is audit ready.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                <Lock className="w-4 h-4 text-kronos-cyan" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="text-left">
                <p className="font-heading text-sm sm:text-base text-gray-900 leading-none">HIPAA Eligible AWS</p>
                <p className="font-body text-[10px] text-gray-400 font-light mt-0.5">Encrypted at rest and in transit</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                <Brain className="w-4 h-4 text-kronos-cyan" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="text-left">
                <p className="font-heading text-sm sm:text-base text-gray-900 leading-none">Claude AI by Anthropic</p>
                <p className="font-body text-[10px] text-gray-400 font-light mt-0.5">Purpose built for healthcare reasoning</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-kronos-cyan" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="text-left">
                <p className="font-heading text-sm sm:text-base text-gray-900 leading-none">Zero PHI in Logs</p>
                <p className="font-body text-[10px] text-gray-400 font-light mt-0.5">Audit ready from day one</p>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12">
            <a
              href="https://www.sydrahealth.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-kronos-cyan text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:bg-[#00542A] hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
            >
              Visit the Platform
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar — white */}
      <section
        ref={statsRef}
        className="py-10 sm:py-12 bg-white border-y border-gray-100"
        aria-label="Key statistics"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div data-stagger-card key={stat.value} className="text-center">
                <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-kronos-cyan mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-[10px] sm:text-xs text-gray-400 font-light leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem — light grey */}
      <section
        ref={problemRef}
        className="py-16 sm:py-20 lg:py-28 bg-gray-50"
        aria-labelledby="problem-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 sm:mb-14 lg:mb-20">
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
              The Problem
            </p>
            <h2
              id="problem-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900"
            >
              Why IDR fails most practices
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {painPoints.map((point) => (
              <article data-stagger-card key={point.number}>
                <div className="bg-white border border-gray-200 p-6 sm:p-8 h-full border-l-4 border-l-kronos-cyan/30 hover:border-l-kronos-cyan transition-colors">
                  <span
                    className="font-heading text-5xl sm:text-6xl text-gray-900/[0.06] leading-none block mb-4"
                    aria-hidden="true"
                  >
                    {point.number}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl lg:text-2xl text-gray-900 mb-3">
                    {point.problem}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features — white */}
      <section
        ref={featuresRef}
        id="features"
        className="py-16 sm:py-20 lg:py-28 bg-white"
        aria-labelledby="features-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 sm:mb-14 lg:mb-20">
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
              Platform Features
            </p>
            <h2
              id="features-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900"
            >
              Everything you need to win
            </h2>
            <p className="font-body text-sm sm:text-base text-gray-500 font-light mt-4 max-w-2xl">
              Sydra handles the full IDR lifecycle — from the moment a claim is underpaid to the moment payment is collected.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article data-stagger-card key={feature.title}>
                  <div className="bg-gray-50 border border-gray-100 p-6 sm:p-8 h-full hover:bg-gray-100 hover:border-gray-200 transition-colors group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-kronos-cyan/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-kronos-cyan/20 transition-colors">
                      <Icon
                        className="w-4 h-4 sm:w-5 sm:h-5 text-kronos-cyan"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.sydrahealth.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-kronos-cyan text-white py-3 sm:py-4 px-8 sm:px-10 uppercase tracking-widest text-xs font-bold hover:bg-[#00542A] hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Explore the Full Platform
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Who It's For — light grey */}
      <section
        ref={audienceRef}
        className="py-16 sm:py-20 lg:py-28 bg-gray-50"
        aria-labelledby="audience-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="bg-kronos-cyan/8 border border-kronos-cyan/20 p-8 sm:p-10 lg:p-12">
                <Zap
                  className="w-10 h-10 sm:w-12 sm:h-12 text-kronos-cyan mb-6"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                <p className="font-heading text-4xl sm:text-5xl lg:text-6xl text-kronos-cyan leading-none mb-4">
                  Built for surgical specialties
                </p>
                <p className="font-body text-sm text-gray-500 font-light leading-relaxed">
                  Generic IDR templates do not work for complex surgical cases. Sydra knows the difference between a lumbar fusion and a routine office visit.
                </p>
              </div>
            </div>

            <div data-section-content className="lg:col-span-7">
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
                Who It&apos;s For
              </p>
              <h2
                id="audience-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-8"
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
                      className="w-4 h-4 sm:w-5 sm:h-5 text-kronos-cyan flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="font-body text-sm sm:text-base text-gray-600 font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="https://www.sydrahealth.com/#demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-kronos-cyan text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:bg-[#00542A] hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
                >
                  Request a Demo
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist / CTA — dark green gradient */}
      <section
        id="waitlist"
        className="py-16 sm:py-20 lg:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #003D1A 0%, #00843D 100%)" }}
        aria-labelledby="waitlist-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6 sm:mb-8 flex justify-center">
              <Image
                src="/sydra-logo.png"
                alt="Sydra"
                width={160}
                height={34}
                className="object-contain brightness-0 invert opacity-90"
              />
            </div>

            <h2
              id="waitlist-heading"
              className="font-heading text-3xl sm:text-5xl lg:text-6xl text-white mb-4 sm:mb-6"
            >
              Ready to recover what insurers owe you?
            </h2>

            <p className="font-body text-sm sm:text-base text-white/80 font-light mb-8 sm:mb-10 leading-relaxed">
              Sydra is live and accepting new practices. Join the waitlist or request a demo — we will walk you through a recent denied claim in under 30 minutes, with no commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="https://www.sydrahealth.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#00542A] py-3 sm:py-4 px-8 uppercase tracking-widest text-xs font-bold hover:bg-white/95 hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Visit Sydra Platform
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
              <a
                href="https://www.sydrahealth.com/#demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-white/40 text-white py-3 sm:py-4 px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Request Demo
              </a>
            </div>

            <div className="border-t border-white/15 pt-8">
              <p className="font-body text-xs uppercase tracking-widest text-white/50 mb-5">
                Or join the waitlist for priority access
              </p>
              <SydraWaitlistForm />
            </div>

            <p className="font-body text-xs text-white/50 text-center mt-4">
              Or call us directly:{" "}
              <Link
                href="tel:+19147056830"
                className="underline hover:text-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                aria-label="Call Kronos Revenue at (914) 705 6830"
              >
                (914) 705 6830
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
