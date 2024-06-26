import { TagsListProps } from ".";
import PropTypes from "prop-types";
const capitalizeFirstLetter = (tagName: string): string =>
  tagName.length > 0
    ? tagName.charAt(0).toUpperCase() + tagName.slice(1)
    : tagName;

export default function TagItem({ name, count }: TagsListProps) {
  const tagName = capitalizeFirstLetter(name);
  const formatCountNumber = count.toLocaleString();

  return (
    <li className="flex justify-between items-center px-4 py-1.5 border-border border rounded-md bg-card ">
      <span className="px-1 py-0.5 rounded-md text-sm text-primary bg-primary-foreground">
        {tagName}
      </span>
      <div className="flex flex-col items-end text-sm sm:text-base">
        <p>Related posts:</p>
        <p>{formatCountNumber}</p>
      </div>
    </li>
  );
}

TagItem.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
