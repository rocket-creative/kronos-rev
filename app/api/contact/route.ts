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
      subject: `Revenue Review Request — ${organization}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00A896;">New Revenue Review Request</h2>
          <p><strong>Source:</strong> ${source ?? "kronos-revenue landing page"}</p>
          <hr style="border-color: #262626;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organization:</strong> ${organization}</p>
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
