import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from '@/shared/config/i18n/i18n';
import { ThunkConfig } from '@/app/providers/store-provider';
import { getUserDataByIdQuery, User } from '../../../user';
import { USER_LOCALSTORAGE_KEY } from '@/shared';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue('');
    }

    try {
      const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

      console.log('response');

      return response;
    } catch (e) {
      return rejectWithValue(i18n.t('Error'));
    }
  },
);
