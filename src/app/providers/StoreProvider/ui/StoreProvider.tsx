import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers';

import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

const initialState: DeepPartial<StateSchema> = {};
let store = createReduxStore(initialState as StateSchema); // TODO ВРЕМЕННОЕ РЕШЕНИЕ

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
  } = props;

  if (initialState) { store = createReduxStore(initialState as StateSchema); } // TODO ВРЕМЕННОЕ РЕШЕНИЕ
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
