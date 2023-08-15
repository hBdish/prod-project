import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'shared/popups/Dropdown',
  component: Dropdown,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const MOCK = 'TEST';
export const Primary: Story = {
  args: {
    trigger: <button type="button">{MOCK}</button>,
    direction: 'bottomRight',
    items: [
      {
        content: 'Test1',
      },
    ],
  },
};
