import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './card';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: <div>TEST CARD</div>,
  },
};
