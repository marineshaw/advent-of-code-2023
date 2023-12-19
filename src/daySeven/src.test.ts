import { describe, expect, it } from "vitest";
import {
  HandType,
  compareHands,
  computeInputScore,
  determineHandType,
} from "./src";
import { getLinesOfFile } from "../shared/getLinesFromFile";

describe("daySeven", () => {
  describe("determineHandType", () => {
    it("should say it is a five of a kind", () => {
      const type = determineHandType("AAAAA");

      expect(type).toBe(HandType.FIVE);
    });

    it("should say it is a four of a kind", () => {
      const type = determineHandType("AAAAB");

      expect(type).toBe(HandType.FOUR);
    });

    it("should say it is a three of a kind", () => {
      const type = determineHandType("CAAAB");

      expect(type).toBe(HandType.THREE);
    });

    it("should say it is a pair", () => {
      const type = determineHandType("AACDB");

      expect(type).toBe(HandType.ONE_PAIR);
    });

    it("should say it is a high", () => {
      const type = determineHandType("AECDB");

      expect(type).toBe(HandType.HIGH);
    });

    it("should say it is a two pairs", () => {
      const type = determineHandType("ABCAB");

      expect(type).toBe(HandType.TWO_PAIR);
    });

    it("should say it is a full", () => {
      const type = determineHandType("ABAAB");

      expect(type).toBe(HandType.FULL);
    });
  });

  describe("compareHands", () => {
    it("should give 1 if first hand has a greater type than second hand", () => {
      const result = compareHands({ firstHand: "ABAAB", secondHand: "ABCAB" });

      expect(result).toBe(1);
    });

    it("should give 0 if first and second hand are the same", () => {
      const result = compareHands({ firstHand: "ABAAB", secondHand: "ABAAB" });

      expect(result).toBe(0);
    });

    it("should give -1 if first hand has a lower type than second hand", () => {
      const result = compareHands({ firstHand: "ABCAB", secondHand: "ABAAB" });

      expect(result).toBe(-1);
    });

    it("should give 1 if first hand has the same type than second hand but greater first card", () => {
      const result = compareHands({ firstHand: "AA334", secondHand: "22334" });

      expect(result).toBe(1);
    });
    it("should give 1 if first hand has the same type than second hand but greater last card", () => {
      const result = compareHands({ firstHand: "AA334", secondHand: "AA332" });

      expect(result).toBe(1);
    });

    it("should give -1 if first hand is KTJJT and second hand is KK677", () => {
      const result = compareHands({ firstHand: "KTJJT", secondHand: "KK677" });

      expect(result).toBe(-1);
    });
  });

  describe("computeInputScore", () => {
    it("should give 1 if first hand has a greater type than second hand", () => {
      const result = computeInputScore([
        "32T3K 765",
        "T55J5 684",
        "KK677 28",
        "KTJJT 220",
        "QQQJA 483",
      ]);

      expect(result).toBe(6440);
    });

    it("should show result", async () => {
      const input = await getLinesOfFile("./src/daySeven/input.txt");
      const result = computeInputScore(input);

      console.log(result);
    });
  });
});
