import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { SERVICES } from "@/lib/services-data";
import { breadcrumb, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    const service = SERVICES.find((s) => s.slug === loaderData?.slug);
    if (!service)
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    const path = `/services/${service.slug}`;
    return pageHead(path, service.metaTitle, service.metaDescription, {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: service.name,
          description: service.tagline,
          serviceType: service.name,
          provider: { "@id": "https://carautotravels.lovable.app/#business" },
          areaServed: "Andhra Pradesh, India",
        },
        {
          "@type": "FAQPage",
          mainEntity: service.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path },
        ]),
      ],
    });
  },
  component: ServicePage,
  notFoundComponent: () => (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-2xl font-bold text-navy">Service not found</h1>
      <Link to="/services" className="mt-4 inline-block font-semibold text-primary underline">
        See all services
      </Link>
    </main>
  ),
  errorComponent: () => (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-2xl font-bold text-navy">This page didn't load</h1>
    </main>
  ),
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const service = SERVICES.find((s) => s.slug === slug)!;
  return <ServiceDetail service={service} />;
}
