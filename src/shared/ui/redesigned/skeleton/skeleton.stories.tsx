import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { SkeletonRedesigned } from './skeleton';
import { Theme } from '@/shared';

const meta: Meta<typeof SkeletonRedesigned> = {
  title: 'shared/SkeletonRedesigned',
  component: SkeletonRedesigned,
  args: {},
};

export default meta;

type Story = StoryObj<typeof SkeletonRedesigned>;

export const Primary: Story = {
  args: {
    width: '100%',
    height: 100,
  },
};

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
};

export const PrimaryDark: Story = {
  args: {
    width: '100%',
    height: 100,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
