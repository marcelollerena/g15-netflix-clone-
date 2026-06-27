import { domains } from "@/common/constants/domains/domains";
import type { Movie } from "../../types/types";
import { Link } from "react-router";

interface Props {
  movie: Movie;
}

export function MovieItem(props: Props) {
  const {
    movie: { poster_path, overview, id },
  } = props;

  return (
    <Link to={`browse/movie/${id}`} className="h-40 min-w-31.5 rounded-lg">
      <img
        src={`${domains.tmdb_images}/w220_and_h330_face${poster_path}`}
        alt={overview}
        className="rounded-lg object-cover w-full h-full"
      />
    </Link>
  );
}
