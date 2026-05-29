import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { CONTACT_EMAIL, FROM_EMAIL } from "@/lib/site";

const UtmSchema = z
  .object({
    utm_source: z.string().max(100).optional(),
    utm_medium: z.string().max(100).optional(),
    utm_campaign: z.string().max(100).optional(),
    utm_term: z.string().max(100).optional(),
    utm_content: z.string().max(100).optional(),
  })
  .optional();

const BaseSchema = z.object({
  contact_name: z.string().min(1).max(100),
  title: z.string().max(100).optional(),
  phone: z.string().max(30).optional(),
  email: z.string().email().max(254),
  message: z.string().max(2000).optional(),
  utm: UtmSchema,
});

const ClaimReviewSchema = BaseSchema.extend({
  form_type: z.literal("claim_review").optional(),
  practice_name: z.string().min(1).max(200),
  specialty: z.string().min(1).max(100),
  state: z.string().min(1).max(50),
  network_status: z.enum(["oon", "partial", "in_network", "not_sure"]).optional(),
  monthly_oon_claims: z
    .enum(["fewer_than_5", "5_to_15", "15_to_30", "30_or_more"])
    .optional(),
  current_handling: z
    .enum(["not_filing", "attorney", "in_house", "mixed", "in_house_legacy", "third_party", "nothing"])
    .optional(),
  best_time_to_reach: z.string().max(100).optional(),
});

const ChecklistSchema = z.object({
  form_type: z.literal("idr_checklist"),
  email: z.string().email().max(254),
  contact_name: z.string().max(100).optional(),
  utm: UtmSchema,
});

const NSADisputeSchema = BaseSchema.extend({
  form_type: z.literal("nsa_dispute"),
  practice_name: z.string().min(1).max(200),
  specialty: z.string().max(100),
  payers: z.array(z.string().max(50)).optional(),
  dispute_volume: z.string().max(50).optional(),
  current_process: z.enum(["attorney", "in_house", "third_party", "nothing"]).optional(),
});

const ASCProviderSchema = BaseSchema.extend({
  form_type: z.literal("asc_provider"),
  practice_name: z.string().min(1).max(200),
  specialty: z.string().max(100),
  facility_type: z.string().max(100).optional(),
  facility_network_status: z.enum(["in_network_facility", "oon_both", "not_sure"]).optional(),
  monthly_case_volume: z.string().max(50).optional(),
});

const SynaptixBillingSchema = BaseSchema.extend({
  form_type: z.literal("synaptix_licensee"),
  practice_name: z.string().min(1).max(200),
  specialty: z.string().max(100).optional(),
  synaptix_status: z.enum(["licensed", "evaluating", "interested"]).optional(),
  monthly_concussion_volume: z.string().max(50).optional(),
});

const HospitalGroupSchema = BaseSchema.extend({
  form_type: z.literal("hospital_group"),
  organization: z.string().min(1).max(200),
  organization_type: z.enum(["hospital", "asc_group", "physician_group"]).optional(),
  facility_count: z.string().max(50).optional(),
  annual_oon_volume: z.string().max(50).optional(),
});

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  phone: z.string().min(7).max(30),
  email: z.string().email().max(254),
  organization: z.string().min(1).max(200),
  message: z.string().max(2000).optional(),
  source: z.string().max(50).optional(),
  utm: UtmSchema,
});

function ts(): string {
  return (
    new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "short",
    }) + " ET"
  );
}

const DIV = "--------------------------------------------------------------------------------";
const HDR = "================================================================================";

function header(label: string) {
  return `${HDR}\nKRONOS REVENUE — ${label.toUpperCase()}\n${HDR}`;
}

function utmBlock(utm?: z.infer<typeof UtmSchema>) {
  if (!utm) return null;
  const entries = Object.entries(utm).filter(([, v]) => v);
  if (entries.length === 0) return null;
  return [
    `\n${DIV}\nATTRIBUTION\n${DIV}`,
    ...entries.map(([k, v]) => `${k}: ${v}`),
  ].join("\n");
}

function isHighVolume(monthlyClaims?: string | null): boolean {
  if (!monthlyClaims) return false;
  return monthlyClaims === "30_or_more" || ["51–200", "201–500", "Over 500"].includes(monthlyClaims);
}

