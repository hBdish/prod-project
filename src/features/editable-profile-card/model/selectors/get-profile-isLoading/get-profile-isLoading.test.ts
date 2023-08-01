import { StateSchema } from '@/app/providers';
import { getProfileIsLoading } from './get-profile-isLoading';

describe('GetProfileIsLoading', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
