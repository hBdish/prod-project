import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook';
import { AddCommentForm } from './add-comment-form';

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    onSendComment: { action: 'onSendComment' },
  },
};

export default meta;

type Story = StoryObj<typeof AddCommentForm>;

export const Default: Story = {
  args: {
  },
  decorators: [StoreDecorator({

  })],
};
