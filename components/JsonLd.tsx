export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kronos Revenue",
    url: "https://kronosrevenue.co",
    description:
      "Expert revenue cycle management and out of network dispute resolution under the No Surprises Act.",
    telephone: "+1-914-705-6830",
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
      url: "https://kronoshealth.co",
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

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
}

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
    name,
    description,
    url,
    serviceType,
    areaServed,
    provider: {
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
