import { Phone } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/lib/business";

type Props = {
  label?: string;
  className?: string;
  showNumber?: boolean;
};

export function CallButton({
  label = "CALL NOW",
  className = "",
  showNumber = true,
}: Props) {
  return (
    <a
      href={PHONE_TEL}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground shadow-card transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none ${className}`}
    >
      <Phone className="size-4 shrink-0" aria-hidden="true" />
      <span>
        {label}
        {showNumber ? ` ${PHONE}` : ""}
      </span>
    </a>
  );
}
