import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Star } from "lucide-react";
import { listReviews, submitReview } from "@/lib/reviews.functions";
import { averageRating } from "@/lib/rating";
import { breadcrumb, pageHead } from "@/lib/seo";

const reviewsQuery = queryOptions({ queryKey: ["reviews"], queryFn: () => listReviews() });

const title = "Customer Reviews | CAR & AUTO TRAVELS";
const description =
  "Read reviews from travellers and share your own experience with CAR & AUTO TRAVELS taxi and auto service in Madugula, Anakapalli & Visakhapatnam.";

export const Route = createFileRoute("/reviews")({
  staticData: { sitemap: true },
  loader: ({ context }) => context.queryClient.ensureQueryData(reviewsQuery),
  head: () =>
    pageHead("/reviews", title, description, {
      "@context": "https://schema.org",
      ...breadcrumb([
        { name: "Home", path: "/" },
        { name: "Reviews", path: "/reviews" },
      ]),
    }),
  component: ReviewsPage,
  errorComponent: () => (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-2xl font-bold text-navy">Reviews couldn't load</h1>
    </main>
  ),
  notFoundComponent: () => <main className="p-20 text-center">Not found</main>,
});

function Stars({ value, size = "size-5" }: { value: number; size?: string }) {
  return (
    <span className="inline-flex" aria-label={`${value.toFixed(1)} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`${size} ${n <= Math.round(value) ? "fill-primary text-primary" : "text-border"}`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

function ReviewsPage() {
  const { data: reviews } = useSuspenseQuery(reviewsQuery);
  const avg = averageRating(reviews.map((r) => r.rating));

  return (
    <main className="bg-surface py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Customer Reviews
        </h1>

        <div className="mt-6 rounded-3xl bg-background p-6 shadow-card">
          {reviews.length > 0 ? (
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-4xl font-extrabold text-navy">{avg.toFixed(1)}</span>
              <div>
                <Stars value={avg} size="size-6" />
                <p className="mt-1 text-sm text-muted-foreground">
                  Based on {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              No reviews yet. Be the first to share your trip experience.
            </p>
          )}
        </div>

        <ReviewForm />

        <ul className="mt-10 space-y-4">
          {reviews.map((r) => (
            <li key={r.id} className="rounded-3xl bg-background p-6 shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-bold text-navy">{r.name}</p>
                <Stars value={r.rating} size="size-4" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground whitespace-pre-line">{r.comment}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                {new Date(r.createdAt).toLocaleDateString("en-IN", { dateStyle: "medium" })}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-muted-foreground">
          Planning a trip? See our{" "}
          <Link to="/services" className="font-semibold text-primary underline">services</Link> or{" "}
          <Link to="/contact" className="font-semibold text-primary underline">request a trip</Link>.
        </p>
      </div>
    </main>
  );
}

const field =
  "mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-navy outline-none focus:border-primary focus:ring-2 focus:ring-primary/30";

function ReviewForm() {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (name.trim().length < 2) return setError("Please enter your name.");
    if (rating < 1) return setError("Please choose a star rating.");
    if (comment.trim().length < 5) return setError("Please write a few words about your trip.");
    setBusy(true);
    try {
      const res = await submitReview({ data: { name, rating, comment } });
      if (!res.ok) throw new Error();
      setDone(true);
      setName("");
      setRating(0);
      setComment("");
      await queryClient.invalidateQueries({ queryKey: ["reviews"] });
    } catch {
      setError("Sorry, your review couldn't be saved. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form noValidate onSubmit={onSubmit} className="mt-8 rounded-3xl bg-background p-6 shadow-card sm:p-8">
      <h2 className="text-xl font-extrabold text-navy">Write a review</h2>
      {done && (
        <p role="status" className="mt-3 text-sm font-semibold text-primary">
          Thank you! Your review has been added.
        </p>
      )}
      <label className="mt-5 block text-sm font-semibold text-navy" htmlFor="review-name">Your name *</label>
      <input id="review-name" className={field} maxLength={80} value={name} onChange={(e) => setName(e.target.value)} />
      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-navy">Your rating *</legend>
        <div className="mt-2 flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              aria-pressed={rating === n}
              onClick={() => setRating(n)}
              className="rounded-md p-1 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              <Star className={`size-8 ${n <= rating ? "fill-primary text-primary" : "text-border"}`} aria-hidden="true" />
            </button>
          ))}
        </div>
      </fieldset>
      <label className="mt-5 block text-sm font-semibold text-navy" htmlFor="review-comment">Your review *</label>
      <textarea id="review-comment" rows={4} maxLength={1000} className={field} value={comment} onChange={(e) => setComment(e.target.value)} />
      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
      <button
        type="submit"
        disabled={busy}
        className="mt-6 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
      >
        {busy ? "SUBMITTING..." : "SUBMIT REVIEW"}
      </button>
    </form>
  );
}
