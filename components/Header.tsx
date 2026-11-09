"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/business-config";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";

type OpenMenu = "services" | "areas" | null;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<OpenMenu>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setDesktopMenu(null);
      }
    }
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setDesktopMenu(null);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  function closeMobile() {
    setOpen(false);
    setMobileServicesOpen(false);
    setMobileAreasOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-white/95 shadow-[0_8px_30px_rgba(16,20,18,0.08)] backdrop-blur-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="border-b border-line/70 bg-forest text-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-2 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] sm:text-xs">
          <p>Proudly serving Vancouver, WA & Clark County</p>
          <p className="text-yellow">Southwest Washington exterior cleaning</p>
        </div>
      </div>

      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Link href="/" className="relative block h-12 w-[150px] sm:h-14 sm:w-[180px]">
          <Image
            src={business.logo.path}
            alt={business.logo.alt}
            fill
            priority
            className="object-contain object-left"
            sizes="180px"
          />
        </Link>

        <nav
          ref={navRef}
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="rounded-full px-3 py-2 text-sm font-semibold text-ink/80 transition hover:bg-cream hover:text-forest"
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setDesktopMenu("services")}
            onMouseLeave={() => setDesktopMenu(null)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-ink/80 transition hover:bg-cream hover:text-forest"
              aria-expanded={desktopMenu === "services"}
              aria-haspopup="true"
              onClick={() =>
                setDesktopMenu((value) => (value === "services" ? null : "services"))
              }
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition ${desktopMenu === "services" ? "rotate-180" : ""}`}
              />
            </button>
            {desktopMenu === "services" ? (
              <div className="absolute left-0 top-full z-50 min-w-[240px] pt-2">
                <div className="overflow-hidden rounded-2xl border border-line bg-white py-2 shadow-[0_18px_40px_rgba(16,20,18,0.12)]">
                  <Link
                    href="/services"
                    className="block px-4 py-2.5 text-sm font-semibold text-forest hover:bg-cream"
                    onClick={() => setDesktopMenu(null)}
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.href}
                      className="block px-4 py-2.5 text-sm font-medium text-ink/80 hover:bg-cream hover:text-forest"
                      onClick={() => setDesktopMenu(null)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setDesktopMenu("areas")}
            onMouseLeave={() => setDesktopMenu(null)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-ink/80 transition hover:bg-cream hover:text-forest"
              aria-expanded={desktopMenu === "areas"}
              aria-haspopup="true"
              onClick={() =>
                setDesktopMenu((value) => (value === "areas" ? null : "areas"))
              }
            >
              Service Areas
              <ChevronDown
                className={`h-4 w-4 transition ${desktopMenu === "areas" ? "rotate-180" : ""}`}
              />
            </button>
            {desktopMenu === "areas" ? (
              <div className="absolute left-0 top-full z-50 min-w-[260px] pt-2">
                <div className="max-h-[70vh] overflow-auto rounded-2xl border border-line bg-white py-2 shadow-[0_18px_40px_rgba(16,20,18,0.12)]">
                  <Link
                    href="/service-areas"
                    className="block px-4 py-2.5 text-sm font-semibold text-forest hover:bg-cream"
                    onClick={() => setDesktopMenu(null)}
                  >
                    All Service Areas
                  </Link>
                  {locations.map((location) => (
                    <Link
                      key={location.slug}
                      href={location.href}
                      className="block px-4 py-2.5 text-sm font-medium text-ink/80 hover:bg-cream hover:text-forest"
                      onClick={() => setDesktopMenu(null)}
                    >
                      {location.name}
                      {location.featured ? (
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-wide text-forest">
                          Primary
                        </span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <Link
            href="/about"
            className="rounded-full px-3 py-2 text-sm font-semibold text-ink/80 transition hover:bg-cream hover:text-forest"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="rounded-full px-3 py-2 text-sm font-semibold text-ink/80 transition hover:bg-cream hover:text-forest"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="rounded-full px-3 py-2 text-sm font-semibold text-ink/80 transition hover:bg-cream hover:text-forest"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${business.phoneTel}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <Link href="/contact" className="btn-primary text-sm">
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-line bg-white lg:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
          <Link
            href="/"
            className="rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-cream"
            onClick={closeMobile}
          >
            Home
          </Link>

          <button
            type="button"
            className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-semibold text-ink hover:bg-cream"
            aria-expanded={mobileServicesOpen}
            onClick={() => setMobileServicesOpen((value) => !value)}
          >
            Services
            <ChevronDown
              className={`h-4 w-4 transition ${mobileServicesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileServicesOpen ? (
            <div className="mb-1 ml-3 space-y-1 border-l border-line pl-3">
              <Link
                href="/services"
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-forest hover:bg-cream"
                onClick={closeMobile}
              >
                All Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-ink/80 hover:bg-cream"
                  onClick={closeMobile}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          ) : null}

          <button
            type="button"
            className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-semibold text-ink hover:bg-cream"
            aria-expanded={mobileAreasOpen}
            onClick={() => setMobileAreasOpen((value) => !value)}
          >
            Service Areas
            <ChevronDown
              className={`h-4 w-4 transition ${mobileAreasOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileAreasOpen ? (
            <div className="mb-1 ml-3 max-h-64 space-y-1 overflow-auto border-l border-line pl-3">
              <Link
                href="/service-areas"
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-forest hover:bg-cream"
                onClick={closeMobile}
              >
                All Service Areas
              </Link>
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={location.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-ink/80 hover:bg-cream"
                  onClick={closeMobile}
                >
                  {location.name}
                </Link>
              ))}
            </div>
          ) : null}

          <Link
            href="/about"
            className="rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-cream"
            onClick={closeMobile}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-cream"
            onClick={closeMobile}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-cream"
            onClick={closeMobile}
          >
            Contact
          </Link>

          <a
            href={`tel:${business.phoneTel}`}
            className="rounded-xl px-3 py-3 text-base font-semibold text-forest"
            onClick={closeMobile}
          >
            Call {business.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="btn-primary mt-2 justify-center"
            onClick={closeMobile}
          >
            Get a Free Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
