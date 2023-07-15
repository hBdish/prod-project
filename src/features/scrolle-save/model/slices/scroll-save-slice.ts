import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from '../types/types';

const initialState: ScrollSaveSchema = {
  scroll: {},
};

export const scrollSaveSlice = createSlice({
  name: 'scroll-save',
  initialState,
  reducers: {
    setScrollPosition:
      (state, { payload }: PayloadAction<{path: string, position: number}>) => {
        state.scroll[payload.path] = payload.position;
      },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProfileData.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = undefined;
  //     })
  //     .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
  //       state.isLoading = false;
  //       state.data = action.payload;
  //       state.form = action.payload;
  //     })
  //     .addCase(fetchProfileData.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     })
  //     .addCase(updateProfileData.pending, (state) => {
  //       state.isLoading = true;
  //       state.validateError = undefined;
  //     })
  //     .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
  //       state.isLoading = false;
  //       state.data = action.payload;
  //       state.form = action.payload;
  //       state.readonly = true;
  //       state.validateError = undefined;
  //     })
  //     .addCase(updateProfileData.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.validateError = action.payload;
  //     });
  // },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
