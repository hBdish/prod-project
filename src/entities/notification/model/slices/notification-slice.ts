import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationSchema } from '../types/notification-schema';

const initialState: NotificationSchema = {
  id: '',
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {

    },
  },
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(, (state) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const { actions: notificationActions } = notificationSlice;
export const { reducer: notificationReducer } = notificationSlice;
