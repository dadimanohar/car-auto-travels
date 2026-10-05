import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { PHONE_TEL, WHATSAPP } from "@/lib/business";

const travelTypes = [
  "Local Travel",
  "Pickup & Drop",
  "Car Travel",
  "Auto Travel",
  "Long-Distance Trip",
  "Other",
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  pickup: z.string().trim().min(2, "Please enter your pickup location").max(120),
  drop: z.string().trim().min(2, "Please enter your drop location").max(120),
  date: z.string().trim().max(20).optional(),
  travelType: z.enum(travelTypes),
  message: z.string().trim().max(600).optional(),
});

type FormValues = z.infer<typeof schema>;

const field =
  "mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-base text-navy outline-none focus:border-primary focus:ring-2 focus:ring-primary/30";
const label = "block text-sm font-semibold text-navy";

export function ContactForm() {
  const [sent, setSent] = useState<FormValues | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { travelType: "Local Travel" },
  });

  const whatsappLink = (v: FormValues) =>
    `https://wa.me/${WHATSAPP}?text=` +
    encodeURIComponent(
      [
        "Hello CAR & AUTO TRAVELS,",
        "",
        `Name: ${v.name}`,
        `Phone: ${v.phone}`,
        `Pickup: ${v.pickup}`,
        `Drop: ${v.drop}`,
        `Date: ${v.date || "-"}`,
        `Travel Type: ${v.travelType}`,
        `Message: ${v.message || "-"}`,
      ].join("\n"),
    );

  if (sent) {
    return (
      <div className="rounded-3xl bg-background p-8 shadow-card" role="status">
        <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy">
          Trip details ready
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Your trip details are prepared. Please call us or send them on WhatsApp so the
          owner can confirm availability and fare with you.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground hover:bg-primary/90"
          >
            <Phone className="size-4" aria-hidden="true" />
            CALL NOW 9000728564
          </a>
          <a
            href={whatsappLink(sent)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 px-6 py-4 text-sm font-bold text-navy hover:border-primary hover:text-primary"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            SEND ON WHATSAPP
          </a>
        </div>
        <button
          type="button"
          onClick={() => setSent(null)}
          className="mt-6 text-sm font-semibold text-primary underline"
        >
          Request another trip
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit((v) => setSent(v))}
      className="rounded-3xl bg-background p-6 shadow-card sm:p-8"
    >
      <h2 className="text-2xl font-extrabold tracking-tight text-navy">Request a Trip</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Full Name *
          </label>
          <input id="name" className={field} autoComplete="name" {...register("name")} />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            className={field}
            autoComplete="tel"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className={label} htmlFor="pickup">
            Pickup Location *
          </label>
          <input id="pickup" className={field} {...register("pickup")} />
          {errors.pickup && (
            <p className="mt-1 text-sm text-destructive">{errors.pickup.message}</p>
          )}
        </div>
        <div>
          <label className={label} htmlFor="drop">
            Drop Location *
          </label>
          <input id="drop" className={field} {...register("drop")} />
          {errors.drop && (
            <p className="mt-1 text-sm text-destructive">{errors.drop.message}</p>
          )}
        </div>
        <div>
          <label className={label} htmlFor="date">
            Travel Date
          </label>
          <input id="date" type="date" className={field} {...register("date")} />
        </div>
        <div>
          <label className={label} htmlFor="travelType">
            Travel Type *
          </label>
          <select id="travelType" className={field} {...register("travelType")}>
            {travelTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="message">
            Destination / Message
          </label>
          <textarea id="message" rows={4} className={field} {...register("message")} />
        </div>
      </div>
      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none sm:w-auto"
      >
        REQUEST A TRIP
      </button>
    </form>
  );
}
