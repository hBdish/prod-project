import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { InputRedesigned } from './input';
import { Theme } from '@/shared';

const meta: Meta<typeof InputRedesigned> = {
  title: 'shared/InputRedesigned',
  component: InputRedesigned,
};

export default meta;

type Story = StoryObj<typeof InputRedesigned>;

export const Default: Story = {
  args: {
    placeholder: 'Text',
  },
};

export const Dark: Story = {
  args: {
    placeholder: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
