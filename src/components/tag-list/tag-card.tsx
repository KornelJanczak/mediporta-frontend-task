import { TagListProps } from ".";

const capitalizeFirstLetter = (tagName: string): string =>
  tagName.length > 0
    ? tagName.charAt(0).toUpperCase() + tagName.slice(1)
    : tagName;

export default function TagCard({ name, count }: TagListProps) {
  const tagName = capitalizeFirstLetter(name);
  const formatCountNumber = count.toLocaleString();

  return (
    <div className="flex justify-between items-center p-2">
      <h4 className="px-1 py-0.5 rounded-md text-sm text-primary bg-primary-foreground cursor-pointer">
        {tagName}
      </h4>
      <div className="flex flex-col items-end text-sm sm:text-base">
        <p>Related posts:</p>
        <p>{formatCountNumber}</p>
      </div>
    </div>
  );
}
