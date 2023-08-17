import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities';
import i18n from '@/shared/config/i18n/i18n';
import { ThunkConfig } from '@/app/providers/store-provider';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'common/loginByUsername',
  async (authData, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('Введен неверный логин или пароль'));
    }
  },
);
