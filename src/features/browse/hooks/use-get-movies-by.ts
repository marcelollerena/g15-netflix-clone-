import { useEffect, useState } from "react";
import { getMoviesBy } from "../services/get-movies-by";
import type { MoviesResult, movieType } from "../types/types";

interface Props {
  movieType: movieType;
}

export function useGetMoviesBy(props: Props) {
  const { movieType } = props;

  const [movies, setMovies] = useState<MoviesResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMoviesBy(movieType)
      .then((data) => setMovies(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [movieType]);

  return {
    movies,
    loading,
    error,
  };
}
