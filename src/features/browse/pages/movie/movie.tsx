import { useLocation, useNavigate, useParams } from "react-router";

import { getYear } from "../../utils/get-year";
import { useGetVideos } from "../../hooks/use-get-videos";
import { domains } from "@/common/constants/domains/domains";
import { Title } from "@/common/components/text/title/title";
import { useGetMovieById } from "../../hooks/use-get-movie-by-id";
import { ButtonStats } from "@/common/components/button-stats/button-stats";

import {
  ArrowDownToLine,
  Check,
  Download,
  Play,
  Send,
  Star,
  X,
} from "lucide-react";
import { useRef } from "react";
import { useMyListStore } from "@/common/store/my-list-store";

export function MoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { movie, loading } = useGetMovieById(Number(id));
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const { video } = useGetVideos(movie.id);
  const { addToMyList, isInMyList, removeFromMyList } = useMyListStore();

  const fullUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;

  const handleNavigation = () => {
    navigate("/");
  };

  const handlePlay = () => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: "playVideo",
        args: [],
      }),
      "*",
    );
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error);
    }
  };

  if (!movie || loading) return <h1>loading...</h1>;

  return (
    <div className="relative bg-black h-screen flex flex-col gap-2">
      <iframe
        ref={iframeRef}
        className="w-full h-80 rounded-lg"
        src={`${domains.youtube_video}${video?.key}?enablejsapi=1`}
        title={movie.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <div className="p-2 flex flex-col gap-3">
        <Title size="xl" weight="semibold">
          {movie.title}
        </Title>

        <div className="flex gap-1.5">
          <Title weight="medium" className="text-sm">
            {getYear(movie.release_date.toString())}
          </Title>
          <Title weight="medium" className="text-sm">
            {movie.origin_country[0]}
          </Title>
        </div>

        <button
          onClick={handlePlay}
          className="h-12 rounded-lg w-full text-center bg-white font-semibold text-black flex justify-center items-center gap-4"
        >
          <Play fill="black" /> <p>Resume</p>
        </button>
        <button className="h-12 rounded-lg w-full text-center bg-white/10 font-semibold text-white flex justify-center items-center gap-4">
          <ArrowDownToLine color="white" /> <p>Download</p>
        </button>

        <p className="text-sm text-neutral-300">{movie.overview}</p>

        <Title className="opacity-50 flex gap-2 text-xs overflow-x-scroll">
          Production:
          {movie.production_companies.map((company) => (
            <p className="opacity-50">{company.name}</p>
          ))}
        </Title>
      </div>

      <div className="flex w-full justify-evenly absolute bottom-10">
        {isInMyList(movie.id) ? (
          <ButtonStats onClick={() => removeFromMyList(movie.id)}>
            <X size={28} color="white" />
            <p>Remove</p>
          </ButtonStats>
        ) : (
          <ButtonStats onClick={() => addToMyList(movie)}>
            <Check size={28} color="white" />
            <p>My List</p>
          </ButtonStats>
        )}

        <ButtonStats>
          <Star size={28} color="white" />
          <p>Rate</p>
        </ButtonStats>
        <ButtonStats onClick={() => handleCopy(fullUrl)}>
          <Send size={28} color="white" />
          <p>Share</p>
        </ButtonStats>
        <ButtonStats>
          <Download size={28} color="white" />
          <p>Download</p>
        </ButtonStats>
      </div>

      <button
        onClick={handleNavigation}
        className="absolute rounded-full bg-black top-4 right-4 p-1 z-20"
      >
        <X color="white" size={24} />
      </button>
    </div>
  );
}
