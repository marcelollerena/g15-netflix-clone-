import { domains } from "@/common/constants/domains/domains";
import type { MoviesResult, movieType } from "../types/types";
import { tokens } from "@/common/constants/tokens/tokens";

const domain = domains.tmdb;
const access_token = tokens.tmdb_token;

export const getMoviesBy = async (
  motiveType: movieType,
): Promise<MoviesResult | null> => {
  const response = await fetch(`${domain}/movie/${motiveType}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error getting movies");
  }

  return response.json();
};
