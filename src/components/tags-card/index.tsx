import { Card, CardContent, CardHeader } from "../ui/card";
import TagsList from "./tags-list";
import FilterBar from "./filter-bar";
import { useTags } from "@/common/tags/use-tags";
import TagsPagination from "./tags-pagination";

export interface TagsListProps {
  name: string;
  count: number;
}

export default function TagsCard() {
  const { tags, status } = useTags();

  const isSuccess = status === "success";
  const isPending = status === "pending";
  const isError = status === "error";

  return (
    <div className="mx-4 my-10 md:my-24">
      <Card className="container max-w-96 border-0 px-4 md:max-w-xl">
        <CardHeader className="justify-content items-center px-0 gap-y-6 pb-2">
          <h1 className="text-xl">Tags List</h1>
          <div className="w-full">
            <FilterBar />
            <TagsPagination />
          </div>
        </CardHeader>
        <CardContent className="px-0">
          <TagsList
            tags={tags?.items}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
          />
        </CardContent>
      </Card>
    </div>
  );
}
