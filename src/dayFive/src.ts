export interface Step {
  name: string;
  mapping: number[][];
}

export interface Input {
  steps: Step[];
  seeds: number[];
}

export const computeOneStep = ({
  previousStep,
  nextMap,
}: {
  previousStep: number;
  nextMap: number[][];
}) => {
  const currentRange = nextMap.filter(
    ([_destination, source, range]) =>
      previousStep >= source && previousStep < source + range
  );

  if (currentRange.length === 0) {
    return previousStep;
  } else {
    const [destination, source, _range] = currentRange[0];
    return previousStep + (destination - source);
  }
};

export const constructInput = (textInput: string[]): Input => {
  let steps: Step[] = [];
  let currentName = "";

  const seeds = textInput[0]
    .split(":")[1]
    .trim()
    .split(" ")
    .map((char) => parseInt(char));

  let maps: number[][] = [];

  textInput.forEach((line, index) => {
    if (!line.includes("seeds")) {
      if (line.includes("map")) {
        currentName = line.split(" ")[0];
      } else if (line !== "") {
        maps.push(line.split(" ").map((char) => parseInt(char)));
      } else if (index > 1) {
        steps.push({ name: currentName, mapping: maps });
        maps = [];
      }
    }
  });

  steps.push({ name: currentName, mapping: maps });

  return { seeds, steps };
};

export const computeMinLocation = ({ seeds, steps }: Input): number => {
  let endRes: number[] = [];
  seeds.forEach((seed) => {
    let currentStep = seed;
    steps.forEach((step) => {
      currentStep = computeOneStep({
        previousStep: currentStep,
        nextMap: step.mapping,
      });
    });
    endRes.push(currentStep);
  });

  return Math.min(...endRes);
};
