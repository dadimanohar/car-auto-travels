import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FaqList } from "@/components/FaqList";
import { FAQS } from "@/lib/faq-data";
import { SERVICES } from "@/lib/services-data";
import { breadcrumb, pageHead } from "@/lib/seo";

const title = "Travel Services | Car, Taxi, Auto & Outstation Trips – CAR & AUTO TRAVELS";
const description =
  "Car travel & taxi, auto travel, pickup & drop and long-distance trips from Madugula, Anakapalli & Visakhapatnam. Book by call or WhatsApp: 9000728564.";

export const Route = createFileRoute("/services/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead("/services", title, description, {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ItemList",
          name: "Travel services",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            url: `https://carautotravels.lovable.app/services/${s.slug}`,
          })),
        },
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
      ],
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main>
      <section className="bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Our Travel Services
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Choose a service to see what we provide, where we go and how to book.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col rounded-3xl bg-background p-6 shadow-card transition-transform hover:-translate-y-0.5"
              >
                <h2 className="text-lg font-bold text-navy">{s.name}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View details <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Quick answers
          </h2>
          <div className="mt-6">
            <FaqList items={FAQS.slice(0, 5)} />
          </div>
          <Link to="/faq" className="mt-4 inline-block text-sm font-semibold text-primary underline">
            View all FAQs
          </Link>
        </div>
      </section>
    </main>
  );
}
