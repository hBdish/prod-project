import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Select value',
    options: [
      { value: '123', content: 'First' },
      { value: '456', content: 'Second' },
    ],
  },
};
