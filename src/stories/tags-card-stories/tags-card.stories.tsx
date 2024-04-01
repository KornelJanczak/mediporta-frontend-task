import TagsCard from "@/components/tags-card";
import { TanstackProvider } from "@/providers/tanstack-provider";
import { Meta } from "@storybook/react";

const meta: Meta<typeof TagsCard> = {
  component: TagsCard,
  title: "Tag card",
  decorators: [(Story) => <TanstackProvider> {Story()} </TanstackProvider>],
  tags: ["autodocs"],
};

export default meta;

export const Default = {};
