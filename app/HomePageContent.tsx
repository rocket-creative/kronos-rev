"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Send,
  Scale,
  CheckCircle,
  Users,
  Shield,
  DollarSign,
  ArrowRight,
  Brain,
  Clock,
  BarChart3,
  AlertTriangle,
} from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import { TrustSignal } from "@/components/TrustSignal";
import { ContactForm } from "@/components/ContactForm";
import { LogoImage } from "@/components/LogoImage";
import { useHeroAnimation, useStaggeredCards, useSectionReveal } from "@/components/animations";

const offerings = [
  {
    title: "Complete Case Management",
    description:
      "From negotiation through final arbitration, we take care of the entire process end to end.",
    icon: FileText,
  },
  {
    title: "Compelling Submissions",
    description:
      "We craft every case with care, drawing on clinical details and strong documentation.",
    icon: Scale,
  },
  {
    title: "Deadline Tracking",
    description:
      "We monitor and meet all regulatory deadlines, avoiding costly delays or rejections.",
    icon: CheckCircle,
  },
  {
    title: "Post Arbitration Follow Up",
    description:
      "We ensure the awarded amount is processed quickly and pursue delays when necessary.",
    icon: DollarSign,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Submit Negotiation",
    description:
      "We handle the initial negotiation with the insurer and track the timeline for compliance.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Initiate IDR",
    description:
      "If no agreement is reached, we submit the case to the federal IDR portal on your behalf.",
    icon: Send,
  },
  {
    number: "03",
    title: "Build the Case",
    description:
      "Our team prepares and submits a robust payment offer with full supporting documentation.",
    icon: Scale,
  },
  {
    number: "04",
    title: "Arbitration",
    description:
      "A neutral third party reviews both offers and makes a binding determination.",
    icon: CheckCircle,
  },
];

const teamMembers = [
  {
    name: "Heisha Rivera",
    title: "Director of Revenue Cycle",
    image: "/team/heisha-rivera.png",
  },
  {
    name: "Camila Nicasio",
    title: "Revenue Cycle Specialist",
    image: "/team/camila-nicasio.png",
  },
  {
    name: "Soily Rivera",
    title: "Revenue Cycle Specialist",
    image: "/team/soily-rivera.png",
  },
];

