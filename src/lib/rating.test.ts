import { describe, expect, it } from "vitest";
import { averageRating } from "./rating";

describe("averageRating", () => {
  it("averages all reviews automatically", () => {
    expect(averageRating([5, 4])).toBe(4.5);
  });
  it("rounds to one decimal", () => {
    expect(averageRating([5, 4, 4])).toBe(4.3);
  });
  it("is 0 with no reviews", () => {
    expect(averageRating([])).toBe(0);
  });
});
