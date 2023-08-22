import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './flex';

const meta: Meta<typeof Flex> = {
  title: 'shared/Flex',
  component: Flex,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Flex>;
/* eslint-disable */
export const Row: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const RowGap8: Story = {
  args: {
    gap: '8',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const RowGap24: Story = {
  args: {
    gap: '24',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const ColumnGap8: Story = {
  args: {
    gap: '8',
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const ColumnGap24: Story = {
  args: {
    gap: '24',
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};
