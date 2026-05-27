import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { MarketingPage, MarketingSection, SydraCrossLink } from "@/components/MarketingPage";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { CTA } from "@/lib/ctas";
import { KRONOS_HEALTH_URL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Team and Leadership | Kronos Revenue",
  description:
    "Meet Dr. John M. Abrahams, surgeon founder, and the Kronos Revenue RCM team. Specialty depth built by a practicing neurosurgeon, operated by revenue cycle specialists.",
  path: "/team",
});

const rcmTeam = [
  {
    name: "Heisha Rivera",
    title: "Director of Revenue Cycle",
    image: "/team/heisha-rivera.png",
    bio: "Director of Revenue Cycle with 20+ years of healthcare billing and dispute experience. She runs the day to day IDR operation.",
  },
  {
    name: "Camila Nicasio",
    title: "Revenue Cycle Specialist",
    image: "/team/camila-nicasio.png",
    bio: "Revenue cycle specialist focused on out of network claim resolution and specialty coded IDR submissions.",
  },
  {
    name: "Soily Rivera",
    title: "Revenue Cycle Specialist",
    image: "/team/soily-rivera.png",
    bio: "Revenue cycle specialist supporting IDR submissions, payer follow up, and post award collections.",
  },
];

export default function TeamPage() {
  const crumbs = breadcrumbItems([{ name: "Team", path: "/team" }]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      eyebrow="Leadership"
      h1="Built by a surgeon. Operated by RCM specialists."
      intro="Dr. Abrams is a board certified neurosurgeon and the most valuable trust signal Kronos Revenue has. The team behind SYDRA also runs Kronos Revenue — same expertise, two delivery models."
      primaryCta="consultation"
      bottomCtaHeading="Book a consultation with our team"
    >
      <MarketingSection variant="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <div className="bg-gray-200 aspect-square relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-[#003D1A]">
                <span className="font-heading text-5xl text-white/30">JMA</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="font-body text-xs uppercase tracking-widest text-kronos-cyan mb-2">
              Surgeon founder
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-gray-900 mb-4">
              Dr. John M. Abrahams, MD
            </h2>
            <p className="font-body text-gray-600 font-light leading-relaxed mb-4">
              Board certified neurosurgeon and founder of Kronos Health. Past President of Brain and
              Spine Surgeons of New York. Dr. Abrams built Kronos because he saw surgical practices
              losing recoverable dollars to generalist attorneys who batch CPT codes and treat IDR
              as a side practice.
            </p>
            <p className="font-body text-gray-600 font-light leading-relaxed">
              Every Kronos Revenue submission reflects the clinical and regulatory precision that
              comes from a surgeon who has been on the other side of the claim.
            </p>
          </div>
        </div>
      </MarketingSection>

      <MarketingSection variant="neutral">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8">
          Revenue cycle team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rcmTeam.map((member) => (
            <article key={member.name}>
              <div className="bg-gray-200 aspect-square relative overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.title}`}
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-heading text-lg text-gray-900 mb-1">{member.name}</h3>
              <p className="font-body text-xs uppercase tracking-widest text-gray-400 mb-3">
                {member.title}
              </p>
              <p className="font-body text-sm text-gray-600 font-light">{member.bio}</p>
            </article>
          ))}
        </div>
      </MarketingSection>

      <MarketingSection variant="white">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-4">
          Kronos Health
        </h2>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-6">
          The team behind SYDRA also runs Kronos Revenue. Same expertise, two delivery models.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href={KRONOS_HEALTH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-3 transition-all"
          >
            Kronos Health
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
          <Link
            href={CTA.consultation.href}
            className="inline-flex items-center gap-2 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-3 transition-all"
          >
            {CTA.consultation.label}
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </div>
        <SydraCrossLink />
      </MarketingSection>
    </MarketingPage>
  );
}
