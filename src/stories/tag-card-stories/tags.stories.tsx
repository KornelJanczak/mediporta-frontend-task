import Tags from "@/components/tag-card/tags";
import * as TagStories from "./tag-item.stories";

export default {
  component: Tags,
  title: "Tags",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    tags: [
      { ...TagStories.Default.args, name: "JavaScript", count: 20000 },
      { ...TagStories.Default.args, name: "TypeScript", count: 10000 },
      { ...TagStories.Default.args, name: "React", count: 5000 },
      { ...TagStories.Default.args, name: "Vue", count: 3000 },
    ],
  },
};
