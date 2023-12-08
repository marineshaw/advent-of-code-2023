const symboles = /\D/g;
const digits = /\d/g;

export const getPartNumbersSum = (input: string[]): number => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j].match(digits)) {
        let neighborhood = [];
        if (i > 0) {
          if (j > 0) {
            neighborhood.push(input[i - 1]?.slice(j - 1, j + 1));
            neighborhood.push(input[i]?.slice(j - 1, j + 1));
          } else {
            neighborhood.push(input[i - 1]?.slice(0, 1));
            neighborhood.push(input[i]?.slice(0, 1));
          }
        } else {
        }
        neighborhood.push();
        neighborhood = [
          input[i].slice(j - 1, j + 1),
          input[i + 1]?.slice(j - 1, j + 1),
        ];
        if (isCloseToSymbol(neighborhood)) {
          sum += getFullNumberFromIndex(input[i], j);
        }
      }
    }
  }
  return 0;
};

export const isCloseToSymbol = (neighborhood: string[]): boolean => {
  for (let i = 0; i < neighborhood.length; i++) {
    for (let j = 0; j < neighborhood[i].length; j++) {
      const char = neighborhood[i].charAt(j);
      if (char !== "." && char.match(symboles)) {
        return true;
      }
    }
  }
  return false;
};

export const getFullNumberFromIndex = (line: string, index: number): number => {
  let lineSliced = line;
  if (index !== 0) {
    const isFirstDigits = line.charAt(index - 1) === ".";
    lineSliced = isFirstDigits ? line.slice(index) : line.slice(index - 2);
  }
  const lineWithoutDots = lineSliced.replace(/\./g, "");
  return parseInt(lineWithoutDots);
};
