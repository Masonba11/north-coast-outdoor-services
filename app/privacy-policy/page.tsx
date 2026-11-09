import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/business-config";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${business.name}.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="section-pad">
      <div className="container-page prose-ncos max-w-3xl">
        <h1 className="text-4xl font-bold text-ink">Privacy Policy</h1>
        <p>
          This privacy policy describes how {business.name} handles information submitted
          through this website, including quote request forms.
        </p>
        <h2>Information we collect</h2>
        <p>
          When you submit a quote request, we collect the details you provide such as your
          name, phone number, email address, service preferences, city, property type, and
          project notes.
        </p>
        <h2>How we use information</h2>
        <p>
          We use submitted information to respond to quote requests, communicate about
          scheduling, and provide the exterior cleaning services you inquire about.
        </p>
        <h2>Sharing</h2>
        <p>
          We do not sell your personal information. Information may be processed by email or
          hosting providers used to operate this website and deliver notifications.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions, contact{" "}
          <a href={`mailto:${business.email}`}>{business.email}</a> or call{" "}
          <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>.
        </p>
      </div>
    </section>
  );
}
