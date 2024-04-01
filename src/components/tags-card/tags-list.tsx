import TagItem from "./tag-item";
import TagsSkeleton from "./tags-skeleton";
import ErrorMessage from "../error-message";
import { Tag } from "@/common/tags/use-tags";
import { useTagsList } from "@/hooks/use-tags-list/use-tags-list";
import PropTypes from "prop-types";

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
      <ul className="flex flex-col gap-y-4">
        {slicedTagList.map(({ name, count }) => (
          <TagItem key={name} name={name} count={count} />
        ))}
      </ul>
    );
}

TagsList.propTypes = {
  tags: PropTypes.array.isRequired,
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};
