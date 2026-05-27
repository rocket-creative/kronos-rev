import type { FaqItem } from "@/lib/faqs";
import {
  EMAIL,
  KRONOS_HEALTH_BASE_URL,
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

export function OrganizationSchema() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": ORG_ID,
        name: "Kronos Revenue",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: LOGO_URL,
        },
        description:
          "Specialty trained revenue cycle management and No Surprises Act IDR for orthopedic, neurosurgery, spine, and plastic surgery practices.",
        telephone: PHONE_TEL,
        email: EMAIL,
        sameAs: [LINKEDIN_URL],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: PHONE_TEL,
          email: EMAIL,
          contactType: "customer service",
          areaServed: "US",
          availableLanguage: "English",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "244 Westchester Avenue, Suite 209",
          addressLocality: "West Harrison",
          addressRegion: "NY",
          postalCode: "10604",
          addressCountry: "US",
        },
        parentOrganization: {
          "@type": "Organization",
          name: "Kronos Health",
          url: KRONOS_HEALTH_BASE_URL,
          subOrganization: [
            {
              "@type": "Organization",
              "@id": ORG_ID,
              name: "Kronos Revenue",
              url: SITE_URL,
              description:
                "Full service No Surprises Act IDR and revenue cycle management for surgical practices.",
            },
            {
              "@type": "SoftwareApplication",
              name: "Sydra",
              url: SYDRA_URL,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "AI software for federal and state No Surprises Act IDR disputes, built by Kronos Health.",
            },
          ],
        },
        founder: {
          "@id": `${SITE_URL}/#person-john-abrahams`,
        },
        knowsAbout: [
          "Revenue Cycle Management",
          "No Surprises Act",
          "Independent Dispute Resolution",
          "Healthcare Arbitration",
          "Out of Network Billing",
          "Orthopedic Surgery Billing",
          "Neurosurgery Billing",
          "Spine Surgery Billing",
          "Plastic Surgery Billing",
        ],
      }}
    />
  );
}

export function WebSiteSchema() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: "Kronos Revenue",
        url: SITE_URL,
        publisher: { "@id": ORG_ID },
      }}
    />
  );
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
  };

  return <JsonLdScript data={base} />;
}

export const TEAM_MEMBERS: PersonSchemaMember[] = [
  {
    id: `${SITE_URL}/#person-heisha-rivera`,
    name: "Heisha Rivera",
    jobTitle: "Director of Revenue Cycle",
    description:
      "Director of Revenue Cycle with 20+ years of healthcare billing and dispute experience.",
    image: "/team/heisha-rivera.png",
  },
  {
    id: `${SITE_URL}/#person-camila-nicasio`,
    name: "Camila Nicasio",
    jobTitle: "Revenue Cycle Specialist",
    description: "Revenue cycle specialist focused on out of network claim resolution.",
    image: "/team/camila-nicasio.png",
  },
  {
    id: `${SITE_URL}/#person-soily-rivera`,
    name: "Soily Rivera",
    jobTitle: "Revenue Cycle Specialist",
    description: "Revenue cycle specialist supporting IDR submissions and payer follow up.",
    image: "/team/soily-rivera.png",
  },
  {
    id: `${SITE_URL}/#person-john-abrahams`,
    name: "Dr. John M. Abrahams",
    jobTitle: "Founder",
    description:
      "Board certified neurosurgeon and founder of Kronos Health. Past President of Brain and Spine Surgeons of New York.",
    isPhysician: true,
    medicalSpecialty: "Neurosurgery",
  },
];
