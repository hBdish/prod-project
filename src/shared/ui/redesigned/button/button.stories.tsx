import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook';
import { ButtonRedesigned } from './button';
import { Theme } from '@/shared';

const meta: Meta<typeof ButtonRedesigned> = {
  title: 'shared/ButtonRedesigned',
  component: ButtonRedesigned,
};

export default meta;

type Story = StoryObj<typeof ButtonRedesigned>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    variant: 'clear',
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
  },
};

export const OutlineL: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
    size: 'size_l',
  },
};

export const OutlineXL: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
    size: 'size_xl',
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
