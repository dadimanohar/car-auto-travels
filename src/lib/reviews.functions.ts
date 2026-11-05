import { createClient } from "@supabase/supabase-js";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const reviewSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  rating: z.number().int().min(1, "Please choose a star rating").max(5),
  comment: z
    .string()
    .trim()
    .min(5, "Please write a few words about your trip")
    .max(1000, "Please keep your review under 1000 characters"),
});

export type ReviewInput = z.infer<typeof reviewSchema>;

export interface ReviewDto {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

function createPublicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
    // Opaque sb_ keys aren't JWTs; send only apikey, not the default Authorization bearer.
    global: {
      fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (
          key.startsWith("sb_") &&
          headers.get("Authorization") === `Bearer ${key}`
        ) {
          headers.delete("Authorization");
        }
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      },
    },
  });
}

export const listReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<ReviewDto[]> => {
    try {
      const supabasePublic = createPublicClient();
      const { data, error } = await supabasePublic
        .from("reviews")
        .select("id, name, rating, comment, created_at")
        .order("created_at", { ascending: false })
        .limit(200);
      if (error || !data) {
        console.error("listReviews failed:", error?.message);
        return [];
      }
      return data.map((review) => ({
        id: review.id,
        name: review.name,
        rating: review.rating,
        comment: review.comment,
        createdAt: review.created_at,
      }));
    } catch (error) {
      console.error("listReviews failed:", error);
      return [];
    }
  },
);

export const submitReview = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => reviewSchema.parse(data))
  .handler(async ({ data }): Promise<{ ok: boolean }> => {
    try {
      const supabasePublic = createPublicClient();
      const { error } = await supabasePublic.from("reviews").insert({
        name: data.name,
        rating: data.rating,
        comment: data.comment,
      });
      if (error) {
        console.error("submitReview failed:", error.message);
        return { ok: false };
      }
      return { ok: true };
    } catch (error) {
      console.error("submitReview failed:", error);
      return { ok: false };
    }
  });
