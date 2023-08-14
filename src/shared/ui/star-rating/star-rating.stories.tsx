import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { StarRating } from './star-rating';
import { Theme } from '@/shared';

const meta: Meta<typeof StarRating> = {
  title: 'shared/StarRating',
  component: StarRating,
  decorators: [StoreDecorator({})],
};

export default meta;

type Story = StoryObj<typeof StarRating>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
