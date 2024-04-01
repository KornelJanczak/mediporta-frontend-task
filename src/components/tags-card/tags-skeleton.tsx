import { Skeleton } from "../ui/skeleton";
import PropTypes from "prop-types";

export default function TagsSkeleton({ length }: { length: number }) {
  return (
    <ul className="flex flex-col">
      {Array.from({ length }).map((_, index) => (
        <li key={index} className="flex justify-between items-center p-2">
          <Skeleton className="w-full h-14" />
        </li>
      ))}
    </ul>
  );
}

TagsSkeleton.propTypes = {
  length: PropTypes.number.isRequired,
};
