import { Story } from '@storybook/react';
import { Suspense } from 'react';
import {
  StateSchema,
  StoreProvider,
} from 'app/providers';
import {
  loginReducer,
  profileReducer,
} from 'features';

import { ReducersList } from 'shared';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <Suspense fallback="">
      <StoryComponent />
    </Suspense>
  </StoreProvider>
);
