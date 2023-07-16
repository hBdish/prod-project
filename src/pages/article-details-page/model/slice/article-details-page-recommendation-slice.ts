import {
  createEntityAdapter,
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { Comment } from 'entities/comment';
import { StateSchema } from 'app/providers';
import { ArticleDetailsRecommendationsSchema, fetchArticlesRecommendations } from 'pages';
import { Article } from 'entities/article';

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsRecommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsPageRecommendationSlice = createSlice({
  name: 'articleDetailsCommentSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {

    },
  }),
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesRecommendations.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsPageRecommendationReducer } = articleDetailsPageRecommendationSlice;
export const { actions: articleDetailsPageRecommendationActions } = articleDetailsPageRecommendationSlice;
