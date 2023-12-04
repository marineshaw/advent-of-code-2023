import { getLinesOfFile } from "../shared/getLinesFromFile";

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const compute = (input: string[]): number => {
  let total = 0;
  input.forEach((line) => {
    const array = line.split("");
    const numberArray = array.filter((char) => numbers.includes(char));
    total += parseInt(numberArray[0] + numberArray[numberArray.length - 1]);
  });
  return total;
};

export const computeInput = async () => {
  const lines = await getLinesOfFile("./src/dayOne/input.txt");
  return compute(lines);
};

export const useDigits = (input: string): string => {
  return input
    .replace(/one/g, "1")
    .replace(/two/g, "2")
    .replace(/three/g, "3")
    .replace(/four/g, "4")
    .replace(/five/g, "5")
    .replace(/six/g, "6")
    .replace(/seven/g, "7")
    .replace(/eight/g, "8")
    .replace(/nine/g, "9");
};

export const computeInputTwo = async () => {
  const lines = await getLinesOfFile("./src/dayOne/inputTest.txt");
  return compute(lines.map((line) => useDigits(line)));
};
