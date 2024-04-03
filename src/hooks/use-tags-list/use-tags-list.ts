import { type SortOptions } from "../../helpers/sort-tags";
import { create } from "zustand";

type TagsState = {
  tagsPerPage: number;
  setTagsPerPage: (tagsPerPage: number) => void;
  sortOption: SortOptions;
  setSortOption: (sortOption: SortOptions) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export const useTagsList = create<TagsState>()((set) => ({
  tagsPerPage: 10,
  setTagsPerPage: (tagsPerPage) => set({ tagsPerPage, currentPage: 0 }),
  sortOption: "most-related-posts",
  setSortOption: (sortOption) => set({ sortOption }),
  currentPage: 0,
  setCurrentPage: (page) => set({ currentPage: page }),
}));
