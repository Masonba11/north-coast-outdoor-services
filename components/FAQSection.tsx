type FAQ = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  heading?: string;
  faqs: FAQ[];
};

export function FAQSection({
  heading = "Frequently Asked Questions",
  faqs,
}: FAQSectionProps) {
  return (
    <section className="section-pad">
      <div className="container-page max-w-3xl">
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">{heading}</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-line bg-white px-5 py-4 open:shadow-[0_12px_30px_rgba(16,20,18,0.06)]"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span className="mt-1 text-forest transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
