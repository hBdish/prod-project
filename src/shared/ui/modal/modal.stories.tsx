import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const ModalPrimary: Story = {
  args: {
    isOpen: true,
  },
};
