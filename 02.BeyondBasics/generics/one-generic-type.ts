// EXAMPLE 1

// basic generic example. We specify in the diamond brackets what the type of the generic will be and then we provide the same type parameter and return the same type value
const getValue = <T>(value: T): T => {
  return value;
};

// here the string type is infered
getValue("Hello");
// here we explicitly specify the type is number without relying on infered, just for the demo
getValue<number>(3);

// EXAMPLE 2.1

function getItem<T>(list: Array<T>): T {
  return list[0];
}

getItem<number>([1, 2, 3]);

// EXAMPLE 2.2

type GetItem = <T>(list: Array<T>) => T;

const getItem2: GetItem = (list) => {
  return list[0];
};

// EXAMPLE 3

// here is how we can specify generic which will have length property
const getValueLength = <T extends { length: number }>(value: T): number => {
  return value.length;
};

getValueLength("Hello");
getValueLength([1, 2, 3]);
