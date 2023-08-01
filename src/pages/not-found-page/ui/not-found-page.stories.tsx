import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers';
import { NotFoundPage } from './not-found-page';

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

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
