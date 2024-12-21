type Movie = {
  title: string;
  year: number;
  genre: string;
};

type MovieKeysUnion = keyof Movie; // "title" | "year" | "genre"

const key: MovieKeysUnion = "title";

// PartialMovie exlpicit example
type PartialMovie = {
  [K in keyof Movie]?: Movie[K];
};

// PartialMovie built-in utility type
type PartialMovie2 = Partial<Movie>;
