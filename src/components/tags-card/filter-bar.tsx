import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import { SelectGroup } from "@/components/ui/select";
import { useTagsList } from "@/hooks/use-tags-list/use-tags-list";
import { type SortOptions } from "@/helpers/sort-tags";

const selectOptions = [
  { label: "Most related posts", value: "most-related-posts" },
  { label: "Least related posts", value: "least-related-posts" },
  { label: "A", value: "alphabetical-asc" },
  { label: "Z", value: "alphabetical-desc" },
];

export default function FilterBar() {
  const { tagsPerPage, setTagsPerPage, setSortOption } = useTagsList();

  const handleNumberOfTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagsPerPage(Number(e.target.value));
  };

  const handleSortOption = (selectValue: SortOptions) => {
    setSortOption(selectValue);
  };

  return (
    <div className="flex flex-row gap-x-4">
      <div className="flex flex-col gap-y-2 w-full">
        <Label htmlFor="number-of-tags" className="text-sm sm:text-base">
          Tags per page
        </Label>
        <Input
          id="number-of-tags"
          onChange={handleNumberOfTags}
          placeholder="Number of tags"
          className="text-text focus:border-primary"
          type="number"
          min={1}
          max={30}
          defaultValue={tagsPerPage}
        />
      </div>
      <Select onValueChange={handleSortOption}>
        <SelectTrigger className="focus:border-primary mt-auto">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="border-0" align="end">
          <SelectGroup className="flex flex-col">
            <SelectLabel>Sort by</SelectLabel>
            {selectOptions.map(({ label, value }) => (
              <SelectItem
                key={value}
                value={value}
                className="hover:bg-primary"
              >
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
