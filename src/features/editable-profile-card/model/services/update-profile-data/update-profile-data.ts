import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers';
import { getProfileForm } from '../../selectors/get-profile-form/get-profile-form';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileForm(getState());

    try {
      const response = await extra.api.put<Profile>(
        '/profile',
        formData,
      );

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(i18n.t('Введен неверный логин или пароль'));
    }
  },
);
