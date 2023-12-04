const maxCubes: Record<string, number> = {
  red: 12,
  green: 14,
  blue: 14,
};

export const isGamePossible = (input: string): boolean => {
  let result = true;
  const sets = input.split(";").map((set) => set.split(","));
  sets.forEach((set) => {
    set.forEach((cube) => {
      const [number, color] = cube.slice(1).split(" ");
      if (parseInt(number) > maxCubes[color]) result = false;
    });
  });
  return result;
};

export const sumOfAllPossibleGames = (input: string[]): number => {
  let sum = 0;
  input.forEach((line) => {
    const [gameIdSection, setsInput] = line.split(":");
    const gameId = gameIdSection.split(" ")[1];
    const isPossible = isGamePossible(setsInput);
    if (isPossible) sum += parseInt(gameId);
  });

  return sum;
};

export const computeGamePower = (input: string): number => {
  let maximumCubes: Record<string, number> = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const inputSplitted = input.replace(/,/g, "").replace(/;/g, "").split(" ");
  inputSplitted.forEach((cube, index) => {
    if (Object.keys(maximumCubes).includes(cube)) {
      const currentMax = maximumCubes[cube];
      const currentNumber = parseInt(inputSplitted[index - 1]);
      if (currentMax < currentNumber) {
        maximumCubes[cube] = currentNumber;
      }
    }
  });
  return maximumCubes.red * maximumCubes.green * maximumCubes.blue;
};

export const sumOfAllPowers = (input: string[]): number => {
  let sum = 0;
  input.forEach((line) => {
    sum += computeGamePower(line);
  });
  return sum;
};
