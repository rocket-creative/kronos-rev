import { absoluteUrl } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";
import type { ServiceSchemaProps } from "@/components/JsonLd";

export function marketingServiceSchema(
  path: string,
  name: string,
  description: string,
  serviceType: string
): ServiceSchemaProps {
  const url = absoluteUrl(path);
  return {
    name,
    description,
    url,
    serviceType,
    serviceId: `${url}#service`,
  };
}
