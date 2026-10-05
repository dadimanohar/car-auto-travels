import { Phone } from "lucide-react";
import { PHONE_TEL } from "@/lib/business";

const places = [
  "Tirupati",
  "Annavaram",
  "Kakinada",
  "Visakhapatnam",
  "Anakapalli",
  "Madugula",
  "Narsipatnam",
  "Chodavaram",
  "Vijayawada",
  "Vijayanagaram",
  "Sri Kakulam",
  "Sri Sailam",
  "Aruku",
  "Gandikota",
  "Lepakshi",
  "Other Places",
];

export function LongDistance() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Planning a Long Trip?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/75">
          Tell us where you want to go. We can provide outstation car travel for long-distance
          journeys based on availability and your travel requirements.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {places.map((p) => (
            <li
              key={p}
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white"
            >
              {p}
            </li>
          ))}
        </ul>
        <a
          href={PHONE_TEL}
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-navy transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy focus-visible:outline-none"
        >
          <Phone className="size-4" aria-hidden="true" />
          CALL FOR LONG-DISTANCE TRAVEL
        </a>
      </div>
    </section>
  );
}
