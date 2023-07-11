import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config';
import { CommentCard } from 'entities/comment';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/CommentCard',
  component: CommentCard,
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const Default: Story = {
  args: {
    comment: {
      id: '1',
      text: 'hello world',
      user: {
        id: '1',
        username: 'Vasya',
      },
    },
  },
  decorators: [StoreDecorator({

  })],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [StoreDecorator({

  })],
};
