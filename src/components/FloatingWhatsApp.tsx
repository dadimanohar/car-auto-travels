import whatsappLogo from "@/assets/whatsapp-logo.png";
import { WHATSAPP } from "@/lib/business";

const message = encodeURIComponent(
  "Hello CAR & AUTO TRAVELS, I would like to ask about a trip.",
);

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CAR & AUTO TRAVELS on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed right-4 bottom-24 z-40 grid size-14 place-items-center rounded-full bg-background p-1.5 shadow-card ring-1 ring-border transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none md:right-6 md:bottom-6 md:size-16"
    >
      <img src={whatsappLogo} alt="" className="size-full object-contain" aria-hidden="true" />
    </a>
  );
}