import TagsList from "@/components/tag-card/tags-list";
import * as TagStories from "./tag-item.stories";

export default {
  component: TagsList,
  title: "Tags List",
  tags: ["autodocs"],
};

const tags = [
  { ...TagStories.Default.args, name: "JavaScript", count: 20000 },
  { ...TagStories.Default.args, name: "TypeScript", count: 10000 },
  { ...TagStories.Default.args, name: "React", count: 5000 },
  { ...TagStories.Default.args, name: "Vue", count: 3000 },
];

export const Default = {
  args: {
    tags,
    isPending: false,
    isError: false,
    isSuccess: true,
  },
};

export const Error = {
  args: {
    tags,
    isPending: false,
    isError: true,
    isSuccess: false,
  },
};

export const Pending = {
  args: {
    tags,
    isPending: true,
    isError: false,
    isSuccess: false,
  },
};
