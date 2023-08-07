import { useStore } from 'react-redux';
import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/store-provider';
import { useAppDispatch } from '@/shared';

export type ReducersList = {
  [nameOfReducer in StateSchemaKey]?: Reducer<NonNullable<StateSchema[nameOfReducer]>>
}

interface UseDynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const useDynamicModuleLoader = (props: UseDynamicModuleLoaderProps) => {
  const {
    reducers,
    removeAfterUnmount = false,
  } = props;

  const store = useStore() as ReduxStoreWithManager; // TODO ВРЕМЕННОЙ РЕШЕНИЕ
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([nameOfReducer, reducer]) => {
      const mounted = mountedReducers[nameOfReducer as StateSchemaKey];

      if (!mounted) {
        store.reducerManager.add(nameOfReducer as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${nameOfReducer} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([nameOfReducer, reducer]) => {
          store.reducerManager.remove(nameOfReducer as StateSchemaKey);
          dispatch({ type: `@DESTROY ${nameOfReducer} reducer` });
        });
      }
    };
  }, []); // eslint-disable-line
};
