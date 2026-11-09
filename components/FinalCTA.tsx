import Link from "next/link";

type FinalCTAProps = {
  heading?: string;
  body?: string;
  buttonLabel?: string;
  href?: string;
};

export function FinalCTA({
  heading = "Ready for a Cleaner Property?",
  body = "Request a free quote for window cleaning, soft washing, pressure washing, or gutter cleaning across Vancouver, WA and surrounding communities.",
  buttonLabel = "Request Your Free Quote",
  href = "/contact",
}: FinalCTAProps) {
  return (
    <section className="section-pad">
      <div className="container-page overflow-hidden rounded-[2rem] bg-forest px-6 py-12 text-center text-white sm:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-white/80">{body}</p>
          <Link href={href} className="btn-primary mt-8 inline-flex">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
