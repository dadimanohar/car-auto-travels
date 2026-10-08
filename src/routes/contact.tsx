import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Car } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Location } from "@/components/Location";
import { ADDRESS_LINES, PHONE, PHONE_TEL } from "@/lib/business";

const title = "Contact CAR & AUTO TRAVELS | Taxi & Auto Booking Visakhapatnam";
const description =
  "Call 9000728564 or book online for local car & auto travel, pickup/drop & long-distance taxi trips in Visakhapatnam, Anakapalli, Madugula & nearby areas.";
const pageUrl = "https://carautotravels.lovable.app/contact";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
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
            "@id": "https://carautotravels.lovable.app/#business",
            name: "CAR & AUTO TRAVELS",
            telephone: "+919000728564",
            url: "https://carautotravels.lovable.app/",
            address: {
              "@type": "PostalAddress",
              streetAddress: "K.J. Puram, Madugula",
              addressLocality: "Anakapalli",
              addressRegion: "Andhra Pradesh",
              addressCountry: "IN",
            },
            areaServed: [
              "Visakhapatnam",
              "Anakapalli",
              "Kakinada",
              "Madugula",
              "Narsipatnam",
              "Chodavaram",
              "Annavaram",
              "Tirupati",
            ].map((name) => ({ "@type": "Place", name })),
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Travel services",
              itemListElement: [
                "Swift Desire car travel",
                "Auto travel",
                "Pickup and drop",
                "Local travel",
                "Long-distance travel",
              ].map((name) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name },
              })),
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://carautotravels.lovable.app/",
              },
              { "@type": "ListItem", position: 2, name: "Contact", item: pageUrl },
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