const monthlyLabels: Record<string, string> = {
  fewer_than_5: "Fewer than 5",
  "5_to_15": "5 to 15",
  "15_to_30": "15 to 30",
  "30_or_more": "30 or more",
};

function withHighVolumePrefix(subject: string, monthlyClaims?: string | null): string {
  return isHighVolume(monthlyClaims) ? `[HIGH VOLUME] ${subject}` : subject;
}

const handlingLabels: Record<string, string> = {
  not_filing: "Not filing IDR",
  attorney: "Contingency attorney",
  in_house: "In house",
  in_house_legacy: "In house",
  mixed: "Mixed",
  third_party: "Third party RCM",
  nothing: "Not disputing today",
};

function buildChecklistEmail(d: z.infer<typeof ChecklistSchema>) {
  return {
    subject: `[Kronos Revenue] NSA IDR Checklist Download — ${d.email}`,
    text: [
      header("IDR Checklist Lead"),
      `\nSUBMITTED:  ${ts()}\n`,
      DIV,
      "LEAD",
      DIV,
      `Email:  ${d.email}`,
      d.contact_name ? `Name:   ${d.contact_name}` : null,
      utmBlock(d.utm),
      `\n${HDR}`,
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

function buildClaimReviewEmail(d: z.infer<typeof ClaimReviewSchema>) {
  const networkLabels: Record<string, string> = {
    oon: "Out-of-network with major commercial plans",
    partial: "Mixed / some plans OON",
    in_network: "In-network",
    not_sure: "Not sure",
  };

  const highVolumeNote = isHighVolume(d.monthly_oon_claims)
    ? "\n*** HIGH VOLUME LEAD — Flag Dr. Abrahams for personal follow up within 24 hours ***"
    : "";

  return {
    subject: withHighVolumePrefix(
      `[Kronos Revenue] Free Case Review — ${d.practice_name} — ${d.contact_name}`,
      d.monthly_oon_claims
    ),
    text: [
      header("Free Case Review"),
      highVolumeNote,
      `\nSUBMITTED:  ${ts()}\n`,
      DIV,
      "CONTACT",
      DIV,
      `Name:              ${d.contact_name}`,
      d.title ? `Title:             ${d.title}` : null,
      `Practice:          ${d.practice_name}`,
      d.phone ? `Phone:             ${d.phone}` : null,
      `Email:             ${d.email}`,
      d.best_time_to_reach ? `Best time to reach:  ${d.best_time_to_reach}` : null,
      `State:             ${d.state}`,
      `\n${DIV}\nPRACTICE DETAILS\n${DIV}`,
      `Specialty:           ${d.specialty}`,
      `Current handling:    ${handlingLabels[d.current_handling ?? ""] ?? d.current_handling ?? "—"}`,
      `Network status:      ${networkLabels[d.network_status ?? ""] ?? d.network_status ?? "—"}`,
      `Monthly OON claims:  ${monthlyLabels[d.monthly_oon_claims ?? ""] ?? d.monthly_oon_claims ?? "—"}`,
      d.message?.trim() ? `\n${DIV}\nABOUT YOUR CLAIMS\n${DIV}\n\n${d.message.trim()}` : null,
      utmBlock(d.utm),
      `\n${HDR}`,
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

function buildNSADisputeEmail(d: z.infer<typeof NSADisputeSchema>) {
  return {
    subject: `[Kronos Revenue] NSA Dispute — ${d.practice_name} — ${d.contact_name}`,
    text: [
      header("NSA Dispute Inquiry"),
      `\nSUBMITTED:  ${ts()}\n`,
      DIV,
      "CONTACT",
      DIV,
      `Name:         ${d.contact_name}`,
      d.title ? `Title:        ${d.title}` : null,
      `Practice:     ${d.practice_name}`,
      `Phone:        ${d.phone}`,
      `Email:        ${d.email}`,
      `\n${DIV}\nDISPUTE DETAILS\n${DIV}`,
      `Specialty:        ${d.specialty}`,
      `Payers:           ${d.payers?.join(", ") || "—"}`,
      `Dispute volume:   ${d.dispute_volume ?? "—"}`,
      `Current process:  ${handlingLabels[d.current_process ?? ""] ?? d.current_process ?? "—"}`,
      d.message?.trim() ? `\n${DIV}\nNOTES\n${DIV}\n\n${d.message.trim()}` : null,
      utmBlock(d.utm),
      `\n${HDR}`,
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

function buildASCProviderEmail(d: z.infer<typeof ASCProviderSchema>) {
  const statusLabels: Record<string, string> = {
    in_network_facility: "Facility is in-network, I am OON",
    oon_both: "Facility and I are both OON",
    not_sure: "Not sure",
  };
  return {
    subject: `[Kronos Revenue] ASC-Based Provider — ${d.practice_name} — ${d.contact_name}`,
    text: [
      header("ASC-Based Provider Inquiry"),
      `\nSUBMITTED:  ${ts()}\n`,
      DIV,
      "CONTACT",
      DIV,
      `Name:         ${d.contact_name}`,
      d.title ? `Title:        ${d.title}` : null,
      `Practice:     ${d.practice_name}`,
      `Phone:        ${d.phone}`,
      `Email:        ${d.email}`,
      `\n${DIV}\nFACILITY DETAILS\n${DIV}`,
      `Specialty:            ${d.specialty}`,
      `Facility type:        ${d.facility_type ?? "—"}`,
      `Network status:       ${statusLabels[d.facility_network_status ?? ""] ?? d.facility_network_status ?? "—"}`,
      `Monthly case volume:  ${d.monthly_case_volume ?? "—"}`,
      d.message?.trim() ? `\n${DIV}\nNOTES\n${DIV}\n\n${d.message.trim()}` : null,
      utmBlock(d.utm),
      `\n${HDR}`,
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

function buildSynaptixBillingEmail(d: z.infer<typeof SynaptixBillingSchema>) {
  const statusLabels: Record<string, string> = {
    licensed: "Already licensed Synaptix",
    evaluating: "Evaluating Synaptix",
    interested: "Interested in both",
  };
  return {
    subject: `[Kronos Revenue] Synaptix Licensee — ${d.practice_name} — ${d.contact_name}`,
    text: [
      header("Synaptix Licensee Inquiry"),
      `\nSUBMITTED:  ${ts()}\n`,
      DIV,
      "CONTACT",
      DIV,
      `Name:         ${d.contact_name}`,
      d.title ? `Title:        ${d.title}` : null,
      `Practice:     ${d.practice_name}`,
      `Phone:        ${d.phone}`,
      `Email:        ${d.email}`,
      `\n${DIV}\nSYNAPTIX DETAILS\n${DIV}`,
      `Specialty:                  ${d.specialty ?? "—"}`,
      `Synaptix status:            ${statusLabels[d.synaptix_status ?? ""] ?? d.synaptix_status ?? "—"}`,
      `Monthly concussion volume:  ${d.monthly_concussion_volume ?? "—"}`,
      d.message?.trim() ? `\n${DIV}\nNOTES\n${DIV}\n\n${d.message.trim()}` : null,
      utmBlock(d.utm),
      `\n${HDR}`,
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

function buildHospitalGroupEmail(d: z.infer<typeof HospitalGroupSchema>) {
  const orgLabels: Record<string, string> = {
    hospital: "Hospital / health system",
    asc_group: "ASC management group",
    physician_group: "Multi-specialty physician group",
  };
  return {
    subject: `[Kronos Revenue] Hospital / ASC Group — ${d.organization} — ${d.contact_name}`,
    text: [
      header("Hospital / ASC Group Inquiry"),
      `\nSUBMITTED:  ${ts()}\n`,
      DIV,
      "CONTACT",
      DIV,
      `Name:           ${d.contact_name}`,
      d.title ? `Title:          ${d.title}` : null,
      `Organization:   ${d.organization}`,
      `Phone:          ${d.phone}`,
      `Email:          ${d.email}`,
      `\n${DIV}\nORGANIZATION DETAILS\n${DIV}`,
      `Type:               ${orgLabels[d.organization_type ?? ""] ?? d.organization_type ?? "—"}`,
      `Facility count:     ${d.facility_count ?? "—"}`,
      `Annual OON volume:  ${d.annual_oon_volume ?? "—"}`,
      d.message?.trim() ? `\n${DIV}\nNOTES\n${DIV}\n\n${d.message.trim()}` : null,
      utmBlock(d.utm),
      `\n${HDR}`,
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

function buildContactEmail(d: z.infer<typeof ContactSchema>) {
  const isSydra = d.source === "sydra_waitlist";
  const label = isSydra ? "Sydra Beta Waitlist" : "Case Review Request";
  return {
    subject: isSydra
      ? `[Kronos Revenue] Sydra Beta Waitlist — ${d.organization} — ${d.name}`
      : `[Kronos Revenue] Case Review Request — ${d.organization} — ${d.name}`,
    text: [
      header(label),
      `\nSITE:       ${isSydra ? "www.kronosrevenue.health/sydra" : "www.kronosrevenue.health"}`,
      `SUBMITTED:  ${ts()}\n`,
      DIV,
      "CONTACT",
      DIV,
      `Name:         ${d.name}`,
      `Phone:        ${d.phone}`,
      `Email:        ${d.email}`,
      `Organization: ${d.organization}`,
      d.message?.trim() ? `\n${DIV}\nNOTES\n${DIV}\n\n${d.message.trim()}` : null,
      utmBlock(d.utm),
      `\n${HDR}`,
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const raw = body as Record<string, unknown>;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const formType = typeof raw.form_type === "string" ? raw.form_type : null;

    let emailPayload: { subject: string; text: string };
    let replyTo: string;

    const toEmail = CONTACT_EMAIL;

    if (formType === "idr_checklist") {
      const p = ChecklistSchema.safeParse(body);
      if (!p.success)
        return NextResponse.json(
          { error: "Invalid form data", details: p.error.flatten() },
          { status: 400 }
        );
      emailPayload = buildChecklistEmail(p.data);
      replyTo = p.data.email;
    } else if (formType === "nsa_dispute") {
      const p = NSADisputeSchema.safeParse(body);
      if (!p.success)
        return NextResponse.json(
          { error: "Invalid form data", details: p.error.flatten() },
          { status: 400 }
        );
      emailPayload = buildNSADisputeEmail(p.data);
      replyTo = p.data.email;
    } else if (formType === "asc_provider") {
      const p = ASCProviderSchema.safeParse(body);
      if (!p.success)
        return NextResponse.json(
          { error: "Invalid form data", details: p.error.flatten() },
          { status: 400 }
        );
      emailPayload = buildASCProviderEmail(p.data);
      replyTo = p.data.email;
    } else if (formType === "synaptix_licensee") {
      const p = SynaptixBillingSchema.safeParse(body);
      if (!p.success)
        return NextResponse.json(
          { error: "Invalid form data", details: p.error.flatten() },
          { status: 400 }
        );
      emailPayload = buildSynaptixBillingEmail(p.data);
      replyTo = p.data.email;
    } else if (formType === "hospital_group") {
      const p = HospitalGroupSchema.safeParse(body);
      if (!p.success)
        return NextResponse.json(
          { error: "Invalid form data", details: p.error.flatten() },
          { status: 400 }
        );
      emailPayload = buildHospitalGroupEmail(p.data);
      replyTo = p.data.email;
    } else if (formType === "claim_review" || raw.contact_name !== undefined) {
      const p = ClaimReviewSchema.safeParse(body);
      if (!p.success)
        return NextResponse.json(
          { error: "Invalid form data", details: p.error.flatten() },
          { status: 400 }
        );
      emailPayload = buildClaimReviewEmail(p.data);
      replyTo = p.data.email;
    } else {
      const p = ContactSchema.safeParse(body);
      if (!p.success)
        return NextResponse.json(
          { error: "Invalid form data", details: p.error.flatten() },
          { status: 400 }
        );
      emailPayload = buildContactEmail(p.data);
      replyTo = p.data.email;
    }

    const resend = new Resend(apiKey);
    const { error: sendError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [toEmail],
      replyTo,
      subject: emailPayload.subject,
      text: emailPayload.text,
    });

    if (sendError) {
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
