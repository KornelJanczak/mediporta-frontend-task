import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTagsList } from "@/hooks/use-tags-list/use-tags-list";
import { cn } from "@/lib/utils";

const TAGS_LIMIT = 30;

export default function TagsPagination() {
  const { setCurrentPage, currentPage, tagsPerPage } = useTagsList();

  const startIndex = currentPage * tagsPerPage;
  const endIndex = startIndex + tagsPerPage;
  const MAX_PAGES = Math.ceil(TAGS_LIMIT / tagsPerPage);

  const handlePrevious = () => setCurrentPage(Math.max(currentPage - 1, 0));

  const handleNext = () => setCurrentPage(Math.min(currentPage + 1, MAX_PAGES));

  const isFirstPage = startIndex <= 0;
  const isLastPage = endIndex >= TAGS_LIMIT;

  const buttonClassName =
    "flex items-center justify-center cursor-pointer hover:text-primary hover:transition-all hover:duration-300";

  return (
    <div className="flex justify-between w-full py-4">
      <button
        aria-label="Go to previous page"
        onClick={handlePrevious}
        className={cn(
          buttonClassName,
          isFirstPage && "pointer-events-none opacity-50"
        )}
      >
        <ChevronLeft className="h-4 w-4" />
        <span>Previous</span>
      </button>

      <button
        aria-label="Go to next page"
        onClick={handleNext}
        className={cn(
          buttonClassName,
          isLastPage && "pointer-events-none opacity-50"
        )}
      >
        <span>Next</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