export default function HomePageContent() {
  const heroRef = useHeroAnimation();
  const servicesRef = useStaggeredCards();
  const sydraRef = useStaggeredCards();
  const processRef = useStaggeredCards();
  const teamRef = useStaggeredCards();
  const whyRef = useSectionReveal();

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[80dvh] sm:min-h-dvh bg-kronos-bg overflow-hidden pt-safe-top"
        aria-labelledby="hero-heading"
      >
        <HeroBackground color="0, 132, 61" />

        <div className="relative z-10 min-h-[80dvh] sm:min-h-dvh flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
            <div className="backdrop-blur-md bg-black/40 border border-white/10 p-8 sm:p-10 lg:p-14 max-w-xl">
              <p data-hero-eyebrow className="text-xs tracking-widest uppercase text-white/50 mb-4 sm:mb-6">
                Revenue Cycle Management
              </p>

              <h1
                data-hero-title
                id="hero-heading"
                className="mb-6 sm:mb-8"
              >
                <LogoImage width={320} textSize="text-4xl" priority className="max-w-full" />
              </h1>

              <p data-hero-description className="font-body text-sm sm:text-base text-white/70 font-light leading-relaxed mb-6 sm:mb-8">
                Expert arbitration and out of network dispute resolution support under the No Surprises Act. We maximize your reimbursements.
              </p>

              <div data-hero-cta>
                <Link
                  href="tel:+19147056830"
                  className="inline-flex items-center gap-4 bg-kronos-cyan text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-6 transition-all w-fit mb-3 sm:mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
                  aria-label="Call us at (914) 705 6830 for a free revenue review"
                >
                  (914) 705 6830
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <p className="text-xs text-white/50">Call for a free revenue review</p>
                <TrustSignal
                  author="Heisha Rivera"
                  credentials="Director of Revenue Cycle, 20+ Years"
                  className="mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        ref={servicesRef}
        id="services"
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        aria-labelledby="services-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-20">
            <p data-section-header className="text-xs tracking-widest uppercase text-white/50 mb-4">
              What We Offer
            </p>
            <h2
              id="services-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white"
            >
              What services does Kronos Revenue offer?
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <article data-stagger-card key={offering.title}>
                  <div className="bg-kronos-cyan/10 p-4 sm:p-6 lg:p-8 h-full border-l-2 border-kronos-cyan/30 hover:bg-kronos-cyan/15 hover:border-kronos-cyan/50 transition-colors">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-kronos-cyan/20 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                      <Icon
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-kronos-cyan/60"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-heading text-base sm:text-lg lg:text-xl text-white mb-2">
                      {offering.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sydra Feature */}
      <section
        ref={sydraRef}
        id="sydra"
        className="bg-kronos-cyan relative overflow-hidden"
        aria-labelledby="sydra-heading"
      >
        {/* Large background ghost text */}
        <div
          className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden pr-4 sm:pr-8"
          aria-hidden="true"
        >
          <span className="font-heading text-[100px] sm:text-[160px] lg:text-[220px] xl:text-[280px] text-kronos-bg/10 leading-none">
            SYDRA
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">

          {/* Top badges row */}
          <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 bg-kronos-bg/15 px-3 py-1.5">
              <AlertTriangle className="w-3 h-3 text-kronos-bg/70" aria-hidden="true" />
              <span className="font-body text-[10px] uppercase tracking-widest text-kronos-bg/70">
                Coming Soon — Beta
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-kronos-bg/15 px-3 py-1.5">
              <Brain className="w-3 h-3 text-kronos-bg/70" aria-hidden="true" />
              <span className="font-body text-[10px] uppercase tracking-widest text-kronos-bg/70">
                Powered by Claude AI
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-kronos-bg/15 px-3 py-1.5">
              <Shield className="w-3 h-3 text-kronos-bg/70" aria-hidden="true" />
              <span className="font-body text-[10px] uppercase tracking-widest text-kronos-bg/70">
                HIPAA Compliant
              </span>
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left: Content */}
            <div className="lg:col-span-7">
              <p className="font-body text-[10px] uppercase tracking-widest text-kronos-bg/50 mb-3">
                Introducing
              </p>

              <h2
                id="sydra-heading"
                className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-kronos-bg leading-none mb-5 sm:mb-6"
              >
                SYDRA
              </h2>

              {/* The big claim */}
              <p className="font-heading text-xl sm:text-2xl lg:text-3xl text-kronos-bg/80 leading-tight mb-5 sm:mb-6 max-w-xl">
                The first HIPAA compliant IDR tool powered by Claude AI
              </p>

              <p className="font-body text-sm sm:text-base text-kronos-bg/65 font-light leading-relaxed mb-8 sm:mb-10 max-w-lg">
                Sydra automates the entire No Surprises Act dispute workflow — from deadline tracking to AI generated submissions — so your practice fights more cases and recovers more revenue, with zero PHI exposure.
              </p>

              <div className="grid grid-cols-1 gap-3 mb-8 sm:mb-10">
                {[
                  { icon: Brain, label: "Claude AI drafts each submission from your clinical data in minutes" },
                  { icon: Clock, label: "Automated deadline tracking — never lose the 4 day IDR window" },
                  { icon: BarChart3, label: "Win rate analytics by CPT code and insurer" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-kronos-bg/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-kronos-bg" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <span className="font-body text-xs sm:text-sm text-kronos-bg/75 font-light">{label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/sydra"
                className="inline-flex items-center gap-3 bg-kronos-bg text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-bg focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-cyan"
              >
                See Sydra in Action
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>

            {/* Right: Feature cards */}
            <div data-stagger-card className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {[
                {
                  icon: Brain,
                  title: "Claude AI Submissions",
                  description: "Custom IDR drafts built from your clinical data, credentials, and market rates — not templates.",
                },
                {
                  icon: Shield,
                  title: "HIPAA Compliant by Design",
                  description: "AWS encrypted infrastructure. Zero PHI in logs. Audit ready from day one.",
                },
                {
                  icon: Clock,
                  title: "Deadline Automation",
                  description: "Every statutory window tracked automatically, including federal holidays.",
                },
                {
                  icon: BarChart3,
                  title: "Real Time Analytics",
                  description: "Track win rates, recovered dollars, and insurer patterns as they happen.",
                },
              ].map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-kronos-bg/15 border border-kronos-bg/10 p-4 sm:p-5 hover:bg-kronos-bg/25 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-kronos-bg/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-kronos-bg" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm sm:text-base text-kronos-bg mb-1">{title}</h3>
                      <p className="font-body text-[10px] sm:text-xs text-kronos-bg/60 font-light leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        ref={processRef}
        id="process"
        className="py-12 sm:py-16 lg:py-24 bg-kronos-bg"
        aria-labelledby="process-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-20">
            <p data-section-header className="text-xs tracking-widest uppercase text-white/40 mb-4">
              The Process
            </p>
            <h2
              id="process-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white"
            >
              How does the IDR process work?
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article data-stagger-card key={step.number}>
                  <span
                    className="text-[50px] sm:text-[60px] lg:text-[80px] font-heading text-white/[0.05] leading-none block mb-3 sm:mb-4"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <div className="flex items-start gap-3 sm:gap-4 -mt-6 sm:-mt-8 lg:-mt-10 relative z-10">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                      <Icon
                        className="w-4 h-4 text-kronos-cyan/60"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="font-body text-[10px] sm:text-xs text-white/50 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        ref={whyRef}
        id="why-us"
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        aria-labelledby="why-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16">
            {/* Left: Large stat */}
            <div data-section-content className="lg:col-span-5">
              <div className="bg-kronos-cyan/10 aspect-square flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
                <Users
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-kronos-cyan/40 mb-3 sm:mb-4 lg:mb-6"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                <span className="text-[50px] sm:text-[60px] lg:text-[80px] xl:text-[100px] font-heading text-kronos-cyan leading-none">
                  100%
                </span>
                <div
                  className="w-10 h-px sm:w-12 bg-kronos-cyan/30 my-3 sm:my-4 lg:my-6"
                  aria-hidden="true"
                />
                <p className="text-xs sm:text-sm text-white/60 font-light text-center">
                  Provider Focused
                </p>
              </div>
            </div>

            {/* Right: Benefits */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p data-section-header className="text-xs tracking-widest uppercase text-white/50 mb-4">
                Why Kronos
              </p>
              <h2
                id="why-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white mb-4 sm:mb-6 lg:mb-8"
              >
                Why choose Kronos Revenue for revenue cycle management?
              </h2>

              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                    <Users
                      className="w-4 h-4 sm:w-5 sm:h-5 text-kronos-cyan/60"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-1">
                      Do you work for providers?
                    </h3>
                    <p className="font-body text-[10px] sm:text-xs lg:text-sm text-white/60 font-light">
                      Our mission is to protect your practice from underpayment and excessive administrative burden.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                    <Shield
                      className="w-4 h-4 sm:w-5 sm:h-5 text-kronos-cyan/60"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-1">
                      Are you versed in the No Surprises Act?
                    </h3>
                    <p className="font-body text-[10px] sm:text-xs lg:text-sm text-white/60 font-light">
                      Our team is fully versed in the No Surprises Act (Pub. L. 116-260, Dec. 2020) and its evolving requirements.
                    </p>
                    <p className="font-body text-[9px] sm:text-[10px] text-white/40 font-light mt-2">
                      References: CMS No Surprises Act (cms.gov/nosurprises); Federal IDR (45 CFR 149.500).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign
                      className="w-4 h-4 sm:w-5 sm:h-5 text-kronos-cyan/60"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base lg:text-lg text-white mb-1">
                      How do you maximize reimbursement?
                    </h3>
                    <p className="font-body text-[10px] sm:text-xs lg:text-sm text-white/60 font-light">
                      With deep clinical and regulatory expertise, we prepare strong, evidence based submissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        ref={teamRef}
        id="team"
        className="py-12 sm:py-16 lg:py-24 bg-kronos-card"
        aria-labelledby="team-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-16">
            <p data-section-header className="text-xs tracking-widest uppercase text-white/40 mb-4">
              The Team
            </p>
            <h2
              id="team-heading"
              className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white"
            >
              Who is on the Kronos Revenue team?
            </h2>
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {teamMembers.map((member) => (
              <article data-stagger-card key={member.name} className="group">
                <div className="bg-kronos-gray-800 aspect-square relative overflow-hidden mb-2 sm:mb-3 lg:mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25%"
                  />
                </div>
                <h3 className="font-heading text-xs sm:text-sm lg:text-base text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-widest text-white/40">
                  {member.title}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signal */}
      <section className="py-6 sm:py-8 bg-kronos-card border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustSignal
            author="Heisha Rivera"
            credentials="Director of Revenue Cycle, 20+ Years Experience"
            lastUpdated="2026-03-01"
          />
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-12 sm:py-16 lg:py-24 bg-kronos-bg"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12">
            <p data-scroll-fade className="text-xs tracking-widest uppercase text-white/50 mb-4">
              FAQ
            </p>
            <h2
              data-scroll-fade
              id="faq-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white"
            >
              Frequently asked questions
            </h2>
          </header>
          <dl className="space-y-6 sm:space-y-8">
            <div data-scroll-fade>
              <dt className="font-heading text-sm sm:text-base lg:text-lg text-white mb-2">
                What is the No Surprises Act and how does it affect my practice?
              </dt>
              <dd className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                The No Surprises Act (2020) protects patients from surprise medical bills for out of network care. It also establishes a federal Independent Dispute Resolution (IDR) process so providers can challenge low insurer payments. We help you navigate this process and maximize reimbursements.
              </dd>
            </div>
            <div data-scroll-fade>
              <dt className="font-heading text-sm sm:text-base lg:text-lg text-white mb-2">
                What is Independent Dispute Resolution (IDR)?
              </dt>
              <dd className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                IDR is a federal arbitration process where a neutral party reviews your payment dispute with an insurer and makes a binding determination. We handle the entire process from submission through final award.
              </dd>
            </div>
            <div data-scroll-fade>
              <dt className="font-heading text-sm sm:text-base lg:text-lg text-white mb-2">
                How long does the IDR process take?
              </dt>
              <dd className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                Timelines vary by case complexity and portal volume. We track all deadlines and ensure your case moves through negotiation and IDR without costly delays.
              </dd>
            </div>
            <div data-scroll-fade>
              <dt className="font-heading text-sm sm:text-base lg:text-lg text-white mb-2">
                What types of cases do you handle?
              </dt>
              <dd className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                We handle out of network payment disputes, including emergency and nonemergency care, across specialties. Our team manages negotiation, IDR submission, and post arbitration follow up.
              </dd>
            </div>
            <div data-scroll-fade>
              <dt className="font-heading text-sm sm:text-base lg:text-lg text-white mb-2">
                How do I get started?
              </dt>
              <dd className="font-body text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                Call us at (914) 705 6830 for a free revenue review. We will assess your situation and outline next steps.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* CTA / Contact */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-24 bg-kronos-green"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div>
              <h2
                data-scroll-fade
                id="cta-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white mb-4"
              >
                Stop Leaving Money on the Table
              </h2>
              <p data-scroll-fade className="font-body text-xs sm:text-sm lg:text-base text-white/80 font-light mb-4 sm:mb-6 lg:mb-8">
                Contact us for a free revenue review. Let us show you how much you could be recovering.
              </p>
              <TrustSignal
                author="Heisha Rivera"
                credentials="Director of Revenue Cycle"
                className="mb-4 sm:mb-6"
              />
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="tel:+19147056830"
                  className="inline-flex items-center justify-center gap-3 bg-kronos-bg text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-green"
                  aria-label="Call us at (914) 705 6830"
                >
                  (914) 705 6830
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 border border-white text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-green"
                  aria-label="Request a free revenue review consultation"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
            <div className="bg-kronos-bg/20 p-4 sm:p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
