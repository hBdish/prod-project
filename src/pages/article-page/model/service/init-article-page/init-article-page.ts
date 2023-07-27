import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers';
import { SortOrder } from 'shared';
import { ArticleSortField, ArticleType } from 'entities/article/model/const';
import { articlePageActions, fetchArticlesList, getArticlePageInited } from '../../../model';

const initQueryParams = <T extends OptionalRecord<string, unknown>>
  (
    searchParams: URLSearchParams,
    queryParams: InitQueryParams<T>,
  ) => {
  Object.entries(queryParams).forEach(
    ([param, callback]) => {
      const paramValue = searchParams.get(param);
      if (paramValue) {
        callback(paramValue);
      }
    },
  );
};

export const initArticlePage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlePage/initArticlePage',
  async (
    searchParams,
    {
      dispatch, getState,
    },
  ) => {
    const inited = getArticlePageInited(getState());
    if (!inited) {
      initQueryParams(searchParams, {
        order: (order: SortOrder) => dispatch(articlePageActions.setOrder(order)),
        sort: (sort: ArticleSortField) => dispatch(articlePageActions.setSort(sort)),
        search: (sort: string) => dispatch(articlePageActions.setSearch(sort)),
        type: (articleType: ArticleType) => dispatch(articlePageActions.setType(articleType)),
      });

      dispatch(articlePageActions.initialState());
      dispatch(fetchArticlesList({}));
    }
  },
);
