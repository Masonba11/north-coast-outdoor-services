import { business } from "@/lib/business-config";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

const stickerRing =
  "border-[3px] border-white shadow-[0_0_0_3px_rgba(255,255,255,0.85),0_10px_28px_rgba(16,20,18,0.4),0_0_20px_rgba(255,255,255,0.55)]";
const stickerRingHover =
  "hover:shadow-[0_0_0_3px_rgba(255,255,255,0.95),0_14px_34px_rgba(16,20,18,0.45),0_0_24px_rgba(255,255,255,0.7)]";

export function FloatingSocialStickers() {
  return (
    <div className="pointer-events-none fixed bottom-[5.75rem] right-3 z-40 flex flex-col gap-3 md:bottom-6 md:right-5">
      <a
        href={business.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow North Coast Outdoor Services on Facebook"
        className={`pointer-events-auto float-soft inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white ${stickerRing} transition duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-forest-deep ${stickerRingHover} md:h-14 md:w-14`}
      >
        <FacebookIcon className="h-5 w-5 md:h-6 md:w-6" />
      </a>
      <a
        href={business.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow North Coast Outdoor Services on Instagram"
        className={`pointer-events-auto float-soft inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-ink ${stickerRing} transition duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-[#f0d85a] ${stickerRingHover} md:h-14 md:w-14`}
        style={{ animationDelay: "0.4s" }}
      >
        <InstagramIcon className="h-5 w-5 md:h-6 md:w-6" />
      </a>
    </div>
  );
}
