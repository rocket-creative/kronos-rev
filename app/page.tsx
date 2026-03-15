import type { Metadata } from "next";
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
} from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import { TrustSignal } from "@/components/TrustSignal";
import { ContactForm } from "@/components/ContactForm";
import { LogoImage } from "@/components/LogoImage";

export const metadata: Metadata = {
  title: "Revenue Cycle Management & Payment Dispute Resolution | Kronos Revenue",
  description:
    "Expert arbitration and out of network dispute resolution support under the No Surprises Act. Kronos Revenue maximizes your reimbursements with complete case management.",
  alternates: {
    canonical: "https://kronosrevenue.co",
  },
  openGraph: {
    title: "Revenue Cycle Management & Payment Dispute Resolution | Kronos Revenue",
    description:
      "Expert arbitration and out of network dispute resolution under the No Surprises Act. We maximize your reimbursements.",
    url: "https://kronosrevenue.co",
    siteName: "Kronos Revenue",
    type: "website",
    images: [
      {
        url: "https://kronosrevenue.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kronos Revenue — Expert Revenue Cycle Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Cycle Management & Payment Dispute Resolution | Kronos Revenue",
    description:
      "Expert arbitration and out of network dispute resolution under the No Surprises Act.",
  },
};

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
    name: "Nicole Cedeno",
    title: "Revenue Cycle Specialist",
    image: "/team/nicole-cedeno.png",
  },
  {
    name: "Soily Rivera",
    title: "Revenue Cycle Specialist",
    image: "/team/soily-rivera.png",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[80vh] sm:min-h-screen bg-kronos-bg overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <HeroBackground color="0, 255, 255" />

        <div className="relative z-10 min-h-[80vh] sm:min-h-screen flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
            <div className="backdrop-blur-md bg-black/40 border border-white/10 p-8 sm:p-10 lg:p-14 max-w-xl">
              <div className="mb-6 sm:mb-8">
                <LogoImage width={180} textSize="text-2xl" priority />
              </div>
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4 sm:mb-6">
                Revenue Cycle Management
              </p>

              <h1
                id="hero-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-none tracking-tight mb-4 sm:mb-6"
              >
                Revenue
                <br />
                <span className="text-white/40">Cycle</span>
              </h1>

              <p className="font-body text-sm sm:text-base text-white/70 font-light leading-relaxed mb-6 sm:mb-8">
                Expert arbitration and out of network dispute resolution support under the No Surprises Act. We maximize your reimbursements.
              </p>

              <Link
                href="tel:+19147056830"
                className="inline-flex items-center gap-4 bg-kronos-cyan text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-6 transition-all w-fit mb-3 sm:mb-4 focus:outline-none focus:ring-2 focus:ring-kronos-cyan focus:ring-offset-2 focus:ring-offset-black/40"
                aria-label="Call us at (914) 705 6830 for a free revenue review"
              >
                (914) 705 6830
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <p className="text-xs text-white/50">Call for a free revenue review</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        aria-labelledby="services-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-20">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
              What We Offer
            </p>
            <h2
              id="services-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white"
            >
              Our Services
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <article key={offering.title}>
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

      {/* How It Works */}
      <section
        id="process"
        className="py-12 sm:py-16 lg:py-24 bg-kronos-bg"
        aria-labelledby="process-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-20">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              The Process
            </p>
            <h2
              id="process-heading"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white"
            >
              How It Works
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number}>
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
        id="why-us"
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        aria-labelledby="why-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16">
            {/* Left: Large stat */}
            <div className="lg:col-span-5">
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
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
                Why Kronos
              </p>
              <h2
                id="why-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white mb-4 sm:mb-6 lg:mb-8"
              >
                Why Choose Us
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
                      We Work for Providers
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
                      We Know the Law
                    </h3>
                    <p className="font-body text-[10px] sm:text-xs lg:text-sm text-white/60 font-light">
                      Our team is fully versed in the No Surprises Act and its evolving requirements.
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
                      We Maximize Reimbursement
                    </h3>
                    <p className="font-body text-[10px] sm:text-xs lg:text-sm text-white/60 font-light">
                      With deep clinical and regulatory expertise, we prepare strong, evidence backed submissions.
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
        id="team"
        className="py-12 sm:py-16 lg:py-24 bg-kronos-card"
        aria-labelledby="team-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 lg:mb-16">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              The Team
            </p>
            <h2
              id="team-heading"
              className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white"
            >
              Revenue Cycle Specialists
            </h2>
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {teamMembers.map((member) => (
              <article key={member.name} className="group">
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
            reviewedBy="Dr. John M. Abrahams, M.D."
            lastUpdated="2026-03-01"
          />
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
                id="cta-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white mb-4"
              >
                Stop Leaving Money on the Table
              </h2>
              <p className="font-body text-xs sm:text-sm lg:text-base text-white/80 font-light mb-4 sm:mb-6 lg:mb-8">
                Contact us for a free revenue review. Let us show you how much you could be recovering.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="tel:+19147056830"
                  className="inline-flex items-center justify-center gap-3 bg-kronos-bg text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:gap-5 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-kronos-green"
                  aria-label="Call us at (914) 705 6830"
                >
                  (914) 705 6830
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 border border-white text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-kronos-green"
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
