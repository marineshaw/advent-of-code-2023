import { describe, expect, it } from "vitest";
import {
  computeGamePower,
  isGamePossible,
  sumOfAllPossibleGames,
  sumOfAllPowers,
} from "./src";
import { getLinesOfFile } from "../shared/getLinesFromFile";

describe("dayTwo", () => {
  it("should say the game would have been possible", () => {
    const isPossible = isGamePossible(
      "3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"
    );

    expect(isPossible).toBeTruthy();
  });

  it("should say the game would not have been possible", () => {
    const isPossible = isGamePossible(
      "8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red"
    );

    expect(isPossible).toBeFalsy();
  });

  it("should return the sum of all possible games", () => {
    const sum = sumOfAllPossibleGames([
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    ]);
    expect(sum).toBe(3);
  });

  it("should return the sum of all possible games", () => {
    const sum = sumOfAllPossibleGames([
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green,  1 red",
      "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
      "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
    ]);
    expect(sum).toBe(8);
  });

  it("should show result", async () => {
    const lines = await getLinesOfFile("./src/dayTwo/input.txt");
    const sum = sumOfAllPossibleGames(lines);
    console.log(sum);
  });

  it("should compute game power", () => {
    const power = computeGamePower(
      "3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"
    );
    expect(power).toBe(48);
  });

  it("should compute game power for multiple lines", () => {
    const totalPower = sumOfAllPowers([
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
      "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
      "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
    ]);

    expect(totalPower).toBe(2286);
  });

  it("should show second result", async () => {
    const lines = await getLinesOfFile("./src/dayTwo/inputTwo.txt");
    const sum = sumOfAllPowers(lines);
    console.log(sum);
  });
});
