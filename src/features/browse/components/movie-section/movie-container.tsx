import type { Movie, movieType } from "../../types/types";
import { MovieItem } from "./movie-item";
import { getMovieType } from "../../utils/get-movie-type";
import { Title } from "@/common/components/text/title/title";

interface Props {
  movieType: movieType | string;
  movies: Movie[] | undefined;
}

export default function MovieContainer(props: Props) {
  const { movies, movieType } = props;

  if (!movies) return <></>;

  return (
    <div className="flex flex-col gap-3 mt-6 mb-6">
      <Title size="xl" weight="semibold">
        {getMovieType(movieType)}
      </Title>

      <div className="flex gap-3 w-full overflow-x-scroll">
        {movies.map((movie) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
