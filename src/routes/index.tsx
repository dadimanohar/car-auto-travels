import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Vehicles } from "@/components/Vehicles";
import { LongDistance } from "@/components/LongDistance";
import { AREAS } from "@/lib/business";
import { SERVICES } from "@/lib/services-data";

const title =
  "CAR & AUTO TRAVELS | Local Taxi in Madugula & Anakapalli";
const description =
  "Arrange local car and auto travel, pickup and drop, or outstation trips from Madugula and Anakapalli to Visakhapatnam and nearby Andhra Pradesh areas. Call 9000728564.";
const pageUrl = "https://carautotravels.lovable.app/";

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
              areaServed: AREAS.map((name) => ({ "@type": "Place", name })),
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Travel services",
                itemListElement: SERVICES.map((service) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: service.name,
                    description: service.tagline,
                    url: `${pageUrl}services/${service.slug}`,
                  },
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
