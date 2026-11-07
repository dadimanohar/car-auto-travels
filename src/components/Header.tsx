import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import travelLogo from "@/assets/car-auto-travels-logo.png";
import { PHONE_TEL } from "@/lib/business";
import { SERVICES } from "@/lib/services-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink =
    "rounded-full px-3 py-2 text-sm font-semibold text-navy transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none";

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

        <nav className="ml-auto hidden items-center gap-0.5 lg:flex" aria-label="Main">
          <Link to="/" className={navLink} activeProps={{ className: "text-primary" }}>
            HOME
          </Link>
          <div className="relative flex items-center">
            <Link to="/services" className={navLink} activeProps={{ className: "text-primary" }}>
              SERVICES
            </Link>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8 rounded-full text-navy"
              aria-label={servicesOpen ? "Hide service pages" : "Show service pages"}
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((value) => !value)}
            >
              <ChevronDown className={`size-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </Button>
            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-64 border border-border bg-background py-2 shadow-card">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="block px-4 py-2.5 text-sm font-medium text-navy hover:bg-surface hover:text-primary"
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/areas" className={navLink} activeProps={{ className: "text-primary" }}>
            AREAS
          </Link>
          <Link to="/reviews" className={navLink} activeProps={{ className: "text-primary" }}>
            REVIEWS
          </Link>
          <Link to="/faq" className={navLink} activeProps={{ className: "text-primary" }}>
            FAQ
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

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="ml-auto size-11 rounded-md text-navy lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-5 lg:hidden">
          <nav className="flex flex-col py-2" aria-label="Mobile">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-4 text-base font-semibold text-navy"
              activeProps={{ className: "text-primary" }}
            >
              HOME
            </Link>
            <div>
              <div className="flex items-center">
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="flex-1 px-3 py-4 text-base font-semibold text-navy"
                  activeProps={{ className: "text-primary" }}
                >
                  SERVICES
                </Link>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="mr-2 size-10 rounded-md text-navy"
                  aria-label={servicesOpen ? "Hide service pages" : "Show service pages"}
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((value) => !value)}
                >
                  <ChevronDown className={`size-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </Button>
              </div>
              {servicesOpen && (
                <div className="ml-3 border-l border-border pb-2 pl-3">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      onClick={() => { setOpen(false); setServicesOpen(false); }}
                      className="block px-3 py-3 text-sm font-medium text-muted-foreground"
                      activeProps={{ className: "text-primary" }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/areas"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-4 text-base font-semibold text-navy"
              activeProps={{ className: "text-primary" }}
            >
              AREAS
            </Link>
            <Link
              to="/reviews"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-4 text-base font-semibold text-navy"
              activeProps={{ className: "text-primary" }}
            >
              REVIEWS
            </Link>
            <Link
              to="/faq"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-4 text-base font-semibold text-navy"
              activeProps={{ className: "text-primary" }}
            >
              FAQ
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
