import { useEffect, useState } from "react";
import type { MovieDetail } from "../types/types";
import { getMovieById } from "../services/get-movie-by-id";

export function useGetMovieById(id: number) {
  const [movie, setMovie] = useState<null | MovieDetail>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieById(id)
      .then(setMovie)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return {
    movie: movie ? movie : ({} as MovieDetail),
    error,
    loading,
  };
}
