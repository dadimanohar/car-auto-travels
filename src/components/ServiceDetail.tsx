import { Link } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { FaqList } from "@/components/FaqList";
import autoPhoto from "@/assets/auto.asset.json";
import carFront from "@/assets/swift-dzire-front.jpg.asset.json";
import carRear from "@/assets/swift-dzire-rear.jpg.asset.json";
import carSide from "@/assets/swift-dzire-side.jpg.asset.json";
import { PHONE, PHONE_TEL, WHATSAPP } from "@/lib/business";
import { SERVICES, type ServiceInfo } from "@/lib/services-data";

const ctaButton =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none";
const relatedLink =
  "rounded-full border border-navy/15 px-4 py-2 text-xs font-semibold text-navy transition-colors hover:border-primary hover:text-primary sm:text-sm";

export function ServiceDetail({ service }: { service: ServiceInfo }) {
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  const isAuto = service.vehicle === "auto";
  const whatsappLink =
    `https://wa.me/${WHATSAPP}?text=` +
    encodeURIComponent(
      `Hello CAR & AUTO TRAVELS, I would like to enquire about: ${service.name}.`,
    );

  return (
    <main>
      <section className="bg-background py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground sm:text-sm">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-navy">
                {service.name}
              </li>
            </ol>
          </nav>

          <div className="mt-7 grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                CAR &amp; AUTO TRAVELS
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                {service.name}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                {service.tagline}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PHONE_TEL}
                  className={`${ctaButton} bg-primary text-primary-foreground hover:bg-primary/90`}
                >
                  <Phone className="size-4" aria-hidden="true" />
                  CALL {PHONE}
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ctaButton} border border-border bg-background text-navy hover:border-primary hover:text-primary`}
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WHATSAPP US
                </a>
              </div>
            </div>

            <div className="min-w-0">
              <img
                src={isAuto ? autoPhoto.url : carFront.url}
                alt={isAuto ? "Yellow auto rickshaw used for local auto travel" : "White Swift Dzire used for car and taxi travel"}
                className="aspect-[16/10] w-full rounded-md object-cover"
                fetchPriority="high"
              />
              {!isAuto && (
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <img src={carSide.url} alt="Side view of the white Swift Dzire" className="h-24 w-full rounded-md object-cover sm:h-28" loading="lazy" />
                  <img src={carRear.url} alt="Rear view of the white Swift Dzire" className="h-24 w-full rounded-md object-cover sm:h-28" loading="lazy" />
                </div>
              )}
              <p className="mt-2 text-xs font-semibold text-muted-foreground">
                {isAuto ? "Local journeys in our auto" : "Our Swift Dzire for car and taxi journeys"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl bg-background p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
              What we provide
            </h2>
            <ul className="mt-5 space-y-3">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-muted-foreground sm:text-base">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>

            {service.places && (
              <>
                <h3 className="mt-8 text-sm font-bold tracking-[0.16em] text-navy">
                  POPULAR DESTINATIONS
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.places.map((place) => (
                    <li
                      key={place}
                      className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-primary sm:text-sm"
                    >
                      {place}
                    </li>
                  ))}
                  <li className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-primary sm:text-sm">
                    Other destinations on request
                  </li>
                </ul>
              </>
            )}

            <p className="mt-8 text-sm text-muted-foreground">
              Fares are agreed by phone before travel — they are not published
              online. Bookings are confirmed by call or WhatsApp only.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Quick answers
          </h2>
          <div className="mt-6">
            <FaqList items={service.faqs} />
          </div>
          <Link
            to="/faq"
            className="mt-4 inline-block text-sm font-semibold text-primary underline"
          >
            View all FAQs
          </Link>
        </div>
      </section>

      <section className="bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-sm font-bold tracking-[0.16em] text-navy">
            EXPLORE MORE
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                to="/services/$slug"
                params={{ slug: other.slug }}
                className={relatedLink}
              >
                {other.name}
              </Link>
            ))}
            <Link to="/areas" className={relatedLink}>
              Areas we serve
            </Link>
            <Link to="/reviews" className={relatedLink}>
              Customer reviews
            </Link>
            <Link to="/contact" className={relatedLink}>
              Request a trip
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
