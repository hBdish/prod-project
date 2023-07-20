import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator, ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers';
import { MainPage } from './main-page';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  decorators: [
    StoreDecorator({ }),
  ],
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
  args: { },
};

export const Dark: Story = {
  args: { },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
