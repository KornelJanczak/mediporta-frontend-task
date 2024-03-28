import {  type Tag } from "@/common/tags/use-tags";
import { create } from "zustand";

interface TagsListState {
  tagsList: Tag[] | null;
  setTagsList: (tagList: Tag[] | null) => void;
}


export const useTagsList = create<TagsListState>()((set) => ({
  tagsList: [],
  setTagsList: () => set((state) => ({ tagsList: state.tagsList })),
}));
