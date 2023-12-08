export const computeOneLineScore = (input: string): number => {
  let sum = 0;
  const winningNumbers = input
    .split("|")[0]
    .split(" ")
    .filter((char) => char !== "");
  const chosenNumbers = input
    .split("|")[1]
    .split(" ")
    .filter((char) => char !== "");
  chosenNumbers.forEach((number) => {
    if (winningNumbers.includes(number)) {
      if (sum === 0) {
        sum++;
      } else {
        sum = sum * 2;
      }
    }
  });
  return sum;
};

export const computeTotalScore = (input: string[]): number => {
  let sum = 0;
  input.forEach((line) => {
    const lineWithoutCardNumber = line.split(":")[1].trim();
    sum = sum + computeOneLineScore(lineWithoutCardNumber);
  });
  return sum;
};
