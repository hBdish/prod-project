import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './theme-switcher';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
