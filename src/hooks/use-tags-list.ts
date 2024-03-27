import { TagsResponse } from "@/common/tags/use-tags";
import { create } from "zustand";

interface TagsListState {
  tagsList: TagsResponse;
  setTagsList: (tagList: TagsResponse) => void;
}

export const useTagsList = create<TagsListState>()((set) => ({
  tagsList: [],
  setTagsList: () => set((state) => ({ tagsList: state.tagsList })),
}));
