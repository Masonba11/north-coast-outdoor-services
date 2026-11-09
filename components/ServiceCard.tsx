import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export function ServiceCard({ title, description, href, image }: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_50px_rgba(16,20,18,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,20,18,0.12)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
      </div>
      <div className="space-y-4 p-6 sm:p-7">
        <h3 className="text-2xl font-bold text-ink">{title}</h3>
        <p className="text-[15px] leading-relaxed text-muted">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-bold text-forest transition group-hover:gap-3"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
