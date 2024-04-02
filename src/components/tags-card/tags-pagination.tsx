import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useTagsList } from "@/hooks/use-tags-list/use-tags-list";
import { cn } from "@/lib/utils";

export default function TagsPagination() {
  const { setStartIndex, setEndIndex, startIndex, endIndex, numberOfTags } =
    useTagsList();

  const handlePrevious = () => {
    setStartIndex(
      startIndex - numberOfTags < 0 ? 0 : startIndex - numberOfTags
    );
    setEndIndex(endIndex - numberOfTags);

    console.log("HANDLE PREVIOUS");

    console.log(startIndex - numberOfTags, "STARTINDEX");
    console.log(endIndex - numberOfTags, "END INDEX");
  };

  const handleNext = () => {
    setStartIndex(startIndex + numberOfTags);
    setEndIndex(endIndex + numberOfTags);

    console.log("HANDLE NEXT");

    console.log(numberOfTags, "NUMBER OF TAGS");

    console.log(startIndex + numberOfTags, "STARTINDEX");
    console.log(endIndex + numberOfTags, "END INDEX");
  };

  const isFirstPage = startIndex <= 0;
  const isLastPage = endIndex >= 30;

  console.log(endIndex);

  console.log(isLastPage);

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
