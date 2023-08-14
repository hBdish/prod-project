import { loginActions, loginReducer } from '../slice/loginSlice';
import { LoginSchema } from '../types/login-schema';

describe('LoginSliceTest', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('1231234'))).toEqual({
      username: '1231234',
    });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('1231234'))).toEqual({
      password: '1231234',
    });
  });
});
