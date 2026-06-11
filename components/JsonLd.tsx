import type { FaqItem } from "@/lib/faqs";
import {
  EMAIL,
  FOUNDER_PERSON_ID,
  LINKEDIN_URL,
  LOGO_URL,
  ORG_ID,
  PHONE_TEL,
  SITE_URL,
  SYDRA_URL,
  WEBSITE_ID,
} from "@/lib/site";

function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export type BreadcrumbItem = { name: string; url: string };

/** KRONOS-MASTER Part 1A: MedicalOrganization + WebSite @graph */
export function OrganizationSchema() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "MedicalOrganization",
            "@id": ORG_ID,
            name: "Kronos Revenue",
            alternateName: "Kronos Health",
            parentOrganization: {
              "@type": "Organization",
              name: "Kronos Health",
            },
            url: SITE_URL,
            logo: LOGO_URL,
            description:
              "No Surprises Act independent dispute resolution, done for you. Specialty trained NSA IDR for orthopedic, neurosurgery, spine, and plastic surgery practices. Quoted to your volume, not a 20% attorney contingency.",
            telephone: PHONE_TEL,
            email: EMAIL,
            address: {
              "@type": "PostalAddress",
              streetAddress: "244 Westchester Ave, Suite 209",
              addressLocality: "West Harrison",
              addressRegion: "NY",
              postalCode: "10604",
              addressCountry: "US",
            },
            areaServed: ["TX", "CA", "NY", "NJ", "FL", "AZ"],
            medicalSpecialty: [
              "Orthopedic Surgery",
              "Neurosurgery",
              "Spine Surgery",
              "Plastic Surgery",
              "Anesthesiology",
              "General Surgery",
            ],
            sameAs: [LINKEDIN_URL, SYDRA_URL],
            foundingDate: "2022",
            founder: {
              "@type": "Physician",
              "@id": FOUNDER_PERSON_ID,
              name: "Dr. John M. Abrahams, MD",
              jobTitle: "Founder, Board Certified Neurosurgeon",
              medicalSpecialty: "Neurosurgery",
            },
          },
          {
            "@type": "WebSite",
            "@id": WEBSITE_ID,
            url: SITE_URL,
            name: "Kronos Revenue",
            publisher: { "@id": ORG_ID },
          },
        ],
      }}
    />
  );
}

/** @deprecated Use OrganizationSchema (includes WebSite in @graph). */
export function WebSiteSchema() {
  return null;
}

export function BreadcrumbListSchema({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}

export function LocalBusinessSchema({ pageUrl }: { pageUrl: string }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${pageUrl}#localbusiness`,
        name: "Kronos Revenue",
        url: pageUrl,
        telephone: PHONE_TEL,
        email: EMAIL,
        image: LOGO_URL,
        address: {
          "@type": "PostalAddress",
          streetAddress: "244 Westchester Avenue, Suite 209",
          addressLocality: "West Harrison",
          addressRegion: "NY",
          postalCode: "10604",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.9626,
          longitude: -73.7471,
        },
        areaServed: "United States",
        priceRange: "$$",
        parentOrganization: { "@id": ORG_ID },
      }}
    />
  );
}

export function FAQPageSchema({ items }: { items: FaqItem[] }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}

export type ServiceSchemaProps = {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  serviceId: string;
  areaServed?: string;
};

export function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  serviceId,
  areaServed = "United States",
}: ServiceSchemaProps) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": serviceId,
        name,
        description,
        url,
        serviceType,
        areaServed,
        provider: { "@id": ORG_ID },
      }}
    />
  );
}

export function WebPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name,
        description,
        url,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
      }}
    />
  );
}

export type PersonSchemaMember = {
  id: string;
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  sameAs?: string[];
  isPhysician?: boolean;
  medicalSpecialty?: string;
  boardCertifications?: string[];
  hospitalAffiliations?: string[];
};

export function PersonSchema({ person }: { person: PersonSchemaMember }) {
  const base = {
    "@context": "https://schema.org",
    "@type": person.isPhysician ? "Physician" : "Person",
    "@id": person.id,
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    worksFor: { "@id": ORG_ID },
    ...(person.image ? { image: `${SITE_URL}${person.image}` } : {}),
    ...(person.sameAs?.length ? { sameAs: person.sameAs } : {}),
    ...(person.medicalSpecialty
      ? { medicalSpecialty: person.medicalSpecialty }
      : {}),
    ...(person.boardCertifications?.length
      ? { hasCredential: person.boardCertifications.map((name) => ({ "@type": "EducationalOccupationalCredential", name })) }
      : {}),
    ...(person.hospitalAffiliations?.length
      ? { hospitalAffiliation: person.hospitalAffiliations.map((name) => ({ "@type": "Hospital", name })) }
      : {}),
  };

  return <JsonLdScript data={base} />;
}

export const TEAM_MEMBERS: PersonSchemaMember[] = [
  {
    id: `${SITE_URL}/team#person-heisha-rivera`,
    name: "Heisha Rivera",
    jobTitle: "Director of Revenue Cycle",
    description:
      "Director of Revenue Cycle with 20+ years of healthcare billing and dispute experience.",
    image: "/team/heisha-rivera.png",
  },
  {
    id: `${SITE_URL}/team#person-camila-nicasio`,
    name: "Camila Nicasio",
    jobTitle: "Revenue Cycle Specialist",
    description: "Revenue cycle specialist focused on out of network claim resolution.",
    image: "/team/camila-nicasio.png",
  },
  {
    id: `${SITE_URL}/team#person-soily-rivera`,
    name: "Soily Rivera",
    jobTitle: "Revenue Cycle Specialist",
    description: "Revenue cycle specialist supporting IDR submissions and payer follow up.",
    image: "/team/soily-rivera.png",
  },
  {
    id: `${SITE_URL}/team#person-john-abrahams`,
    name: "Dr. John M. Abrahams",
    jobTitle: "Founder, Board Certified Neurosurgeon",
    description:
      "Board certified neurosurgeon and founder of Kronos Health. Past President of Brain and Spine Surgeons of New York.",
    isPhysician: true,
    medicalSpecialty: "Neurosurgery",
    boardCertifications: ["American Board of Neurological Surgery"],
    hospitalAffiliations: ["Brain and Spine Surgeons of New York"],
  },
];

export function ArticleSchema({
  title,
  description,
  url,
  datePublished = "2026-06-01",
  authorName = "Kronos Revenue",
  authorUrl,
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  authorName?: string;
  authorUrl?: string;
}) {
  const author = authorUrl
    ? {
        "@type": "Person",
        name: authorName,
        url: authorUrl,
      }
    : {
        "@type": "Organization",
        name: authorName,
        url: SITE_URL,
      };

  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        datePublished,
        author,
        publisher: { "@id": ORG_ID },
        mainEntityOfPage: url,
      }}
    />
  );
}

export function CollectionPageSchema({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name,
        description,
        url,
        hasPart: items.map((item) => ({
          "@type": "Article",
          name: item.name,
          url: item.url,
        })),
      }}
    />
  );
}
