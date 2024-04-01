import type { Preview } from "@storybook/react";
import { QueryCache, QueryClientProvider } from "@tanstack/react-query";
import { TanstackProvider } from "../src/providers/tanstack-provider";
import "../src/index.css";

// export const decorators = [
//   (story)=> (<TanstackProvider > {story()} </TanstackProvider>)
// ]

/** @type { import('@storybook/react').Preview } */
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
