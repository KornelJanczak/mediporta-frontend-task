import { Card, CardContent, CardHeader } from "../ui/card";
import TagsList from "./tags-list";
import FilterBar from "./filter-bar";
import { useTags } from "@/common/tags/use-tags";
import { useTagsList } from "@/hooks/use-tags-list/use-tags-list";
import { useEffect } from "react";

export interface TagsListProps {
  name: string;
  count: number;
}

export default function TagsCard() {
  const { setTagsList, tagsList } = useTagsList();
  const { data, tags, status } = useTags();

  const isSuccess = status === "success";
  const isPending = status === "pending";
  const isError = status === "error";

  useEffect(() => {
    if (tags) {
      setTagsList(tags.items);
    }
  }, [data, setTagsList, tags]);

  return (
    <div className="mx-6 my-10 md:my-24">
      <Card className="container max-w-96 border-0 md:max-w-xl">
        <CardHeader className="px-0">
          <FilterBar />
        </CardHeader>
        <CardContent className="px-0">
          <TagsList
            tags={tagsList}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
          />
        </CardContent>
      </Card>
    </div>
  );
}
