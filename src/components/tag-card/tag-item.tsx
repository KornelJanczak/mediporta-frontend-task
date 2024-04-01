import { TagListProps } from ".";
import PropTypes from "prop-types";
const capitalizeFirstLetter = (tagName: string): string =>
  tagName.length > 0
    ? tagName.charAt(0).toUpperCase() + tagName.slice(1)
    : tagName;

export default function TagItem({ name, count }: TagListProps) {
  const tagName = capitalizeFirstLetter(name);
  const formatCountNumber = count.toLocaleString();

  return (
    <li className="flex justify-between items-center p-2">
      <h4 className="px-1 py-0.5 rounded-md text-sm text-primary bg-primary-foreground cursor-pointer">
        {tagName}
      </h4>
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
