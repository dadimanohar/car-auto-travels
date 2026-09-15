import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { FeatureBar } from "@/components/FeatureBar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Vehicles } from "@/components/Vehicles";
import { LongDistance } from "@/components/LongDistance";
import { BookingSteps } from "@/components/BookingSteps";
import { BookingCTA } from "@/components/BookingCTA";

const title =
  "CAR & AUTO TRAVELS | Car & Auto Taxi Services in Visakhapatnam & Anakapalli";
const description =
  "CAR & AUTO TRAVELS provides car and auto travel, pickup and drop, local travel and long-distance taxi services around Visakhapatnam, Anakapalli, Kakinada and nearby areas in Andhra Pradesh.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: "CAR & AUTO TRAVELS",
          description,
          telephone: "+919000728564",
          founder: { "@type": "Person", name: "Dadi Ramalakshmana Rao" },
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
            "Andhra Pradesh",
          ],
          serviceType: [
            "Car travel",
            "Auto travel",
            "Pickup and drop",
            "Local taxi service",
            "Long-distance taxi",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <FeatureBar />
      <About />
      <Services />
      <Vehicles />
      <LongDistance />
      <BookingSteps />
      <BookingCTA />
    </main>
  );
}
