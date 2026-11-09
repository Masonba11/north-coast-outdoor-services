import Link from "next/link";
import { FileText, Phone } from "lucide-react";
import { business } from "@/lib/business-config";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-3 pb-[calc(0.55rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-10px_30px_rgba(16,20,18,0.12)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${business.phoneTel}`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-4 py-3 text-sm font-bold text-ink shadow-sm"
        >
          <Phone className="h-4 w-4 text-forest" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow px-4 py-3 text-sm font-bold text-ink"
        >
          <FileText className="h-4 w-4" />
          Free Quote
        </Link>
      </div>
    </div>
  );
}
