import { StateSchema } from 'app/providers';
import { getLoginUsername } from './get-login-username';

describe('GetLoginUsernameTest', () => {
  test('should return admin', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'admin',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('admin');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
