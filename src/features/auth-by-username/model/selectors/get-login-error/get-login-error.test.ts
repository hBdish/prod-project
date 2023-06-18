import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers';
import { getLoginError } from './get-login-error';

describe('GetLoginErrorTest', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        error: 'error',
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getLoginError(state as StateSchema)).toEqual('');
  });
});
