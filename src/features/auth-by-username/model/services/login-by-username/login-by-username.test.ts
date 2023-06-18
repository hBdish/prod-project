import axios from 'axios';
import { deepEqual } from 'assert';
import { loginByUsername } from 'features';
import { StateSchema } from 'app/providers';
import { Dispatch } from '@reduxjs/toolkit';
import { userActions } from 'entities/user';
import TestAsyncThunk from '../../../../../shared/lib/test/test-async-thunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

// describe('LoginByUsernameTest', () => {
//   let dispatch: Dispatch;
//   let getState: () => StateSchema;
//
//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//   });
//
//   test('success login', async () => {
//     const userValue = { username: '123', id: '1' };
//     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
//     const action = loginByUsername({ username: '123', password: '123' });
//     const result = await action(dispatch, getState, undefined);
//
//     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
//     expect(dispatch).toHaveBeenCalledTimes(3);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe('fulfilled');
//   });
//
//   test('unsuccessful login', async () => {
//     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
//     const action = loginByUsername({ username: '123', password: '123' });
//     const result = await action(dispatch, getState, undefined);
//
//     expect(dispatch).toHaveBeenCalledTimes(2);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe('rejected');
//     expect(result.payload).toEqual('Введен неверный логин или пароль');
//   });
// });
describe('LoginByUsernameTest', () => {
  test('success login', async () => {
    const userValue = { username: '123', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('unsuccessful login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Введен неверный логин или пароль');
  });
});
