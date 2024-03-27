import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { getTags } from "./get-tags";

export const getTagsKey = ["tags"];

export const useTags = (): UseTagsReturn => {
  const tagsQuery = useQuery({
    queryKey: getTagsKey,
    queryFn: async () => await getTags(),
  });

  return {
    tags: tagsQuery.data,
    ...tagsQuery,
  };
};

type UseTagsReturn = UseQueryResult<TagsResponse, unknown> & {
  tags: TagsResponse | undefined;
};

type Tag = {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
};

type TagCollective = {
  tags: string[];
  external_links: { type: string; link: string }[];
  description: string;
  link: string;
  name: string;
  slug: string;
};

type Tags = (Tag | TagCollective)[];

export type TagsResponse = Tags | null;
