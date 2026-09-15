import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Car } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Location } from "@/components/Location";
import { ADDRESS_LINES, PHONE, PHONE_TEL } from "@/lib/business";

const title = "Contact CAR & AUTO TRAVELS | Taxi & Auto Booking, Anakapalli";
const description =
  "Call 9000728564 or request a trip online for car travel, auto travel, pickup and drop, local taxi and long-distance trips around Visakhapatnam, Anakapalli and Kakinada.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: title,
          description,
          mainEntity: {
            "@type": "LocalBusiness",
            name: "CAR & AUTO TRAVELS",
            telephone: "+919000728564",
            address: {
              "@type": "PostalAddress",
              streetAddress: "K.J. Puram, Madugula",
              addressLocality: "Anakapalli",
              addressRegion: "Andhra Pradesh",
              addressCountry: "IN",
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "/contact" },
            ],
          },
        }),
      },
    ],
  }),
  component: Contact,
});

const services = [
  "Car Travel",
  "Auto Travel",
  "Pickup & Drop",
  "Local Travel",
  "Long-Distance Travel",
];

function Contact() {
  return (
    <main>
      <section className="bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Contact <span className="text-primary">CAR &amp; AUTO TRAVELS</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Call us for local travel, pickup &amp; drop, auto service or long-distance car
            trips.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl bg-background p-6 shadow-card">
              <Phone className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-sm font-bold tracking-[0.16em] text-navy">PHONE</h2>
              <a
                href={PHONE_TEL}
                className="mt-2 inline-block text-lg font-bold text-primary hover:underline"
              >
                {PHONE}
              </a>
            </article>
            <article className="rounded-3xl bg-background p-6 shadow-card">
              <MapPin className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-sm font-bold tracking-[0.16em] text-navy">
                LOCATION
              </h2>
              <address className="mt-2 text-sm not-italic text-muted-foreground">
                {ADDRESS_LINES.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
            </article>
            <article className="rounded-3xl bg-background p-6 shadow-card">
              <Car className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-sm font-bold tracking-[0.16em] text-navy">
                SERVICES
              </h2>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20">
        <ContactForm />
      </div>

      <Location />
    </main>
  );
}
