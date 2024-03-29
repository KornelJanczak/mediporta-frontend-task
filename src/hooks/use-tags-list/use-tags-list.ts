import { type Tag } from "@/common/tags/use-tags";
import { type SortOptions } from "./helpers/sort-tags";
import sortTags from "./helpers/sort-tags";
import { create } from "zustand";

interface TagsListState {
  tagsList: Tag[];
  numberOfTags: number;
  setTagsList: (tagList: Tag[]) => void;
  setNumberOfTags: (number: number) => void;
  setSortOption: (option: SortOptions) => void;
}

export const useTagsList = create<TagsListState>()((set) => ({
  tagsList: [],
  numberOfTags: 10,
  setTagsList: (tagsList) => set({ tagsList }),
  setNumberOfTags: (numberOfTags) => set({ numberOfTags }),
  setSortOption: (sortOption: SortOptions) =>
    set((state) => {
      const sortedTags = sortTags(state.tagsList, sortOption);
      return { ...state, tagsList: sortedTags };
    }),
}));
