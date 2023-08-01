import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook';
import { Country, Currency } from '@/helpers';
import { EditableProfileCard } from './editable-profile-card';
import TestImg from '../../../shared/assets/for-test/test-img.png';

const meta: Meta<typeof EditableProfileCard> = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
};

export default meta;

type Story = StoryObj<typeof EditableProfileCard>;

export const Default: Story = {
  args: {

  },
  decorators: [StoreDecorator({
    profile: {
      form: {
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
  })],
};
