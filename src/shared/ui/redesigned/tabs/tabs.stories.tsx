import type { Meta, StoryObj } from '@storybook/react';
import { TabsRedesigned } from './tabs';

const meta: Meta<typeof TabsRedesigned> = {
  title: 'shared/TabsRedesigned',
  component: TabsRedesigned,
  args: {},
  argTypes: {
    onTabClick: { action: 'onTabClick' },
  },
};

export default meta;

type Story = StoryObj<typeof TabsRedesigned>;

export const Primary: Story = {
  args: {
    tabs: [
      {
        value: 'tab 1',
        content: 'tab 1',
      },
      {
        value: 'tab 2',
        content: 'tab 2',
      },
      {
        value: 'tab 3',
        content: 'tab 3',
      },
    ],
    value: 'tab 2',
  },
};
