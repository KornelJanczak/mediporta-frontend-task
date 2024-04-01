import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

interface ErrorMessageProps {
  className?: string;
  title: string;
  description: string;
}

export default function ErrorMessage({
  className,
  title,
  description,
}: ErrorMessageProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center py-4 gap-y-2",
        className
      )}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
