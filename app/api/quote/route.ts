import { NextResponse } from "next/server";
import { z } from "zod";
import { business } from "@/lib/business-config";
import { sendQuoteNotification } from "@/lib/email";

const quoteSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(10).max(30),
  email: z.string().trim().email().max(120),
  serviceRequested: z.string().trim().min(2).max(80),
  city: z.string().trim().min(2).max(80),
  propertyType: z.enum(["Residential", "Commercial"]),
  projectDetails: z.string().trim().min(10).max(2000),
  company: z.string().optional(),
  formId: z.string().optional(),
});

const recentSubmissions = new Map<string, number>();

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = quoteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please check the form fields and try again.",
          issues: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    // Honeypot — bots often fill hidden fields
    if (parsed.data.company && parsed.data.company.trim().length > 0) {
      return NextResponse.json({ ok: true, delivery: "ignored" });
    }

    const ip = getClientIp(request);
    const now = Date.now();
    const last = recentSubmissions.get(ip) ?? 0;
    if (now - last < 20_000) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please wait a moment before submitting again.",
        },
        { status: 429 },
      );
    }
    recentSubmissions.set(ip, now);

    const result = await sendQuoteNotification({
      fullName: parsed.data.fullName,
      phone: parsed.data.phone,
      email: parsed.data.email,
      serviceRequested: parsed.data.serviceRequested,
      city: parsed.data.city,
      propertyType: parsed.data.propertyType,
      projectDetails: parsed.data.projectDetails,
    });

    if (!result.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: result.error || "Unable to deliver your request right now.",
          formId: business.quoteFormId,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      delivery: result.mode,
      formId: business.quoteFormId,
      message:
        result.mode === "resend"
          ? "Quote request delivered."
          : "Quote request accepted and logged.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Unexpected server error. Please call or email us directly.",
      },
      { status: 500 },
    );
  }
}
