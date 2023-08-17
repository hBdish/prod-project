import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setFeatureFlags, USER_LOCALSTORAGE_KEY } from '@/shared';
import { User, UserSchema } from '../types/user';
import { saveJsonSettings } from '../service/save-json-settings';
import { JsonSettings } from '@/entities';
import { initAuthData } from '../service/init-auth-data';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);

      localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveJsonSettings.fulfilled, (state, { payload }: PayloadAction<JsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = payload;
        }
      })
      .addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<User>) => {
        state.authData = payload;
        setFeatureFlags(payload.features);
        state._inited = true;
      })
      .addCase(initAuthData.rejected, (state) => {
        state._inited = true;
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
