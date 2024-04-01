import TagCard from "@/components/tag-card";
import { TanstackProvider } from "@/providers/tanstack-provider";
import { Meta } from "@storybook/react";

const meta: Meta<typeof TagCard> = {
  component: TagCard,
  title: "Tag card",
  decorators: [
    (Story) => <TanstackProvider> {Story()} </TanstackProvider>,
  ],
  tags: ["autodocs"],
};

export default meta;

export const Default = {};
