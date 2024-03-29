import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTagsList } from "@/hooks/use-tags-list";

const selectOptions = [
  { label: "Most related posts", value: "most-posts" },
  { label: "Least related posts", value: "least-posts" },
  { label: "A", value: "a" },
  { label: "Z", value: "z" },
];

export default function FilterBar() {
  const { setNumberOfTags, setSortOption } = useTagsList();

  const handleNumberOfTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfTags(Number(e.target.value));
  };

  const handleSortOption = (selectValue: string) => {
    setSortOption(selectValue);
  };

  return (
    <div className="flex justify-between items-center gap-x-5 w-full">
      <Input
        onChange={handleNumberOfTags}
        placeholder="Number of tags"
        type="number"
        className="text-text focus:border-primary"
      />
      <Select onValueChange={handleSortOption}>
        <SelectTrigger className="focus:border-primary">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent onChange={(e) => console.log(e)} className="border-0">
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
