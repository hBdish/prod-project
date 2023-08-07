import { Country, Currency } from '@/shared';
import TestImg from '@/shared/assets/for-test/test-img.png';
import { ValidateProfileError } from '../../const/editableProfileCardConst';
import { validateProfileData } from './validate-profile-data';

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

describe('validateDataTest', () => {
  test('success validate', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('unsuccessful validate without first and last name', async () => {
    const result = validateProfileData({ ...data, lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('unsuccessful validate without data', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('unsuccessful validate without country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('unsuccessful validate without age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
});
