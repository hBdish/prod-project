import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/app/providers';
import { Loader } from '@/shared';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Light: Story = {
  args: { },
};

export const Dark: Story = {
  args: { },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
