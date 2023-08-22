import type { Meta, StoryObj } from '@storybook/react';

import TestImg from '../../../assets/for-test/test-img.png';

import { AppImage } from './app-image';

const meta: Meta<typeof AppImage> = {
  title: 'shared/AppImage',
  component: AppImage,
  args: {},
};

export default meta;

type Story = StoryObj<typeof AppImage>;

export const Primary: Story = {
  args: {
    src: TestImg,
  },
};

export const ErrorFallback: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    errorFallback: <div>ERROR</div>,
  },
};
