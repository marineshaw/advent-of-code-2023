import { describe, expect, it } from "vitest";
import {
  computeNextSequence,
  computeSumOfBackwardHistory,
  computeSumOfHistory,
  determineBackwardHistory,
  determineHistory,
} from "./src";
import { getLinesOfFile } from "../shared/getLinesFromFile";

describe("dayNine", () => {
  it("should compute next sequence", () => {
    const nextSequence = computeNextSequence([0, 3, 6, 9, 12, 15]);

    expect(nextSequence).toEqual([3, 3, 3, 3, 3]);
  });

  it("should determine history", () => {
    const nextSequence = determineHistory([0, 3, 6, 9, 12, 15]);

    expect(nextSequence).toEqual(18);
  });

  it("should sum all history for test input", async () => {
    const input = await getLinesOfFile("./src/dayNine/inputTest.txt");
    const sumOfHistory = computeSumOfHistory(input);

    expect(sumOfHistory).toEqual(114);
  });

  it("should log sum all history for main input", async () => {
    const input = await getLinesOfFile("./src/dayNine/input.txt");
    const sumOfHistory = computeSumOfHistory(input);

    console.log(sumOfHistory);
  });

  it("should determine history but backwards", () => {
    const nextSequence = determineBackwardHistory([10, 13, 16, 21, 30, 45]);

    expect(nextSequence).toEqual(5);
  });

  it("should log sum all history for main input but backwards", async () => {
    const input = await getLinesOfFile("./src/dayNine/input.txt");
    const sumOfHistory = computeSumOfBackwardHistory(input);

    console.log(sumOfHistory);
  });
});
