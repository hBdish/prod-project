import type { Meta, StoryObj } from '@storybook/react';

import TestImg from '../../../assets/for-test/test-img.png';

import { AvatarRedesigned } from './avatar';

const meta: Meta<typeof AvatarRedesigned> = {
  title: 'shared/AvatarRedesigned',
  component: AvatarRedesigned,
  args: {},
};

export default meta;

type Story = StoryObj<typeof AvatarRedesigned>;

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
