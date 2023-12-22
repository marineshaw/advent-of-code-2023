export const computeNextSequence = (sequence: number[]): number[] => {
  const nextSequence: number[] = [];
  sequence.forEach((_number, index) => {
    if (index !== 0) {
      nextSequence.push(sequence[index] - sequence[index - 1]);
    }
  });
  return nextSequence;
};

export const determineHistory = (sequence: number[]): number => {
  let currentSequence = sequence;
  let lastNumbers: number[] = [];
  while (!currentSequence.every((number) => number === 0)) {
    lastNumbers.push(currentSequence[currentSequence.length - 1]);
    currentSequence = computeNextSequence(currentSequence);
  }
  return lastNumbers.reduce((acc, number) => acc + number, 0);
};

export const determineBackwardHistory = (sequence: number[]): number => {
  let currentSequence = sequence;
  let lastNumbers: number[] = [];
  while (!currentSequence.every((number) => number === 0)) {
    lastNumbers.push(currentSequence[0]);
    currentSequence = computeNextSequence(currentSequence);
  }
  return lastNumbers.reduce(
    (acc, number, index) => acc + Math.pow(-1, index) * number,
    0
  );
};

export const computeSumOfHistory = (input: string[]): number => {
  const sequences = input.map((line) =>
    line.split(" ").map((number) => parseInt(number))
  );
  const histories = sequences.map((sequence) => determineHistory(sequence));
  return histories.reduce((acc, history) => acc + history, 0);
};

export const computeSumOfBackwardHistory = (input: string[]): number => {
  const sequences = input.map((line) =>
    line.split(" ").map((number) => parseInt(number))
  );
  const histories = sequences.map((sequence) =>
    determineBackwardHistory(sequence)
  );
  return histories.reduce((acc, history) => acc + history, 0);
};
