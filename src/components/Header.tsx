import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import travelLogo from "@/assets/car-auto-travels-logo.png";
import { PHONE_TEL } from "@/lib/business";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink =
    "rounded-full px-4 py-2 text-sm font-semibold text-navy transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none";

  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-card" : "border-b border-border"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2 sm:gap-3 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          onClick={() => setOpen(false)}
        >
          <img
            src={travelLogo}
            alt="CAR & AUTO TRAVELS car and auto logo"
            className="h-12 w-auto shrink-0 object-contain sm:h-14 md:h-16"
            width={108}
            height={80}
          />
          <span className="font-bold text-sm sm:text-lg text-navy tracking-tight whitespace-nowrap">
            CAR &amp; AUTO TRAVELS
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Main">
          <Link to="/" className={navLink} activeProps={{ className: "text-primary" }}>
            HOME
          </Link>
          <Link
            to="/contact"
            className={navLink}
            activeProps={{ className: "text-primary" }}
          >
            CONTACT
          </Link>
          <a
            href={PHONE_TEL}
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <Phone className="size-4" aria-hidden="true" />
            CALL NOW
          </a>
        </nav>

        <button
          type="button"
          className="ml-auto inline-flex size-11 items-center justify-center rounded-xl border border-border text-navy md:hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-5 md:hidden">
          <nav className="flex flex-col py-2" aria-label="Mobile">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-4 text-base font-semibold text-navy"
              activeProps={{ className: "text-primary" }}
            >
              HOME
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-4 text-base font-semibold text-navy"
              activeProps={{ className: "text-primary" }}
            >
              CONTACT
            </Link>
          </nav>
          <a
            href={PHONE_TEL}
            className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-bold text-primary-foreground"
          >
            <Phone className="size-5" aria-hidden="true" />
            CALL NOW 9000728564
          </a>
        </div>
      )}
    </header>
  );
}
