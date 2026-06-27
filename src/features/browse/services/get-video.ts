import { domains } from "@/common/constants/domains/domains";
import { tokens } from "@/common/constants/tokens/tokens";
import type { VideoResults } from "../types/types";

const access_token = tokens.tmdb_token;

export const getVideo = async (id: number): Promise<VideoResults> => {
  const response = await fetch(`${domains.tmdb}/movie/${id}/videos`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error getting movie");
  }

  return response.json();
};
