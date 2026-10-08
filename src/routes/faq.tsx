import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const title = "FAQ | Car & Auto Travels";
const description = "Frequently asked questions about our car travel, auto travel, local taxi, and outstation pickup/drop services in Visakhapatnam, Anakapalli, and nearby areas.";
const pageUrl = "https://carautotravels.lovable.app/faq";

const faqs = [
  {
    category: "General Services",
    questions: [
      {
        q: "What services does Car & Auto Travels provide?",
        a: "We provide comprehensive local car and auto travel, reliable pickup and drop services, one-way trips, and long-distance outstation travel."
      },
      {
        q: "Do you provide local car travel?",
        a: "Yes, we provide comfortable local car travel services across Visakhapatnam, Anakapalli, Madugula, and surrounding areas."
      },
      {
        q: "Do you provide auto travel?",
        a: "Yes, we offer auto travel specifically for quick, local pickup and drop journeys in our primary service areas."
      },
      {
        q: "Do you provide long-distance and outstation trips?",
        a: "Yes, we offer long-distance car travel to popular destinations like Tirupati, Annavaram, Kakinada, and other outstation locations upon request."
      },
      {
        q: "Can I book a car for a one-way trip?",
        a: "Yes, one-way trips are available. Please contact us for details and availability."
      }
    ]
  },
  {
    category: "Service Areas",
    questions: [
      {
        q: "Which areas does Car & Auto Travels serve?",
        a: "We serve Visakhapatnam, Anakapalli, Kakinada, Madugula, Narsipatnam, Chodavaram, Annavaram, Tirupati, and nearby areas."
      },
      {
        q: "Can I book travel to Annavaram or Tirupati?",
        a: "Absolutely. We regularly provide long-distance outstation travel to Annavaram, Tirupati, and other major destinations."
      }
    ]
  },
  {
    category: "Booking",
    questions: [
      {
        q: "How can I book a trip?",
        a: "You can easily book a trip by calling us or sending a message on WhatsApp at 9000728564."
      },
      {
        q: "Can I ask for a customized travel route?",
        a: "Yes, we accommodate customized travel routes for long-distance journeys. Please contact us to discuss your specific requirements."
      }
    ]
  }
];

// Flatten for schema
const allQuestions = faqs.flatMap(c => c.questions);

export const Route = createFileRoute("/faq")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary" },
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
              "@type": "FAQPage",
              "@id": `${pageUrl}#faq`,
              name: title,
              description,
              isPartOf: { "@id": "https://carautotravels.lovable.app/#website" },
              about: { "@id": "https://carautotravels.lovable.app/#business" },
              mainEntity: allQuestions.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a
                }
              }))
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://carautotravels.lovable.app/"
                },
                { "@type": "ListItem", position: 2, name: "FAQ", item: pageUrl }
              ]
            }
          ]
        })
      }
    ]
  }),
  component: FAQPage
});

function FAQPage() {
  return (
    <main className="bg-surface min-h-screen py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl text-center">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-center text-base text-muted-foreground">
          Find answers about our local taxi, car, and auto travel services.
        </p>
        
        <div className="mt-12 space-y-10">
          {faqs.map((section, idx) => (
            <section key={section.category} className="rounded-3xl bg-background p-6 md:p-10 shadow-card">
              <h2 className="text-xl font-bold text-navy mb-6">{section.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((faq, i) => (
                  <AccordionItem key={i} value={`${idx}-${i}`}>
                    <AccordionTrigger className="text-base text-navy font-semibold text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
