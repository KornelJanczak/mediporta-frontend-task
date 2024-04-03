import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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

  return (
    <Pagination className="items-center">
      <PaginationContent className="flex justify-between w-full py-4">
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePrevious}
            className={cn(
              "cursor-pointer",
              isFirstPage && "pointer-events-none opacity-50"
            )}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={handleNext}
            className={cn(
              "cursor-pointer",
              isLastPage && "pointer-events-none opacity-50"
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
