import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { StateSchema, StoreProvider } from '@/app/providers';
import { addCommentReducer, loginReducer, profileReducer } from '@/features';

import { ReducersList } from '@/shared';
import { articleDetailsReducer } from '@/entities';
import { articleDetailsCommentReducer } from '@/pages';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addComment: addCommentReducer,
  articleDetailsComments: articleDetailsCommentReducer,
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
