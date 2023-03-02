// both below are different syntax for array of strings
// with the second example we can easily provide dynamic types, for example for generics
const food: string[] = ['apple', 'banana'];
const drinks: Array<string> = ['water', 'juice'];

// this is how we can specify, that array could contain both numbers and strings
// the union type (|) will help us to have mixed values
const mixedValues: (string | number)[] = [9, 'water', 19];

const arrayValues: (string | number)[][] = [[1, 2], [3, 4], ['hi']];
