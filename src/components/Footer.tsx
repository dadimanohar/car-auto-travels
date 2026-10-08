import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { ADDRESS_LINES, PHONE, PHONE_TEL } from "@/lib/business";

export function Footer() {
  return (
    <footer className="bg-navy pb-24 text-white/80 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold tracking-tight text-white">
            CAR &amp; AUTO <span className="text-white/70">TRAVELS</span>
          </p>
          <p className="mt-2 text-sm">Reliable Car &amp; Auto Travel Services</p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.18em] text-white">CONTACT</h2>
          <p className="mt-3 flex items-start gap-2 text-sm">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>{ADDRESS_LINES.join(", ")}</span>
          </p>
          <a
            href={PHONE_TEL}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline"
          >
            <Phone className="size-4" aria-hidden="true" />
            {PHONE}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.18em] text-white">PAGES</h2>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link to="/faq" className="hover:text-white">
              Frequently Asked Questions
            </Link>
          </div>
          <a
            href={PHONE_TEL}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-navy transition-opacity hover:opacity-90"
          >
            <Phone className="size-4" aria-hidden="true" />
            CALL NOW
          </a>
        </div>
      </div>
      <div className="border-t border-white/15 px-4 py-6 text-center text-xs sm:px-6">
        © 2026 CAR &amp; AUTO TRAVELS. All rights reserved.
      </div>
    </footer>
  );
}
