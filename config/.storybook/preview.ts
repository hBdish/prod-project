import type {Preview} from "@storybook/react";
import {RouterDecorator, StyleDecorator, ThemeDecorator} from "../../src/shared/config/storybook";
import {Theme} from "app/providers";
import {LanguageDecorator} from "../../src/shared/config/storybook/language-decorator";


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
    // StoreDecorator,
    LanguageDecorator,
    // @ts-ignore
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT), // Theme on all stories
    // @ts-ignore
    RouterDecorator,
  ]
};


export default preview;
