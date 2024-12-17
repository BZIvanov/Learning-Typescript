// EXAMPLE 1

// basic generic example. We specify in the diamond brackets what the type of the generic will be and then we provide the same type parameter and return the same type value
const printValue = <T>(value: T): T => {
  console.log(value);

  return value;
};

printValue("Hello");
printValue(3);

// EXAMPLE 2

// here is how we can specify generic which will have length property
const printValueLength = <T extends { length: number }>(value: T): number => {
  console.log(value.length);

  return value.length;
};

printValueLength("Hello");
printValueLength([1, 2, 3]);

// EXAMPLE 3

// function declaration example
function getItem<T>(list: Array<T>): T {
  return list[0];
}

const firstItem = getItem<number>([1, 2, 3]);

// object type example
type Book<T, K> = {
  author: T;
  title: T;
  year: K;
};

const myBook: Book<string, number> = {
  author: "Me",
  title: "My book",
  year: 2023,
};
