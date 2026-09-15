import { Phone } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/lib/business";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <a
        href={PHONE_TEL}
        className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-bold text-primary-foreground"
      >
        <Phone className="size-5" aria-hidden="true" />
        CALL NOW — {PHONE}
      </a>
    </div>
  );
}
