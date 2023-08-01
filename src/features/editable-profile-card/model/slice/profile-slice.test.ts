import {
  profileActions, profileReducer, ProfileSchema, updateProfileData,
} from '@/features';
import { Country, Currency } from '@/helpers';
import TestImg from '@/shared/assets/for-test/test-img.png';
import { ValidateProfileError } from '../const/editableProfileCardConst';

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

describe('profileSliceTest', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadOnly(true),
    )).toEqual({ readonly: true });
  });

  test('test cansel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.canselEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '1' } };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({
        username: '123',
      }),
    )).toEqual({
      form: { username: '123' },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      validateError: undefined,
      readonly: true,
      validateErrors: undefined,
      form: data,
      data,
    });
  });
});
