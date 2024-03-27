import Button from "@/components/button";
import type { Meta, StoryObj } from "@storybook/react";
// import "../src/tailwind.css";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    className: "bg-red",
    label: "siemano",
  },
};
