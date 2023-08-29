import type { Meta, StoryObj } from '@storybook/react';
import { Country, Currency } from '@/shared';
import { ProfileCard } from './profile-card';
import TestImg from '../../../../../shared/assets/for-test/test-img.png';

const meta: Meta<typeof ProfileCard> = {
  title: 'features/ProfileCard',
  component: ProfileCard,
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    data: {
      username: 'admin',
      age: 20,
      country: Country.Kazakhstan,
      lastname: 'TestLastName',
      first: 'TestFirstName',
      city: 'Almaty',
      currency: Currency.RUB,
      avatar: TestImg,
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'error',
  },
};
