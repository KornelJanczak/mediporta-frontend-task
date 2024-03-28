import { useTagsList } from "@/hooks/use-tags-list";
import { useTags } from "@/common/tags/use-tags";
import { useEffect } from "react";
import TagsContainer from "./tags-container";
import TagCard from "./tag-card";
import FilterBar from "./filter-bar";
import { Card, CardContent, CardHeader } from "../ui/card";

export interface TagListProps {
  name: string;
  count: number;
}

export default function TagList() {
  const { tagsList, setTagsList } = useTagsList();
  const { tags, status } = useTags();

  const isSuccess = status === "success";
  const isError = status === "error";

  // useEffect(() => {
  //   if (isSuccess && tags) {
  //     setTagsList(tags.items);
  //   }
  // }, [tags, isError, isSuccess, setTagsList, tagsList]);

  console.log(tags);

  if (!tags) {
    return <div></div>;
  }

  if (tags) {
    // console.log(tags.items);

    return (
      <div className="m-4">
        <Card className="container max-w-96 border-0">
          <CardHeader className="px-2">
            <FilterBar />
          </CardHeader>
          <CardContent className="flex flex-col px-2">
            {tags.items.slice(0, 14).map(({ name, count }) => (
              <TagCard key={name} name={name} count={count} />
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }
}
