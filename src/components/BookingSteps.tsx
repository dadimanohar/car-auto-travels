import { CallButton } from "./CallButton";
import { PHONE } from "@/lib/business";

export function BookingSteps() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Book Your Trip in 3 Simple Steps
        </h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          <li className="rounded-3xl bg-background p-6 shadow-card">
            <span className="text-sm font-bold text-primary">STEP 1</span>
            <h3 className="mt-2 text-base font-bold tracking-wide text-navy">CALL US</h3>
            <p className="mt-2 text-sm text-muted-foreground">{PHONE}</p>
          </li>
          <li className="rounded-3xl bg-background p-6 shadow-card">
            <span className="text-sm font-bold text-primary">STEP 2</span>
            <h3 className="mt-2 text-base font-bold tracking-wide text-navy">
              SHARE YOUR TRIP DETAILS
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Pickup location</li>
              <li>Drop location</li>
              <li>Date</li>
              <li>Travel type</li>
            </ul>
          </li>
          <li className="rounded-3xl bg-background p-6 shadow-card">
            <span className="text-sm font-bold text-primary">STEP 3</span>
            <h3 className="mt-2 text-base font-bold tracking-wide text-navy">
              CONFIRM YOUR TRIP
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Discuss availability and fare directly with the owner.
            </p>
          </li>
        </ol>
        <div className="mt-10">
          <CallButton label="CALL NOW —" className="w-full px-7 py-4 text-base sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
