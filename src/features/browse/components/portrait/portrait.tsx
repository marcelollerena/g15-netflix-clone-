import { domains } from "@/common/constants/domains/domains";
import type { Movie } from "../../types/types";
import { Title } from "@/common/components/text/title/title";
import { Play, Plus } from "lucide-react";
import { useGetMovieById } from "../../hooks/use-get-movie-by-id";
import { PortraitSkeleton } from "../skeletons/portrait-skeleton";

interface Props {
  moviePortrait: Movie;
}

export function Portrait(props: Props) {
  const {
    moviePortrait: { id },
  } = props;

  const { movie, loading } = useGetMovieById(id);

  if (!movie || loading) return <PortraitSkeleton />;

  return (
    <div className="relative rounded-lg h-137.5 mb-6">
      <img
        src={`${domains.tmdb_images}/w1280_and_h720_face/${movie.poster_path}`}
        className="h-full rounded-lg object-cover object-center absolute top-0 right-0"
      />

      <div className="relative h-full flex justify-end p-4 flex-col">
        <Title weight="bold" className="z-20 text-center text-[38px]">
          {movie.title}
        </Title>

        <div className="flex gap-4 z-10">
          <button className="h-12 rounded-lg w-full text-center bg-white font-semibold text-black flex justify-center items-center gap-4">
            <Play fill="black" /> <p>Play</p>
          </button>

          <button className="h-12 rounded-lg w-full text-center bg-white/10 font-semibold text-white flex justify-center items-center gap-4">
            <Plus /> <p>My List</p>
          </button>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-95 rounded-lg
              bg-linear-to-t
              from-black/90
              via-black/80
              to-transparent
              pointer-events-none
              "
        ></div>
      </div>
    </div>
  );
}
