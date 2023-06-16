import type {Preview} from "@storybook/react";
import {RouterDecorator, StoreDecorator, StyleDecorator, ThemeDecorator} from "../../src/shared/config/storybook";
import {Theme} from "app/providers";


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    // @ts-ignore
    StoreDecorator,
    // @ts-ignore
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT), // Theme on all stories
    // @ts-ignore
    RouterDecorator,
  ]
};


export default preview;
