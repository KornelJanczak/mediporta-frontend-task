import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { useTagsList } from "@/hooks/use-tags-list/use-tags-list";
import { type SortOptions } from "@/hooks/use-tags-list/helpers/sort-tags";

const selectOptions = [
  { label: "Most related posts", value: "most-related-posts" },
  { label: "Least related posts", value: "least-related-posts" },
  { label: "A", value: "alphabetical-asc" },
  { label: "Z", value: "alphabetical-desc" },
];

export default function FilterBar() {
  const { setNumberOfTags, setSortOption, numberOfTags } = useTagsList();

  const handleNumberOfTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfTags(Number(e.target.value));
  };

  const handleSortOption = (selectValue: SortOptions) => {
    setSortOption(selectValue);
  };

  return (
    <div className="flex justify-between items-center gap-x-5 w-full">
      <Input
        onChange={handleNumberOfTags}
        placeholder="Number of tags"
        className="text-text focus:border-primary"
        type="number"
        min={0}
        defaultValue={numberOfTags}
      />
      <Select
        onValueChange={handleSortOption}
        defaultValue="most-related-posts"
      >
        <SelectTrigger className="focus:border-primary">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="border-0" align="end">
          {selectOptions.map(({ label, value }) => (
            <SelectItem key={value} value={value} className="hover:bg-primary">
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
