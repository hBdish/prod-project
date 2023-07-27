import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdminPanelPageSchema } from '../types/AdminPanelPageSchema';

const initialState: AdminPanelPageSchema = {};

export const AdminPanelPageSlice = createSlice({
  name: 'AdminPanelPage',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {

    },
  },
});

export const { actions: AdminPanelPageActions } = AdminPanelPageSlice;
export const { reducer: AdminPanelPageReducer } = AdminPanelPageSlice;
