import axios from 'axios';
import { deepEqual } from 'assert';
import { loginByUsername } from 'features';
import { StateSchema } from 'app/providers';
import { Dispatch } from '@reduxjs/toolkit';
import { userActions } from 'entities/user';
import TestAsyncThunk from '../../../../../shared/lib/test/test-async-thunk';

describe('LoginByUsernameTest', () => {
  test('success login', async () => {
    const userValue = { username: '123', id: '1' };
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('unsuccessful login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Введен неверный логин или пароль');
  });
});
