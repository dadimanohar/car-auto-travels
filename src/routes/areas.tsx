import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { AREAS } from "@/lib/business";
import { breadcrumb, pageHead } from "@/lib/seo";

const title = "Areas Served | Taxi & Auto Travel Across Andhra Pradesh – CAR & AUTO TRAVELS";
const description =
  "Taxi, car and auto travel across Visakhapatnam, Anakapalli, Madugula, Kakinada, Tirupati, Vijayawada, Aruku and more. Call 9000728564.";

export const Route = createFileRoute("/areas")({
  staticData: { sitemap: true },
  head: () =>
    pageHead("/areas", title, description, {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TaxiService",
          "@id": "https://carautotravels.lovable.app/#business",
          name: "CAR & AUTO TRAVELS",
          telephone: "+919000728564",
          areaServed: AREAS.map((name) => ({ "@type": "Place", name })),
        },
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Areas Served", path: "/areas" },
        ]),
      ],
    }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <main className="bg-surface py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Areas We Serve
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Based in K.J. Puram, Madugula, Anakapalli. We travel to these places and nearby
          areas across Andhra Pradesh.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area) => (
            <li key={area} className="flex items-center gap-3 rounded-2xl bg-background p-5 shadow-card">
              <MapPin className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="font-semibold text-navy">{area}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted-foreground">
          Going somewhere else? See our{" "}
          <Link to="/services/$slug" params={{ slug: "long-distance" }} className="font-semibold text-primary underline">
            long-distance travel
          </Link>{" "}
          service or{" "}
          <Link to="/contact" className="font-semibold text-primary underline">
            request a trip
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
