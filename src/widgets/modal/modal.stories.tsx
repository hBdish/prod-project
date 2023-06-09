import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers';
import { Modal } from './modal';

const meta: Meta<typeof Modal> = {
  title: 'widgets/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const ModalPrimary: Story = {
  args: {
    isOpen: true,
  },
};

export const ModalDark: Story = {
  args: {
    isOpen: true,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
