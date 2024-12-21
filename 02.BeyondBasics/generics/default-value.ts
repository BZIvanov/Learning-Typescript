// EXAMPLE 1

// generic example with default value
type Book<T = string, K = number> = {
  title: T;
  year: K;
};

const myBook: Book = {
  title: "My book",
  year: 2024,
};
