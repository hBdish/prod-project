import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './sidebar';
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
  ],
};

export const NoAuth: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {},
    }),
  ],
};
