import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/faq-data";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-border overflow-hidden rounded-3xl bg-background shadow-card">
      {items.map((faq) => (
        <details key={faq.q} className="group px-5 py-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-bold text-navy [&::-webkit-details-marker]:hidden sm:text-base">
            {faq.q}
            <ChevronDown
              className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  );
}
