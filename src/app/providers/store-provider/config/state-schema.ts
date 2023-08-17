import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { To } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavigateOptions } from 'react-router';
import { ArticleDetailsSchema, CounterSchema, UserSchema } from '@/entities';
import { AddCommentSchema, LoginSchema, ProfileSchema, ScrollSaveSchema } from '@/features';
import {
  ArticleDetailsCommentsSchema,
  ArticleDetailsRecommendationsSchema,
  ArticlePageSchema,
} from '@/pages';
import { rtkApi } from '@/shared';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scroll: ScrollSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // async
  login?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema;
  addComment?: AddCommentSchema;
  articlesPage?: ArticlePageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
