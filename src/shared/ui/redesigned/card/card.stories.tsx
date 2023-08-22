import type { Meta, StoryObj } from '@storybook/react';

import { CardRedesigned } from './card';

const meta: Meta<typeof CardRedesigned> = {
  title: 'shared/CardRedesigned',
  component: CardRedesigned,
  args: {},
};

export default meta;

type Story = StoryObj<typeof CardRedesigned>;

export const Primary: Story = {
  args: {
    // eslint-disable-next-line i18next/no-literal-string
    children: <div>TEST CARD</div>,
  },
};
