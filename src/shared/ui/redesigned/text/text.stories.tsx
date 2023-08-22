import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook';
import { TextRedesigned } from './text';
import { Theme } from '@/shared';

const meta: Meta<typeof TextRedesigned> = {
  title: 'shared/TextRedesigned',
  component: TextRedesigned,
};
export default meta;

type Story = StoryObj<typeof TextRedesigned>;

export const Primary: Story = {
  args: {
    title: 'Test title',
    text: 'Test text text tesT',
  },
};

export const SizeS: Story = {
  args: {
    title: 'Test title',
    text: 'Test text text tesT',
    size: 'size_s',
  },
};

export const SizeM: Story = {
  args: {
    title: 'Test title',
    text: 'Test text text tesT',
    size: 'size_m',
  },
};

export const SizeL: Story = {
  args: {
    title: 'Test title',
    text: 'Test text text tesT',
    size: 'size_l',
  },
};

export const Error: Story = {
  args: {
    title: 'Test title',
    text: 'Test text text tesT',
    variant: 'error',
  },
};

export const Dark: Story = {
  args: {
    title: 'Test title',
    text: 'Test text text tesT',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
  args: {
    title: 'Test title',
  },
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Test title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyText: Story = {
  args: {
    text: 'Test text text tesT',
  },
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Test text text tesT',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
