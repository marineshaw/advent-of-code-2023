//FIVE = "Five of a kind",
//FOUR = "Four of a kind",
//FULL = "Full house",
//THREE = "Three of a kind",
//TWO_PAIR = "Two pairs",
//ONE_PAIR = "One pair",
//HIGH = "High card",

export enum HandType {
  HIGH,
  ONE_PAIR,
  TWO_PAIR,
  THREE,
  FULL,
  FOUR,
  FIVE,
}

export enum CardType {
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGTH,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING,
  ACE,
}

export const cardMapping: Record<string, CardType> = {
  "2": CardType.TWO,
  "3": CardType.THREE,
  "4": CardType.FOUR,
  "5": CardType.FIVE,
  "6": CardType.SIX,
  "7": CardType.SEVEN,
  "8": CardType.EIGTH,
  "9": CardType.NINE,
  T: CardType.TEN,
  J: CardType.JACK,
  Q: CardType.QUEEN,
  K: CardType.KING,
  A: CardType.ACE,
};

export const determineHandType = (hand: string): HandType => {
  const handSet = new Set(hand);
  const handSetSize = handSet.size;
  switch (handSetSize) {
    case 1:
      return HandType.FIVE;
    case 2:
      for (const value of handSet.values()) {
        const handArray = new Array(...hand);
        if (handArray.filter((char) => char === value).length === 4) {
          return HandType.FOUR;
        }
      }
      return HandType.FULL;
    case 3:
      for (const value of handSet.values()) {
        const handArray = new Array(...hand);
        if (handArray.filter((char) => char === value).length === 3) {
          return HandType.THREE;
        }
      }
      return HandType.TWO_PAIR;
    case 4:
      return HandType.ONE_PAIR;
    default:
      return HandType.HIGH;
  }
};

export const compareHands = ({
  firstHand,
  secondHand,
}: {
  firstHand: string;
  secondHand: string;
}): number => {
  const firstHandType = determineHandType(firstHand);
  const secondHandType = determineHandType(secondHand);
  if (firstHand === secondHand) return 0;
  if (firstHandType > secondHandType) return 1;
  if (firstHandType === secondHandType) {
    for (let i = 0; i < 5; i++) {
      if (
        cardMapping[firstHand.charAt(i)] > cardMapping[secondHand.charAt(i)]
      ) {
        return 1;
      }
      if (
        cardMapping[firstHand.charAt(i)] < cardMapping[secondHand.charAt(i)]
      ) {
        return -1;
      }
    }
  }
  return -1;
};

export const computeInputScore = (input: string[]): number => {
  const sortedInput = input.sort((line1, line2) => {
    const firstHand = line1.split(" ")[0];
    const secondHand = line2.split(" ")[0];
    return compareHands({ firstHand, secondHand });
  });
  let winnings = 0;
  let rank = 1;

  sortedInput.forEach((line) => {
    const bet = parseInt(line.split(" ")[1]);
    winnings += bet * rank;
    rank++;
  });
  return winnings;
};
