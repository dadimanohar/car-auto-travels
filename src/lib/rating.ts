/** Average of 1–5 star ratings, rounded to one decimal; 0 when there are none. */
export function averageRating(ratings: number[]): number {
  if (ratings.length === 0) return 0;
  const sum = ratings.reduce((total, r) => total + r, 0);
  return Math.round((sum / ratings.length) * 10) / 10;
}
