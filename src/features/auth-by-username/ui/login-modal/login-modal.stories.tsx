import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers';
import { LoginModal } from './login-modal';

const meta: Meta<typeof LoginModal> = {
  title: 'features/LoginModal',
  component: LoginModal,
};

export default meta;

type Story = StoryObj<typeof LoginModal>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
  decorators: [StoreDecorator({
  })],
};
