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
          "@graph": [
            {
              "@type": ["LocalBusiness", "TaxiService"],
              "@id": "/#business",
              name: "CAR & AUTO TRAVELS",
              alternateName: "Car and Auto Travels Madugula",
              description,
              telephone: "+919000728564",
              url: "/",
              founder: { "@type": "Person", name: "Dadi Ramalakshmana Rao" },
              knowsLanguage: ["te", "en", "hi"],
              currenciesAccepted: "INR",
              paymentAccepted: "Cash, UPI",
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
              ].map((name) => ({ "@type": "Place", name })),
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Travel services",
                itemListElement: [
                  "Car travel",
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
            {
              "@type": "WebSite",
              "@id": "/#website",
              name: "CAR & AUTO TRAVELS",
              url: "/",
              publisher: { "@id": "/#business" },
              inLanguage: "en-IN",
            },
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
