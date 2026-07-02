import { useParams } from "react-router";
import { useGetMoviesBy } from "../../hooks/use-get-movies-by";
import { Portrait } from "../../components/portrait/portrait";
import MovieContainer from "../../components/movie-section/movie-container";
import { Loader } from "lucide-react";

export function BrowsePage() {
  const { movieGenre } = useParams();

  const genrePage =
    movieGenre == "shows"
      ? "now_playing"
      : movieGenre == "movies"
        ? "upcoming"
        : "popular";

  const { movies, loading } = useGetMoviesBy({ movieType: genrePage });

  if (loading) return <Loader className="animate-spin" color="white" />;

  return (
    <div className="mt-6 px-6">
      {movies && <Portrait moviePortrait={movies.results[0]} />}

      <MovieContainer movieType={movieGenre ?? ""} movies={movies?.results} />
    </div>
  );
}
