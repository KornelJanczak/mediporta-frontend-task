import TagItem from "./tag-item";
import TagsSkeleton from "./tags-skeleton";
import ErrorMessage from "../error-message";
import { Tag } from "@/common/tags/use-tags";
import { useTagsList } from "@/hooks/use-tags-list/use-tags-list";
import PropTypes from "prop-types";
import sortTags from "@/helpers/sort-tags";

interface TagsListProps {
  tags?: Tag[];
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export default function TagsList({
  tags,
  isPending,
  isError,
  isSuccess,
}: TagsListProps) {
  const { tagsPerPage, currentPage, sortOption } = useTagsList();

  const skeletonLength = tagsPerPage - 1;
  const startIndex = currentPage * tagsPerPage;
  const endIndex = startIndex + tagsPerPage;



  if (isError || !tags) {
    return <ErrorMessage title="Error" description="Failed to load tags" />;
  }

  if (isPending) {
    return <TagsSkeleton length={skeletonLength} />;
  }

  if (isSuccess && tags) {
    const slicedTagList = tags.slice(startIndex, endIndex);

    const sortedTags = sortTags(slicedTagList, sortOption);

    return (
      <ul aria-live="polite" className="flex flex-col gap-y-4">
        {sortedTags.map(({ name, count }) => (
          <TagItem key={name} name={name} count={count} />
        ))}
      </ul>
    );
  }
}

TagsList.propTypes = {
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};
