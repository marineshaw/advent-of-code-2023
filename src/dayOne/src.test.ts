import { describe, expect, it } from "vitest";
import { compute, computeInput, computeInputTwo, useDigits } from "./src";

describe("test", () => {
  it("should return 12", () => {
    const result = compute(["1abc2"]);

    expect(result).toBe(12);
  });

  it("should return 142", () => {
    const result = compute([
      "1abc2",
      "pqr3stu8vwx",
      "a1b2c3d4e5f",
      "treb7uchet",
    ]);

    expect(result).toBe(142);
  });

  it("show result", async () => {
    const result = await computeInput();
    console.log(result);
  });

  it("should replace all numbers text with digits", () => {
    const resultWithDigits = useDigits("two1nine");
    expect(resultWithDigits).toBe("219");
  });

  it("show result for second input", async () => {
    const result = await computeInputTwo();
    console.log(result);
  });
});
