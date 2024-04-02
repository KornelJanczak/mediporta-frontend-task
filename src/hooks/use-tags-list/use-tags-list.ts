import { type Tag } from "@/common/tags/use-tags";
import { type SortOptions } from "./helpers/sort-tags";
import sortTags from "./helpers/sort-tags";
import { create } from "zustand";

interface TagsListState {
  tagsList: Tag[];
  numberOfTags: number;
  startIndex: number;
  endIndex: number;
  setStartIndex: (startIndex: number) => void;
  setEndIndex: (endIndex: number) => void;
  setTagsList: (tagList: Tag[]) => void;
  setNumberOfTags: (number: number) => void;
  setSortOption: (option: SortOptions) => void;
}

export const useTagsList = create<TagsListState>()((set) => ({
  tagsList: [],
  numberOfTags: 10,
  startIndex: 0,
  endIndex: 10,
  setStartIndex: (startIndex) => set({ startIndex }),
  setEndIndex: (endIndex) => set({ endIndex }),
  setTagsList: (tagsList) => set({ tagsList }),
  setNumberOfTags: (numberOfTags) =>
    set((state) => {
      let endIndex = numberOfTags;
      endIndex =
        endIndex > state.tagsList.length ? state.tagsList.length : endIndex;
      return { ...state, numberOfTags, endIndex, startIndex: 0 };
    }),
  setSortOption: (sortOption: SortOptions) =>
    set((state) => {
      const sortedTags = sortTags(state.tagsList, sortOption);
      return { ...state, tagsList: sortedTags };
    }),
}));
