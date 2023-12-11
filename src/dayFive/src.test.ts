import { describe, expect, it } from "vitest";
import {
  Input,
  computeMinLocation,
  computeOneStep,
  constructInput,
} from "./src";
import { getLinesOfFile } from "../shared/getLinesFromFile";

describe("dayFive", () => {
  it("should return same number when not in ranges", () => {
    const nextMap = [
      [50, 98, 2],
      [52, 50, 48],
    ];
    const nextStep = computeOneStep({ previousStep: 14, nextMap });

    expect(nextStep).toBe(14);
  });

  it("should return corresponding number when in ranges", () => {
    const nextMap = [
      [50, 98, 2],
      [52, 50, 48],
    ];
    const nextStep = computeOneStep({ previousStep: 51, nextMap });

    expect(nextStep).toBe(53);
  });
  it("should return corresponding number when in ranges", () => {
    const nextMap = [
      [50, 98, 2],
      [52, 50, 48],
    ];
    const nextStep = computeOneStep({ previousStep: 79, nextMap });

    expect(nextStep).toBe(81);
  });
  it("should return corresponding number when in ranges", () => {
    const nextMap = [
      [50, 98, 2],
      [52, 50, 48],
    ];
    const nextStep = computeOneStep({ previousStep: 98, nextMap });

    expect(nextStep).toBe(50);
  });

  it("should construct input for one step", () => {
    const res = constructInput([
      "seeds: 79 14 55 13",
      "",
      "seed-to-soil map:",
      "50 98 2",
      "52 50 48",
    ]);
    const expectedRes: Input = {
      seeds: [79, 14, 55, 13],
      steps: [
        {
          name: "seed-to-soil",
          mapping: [
            [50, 98, 2],
            [52, 50, 48],
          ],
        },
      ],
    };
    expect(res).toEqual(expectedRes);
  });

  it("should construct input", () => {
    const res = constructInput([
      "seeds: 79 14 55 13",
      "",
      "seed-to-soil map:",
      "50 98 2",
      "52 50 48",
      "",
      "soil-to-fertilizer map:",
      "0 15 37",
      "37 52 2",
      "39 0 15",
      "",
      "fertilizer-to-water map:",
      "49 53 8",
      "0 11 42",
      "42 0 7",
      "57 7 4",
    ]);

    const expectedRes: Input = {
      seeds: [79, 14, 55, 13],
      steps: [
        {
          name: "seed-to-soil",
          mapping: [
            [50, 98, 2],
            [52, 50, 48],
          ],
        },
        {
          name: "soil-to-fertilizer",
          mapping: [
            [0, 15, 37],
            [37, 52, 2],
            [39, 0, 15],
          ],
        },
        {
          name: "fertilizer-to-water",
          mapping: [
            [49, 53, 8],
            [0, 11, 42],
            [42, 0, 7],
            [57, 7, 4],
          ],
        },
      ],
    };
    expect(res).toEqual(expectedRes);
  });

  it("should return 35", async () => {
    const rawInput = await getLinesOfFile("./src/dayFive/inputTest.txt");
    const input = constructInput(rawInput);

    const res = computeMinLocation(input);
    expect(res).toBe(35);
  });

  it("should display result", async () => {
    const rawInput = await getLinesOfFile("./src/dayFive/input.txt");
    const input = constructInput(rawInput);

    const res = computeMinLocation(input);
    console.log(res);
  });
});
