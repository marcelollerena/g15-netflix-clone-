import { Portrait } from "../../components/portrait/portrait";
import { useGetMoviesBy } from "../../hooks/use-get-movies-by";

export function HomePage() {
  const { movies: popularMovies, loading: popularLoading } = useGetMoviesBy({
    movieType: "popular",
  });

  return (
    <div className="px-6">
      {popularMovies && <Portrait moviePortrait={popularMovies.results[0]} />}
    </div>
  );
}
