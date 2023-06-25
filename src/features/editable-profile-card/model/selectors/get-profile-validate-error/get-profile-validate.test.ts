import { StateSchema } from 'app/providers';
import { ValidateProfileError } from 'features';
import { getProfileValidateError } from './get-profile-validate-error';

describe('GetProfileIsValidate', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [ValidateProfileError.SERVER_ERROR],
      },
    };
    expect(getProfileValidateError(state as StateSchema)).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getProfileValidateError(state as StateSchema)).toEqual(undefined);
  });
});
