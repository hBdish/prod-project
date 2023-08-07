import type {Preview} from "@storybook/react";
import {RouterDecorator, StyleDecorator} from "../../src/shared/config/storybook";

import {LanguageDecorator} from "../../src/shared/config/storybook/language-decorator";

import {Theme} from "../../src/shared";

/*export const parameters = {
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: ['app', Theme.LIGHT], color: '#e8b7b7' },
      { name: 'dark', class: ['app', Theme.DARK], color: '#de0956' }
    ],
  },
};*/

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: ['app', Theme.LIGHT], color: '#e8b7b7' },
        { name: 'dark', class: ['app', Theme.DARK], color: '#021146' }
      ],
    },
  },
  decorators: [
    // @ts-ignore
    // StoreDecorator,
    LanguageDecorator,
    // @ts-ignore
    StyleDecorator,
    // ThemeDecorator(Theme.LIGHT), // Theme on all stories
    // @ts-ignore
    RouterDecorator,
  ]
};



export default preview;
