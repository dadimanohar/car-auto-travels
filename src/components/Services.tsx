import { Car, MapPin, Route, Truck } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "CAR TRAVEL",
    text: "Comfortable car travel for local journeys, pickup & drop and long-distance trips.",
  },
  {
    icon: Truck,
    title: "AUTO TRAVEL",
    text: "Convenient auto travel for local pickup, drop and nearby journeys.",
  },
  {
    icon: MapPin,
    title: "PICKUP & DROP",
    text: "Pickup and drop services for local customers around our service areas.",
  },
  {
    icon: Route,
    title: "LONG-DISTANCE TRAVEL",
    text: "Car travel for longer journeys and customer-requested destinations.",
    examples: "Tirupati • Annavaram • Kakinada • Visakhapatnam • Other destinations",
  },
];

export function Services() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Our Travel Services
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text, examples }) => (
            <article
              key={title}
              className="flex flex-col rounded-3xl bg-background p-6 shadow-card"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-accent text-primary">
                <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-bold tracking-wide text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              {examples && (
                <p className="mt-3 text-xs font-medium text-primary">{examples}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
