import { type Tag } from "@/common/tags/use-tags";

export type SortOptions =
  | "most-related-posts"
  | "least-related-posts"
  | "alphabetical-asc"
  | "alphabetical-desc";

const sortFunctions: { [key in SortOptions]: (a: Tag, b: Tag) => number } = {
  "most-related-posts": (a: Tag, b: Tag) => (a.count < b.count ? 1 : -1),
  "least-related-posts": (a: Tag, b: Tag) => (a.count > b.count ? 1 : -1),
  "alphabetical-asc": (a: Tag, b: Tag) => a.name.localeCompare(b.name),
  "alphabetical-desc": (a: Tag, b: Tag) => b.name.localeCompare(a.name),
};

export default function sortTags(tags: Tag[], selectedValue: SortOptions) {
  const sortFunction = sortFunctions[selectedValue];
  const sortedTags = [...tags];

  if (sortFunction) sortedTags.sort(sortFunction);

  return sortedTags;
}
