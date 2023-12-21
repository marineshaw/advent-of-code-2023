import { describe, expect, it } from "vitest";
import {
  computeLeastCommonMultipleList,
  countStepToArrival,
  countStepsToArrivalForGhosts,
  formatInput,
} from "./src";
import { getLinesOfFile } from "../shared/getLinesFromFile";

describe("dayEight", () => {
  it("should format input", () => {
    const res = formatInput([
      "LLR",
      "",
      "AAA = (BBB, BBB)",
      "BBB = (AAA, ZZZ)",
      "ZZZ = (ZZZ, ZZZ)",
    ]);

    expect(res).toMatchObject({
      instructions: "LLR",
      maps: [
        ["AAA", "BBB", "BBB"],
        ["BBB", "AAA", "ZZZ"],
        ["ZZZ", "ZZZ", "ZZZ"],
      ],
    });
  });

  it("should format input with special words", () => {
    const res = formatInput([
      "LLR",
      "",
      "AAA = (Export business, BBB)",
      "BBB = (AAA, ZZZ)",
      "Export business = (AAA, ZZZ)",
      "ZZZ = (ZZZ, ZZZ)",
    ]);

    expect(res).toMatchObject({
      instructions: "LLR",
      maps: [
        ["AAA", "Export business", "BBB"],
        ["BBB", "AAA", "ZZZ"],
        ["Export business", "AAA", "ZZZ"],
        ["ZZZ", "ZZZ", "ZZZ"],
      ],
    });
  });

  it("should count step to arrival for first input test", async () => {
    const inputLines = await getLinesOfFile("./src/dayEight/inputTest1.txt");
    const input = formatInput(inputLines);
    const stepsToArrival = countStepToArrival({
      input,
      departure: "AAA",
      arrival: "ZZZ",
    });

    expect(stepsToArrival).toBe(2);
  });

  it("should count step to arrival for second input test", async () => {
    const inputLines = await getLinesOfFile("./src/dayEight/inputTest2.txt");
    const input = formatInput(inputLines);
    const stepsToArrival = countStepToArrival({
      input,
      departure: "AAA",
      arrival: "ZZZ",
    });

    expect(stepsToArrival).toBe(6);
  });

  it("should count step to arrival for main input and log it", async () => {
    const inputLines = await getLinesOfFile("./src/dayEight/input.txt");
    const input = formatInput(inputLines);
    const stepsToArrival = countStepToArrival({
      input,
      departure: "AAA",
      arrival: "ZZZ",
    });

    console.log(stepsToArrival);
  });

  it("should compute least common multiple for a list of numbers", () => {
    const res = computeLeastCommonMultipleList([2, 3, 4, 6]);

    expect(res).toBe(12);
  });

  it("should count steps to arrival for ghosts in inputTest", async () => {
    const inputLines = await getLinesOfFile("./src/dayEight/inputTest3.txt");
    const input = formatInput(inputLines);
    const stepsToArrival = countStepsToArrivalForGhosts(input);

    expect(stepsToArrival).toBe(6);
  });

  it("should count step to arrival for main input and for ghosts and log it", async () => {
    const inputLines = await getLinesOfFile("./src/dayEight/input.txt");
    const input = formatInput(inputLines);
    const stepsToArrival = countStepsToArrivalForGhosts(input);

    console.log(stepsToArrival);
  });
});
