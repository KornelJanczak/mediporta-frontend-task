import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { getTags } from "./get-tags";

export const getTagsKey = ["tags"];

export const useTags = (): UseTagsReturn => {
  const tagsQuery = useQuery({
    queryKey: getTagsKey,
    queryFn: async () => await getTags(),
  });

  return {
    tags: tagsQuery.data || undefined,
    ...tagsQuery,
  };
};

type UseTagsReturn = UseQueryResult<TagsResponse, unknown> & {
  tags: TagsResponse | undefined;
};

export type Tag = {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
};

export type TagsResponse = {
  has_more: true;
  items: Tag[];
  quota_max: number;
  quota_remaning: number;
} | null;
