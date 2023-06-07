import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers';

import { AppLink, AppLinkTheme } from './app-link';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    children: 'TEST',
    to: '/',
  },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

// export const Dark: Story = {
//   args: { },
//   decorators: [
//     ThemeDecorator(Theme.DARK),
//   ],
// };
