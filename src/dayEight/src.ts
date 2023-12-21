interface Input {
  instructions: string;
  maps: string[][];
}

export const formatInput = (input: string[]): Input => {
  return {
    instructions: input[0],
    maps: input.slice(2).map((line) => {
      const [node, values] = line.split(" = ");
      const [left, right] = values.split(", ");
      return [node, left.slice(1), right.slice(0, -1)];
    }),
  };
};

export const countStepToArrival = ({
  input,
  departure,
  arrival,
}: {
  input: Input;
  departure: string;
  arrival: string;
}): number => {
  let stepCount = 0;
  let currentNode = departure;
  const instructionsLength = input.instructions.length;

  while (currentNode !== arrival) {
    const instruction = input.instructions[stepCount % instructionsLength];
    const instructionIndex = instruction === "L" ? 1 : 2;
    const mapFound = input.maps.find((map) => map[0] === currentNode);
    currentNode = mapFound ? mapFound[instructionIndex] : currentNode;
    stepCount++;
  }
  return stepCount;
};

export const countStepsToArrivalForGhosts = (input: Input): number => {
  const departures = input.maps.filter((map) => [...map[0]].includes("A"));

  const stepsToArrival = departures.map((departureMap) => {
    let stepCount = 0;
    let currentNode = departureMap[0];
    const instructionsLength = input.instructions.length;

    while (![...currentNode].includes("Z")) {
      const instruction = input.instructions[stepCount % instructionsLength];
      const instructionIndex = instruction === "L" ? 1 : 2;
      const mapFound = input.maps.find((map) => map[0] === currentNode);
      currentNode = mapFound ? mapFound[instructionIndex] : currentNode;
      stepCount++;
    }
    return stepCount;
  });

  return computeLeastCommonMultipleList(stepsToArrival);
};

export const computeLeastCommonMultipleList = (numbers: number[]): number => {
  const gcd = (a: number, b: number): number => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  const lcm = (a: number, b: number): number => {
    return (a * b) / gcd(a, b);
  };

  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result = lcm(result, numbers[i]);
  }

  return result;
};
