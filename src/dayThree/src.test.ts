import { describe, it, expect } from "vitest";
import {
  getFullNumberFromIndex,
  getPartNumbersSum,
  isCloseToSymbol,
} from "./src";

describe("dayThree", () => {
  it("should return 0 when no symbols", () => {
    const result = getPartNumbersSum(["467..114.."]);
    expect(result).toBe(0);
  });

  it("should return the adjacent number when one symbol", () => {
    const result = getPartNumbersSum(["467..114..", "...*......"]);
    expect(result).toBe(467);
  });

  it("should say there is no symbol", () => {
    const result = isCloseToSymbol(["...", ".1.", "..."]);
    expect(result).toBe(false);
  });

  it("should say there is a symbol", () => {
    const result = isCloseToSymbol(["..*", ".1.", "..."]);
    expect(result).toBe(true);
  });
  it("should say there is a symbol with smaller input", () => {
    const result = isCloseToSymbol([".*", ".1", ".*"]);
    expect(result).toBe(true);
  });

  it("should say there is no symbol when there is only a digit", () => {
    const result = isCloseToSymbol(["..2", ".1.", "..."]);
    expect(result).toBe(false);
  });

  it("should give 1 as number", () => {
    const result = getFullNumberFromIndex("1", 0);
    expect(result).toBe(1);
  });

  it("should give 467 as number", () => {
    const result = getFullNumberFromIndex("467", 2);
    expect(result).toBe(467);
  });
  it("should give 467 as number but when in dots", () => {
    const result = getFullNumberFromIndex("....467...", 5);
    expect(result).toBe(467);
  });

  it("should give 467 as number but when after another number", () => {
    const result = getFullNumberFromIndex(".23...467...", 5);
    expect(result).toBe(467);
  });

  it("should give 467 as number but when after another number really close", () => {
    const result = getFullNumberFromIndex(".23.467...", 4);
    expect(result).toBe(467);
  });
});
