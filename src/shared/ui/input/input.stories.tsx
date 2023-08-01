import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers';
import { Input } from './input';

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
