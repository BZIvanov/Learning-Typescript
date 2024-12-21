// EXAMPLE 1

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

const mySecondBook: Book<string, string> = {
  author: "Me",
  title: "My book",
  year: "2024",
};
