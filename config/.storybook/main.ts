import type {StorybookConfig} from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../../src/**/*.mdx",
    "../../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      }
    },
    "@storybook/addon-interactions",
    "storybook-addon-themes"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async webpackFinal(config)  {
    config!.resolve!.alias = {
      ...(config!.resolve!.alias || []),
      '@': path.resolve(__dirname, '..', '..', 'src'),
    }

    return config
}
};
export default config;
