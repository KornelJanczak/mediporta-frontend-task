import { useTags } from "@/common/tags/use-tags";
import FilterBar from "./filter-bar";
import { Card, CardContent, CardHeader } from "../ui/card";
import NoResult from "../no-result";
import Tags, { TagsSkeleton } from "./tags";

export interface TagListProps {
  name: string;
  count: number;
}

export default function TagCard() {
  // const { tagsList, setTagsList } = useTagsList();
  const { tags, status } = useTags();

  const isSuccess = status === "success";

  const isPending = status === "pending";

  const isError = status === "error";

  return (
    <div className="m-4">
      <Card className="container max-w-96 border-0">
        <CardHeader className="px-2">
          <FilterBar />
        </CardHeader>
        <CardContent className="px-2">
          {!isSuccess && <Tags tags={tags?.items || []} />}
          {isPending && <TagsSkeleton length={14} />}
          {!isError && (
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
