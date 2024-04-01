import { Skeleton } from "../ui/skeleton";
import PropTypes from "prop-types";

export default function TagsSkeleton({ length }: { length: number }) {
  return (
    <ul className="flex flex-col gap-y-4">
      {Array.from({ length }).map((_, index) => (
        <li
          key={index}
          className="flex justify-between items-center px-4 py-1.5"
        >
          <Skeleton className="w-full h-14" />
        </li>
      ))}
    </ul>
  );
}

TagsSkeleton.propTypes = {
  length: PropTypes.number.isRequired,
};
