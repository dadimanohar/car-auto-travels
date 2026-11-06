import { createFileRoute, Link } from "@tanstack/react-router";
import { FaqList } from "@/components/FaqList";
import { FAQS } from "@/lib/faq-data";
import { SERVICES } from "@/lib/services-data";
import { breadcrumb, pageHead } from "@/lib/seo";

const title = "FAQ | Booking, Fares & Areas – CAR & AUTO TRAVELS";
const description =
  "Quick answers about booking, fares, vehicles and areas served by CAR & AUTO TRAVELS in Madugula, Anakapalli & Visakhapatnam.";

export const Route = createFileRoute("/faq")({
  staticData: { sitemap: true },
  head: () =>
    pageHead("/faq", title, description, {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]),
      ],
    }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main className="bg-surface py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Quick answers about booking and travelling with us.
        </p>
        <div className="mt-8">
          <FaqList items={FAQS} />
        </div>
        <div className="mt-8 flex flex-wrap gap-2 text-sm">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="rounded-full border border-navy/15 px-4 py-2 font-semibold text-navy hover:text-primary"
            >
              {s.name}
            </Link>
          ))}
          <Link to="/contact" className="rounded-full border border-navy/15 px-4 py-2 font-semibold text-navy hover:text-primary">
            Request a trip
          </Link>
        </div>
      </div>
    </main>
  );
}
