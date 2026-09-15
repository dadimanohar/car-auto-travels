import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CallButton } from "./CallButton";

export function BookingCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="rounded-3xl bg-accent px-6 py-12 text-center shadow-card sm:px-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Need a Car or Auto?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          Call us and tell us where you want to go. We will discuss your travel
          requirements and booking.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton className="px-7 py-4 text-base" />
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-background px-7 py-4 text-base font-bold text-navy transition-colors hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            CONTACT US
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
