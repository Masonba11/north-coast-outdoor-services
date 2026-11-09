import { Resend } from "resend";
import { business } from "./business-config";

export type QuotePayload = {
  fullName: string;
  phone: string;
  email: string;
  serviceRequested: string;
  city: string;
  propertyType: string;
  projectDetails: string;
};

export type EmailResult =
  | { ok: true; mode: "resend"; id?: string }
  | { ok: true; mode: "logged" }
  | { ok: false; error: string };

function getResendClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function sendQuoteNotification(
  payload: QuotePayload,
): Promise<EmailResult> {
  const resend = getResendClient();
  const from =
    process.env.QUOTE_FROM_EMAIL || "North Coast Quotes <onboarding@resend.dev>";
  const to = process.env.QUOTE_TO_EMAIL || business.email;

  const subject = `New quote request — ${payload.serviceRequested} in ${payload.city}`;
  const text = [
    `Form ID reference: ${business.quoteFormId}`,
    "",
    `Name: ${payload.fullName}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Service: ${payload.serviceRequested}`,
    `City: ${payload.city}`,
    `Property type: ${payload.propertyType}`,
    "",
    "Project details:",
    payload.projectDetails,
  ].join("\n");

  if (!resend) {
    console.info("[quote] RESEND_API_KEY not configured. Quote logged only.");
    console.info(text);
    return { ok: true, mode: "logged" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: payload.email,
      subject,
      text,
    });

    if (error) {
      return { ok: false, error: error.message };
    }

    return { ok: true, mode: "resend", id: data?.id };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to send email.";
    return { ok: false, error: message };
  }
}
