import ErrorMessage from "@/components/error-message";

export default {
  component: ErrorMessage,
  title: "Error Message",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    title: "Error!",
    description:
      "Failed to retrieve tags. Please try again later or contact support for assistance.",
  },
};



