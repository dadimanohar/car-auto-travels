import { ExternalLink, MapPin } from "lucide-react";
import { ADDRESS_LINES, MAPS_URL } from "@/lib/business";

export function Location() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-24">
      <div className="rounded-3xl bg-accent p-8 shadow-card sm:p-10">
        <h2 className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-navy">
          <MapPin className="size-6 text-primary" aria-hidden="true" />
          Our Location
        </h2>
        <address className="mt-4 text-base not-italic text-muted-foreground">
          {ADDRESS_LINES.join(", ")}
        </address>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          OPEN LOCATION IN GOOGLE MAPS
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
