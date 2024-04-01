import TagItem from "./tag-item";
import TagsSkeleton from "./tags-skeleton";
import ErrorMessage from "../error-message";
import { Tag } from "@/common/tags/use-tags";
import { useTagsList } from "@/hooks/use-tags-list/use-tags-list";

interface TagListProps {
  tags: Tag[];
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export default function TagsList({
  tags,
  isPending,
  isError,
  isSuccess,
}: TagListProps) {
  const { numberOfTags } = useTagsList();

  const slicedTagList = tags.slice(0, numberOfTags);

  const skeletonLength = numberOfTags - 1;

  if (isError)
    return <ErrorMessage title="Error" description="Failed to load tags" />;

  if (isPending) return <TagsSkeleton length={skeletonLength} />;

  if (isSuccess)
    return (
      <ul className="flex flex-col">
        {slicedTagList.map(({ name, count }) => (
          <TagItem key={name} name={name} count={count} />
        ))}
      </ul>
    );
}
