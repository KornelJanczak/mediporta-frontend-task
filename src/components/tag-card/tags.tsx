import { Tag } from "@/common/tags/use-tags";
import { Skeleton } from "../ui/skeleton";
import TagItem from "./tag-item";

export default function Tags({ tags }: { tags: Tag[] }) {
  return (
    <ul className="flex flex-col">
      {tags.map(({ name, count }) => (
        <TagItem key={name} name={name} count={count} />
      ))}
    </ul>
  );
}

export const TagsSkeleton = ({ length }: { length: number }) => {
  return (
    <ul className="flex flex-col">
      {Array.from({ length }).map((_, index) => (
        <li key={index} className="flex justify-between items-center p-2">
          <Skeleton className="w-full h-14" />
        </li>
      ))}
    </ul>
  );
};
