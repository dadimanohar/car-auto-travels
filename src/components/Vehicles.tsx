import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import carRear from "@/assets/swift-dzire-rear.jpg.asset.json";
import carFront from "@/assets/swift-dzire-front.jpg.asset.json";
import carSide from "@/assets/swift-dzire-side.jpg.asset.json";
import autoPhoto from "@/assets/auto.asset.json";

export function Vehicles() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
        Our Vehicles
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-3xl bg-background shadow-card">
          <img
            src={carFront.url}
            alt="Front view of our white Swift Desire taxi"
            loading="lazy"
            className="h-64 w-full object-cover sm:h-72"
          />
          <div className="grid grid-cols-2 gap-1 p-1">
            <img
              src={carRear.url}
              alt="Rear view of our white Swift Desire taxi"
              loading="lazy"
              className="h-28 w-full rounded-2xl object-cover"
            />
            <img
              src={carSide.url}
              alt="Side view of our white Swift Desire taxi"
              loading="lazy"
              className="h-28 w-full rounded-2xl object-cover"
            />
          </div>
          <div className="p-6 pt-4">
            <h3 className="text-lg font-bold tracking-wide text-navy">SWIFT DESIRE</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Car travel for local and long-distance journeys.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              BOOK CAR TRAVEL
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </article>

        <article className="overflow-hidden rounded-3xl bg-background shadow-card">
          <img
            src={autoPhoto.url}
            alt="Our yellow auto rickshaw used for local pickup and drop travel in Madugula, Anakapalli"
            loading="lazy"
            className="h-64 w-full object-cover object-top sm:h-72"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold tracking-wide text-navy">AUTO</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Auto travel for local pickup, drop and nearby journeys.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              BOOK AUTO TRAVEL
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
