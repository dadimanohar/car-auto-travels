import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Vehicles } from "@/components/Vehicles";
import { LongDistance } from "@/components/LongDistance";

const title =
  "CAR & AUTO TRAVELS | Car & Taxi Travel Service in Visakhapatnam";
const description =
  "Local taxi and outstation car travel services in Visakhapatnam, Anakapalli, Madugula, Narsipatnam & nearby. One-way, pickup/drop & long-distance trips.";
const pageUrl = "https://car-auto-travels.lovable.app/";

export const Route = createFileRoute("/")({
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
          "@graph": [
            {
              "@type": ["LocalBusiness", "TaxiService"],
              "@id": `${pageUrl}#business`,
              name: "CAR & AUTO TRAVELS",
              alternateName: "Car and Auto Travels Madugula",
              description,
              telephone: "+919000728564",
              url: pageUrl,
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
                "Narsipatnam",
                "Chodavaram",
                "Annavaram",
                "Tirupati",
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
              "@id": `${pageUrl}#website`,
              name: "CAR & AUTO TRAVELS",
              url: pageUrl,
              publisher: { "@id": `${pageUrl}#business` },
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
      <Services />
      <LongDistance />
      <Vehicles />
      <About />
    </main>
  );
}
