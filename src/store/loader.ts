import create from "zustand";

interface LoaderStore {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useLoaderStore = create<LoaderStore>((set) => ({
  isLoading: true,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
