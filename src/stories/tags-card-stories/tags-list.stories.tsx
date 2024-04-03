import TagsList from "@/components/tags-card/tags-list";
import * as TagStories from "./tag-item.stories";
import type { Meta } from "@storybook/react";

const tags = [
  { ...TagStories.Default.args, name: "JavaScript", count: 20000 },
  { ...TagStories.Default.args, name: "TypeScript", count: 10000 },
  { ...TagStories.Default.args, name: "React", count: 5000 },
  { ...TagStories.Default.args, name: "Vue", count: 3000 },
  { ...TagStories.Default.args, name: "Vue", count: 3000 },
  { ...TagStories.Default.args, name: "Vue", count: 3000 },
  { ...TagStories.Default.args, name: "Vue", count: 3000 },
  { ...TagStories.Default.args, name: "Vue", count: 3000 },
  { ...TagStories.Default.args, name: "Vue", count: 3000 },
  { ...TagStories.Default.args, name: "Vue", count: 3000 },
  { ...TagStories.Default.args, name: "Vue", count: 3000 },
  { ...TagStories.Default.args, name: "Vue", count: 3000 },
  { ...TagStories.Default.args, name: "Vue", count: 3000 },
  { ...TagStories.Default.args, name: "Vue", count: 3000 },
  { ...TagStories.Default.args, name: "Vue", count: 3000 },
  { ...TagStories.Default.args, name: "Vue", count: 3000 },
];

const meta: Meta<typeof TagsList> = {
  component: TagsList,
  title: "Tags List",
  tags: ["autodocs"],
};

export default meta;

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
    // tags,
    isPending: false,
    isError: true,
    isSuccess: false,
  },
};

export const Pending = {
  args: {
    // tags,
    isPending: true,
    isError: false,
    isSuccess: false,
  },
};
