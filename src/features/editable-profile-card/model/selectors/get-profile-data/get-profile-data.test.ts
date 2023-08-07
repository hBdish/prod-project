import { Country, Currency } from '@/shared';
import { StateSchema } from '@/app/providers/store-provider';
import TestImg from '@/shared/assets/for-test/test-img.png';
import { getProfileData } from './get-profile-data';

describe('GetProfileDataTest', () => {
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
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
