import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers';
import { useEffect } from 'react';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared';

export type ReducersList = {
  [nameOfReducer in StateSchemaKey]?: Reducer
}

interface UseDynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const useDynamicModuleLoader = (props: UseDynamicModuleLoaderProps) => {
  const {
    reducers,
    removeAfterUnmount = true,
  } = props;

  const store = useStore() as ReduxStoreWithManager; // TODO ВРЕМЕННОЙ РЕШЕНИЕ
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([nameOfReducer, reducer]: [StateSchemaKey, Reducer]) => {
      store.reducerManager.add(nameOfReducer, reducer);
      dispatch({ type: `@INIT ${nameOfReducer} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([nameOfReducer, reducer]: [StateSchemaKey, Reducer]) => {
          store.reducerManager.remove(nameOfReducer);
          dispatch({ type: `@DESTROY ${nameOfReducer} reducer` });
        });
      }
    };
  }, []); // eslint-disable-line
};
