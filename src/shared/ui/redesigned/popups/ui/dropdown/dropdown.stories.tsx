import type { Meta, StoryObj } from '@storybook/react';
import { DropdownRedesigned } from './dropdown';

const meta: Meta<typeof DropdownRedesigned> = {
  title: 'shared/popups/DropdownRedesigned',
  component: DropdownRedesigned,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DropdownRedesigned>;

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
