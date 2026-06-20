import { domains } from "@/common/constants/domains/domains";
import type { Movie } from "../../types/types";
import { Title } from "@/common/components/text/title/title";
import { Play, Plus } from "lucide-react";

interface Props {
  moviePortrait: Movie;
}

export function Portrait(props: Props) {
  const {
    moviePortrait: { poster_path, title },
  } = props;

  return (
    <div className="relative rounded-lg h-137.5">
      <img
        src={`${domains.tmdb_images}/w1280_and_h720_face/${poster_path}`}
        className="h-full rounded-lg object-cover object-center absolute top-0 right-0"
      />

      <div className="relative h-full flex justify-end p-4 flex-col">
        <Title weight="bold" className="z-20 text-center text-[38px]">
          {title}
        </Title>

        <div className="flex gap-4">
          <button className="h-12 rounded-lg w-full text-center bg-white font-semibold text-black flex justify-center items-center gap-4">
            <Play fill="black" /> <p>Play</p>
          </button>

          <button className="h-12 rounded-lg w-full text-center bg-white/10 font-semibold text-white flex justify-center items-center gap-4">
            <Plus /> <p>My List</p>
          </button>
        </div>
      </div>
    </div>
  );
}
