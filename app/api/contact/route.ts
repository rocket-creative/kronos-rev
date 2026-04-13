import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  phone: z.string().min(7, "Phone number is required").max(30),
  email: z.string().email("Valid email required").max(254),
  organization: z.string().min(1, "Organization is required").max(200),
  message: z.string().max(2000).optional(),
  source: z.string().max(50).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { name, phone, email, organization, message, source } = parsed.data;

    const isSydra = source === "sydra_waitlist";

    const subject = isSydra
      ? `[Sydra] Beta Waitlist — ${organization} — ${name}`
      : `[Kronos Revenue] Revenue Review Request — ${organization} — ${name}`;

    const formType = isSydra ? "Sydra Beta Waitlist" : "Revenue Review Request";
    const site = isSydra ? "kronos-rev.vercel.app/sydra" : "kronosrevenue.co";

    const emailBody = `
================================================================================
KRONOS REVENUE — ${formType.toUpperCase()}
================================================================================

SITE:       ${site}
FORM:       ${formType}

SUBMITTED:  ${new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "full", timeStyle: "short" })} ET

--------------------------------------------------------------------------------
CONTACT DETAILS
--------------------------------------------------------------------------------

Name:         ${name}
Email:        ${email}
Phone:        ${phone}
Organization: ${organization}
${message?.trim() ? `\n--------------------------------------------------------------------------------\nNOTES\n--------------------------------------------------------------------------------\n\n${message.trim()}\n` : ""}
================================================================================
    `.trim();

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Kronos Revenue <noreply@kronosrevenue.co>",
      to: ["info@kronoshealth.co"],
      replyTo: email,
      subject,
      text: emailBody,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
