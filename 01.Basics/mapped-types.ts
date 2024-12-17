type Movie = {
  title: string;
  year: number;
};

type Series = { [movieKey in "Cool" | "Nice"]: Movie };

function getMovies(movies: Series) {
  return movies;
}

const movies = getMovies({
  Cool: { title: "Cool movie", year: 2023 },
  Nice: { title: "Nice movie", year: 2022 },
});
