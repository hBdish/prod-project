import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Navbar } from './navbar';
import { Theme } from '@/shared';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: { },
  decorators: [StoreDecorator({
    // common: { username: '123', password: '123' },
  })],
};

export const Dark: Story = {
  args: { },
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      // common: { username: '123', password: '123' },
    }),
  ],
};
