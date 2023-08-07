import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Input } from './input';
import { Theme } from '@/shared';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Text',
  },
};

export const Dark: Story = {
  args: {
    placeholder: 'Text',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
