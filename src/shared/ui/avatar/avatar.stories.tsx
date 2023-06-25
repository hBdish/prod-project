import type { Meta, StoryObj } from '@storybook/react';

import TestImg from './test-img.png';

import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  args: {

  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 150,
    src: TestImg,
  },
};

export const Small: Story = {
  args: {
    size: 50,
    src: TestImg,
  },
};
