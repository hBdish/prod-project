import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers';
import { ThemeSwitcher } from 'widgets';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
  args: { },
};

export const Dark: Story = {
  args: { },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
