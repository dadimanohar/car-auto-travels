import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const tripSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().regex(/^[0-9+\s-]{10,15}$/),
  pickup: z.string().trim().min(2).max(120),
  drop: z.string().trim().min(2).max(120),
  date: z.string().trim().max(20).optional(),
  travelType: z.string().trim().min(2).max(40),
  message: z.string().trim().max(600).optional(),
});

export type TripRequestInput = z.infer<typeof tripSchema>;

export type TripSendResult = { ok: boolean; reason?: string };

// Sends validated trip requests to the owner's email through Web3Forms.
// The access key lives only in server code as an environment secret.
export const sendTripRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => tripSchema.parse(data))
  .handler(async ({ data }): Promise<TripSendResult> => {
    const accessKey = process.env["WEB3FORMS_ACCESS_KEY"];
    if (!accessKey) return { ok: false, reason: "not_configured" };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New trip request — ${data.name} (${data.phone})`,
          from_name: "CAR & AUTO TRAVELS website",
          name: data.name,
          phone: data.phone,
          pickup: data.pickup,
          drop: data.drop,
          travel_date: data.date || "-",
          travel_type: data.travelType,
          message: data.message || "-",
        }),
      });

      if (!response.ok) {
        console.error("Web3Forms request failed:", response.status);
        return { ok: false, reason: "send_failed" };
      }

      const result = (await response.json()) as { success?: boolean };
      return result.success === true
        ? { ok: true }
        : { ok: false, reason: "rejected" };
    } catch (error) {
      console.error("Web3Forms request failed:", error);
      return { ok: false, reason: "send_failed" };
    }
  });
