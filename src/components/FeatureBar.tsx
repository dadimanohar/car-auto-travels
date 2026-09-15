import { Car, MapPin, MoveVertical } from "lucide-react";

const features = [
  { icon: Car, label: "CAR + AUTO AVAILABLE" },
  { icon: MapPin, label: "LOCAL & LONG-DISTANCE TRAVEL" },
  { icon: MoveVertical, label: "PICKUP & DROP SERVICES" },
];

export function FeatureBar() {
  return (
    <div className="relative z-10 mx-auto -mt-16 max-w-6xl px-4 sm:px-6">
      <ul className="grid gap-4 rounded-3xl bg-background p-5 shadow-card sm:grid-cols-3 sm:gap-2 sm:p-6">
        {features.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-3 sm:flex-col sm:text-center">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent text-primary">
              <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="min-w-0 text-sm font-bold tracking-wide text-navy">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
