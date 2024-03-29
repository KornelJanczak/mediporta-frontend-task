import { Card, CardContent, CardHeader } from "../ui/card";
import Tags, { TagsSkeleton } from "./tags";
import FilterBar from "./filter-bar";
import NoResult from "../no-result";
import { useTags } from "@/common/tags/use-tags";
import { useTagsList } from "@/hooks/use-tags-list/use-tags-list";
import { useEffect } from "react";

export interface TagListProps {
  name: string;
  count: number;
}

export default function TagCard() {
  const { setTagsList, tagsList, numberOfTags } = useTagsList();
  const { data, tags, status } = useTags();

  const isSuccess = status === "success";
  const isPending = status === "pending";
  const isError = status === "error";

  useEffect(() => {
    if (tags) {
      setTagsList(tags.items);
    }
  }, [data, setTagsList, tags]);

  const slicedTagList = tagsList.slice(0, numberOfTags);

  return (
    <div className="mx-6 my-10 md:my-24">
      <Card className="container max-w-96 border-0 md:max-w-xl">
        <CardHeader className="px-0">
          <FilterBar />
        </CardHeader>
        <CardContent className="px-0">
          {isSuccess && <Tags tags={slicedTagList} />}
          {isPending && <TagsSkeleton length={14} />}
          {isError && (
            <NoResult
              title="Error!"
              description="Failed to retrieve tags. Please try again later or contact support for assistance."
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
