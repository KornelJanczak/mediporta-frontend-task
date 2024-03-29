import { type Tag } from "@/common/tags/use-tags";
import { create } from "zustand";

interface TagsListState {
  tagsList: Tag[] | null;
  numberOfTags: number;
  sortOption: string | null;
  setTagsList: (tagList: Tag[] | null) => void;
  setNumberOfTags: (number: number) => void;
  setSortOption: (option: string) => void;
}

export const useTagsList = create<TagsListState>()((set) => ({
  tagsList: [],
  numberOfTags: 10,
  sortOption: null,
  setTagsList: () => set((state) => ({ tagsList: state.tagsList })),
  setNumberOfTags: () => set((state) => ({ numberOfTags: state.numberOfTags })),
  setSortOption: () => set((state) => ({ sortOption: state.sortOption })),
}));
