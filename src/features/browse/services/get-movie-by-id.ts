import { domains } from "@/common/constants/domains/domains";
import type { MovieDetail } from "../types/types";
import { tokens } from "@/common/constants/tokens/tokens";

const access_token = tokens.tmdb_token;

export const getMovieById = async (movieId: number): Promise<MovieDetail> => {
  const response = await fetch(
    `${domains.tmdb}/movie/${movieId}?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Error getting movie data");
  }

  return response.json();
};
