import { Country, Currency } from '@/shared';
import { StateSchema } from '@/app/providers/store-provider';
import TestImg from '@/shared/assets/for-test/test-img.png';
import { getProfileForm } from './get-profile-form';

describe('GetProfileForm', () => {
  test('should return error', () => {
    const data = {
      username: 'admin',
      age: 20,
      country: Country.Kazakhstan,
      lastname: 'TestLastName',
      first: 'TestFirstName',
      city: 'Almaty',
      currency: Currency.RUB,
      avatar: TestImg,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
