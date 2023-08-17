import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from '@/shared/config/i18n/i18n';
import { ThunkConfig } from '@/app/providers/store-provider';
import { authDataSelector, getJsonSettings, JsonSettings, setJsonSettingsMutation } from '../../../user';

export const saveJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
  'user/saveJsonSettings',
  async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    const userData = authDataSelector(getState());
    const currentSettings = getJsonSettings(getState());

    if (!userData) {
      return rejectWithValue('');
    }

    try {
      const response = await dispatch(
        setJsonSettingsMutation({
          userId: userData.id,
          jsonSettings: {
            ...currentSettings,
            ...newJsonSettings,
          },
        }),
      ).unwrap();

      if (!response.jsonSettings) {
        return rejectWithValue('');
      }

      console.log(response.jsonSettings);

      return response.jsonSettings;
    } catch (e) {
      return rejectWithValue(i18n.t('Введен неверный логин или пароль'));
    }
  },
);
