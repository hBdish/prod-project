import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook';

import { AppLinkRedesigned } from './app-link';
import { Theme } from '@/shared';

const meta: Meta<typeof AppLinkRedesigned> = {
  title: 'shared/AppLinkRedesigned',
  component: AppLinkRedesigned,
  args: {
    children: 'TEST',
    to: '/',
  },
};

export default meta;

type Story = StoryObj<typeof AppLinkRedesigned>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'red',
  },
};

export const PrimaryDark: Story = {
  args: {
    variant: 'primary',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    variant: 'red',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
