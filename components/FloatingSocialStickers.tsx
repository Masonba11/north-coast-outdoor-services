import { business } from "@/lib/business-config";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

const stickerRing =
  "border-4 border-white shadow-[0_0_0_3px_rgba(255,255,255,0.55),0_4px_14px_rgba(16,20,18,0.45),0_0_22px_rgba(255,255,255,0.65)]";
const stickerRingHover =
  "hover:shadow-[0_0_0_4px_rgba(255,255,255,0.7),0_6px_18px_rgba(16,20,18,0.5),0_0_26px_rgba(255,255,255,0.8)]";

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
        <FacebookIcon className="h-5 w-5 text-white md:h-6 md:w-6" />
      </a>
      <a
        href={business.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow North Coast Outdoor Services on Instagram"
        className={`pointer-events-auto float-soft inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white ${stickerRing} transition duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-forest-deep ${stickerRingHover} md:h-14 md:w-14`}
        style={{ animationDelay: "0.4s" }}
      >
        <InstagramIcon className="h-5 w-5 text-white md:h-6 md:w-6" />
      </a>
    </div>
  );
}
