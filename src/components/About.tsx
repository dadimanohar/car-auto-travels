import { Check, Phone } from "lucide-react";
import ownerPhoto from "@/assets/owner.asset.json";
import { PHONE_TEL } from "@/lib/business";

const highlights = [
  "Car travel for local journeys and long trips",
  "Auto travel for nearby pickup and drop",
  "Serving Visakhapatnam, Anakapalli, Kakinada and Madugula area",
];

export function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <img
          src={ownerPhoto.url}
          alt="Dadi Ramalakshmana Rao, owner of CAR & AUTO TRAVELS"
          loading="lazy"
          className="w-full rounded-3xl object-cover shadow-card"
        />
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Your Local Travel Partner
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            CAR &amp; AUTO TRAVELS is a local travel and taxi service operated by Dadi
            Ramalakshmana Rao. We provide car and auto travel for pickup, drop, local
            journeys and long-distance trips.
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Based in K.J. Puram, Madugula, Anakapalli, we serve customers around
            Visakhapatnam, Anakapalli, Kakinada and nearby areas.
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm font-medium text-navy">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
          <a
            href={PHONE_TEL}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-card transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <Phone className="size-4" aria-hidden="true" />
            CALL DADI RAMALAKSHMANA RAO
          </a>
        </div>
      </div>
    </section>
  );
}
