import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { StateSchema, StoreProvider } from '@/app/providers/store-provider';
import { ReducersList } from '@/shared';
// eslint-disable-next-line pc-test/public-api-imports
import { articleDetailsReducer } from '@/entities/article/testing';
import { articleDetailsCommentReducer } from '@/pages/article-details-page/testing';
// eslint-disable-next-line pc-test/public-api-imports
import { loginReducer } from '@/features/auth-by-username/testing';
// eslint-disable-next-line pc-test/public-api-imports
import { profileReducer } from '@/features/editable-profile-card/testing';
// eslint-disable-next-line pc-test/public-api-imports
import { addCommentReducer } from '@/features/add-comment/testing';

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
