import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers';
import { PageError } from 'widgets';

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
};

export default meta;

type Story = StoryObj<typeof PageError>;

export const Light: Story = {
  args: { },
};

export const Dark: Story = {
  args: { },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
