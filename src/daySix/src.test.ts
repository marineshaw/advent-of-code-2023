import { describe, expect, it } from "vitest";
import { computeCompetitionScore, computeWinningRaces } from "./src";

describe("daySix", () => {
  it("should return 4 for first race", () => {
    const res = computeWinningRaces({ time: 7, record: 9 });

    expect(res).toBe(4);
  });

  it("should return 8 for first race", () => {
    const res = computeWinningRaces({ time: 15, record: 40 });

    expect(res).toBe(8);
  });

  it("should return 288 for first competition", () => {
    const res = computeCompetitionScore([
      "Time:      7  15   30",
      "Distance:  9  40  200",
    ]);

    expect(res).toBe(288);
  });

  it("should show result", () => {
    const res = computeCompetitionScore([
      "Time:        49     78     79     80",
      "Distance:   298   1185   1066   1181",
    ]);
    console.log({ res });
  });

  it("should show result with good kerning", () => {
    const res = computeCompetitionScore([
      "Time:        49787980",
      "Distance:   298118510661181",
    ]);
    console.log({ res });
  });
});
