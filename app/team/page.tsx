import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { MarketingPage, MarketingSection } from "@/components/MarketingPage";
import { ReviewHeading } from "@/components/ReviewHeading";
import { PersonSchema, TEAM_MEMBERS } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { CTA } from "@/lib/ctas";
import { PAGE_SEO } from "@/lib/page-seo";
import { SYDRA_URL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_SEO.team.title,
  description: PAGE_SEO.team.description,
  path: "/team",
});

const rcmTeam = [
  {
    id: "person-heisha-rivera",
    name: "Heisha Rivera",
    title: "Director of Revenue Cycle Operations",
    image: "/team/heisha-rivera.png",
    bio: "Heisha runs the day to day IDR operation. Her team handles every claim from EOB intake through determination follow up. Over 20 years of experience in healthcare billing and out of network dispute resolution, specifically in high complexity surgical specialty billing. On Kronos Full-Service: she is your direct point of contact for monthly reporting and quarterly reviews. High value cases and adverse determinations escalate to her desk.",
  },
  {
    id: "person-camila-nicasio",
    name: "Camila Nicasio",
    title: "Revenue Cycle Specialist",
    image: "/team/camila-nicasio.png",
    bio: "Specializes in out of network claim resolution and specialty coded IDR submissions. Handles orthopedic, spine, and plastic surgery claims. Trained by Dr. Abrahams and Heisha Rivera.",
  },
  {
    id: "person-soily-rivera",
    name: "Soily Rivera",
    title: "Revenue Cycle Specialist",
    image: "/team/soily-rivera.png",
    bio: "Handles IDR submissions, payer follow up, and post award collections. Focuses on tracking determination timelines and ensuring payment follows favorable determinations.",
  },
];

export default function TeamPage() {
  const crumbs = breadcrumbItems([{ name: "Team", path: "/team" }]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      currentPath="/team"
      showMedicallyReviewed={false}
      eyebrow="Leadership"
      h1="Built by a surgeon. Run by specialists who file IDR claims every week."
      intro="The team composition at Kronos Revenue is not incidental to what we do. It is the reason the submissions perform the way they do."
      bottomCtaHeading="Get a free NSA IDR review"
    >
      {TEAM_MEMBERS.map((person) => (
        <PersonSchema key={person.id} person={person} />
      ))}

      <MarketingSection variant="white" labelledById="founder-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <div
              id="person-john-abrahams"
              className="bg-gray-200 aspect-square relative overflow-hidden scroll-mt-28"
            >
              <Image
                src="/hero.jpg"
                alt="Dr. John M. Abrahams, MD, board certified neurosurgeon"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </div>
          <div className="lg:col-span-8">
            <ReviewHeading review id="founder-heading" className="font-heading text-3xl sm:text-4xl text-gray-900 mb-4">
              Dr. John M. Abrahams, MD — Founder
            </ReviewHeading>
            <p className="font-body text-sm text-gray-500 mb-4">
              Board Certified Neurosurgeon · Fellow, American Association of Neurological Surgeons (FAANS)
              · Past President, Brain and Spine Surgeons of New York · Founder, Kronos Health
            </p>
            <div className="font-body text-gray-600 font-light leading-relaxed space-y-4">
              <p>
                Dr. Abrahams is a practicing neurosurgeon in New York. He founded Kronos Health after watching
                surgical practices, including his own, lose recoverable revenue through two mechanisms: the
                30 minute per claim barrier that prevents billing teams from filing IDR at scale, and the
                contingency attorney model that takes 20% of every recovery while batching CPT codes.
              </p>
              <p>
                He built the original NSA IDR submission process for his own neurosurgical practice. That
                process became the engine behind both Sydra and Kronos Revenue.
              </p>
              <p>
                His role today: reviews all medical content published by Kronos Health, designed the clinical
                narrative framework, set CPT coverage standards for the determination library, on escalation
                for clinically complex cases.
              </p>
            </div>
          </div>
        </div>
      </MarketingSection>

      <MarketingSection variant="neutral" labelledById="rcm-team-heading">
        <ReviewHeading review id="rcm-team-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8">
          Revenue cycle team
        </ReviewHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rcmTeam.map((member) => (
            <article key={member.name} id={member.id} className="scroll-mt-28">
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

      <MarketingSection variant="white" labelledById="kronos-health-heading">
        <ReviewHeading review id="kronos-health-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-4">
          Kronos Revenue, Sydra, and Kronos Health.
        </ReviewHeading>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-4">
          Kronos Health is the parent company. Two products, same clinical foundation: SYDRA is software your
          billing team operates in house. KRONOS REVENUE is full service IDR. You forward EOBs. The team files
          and tracks. The difference is the operator.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={CTA.caseReview.href}
            className="inline-flex items-center gap-2 bg-kronos-green-dark text-white py-3 px-6 uppercase tracking-widest text-xs font-bold"
          >
            Get a free NSA IDR review
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
          <a
            href={SYDRA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-300 py-3 px-6 uppercase tracking-widest text-xs font-bold text-gray-900"
          >
            See Sydra
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        </div>
      </MarketingSection>
    </MarketingPage>
  );
}
