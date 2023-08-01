import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook';
import { CommentList } from './comment-list';

const meta: Meta<typeof CommentList> = {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    // onSendComment: { action: 'onSendComment' },
  },
};

export default meta;

type Story = StoryObj<typeof CommentList>;

export const Default: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'hello world',
        user: {
          id: '1',
          username: 'Vasya',
        },
      },
      {
        id: '2',
        text: 'world hello',
        user: {
          id: '2',
          username: 'Julia',
        },
      },
    ],
  },
  decorators: [StoreDecorator({

  })],
};

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
  decorators: [StoreDecorator({

  })],
};
