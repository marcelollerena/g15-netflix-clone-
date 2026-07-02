import { useMyListStore } from "@/common/store/my-list-store";
import { MovieItemDetail } from "../../components/movie-section/movie-item";
import { Title } from "@/common/components/text/title/title";
import { Plus } from "lucide-react";

export function MyListPage() {
  const { myList } = useMyListStore();

  if (myList.length === 0)
    return (
      <div className="w-full">
        <Title className="h-100 text-5xl opacity-50 text-neutral-200 flex gap-2 justify-center items-center">
          <Plus /> Add some movie to your list
        </Title>
      </div>
    );

  return (
    <div className="flex gap-3 w-full flex-wrap justify-evenly p-6">
      {myList.map((movie) => (
        <MovieItemDetail movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
