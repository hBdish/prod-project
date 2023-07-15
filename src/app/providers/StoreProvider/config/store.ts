import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducer-manager';
import { $api } from 'shared';
import { scrollSaveReducer } from 'features/scrolle-save/model/slices';
import { StateSchema } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scroll: scrollSaveReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        },
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
