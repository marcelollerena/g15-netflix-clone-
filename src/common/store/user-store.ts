import { create } from "zustand";
import { persist } from "zustand/middleware";

type TokenShape = Record<string, string>;

interface userState {
  token: TokenShape | null;
  setToken: (token: string) => void;
}

export const useUserStore = create<userState>()(
  persist(
    (set) => ({
      token: { token: "" },

      setToken: (tokenValue) => set({ token: { token: tokenValue } }),
    }),
    {
      name: "user-storage",
    },
  ),
);
