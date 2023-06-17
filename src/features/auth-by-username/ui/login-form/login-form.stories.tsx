import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers';

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
