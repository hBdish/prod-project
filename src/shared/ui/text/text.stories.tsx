import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers';
import { Text, TextTheme } from './text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Test title',
    text: 'Test text text tesT',
  },
};

export const Error: Story = {
  args: {
    title: 'Test title',
    text: 'Test text text tesT',
    theme: TextTheme.ERROR,
  },
};

export const Dark: Story = {
  args: {
    title: 'Test title',
    text: 'Test text text tesT',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const OnlyTitle: Story = {
  args: {
    title: 'Test title',
  },
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Test title',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const OnlyText: Story = {
  args: {
    text: 'Test text text tesT',
  },
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Test text text tesT',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
