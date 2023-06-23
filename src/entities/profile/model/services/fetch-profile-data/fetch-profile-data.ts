import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers';
import { Profile } from '../../types/profile';

interface LoginByUsernameProps {
  username: string
  password: string
}

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Profile>(
        '/profile',
      );

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(i18n.t('Введен неверный логин или пароль'));
    }
  },
);
