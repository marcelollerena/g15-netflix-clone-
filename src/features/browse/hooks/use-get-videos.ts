import { useEffect, useState } from "react";
import type { Result } from "../types/types";
import { getVideo } from "../services/get-video";

export function useGetVideos(id: number) {
  const [video, setVideo] = useState<Result>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVideo(id)
      .then((data) => {
        const trailer = data.results.find(
          (video) => String(video.type) === "Trailer",
        );

        setVideo(trailer);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return {
    video,
    loading,
    error,
  };
}
