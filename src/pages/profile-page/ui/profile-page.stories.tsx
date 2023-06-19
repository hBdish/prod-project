import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator, ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers';
import { ProfilePage } from './profile-page.lazy';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: { },
  decorators: [
    StoreDecorator({}),
  ],
};

export const Dark: Story = {
  args: { },
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
  ],
};
