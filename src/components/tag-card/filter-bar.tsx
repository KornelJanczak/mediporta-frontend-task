import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const selectOptions = [
  { label: "Most related posts", value: "most-posts" },
  { label: "Least related posts", value: "least-posts" },
  { label: "A", value: "a" },
  { label: "Z", value: "z" },
];

export default function FilterBar() {
  return (
    <div className="flex justify-between items-center gap-x-5 w-full">
      <Input
        placeholder="Number of tags"
        type="number"
        className="text-text focus:border-primary"
      />
      <Select>
        <SelectTrigger className="focus:border-primary">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="border-0">
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
