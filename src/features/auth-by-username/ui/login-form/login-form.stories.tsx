import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config';

import { LoginForm } from './login-form';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    login: { username: '123', password: '123' },
  })],
};

export const DefaultWithError: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    login: { username: '123', password: '123', error: 'Error' },
  })],
};
