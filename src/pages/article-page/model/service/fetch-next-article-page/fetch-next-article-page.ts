import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers';
import {
  articlePageActions,
  fetchArticlesList,
  getArticlePageHasMore, getArticlePageIsLoading,
  getArticlePageLimit,
  getArticlePageNumber,
} from '../../../model';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
  >(
    'articlePage/fetchNextArticlesPage',
    async (
      props,
      {
        dispatch, getState,
      },
    ) => {
      const limit = getArticlePageLimit(getState());
      const hasMore = getArticlePageHasMore(getState());
      const page = getArticlePageNumber(getState());
      const isLoading = getArticlePageIsLoading(getState());

      if (hasMore && !isLoading) {
        dispatch(articlePageActions.setPage(page + 1));
        dispatch(fetchArticlesList({
          page: page + 1,
        }));
      }
    },
  );
