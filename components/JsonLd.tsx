const ORGANIZATION_ID = "https://kronosrevenue.co/#organization";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Kronos Revenue",
    url: "https://kronosrevenue.co",
    description:
      "Expert revenue cycle management and out of network dispute resolution under the No Surprises Act.",
    telephone: "+1 914 705 6830",
    email: "info@kronoshealth.co",
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
      url: "https://kronos-health.vercel.app",
    },
    founder: {
      "@type": "Person",
      name: "Dr. John M. Abrahams",
      jobTitle: "Founder & CEO",
      description:
        "Board certified neurosurgeon with 20+ years experience. Past President of Brain and Spine Surgeons of New York.",
    },
    knowsAbout: [
      "Revenue Cycle Management",
      "No Surprises Act",
      "Independent Dispute Resolution",
      "Healthcare Arbitration",
      "Out of Network Billing",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://kronosrevenue.co/#website",
    name: "Kronos Revenue",
    url: "https://kronosrevenue.co",
    publisher: { "@id": ORGANIZATION_ID },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbListSchema({ items }: { items?: BreadcrumbItem[] } = {}) {
  const list = items ?? [{ name: "Home", url: "https://kronosrevenue.co" }];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://kronosrevenue.co/#localbusiness",
    name: "Kronos Revenue",
    url: "https://kronosrevenue.co",
    telephone: "+1 914 705 6830",
    email: "info@kronoshealth.co",
    address: {
      "@type": "PostalAddress",
      streetAddress: "244 Westchester Avenue, Suite 209",
      addressLocality: "West Harrison",
      addressRegion: "NY",
      postalCode: "10604",
      addressCountry: "US",
    },
    areaServed: "United States",
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const faqItems = [
  {
    question: "What is the No Surprises Act and how does it affect my practice?",
    answer:
      "The No Surprises Act (2020) protects patients from surprise medical bills for out of network care. It also establishes a federal Independent Dispute Resolution (IDR) process so providers can challenge low insurer payments. We help you navigate this process and maximize reimbursements.",
  },
  {
    question: "What is Independent Dispute Resolution (IDR)?",
    answer:
      "IDR is a federal arbitration process where a neutral party reviews your payment dispute with an insurer and makes a binding determination. We handle the entire process from submission through final award.",
  },
  {
    question: "How long does the IDR process take?",
    answer:
      "Timelines vary by case complexity and portal volume. We track all deadlines and ensure your case moves through negotiation and IDR without costly delays.",
  },
  {
    question: "What types of cases do you handle?",
    answer:
      "We handle out of network payment disputes, including emergency and nonemergency care, across specialties. Our team manages negotiation, IDR submission, and post arbitration follow up.",
  },
  {
    question: "How do I get started?",
    answer:
      "Call us at (914) 705 6830 for a free revenue review. We will assess your situation and outline next steps.",
  },
];

export function FAQPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
}

const SERVICE_ID = "https://kronosrevenue.co/#service";

export function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = "United States",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": SERVICE_ID,
    name,
    description,
    url,
    serviceType,
    areaServed,
    provider: {
      "@id": ORGANIZATION_ID,
      "@type": "Organization",
      name: "Kronos Revenue",
      url: "https://kronosrevenue.co",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
