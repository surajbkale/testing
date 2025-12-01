import { describe, expect, it, test } from "@jest/globals";
import { multiply, sum } from "../index.js";

describe("sum module", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("adds -1 + -2 to equal -3", () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});

describe("multiply module", () => {
  it("multiplys 2 * 4 to equal 8", () => {
    expect(multiply(2, 4)).toBe(8);
  });
});
