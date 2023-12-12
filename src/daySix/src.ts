interface Race {
  time: number;
  record: number;
}

export const computeWinningRaces = ({ time, record }: Race): number => {
  const discriminant = time * time - 4 * record;
  const firstRoot = (time - Math.sqrt(discriminant)) / 2;
  const secondRoot = (time + Math.sqrt(discriminant)) / 2;

  const firstWinningRace =
    Math.ceil(firstRoot) === firstRoot ? firstRoot + 1 : Math.ceil(firstRoot);
  const secondWinningRace =
    Math.floor(secondRoot) === secondRoot
      ? secondRoot - 1
      : Math.floor(secondRoot);
  return secondWinningRace - firstWinningRace + 1;
};

export const computeCompetitionScore = (input: string[]): number => {
  const times = input[0]
    .split(":")[1]
    .split(" ")
    .filter((char) => char !== "");
  const records = input[1]
    .split(":")[1]
    .split(" ")
    .filter((char) => char !== "");

  let score = 1;
  times.forEach((time, index) => {
    const winningRaces = computeWinningRaces({
      time: parseInt(time),
      record: parseInt(records[index]),
    });
    score = score * winningRaces;
  });

  return score;
};
