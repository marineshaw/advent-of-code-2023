import { describe, expect, it } from "vitest";
import { computeOneLineScore, computeTotalScore } from "./src";
import { getLinesOfFile } from "../shared/getLinesFromFile";

describe("dayFour", () => {
  it("should return 0 when no number are winning", () => {
    const res = computeOneLineScore("11 12 13 14 15 | 83 86  6 31 17  9 48 53");

    expect(res).toBe(0);
  });

  it("should return 1 when one number is a winning one", () => {
    const res = computeOneLineScore("11 12 83 14 15 | 83 86  6 31 17  9 48 53");

    expect(res).toBe(1);
  });

  it("should return 2 when two numbers are winning ones", () => {
    const res = computeOneLineScore(" 1 12 83 14 15 | 83 86  6 31  1  9 48 53");

    expect(res).toBe(2);
  });

  it("should return 8 when five numbers are winning ones", () => {
    const res = computeOneLineScore("41 48 83 86 17 | 83 86  6 31 17  9 48 53");

    expect(res).toBe(8);
  });

  it("should return 13 for example input", () => {
    const res = computeTotalScore([
      "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
      "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
      "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
      "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
      "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
      "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
    ]);

    expect(res).toBe(13);
  });

  it("should show result", async () => {
    const lines = await getLinesOfFile("./src/dayFour/input.txt");
    const result = computeTotalScore(lines);

    console.log({ result });
  });
});
