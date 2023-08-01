import { StateSchema } from '@/app/providers';

import { getLoginIsLoading } from './get-login-isLoading';

describe('GetLoginIsLoadingTest', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
