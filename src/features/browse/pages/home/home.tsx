import { Loader } from "lucide-react";
import { Portrait } from "../../components/portrait/portrait";
import { useGetMoviesBy } from "../../hooks/use-get-movies-by";
import MovieContainer from "../../components/movie-section/movie-container";

export function HomePage() {
  const { movies: popularMovies, loading: popularLoading } = useGetMoviesBy({
    movieType: "popular",
  });

  const { movies: nowPlayingMovies, loading: nowPlayingMoviesLoading } =
    useGetMoviesBy({
      movieType: "now_playing",
    });

  const { movies: topRatedMovies, loading: topRatedMoviesLoading } =
    useGetMoviesBy({
      movieType: "top_rated",
    });

  const { movies: upcomingMovies, loading: upcomingMoviesLoading } =
    useGetMoviesBy({
      movieType: "upcoming",
    });

  if (
    popularLoading ||
    nowPlayingMoviesLoading ||
    topRatedMoviesLoading ||
    upcomingMoviesLoading
  )
    return <Loader className="animate-spin absolute top-[50%] right-[50%]" />;

  return (
    <div className="mt-6 px-6">
      {popularMovies && <Portrait moviePortrait={popularMovies.results[0]} />}

      <MovieContainer movieType="popular" movies={popularMovies?.results} />
      <MovieContainer movieType="top_rated" movies={topRatedMovies?.results} />
      <MovieContainer movieType="upcoming" movies={upcomingMovies?.results} />
      <MovieContainer
        movieType="now_playing"
        movies={nowPlayingMovies?.results}
      />
    </div>
  );
}
