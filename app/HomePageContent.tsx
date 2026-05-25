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
  ExternalLink,
} from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import { TrustSignal } from "@/components/TrustSignal";
import { FAQSection } from "@/components/FAQSection";
import { ReferencesSection } from "@/components/ReferencesSection";
import { ReviewHighlight } from "@/components/ReviewHighlight";
import { HOME_FAQS } from "@/lib/faqs";
import { serviceLinks } from "@/lib/navigation";
import { ContactForm } from "@/components/ContactForm";
import { LogoImage } from "@/components/LogoImage";
import { RevenueCalculator } from "@/components/RevenueCalculator";
import { PrimarySpecialties } from "@/components/PrimarySpecialties";
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

// Pending Dr. Abrahams approval before publish
const SHOW_PROOF_POINT: boolean = false;

// Pending Hayes pricing ratification before publish
const SHOW_TIER_FRAMING: boolean = false;

export default function HomePageContent() {
  const heroRef = useHeroAnimation();
  const servicesRef = useStaggeredCards();
  const sydraRef = useStaggeredCards();
  const processRef = useStaggeredCards();
  const teamRef = useStaggeredCards();
  const whyRef = useSectionReveal();

  return (
    <>
      {/* Hero — dark green gradient */}
      <section
        ref={heroRef}
        className="relative min-h-dvh overflow-hidden pt-safe-top"
        style={{ background: "linear-gradient(160deg, #001A0A 0%, #003D1A 45%, #005C2A 100%)" }}
        aria-labelledby="hero-heading"
      >
        {/* Deep green radial glow */}
        <HeroBackground color="0, 92, 42" />

        {/* Bottom vignette to deepen the floor */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 min-h-dvh flex items-center">
          <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-0">
            <div className="bg-black/30 border border-white/15 p-8 sm:p-10 lg:p-14 max-w-2xl">
              <div data-hero-eyebrow className="mb-6 sm:mb-8">
                <span className="sr-only">Kronos Revenue</span>
                <span aria-hidden="true" className="block">
                  <LogoImage width={200} textSize="text-2xl" priority className="max-w-full brightness-0 invert" />
                </span>
              </div>

              <h1
                data-hero-title
                id="hero-heading"
                className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-5 sm:mb-7"
              >
                Attorneys charge 20% of your NSA recovery. We charge far less. And we&rsquo;re much better at it.
              </h1>

              <p data-hero-description className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed mb-6 sm:mb-8">
                Specialty trained revenue cycle management for orthopedic, neurosurgery, spine, and plastic surgery practices. Full case management, federal IDR submissions, post award follow up — end to end.
              </p>

              <div data-hero-cta>
                <Link
                  href="tel:+19147056830"
                  className="inline-flex items-center gap-4 bg-[#00542A] border border-[#00843D]/60 text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:gap-6 hover:bg-[#003D1A] transition-all w-fit mb-3 sm:mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003D1A]"
                  aria-label="Call us at (914) 705 6830 for a free revenue review"
                >
                  (914) 705 6830
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <p className="text-xs text-white/50">Call for a free revenue review</p>
                <TrustSignal
                  author="Heisha Rivera"
                  credentials="Director of Revenue Cycle, 20+ Years"
                  reviewedBy="Dr. John M. Abrahams, MD"
                  lastUpdated="2026-03-01"
                  className="mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PrimarySpecialties variant="light" />

      {/* Services — white */}
      <section
        ref={servicesRef}
        id="services"
        className="py-12 sm:py-16 lg:py-24 bg-white"
        aria-labelledby="services-heading"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <header className="mb-8 sm:mb-12 lg:mb-20">
            <p data-section-header className="text-xs tracking-widest uppercase text-gray-400 mb-4">
              What We Offer
            </p>
            <h2
              id="services-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900"
            >
              What services does Kronos Revenue offer?
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <article data-stagger-card key={offering.title}>
                  <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 h-full border-l-2 border-kronos-cyan/40 hover:bg-gray-100 hover:border-kronos-cyan transition-colors">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-kronos-cyan/10 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                      <Icon
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-kronos-cyan"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-heading text-base sm:text-lg lg:text-xl text-gray-900 mb-2">
                      {offering.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works — light grey */}
      <section
        ref={processRef}
        id="process"
        className="py-12 sm:py-16 lg:py-24 bg-gray-50"
        aria-labelledby="process-heading"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <header className="mb-8 sm:mb-12 lg:mb-20">
            <p data-section-header className="text-xs tracking-widest uppercase text-gray-400 mb-4">
              The Process
            </p>
            <h2
              id="process-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900"
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
                    className="text-[50px] sm:text-[60px] lg:text-[80px] font-heading text-gray-900/[0.05] leading-none block mb-3 sm:mb-4"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <div className="flex items-start gap-3 sm:gap-4 -mt-6 sm:-mt-8 lg:-mt-10 relative z-10">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                      <Icon
                        className="w-4 h-4 text-kronos-cyan"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm sm:text-base lg:text-lg text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="font-body text-[10px] sm:text-xs text-gray-500 font-light leading-relaxed">
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

      {/* Why Choose Us — white */}
      <section
        ref={whyRef}
        id="why-us"
        className="py-12 sm:py-16 lg:py-24 bg-white"
        aria-labelledby="why-heading"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16">
            {/* Left: Large stat */}
            <div data-section-content className="lg:col-span-5">
              <div className="bg-kronos-cyan/8 border border-kronos-cyan/20 aspect-square flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
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
                <p className="text-xs sm:text-sm text-gray-500 font-light text-center">
                  Provider Focused
                </p>
              </div>
            </div>

            {/* Right: Benefits */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p data-section-header className="text-xs tracking-widest uppercase text-gray-400 mb-4">
                Why Kronos
              </p>
              <h2
                id="why-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-900 mb-4 sm:mb-6 lg:mb-8"
              >
                Why choose Kronos Revenue for revenue cycle management?
              </h2>

              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                    <Users
                      className="w-4 h-4 sm:w-5 sm:h-5 text-kronos-cyan"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base lg:text-lg text-gray-900 mb-1">
                      Do you work for providers?
                    </h3>
                    <p className="font-body text-[10px] sm:text-xs lg:text-sm text-gray-500 font-light">
                      Our mission is to protect your practice from underpayment and excessive administrative burden.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                    <Shield
                      className="w-4 h-4 sm:w-5 sm:h-5 text-kronos-cyan"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base lg:text-lg text-gray-900 mb-1">
                      Are you versed in the No Surprises Act?
                    </h3>
                    <p className="font-body text-[10px] sm:text-xs lg:text-sm text-gray-500 font-light">
                      Our team is fully versed in the No Surprises Act (Pub. L. 116-260, Dec. 2020) and its evolving requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign
                      className="w-4 h-4 sm:w-5 sm:h-5 text-kronos-cyan"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base lg:text-lg text-gray-900 mb-1">
                      How do you maximize reimbursement?
                    </h3>
                    <p className="font-body text-[10px] sm:text-xs lg:text-sm text-gray-500 font-light">
                      With deep clinical and regulatory expertise, we prepare strong, evidence based submissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof point — standalone callout. Pending Dr. Abrahams approval before publish */}
      {SHOW_PROOF_POINT && (
        <section
          className="py-12 sm:py-16 lg:py-24 bg-white border-t border-gray-100"
          aria-labelledby="proof-point-heading"
        >
          <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
            <p
              id="proof-point-heading"
              className="text-xs tracking-widest uppercase text-gray-400 mb-4 sm:mb-6"
            >
              Client Results
            </p>
            <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-900 leading-tight">
              One of our hand surgery clients recovers an average of{" "}
              <span className="text-kronos-cyan">$5,000 per won claim</span> at a flat $500 fee — keeping more than 90% of every recovery instead of the 80% an attorney leaves them.
            </blockquote>
          </div>
        </section>
      )}

      {/* Team — light grey */}
      <section
        ref={teamRef}
        id="team"
        className="py-12 sm:py-16 lg:py-24 bg-gray-50"
        aria-labelledby="team-heading"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <header className="mb-8 sm:mb-12 lg:mb-16">
            <p data-section-header className="text-xs tracking-widest uppercase text-gray-400 mb-4">
              The Team
            </p>
            <h2
              id="team-heading"
              className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-900"
            >
              Who is on the Kronos Revenue team?
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-6">
            {teamMembers.map((member) => (
              <article data-stagger-card key={member.name} className="group">
                <div className="bg-gray-200 aspect-square relative overflow-hidden mb-2 sm:mb-3 lg:mb-4">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.title} at Kronos Revenue`}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25%"
                  />
                </div>
                <h3 className="font-heading text-xs sm:text-sm lg:text-base text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-widest text-gray-400">
                  {member.title}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signal — white */}
      <section className="py-6 sm:py-8 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <TrustSignal
            author="Heisha Rivera"
            credentials="Director of Revenue Cycle, 20+ Years Experience"
            reviewedBy="Dr. John M. Abrahams, MD"
            lastUpdated="2026-03-01"
            light
          />
        </div>
      </section>

      <section
        id="solutions"
        className="py-12 sm:py-16 bg-white border-t border-gray-100"
        aria-labelledby="solutions-heading"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2
            id="solutions-heading"
            className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6"
          >
            What solutions does Kronos Revenue offer?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block min-h-[44px] p-4 border border-gray-200 hover:border-kronos-cyan hover:bg-gray-50 font-body text-xs uppercase tracking-widest text-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
                >
                  <ReviewHighlight>{link.label}</ReviewHighlight>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection
        id="faq"
        heading="What do providers ask about IDR and out of network billing?"
        headingId="faq-heading"
        items={HOME_FAQS}
        variant="light"
      />

      <ReferencesSection variant="light" />

      {/* Recovery Calculator — light grey */}
      <section
        id="calculator"
        className="py-16 sm:py-20 lg:py-28 bg-gray-50"
        aria-labelledby="calculator-heading"
      >
        <RevenueCalculator />
      </section>

      {/* Tier framing — engagement models. Pending Hayes pricing ratification before publish */}
      {SHOW_TIER_FRAMING && (
        <section
          className="py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-100"
          aria-labelledby="engagement-heading"
        >
          <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
            <p
              id="engagement-heading"
              className="text-xs tracking-widest uppercase text-gray-400 mb-4 sm:mb-6"
            >
              Engagement Models
            </p>
            <p className="font-heading text-lg sm:text-xl lg:text-2xl text-gray-900 leading-snug font-light">
              We offer three engagement models depending on your claim volume and how much you want us to handle. Pricing is structured per claim — not a flat monthly retainer that doesn&rsquo;t move with your caseload. Call to discuss what fits your practice.
            </p>
          </div>
        </section>
      )}

      {/* CTA / Contact — dark green gradient */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-24"
        style={{ background: "linear-gradient(135deg, #00542A 0%, #00843D 100%)" }}
        aria-labelledby="cta-heading"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
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
                reviewedBy="Dr. John M. Abrahams, MD"
                lastUpdated="2026-03-01"
                className="mb-4 sm:mb-6"
              />
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="tel:+19147056830"
                  className="inline-flex items-center justify-center gap-3 bg-white text-[#00542A] py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:bg-white/95 hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00843D]"
                  aria-label="Call us at (914) 705 6830"
                >
                  (914) 705 6830
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 border border-white/50 text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00843D]"
                  aria-label="Request a free revenue review consultation"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 p-4 sm:p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* White spacer between Contact form and Sydra */}
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-heading text-xl sm:text-2xl text-gray-400 font-light">
            Also built by Kronos Health
          </p>
          <div className="w-16 h-px bg-gray-200" aria-hidden="true" />
        </div>
      </div>

      {/* Sydra — navy/blue, bottom of page */}
      <section
        ref={sydraRef}
        id="sydra"
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #010E2C 0%, #021B51 55%, #0028B8 100%)" }}
        aria-labelledby="sydra-heading"
      >
        {/* Blue glow top-right */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(0,40,184,0.35)_0%,_transparent_65%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-28">

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/10 px-3 py-1.5">
              <Brain className="w-3 h-3 text-[#6EA8FF]" aria-hidden="true" />
              <span className="font-body text-[10px] uppercase tracking-widest text-white/60">
                Powered by Claude AI
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/10 px-3 py-1.5">
              <Shield className="w-3 h-3 text-[#6EA8FF]" aria-hidden="true" />
              <span className="font-body text-[10px] uppercase tracking-widest text-white/60">
                HIPAA Compliant
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#0028B8]/40 border border-[#0028B8]/50 px-3 py-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6EA8FF] animate-pulse flex-shrink-0" aria-hidden="true" />
              <span className="font-body text-[10px] uppercase tracking-widest text-[#6EA8FF]">
                Live in Production
              </span>
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left: Content + compact calculator */}
            <div className="lg:col-span-7">
              <p className="font-body text-[10px] uppercase tracking-widest text-white/40 mb-4">
                A product of Kronos Health
              </p>

              <div className="mb-5 sm:mb-6">
                <Image
                  src="/sydra-logo.png"
                  alt="Sydra — NSA IDR Simplified"
                  width={380}
                  height={80}
                  className="object-contain brightness-0 invert max-w-full"
                />
              </div>

              <p className="font-heading text-xl sm:text-2xl lg:text-3xl text-white leading-tight mb-5 sm:mb-6 max-w-xl">
                Win more IDR disputes. Defend the whole claim.
              </p>

              <p className="font-body text-sm sm:text-base text-white/65 font-light leading-relaxed mb-8 sm:mb-10 max-w-lg">
                Sydra drafts winning No Surprises Act IDR submissions in minutes using AI trained on hundreds of real determinations — and the same platform now runs eligibility checks, prior authorizations, CPT review, and compliance audits. Built by a practicing neurosurgeon.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.sydrahealth.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#0028B8] text-white border border-[#0040E0] py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:bg-[#0033D4] hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#021B51]"
                >
                  Visit Sydra
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
                <a
                  href="https://www.sydrahealth.com/#demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#021B51] py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:bg-white/90 hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#021B51]"
                >
                  Request Demo
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
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
                  className="bg-white/6 border border-white/10 p-4 sm:p-5 hover:bg-white/12 hover:border-[#0028B8]/60 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#0028B8]/40 border border-[#0028B8]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-[#6EA8FF]" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm sm:text-base text-white mb-1">{title}</h3>
                      <p className="font-body text-[10px] sm:text-xs text-white/55 font-light leading-relaxed">
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
    </>
  );
}
