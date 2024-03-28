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
    <div className="flex justify-between items-center w-full">
      <Input placeholder="Search tags" type="number" />
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {selectOptions.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
