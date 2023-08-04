import {
  Action, createEntityAdapter, createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers';
import { Article } from '@/entities';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY, SortOrder } from '@/shared';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/article';
import { fetchArticlesList } from '../service/fetch-articles-list/fetch-articles-list';
import { ArticlePageSchema } from '../types/types';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export interface ActionWithPayload<T> extends Action {
  payload: T;
  meta: any
}

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
  name: 'article',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},

    view: 'SMALL',
    page: 1,
    limit: 9,
    hasMore: true,

    sort: 'createdAt',
    search: '',
    order: 'asc',
    type: 'ALL',

    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    initialState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.BIG ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action: ActionWithPayload<any>) => {
        state.error = undefined;
        state.isLoading = true;
        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (
        state,
        action: ActionWithPayload<Article[]>,
      ) => {
        state.isLoading = false;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }

        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlePageReducer } = articlePageSlice;
export const { actions: articlePageActions } = articlePageSlice;
