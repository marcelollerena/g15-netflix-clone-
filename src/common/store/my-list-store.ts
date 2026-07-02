import { create } from "zustand";
import type { MovieDetail } from "@/features/browse/types/types";
import { persist } from "zustand/middleware";

export type FavoriteItem = MovieDetail;

type MyListStore = {
  myList: FavoriteItem[];

  addToMyList: (item: FavoriteItem) => void;
  removeFromMyList: (id: number) => void;
  isInMyList: (id: number) => boolean;
};

export const useMyListStore = create<MyListStore>()(
  persist(
    (set, get) => ({
      myList: [],
      addToMyList: (item) => {
        const exists = get().myList.some(
          (myListItem) => myListItem.id === item.id,
        );

        if (exists) return;

        set((state) => ({
          myList: [...state.myList, item],
        }));
      },

      removeFromMyList: (id) => {
        set((state) => ({
          myList: state.myList.filter((item) => item.id !== id),
        }));
      },

      isInMyList: (id) => {
        return get().myList.some((item) => item.id === id);
      },
    }),
    {
      name: "my-list-storage",
    },
  ),
);
