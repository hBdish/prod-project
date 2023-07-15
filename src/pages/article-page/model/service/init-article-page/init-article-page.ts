import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers';
import { useSelector } from 'react-redux';
import {
  articlePageActions,
  fetchArticlesList, getArticlePageInited,
} from '../../../model';

export const initArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
  >(
    'articlePage/initArticlePage',
    async (
      _,
      {
        dispatch, getState,
      },
    ) => {
      const inited = getArticlePageInited(getState());
      if (!inited) {
        dispatch(articlePageActions.initialState());
        dispatch(fetchArticlesList({
          page: 1,
        }));
      }
    },
  );
