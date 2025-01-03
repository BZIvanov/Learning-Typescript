// both below are different syntax for array of strings
// with the second example we can easily provide dynamic types, for example for generics
const food: string[] = ["apple", "banana"];
const drinks: Array<string> = ["water", "juice"];

const numbersNestedArrays: Array<Array<number>> = [
  [1, 2],
  [3, 4],
];

const mixedValues: (string | number)[] = [9, "water", 19];

const arrayValues: (string | number)[][] = [[1, 2], [3, 4], ["hi"]];
