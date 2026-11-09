import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/business-config";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: `Terms of use for the ${business.name} website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="section-pad">
      <div className="container-page prose-ncos max-w-3xl">
        <h1 className="text-4xl font-bold text-ink">Terms of Use</h1>
        <p>
          By using this website, you agree to these terms. The site provides general
          information about {business.name} and a way to request exterior cleaning quotes.
        </p>
        <h2>Quotes and services</h2>
        <p>
          Submitting a quote form does not create a binding service contract. Final scope,
          timing, and pricing are confirmed through direct communication after your request
          is reviewed.
        </p>
        <h2>Website content</h2>
        <p>
          Content is provided for informational purposes. Service availability may vary by
          location and schedule.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
      </div>
    </section>
  );
}
