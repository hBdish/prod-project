import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers';
import { AboutPage } from './about-page';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
  args: { },
  decorators: [
    StoreDecorator({ }),
  ],
};

export const Dark: Story = {
  args: { },
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ }),
  ],
};
