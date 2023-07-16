import TestAsyncThunk from 'shared/lib/test/test-async-thunk';
import { ArticleType } from 'entities/article';
import { fetchNextArticlesPage } from './fetch-next-article-page';
import { fetchArticlesList } from '../fetch-articles-list/fetch-articles-list';

jest.mock('../fetch-articles-list/fetch-articles-list');

describe('fetchNextArticlePage.test', () => {
  // test('success', async () => {
  //   const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
  //     articlesPage: {
  //       page: 2,
  //       ids: [],
  //       type: ArticleType.ALL,
  //       entities: {
  //
  //       },
  //       limit: 5,
  //       isLoading: false,
  //       hasMore: true,
  //     },
  //   });
  //
  //   await thunk.callThunk();
  //
  //   expect(thunk.dispatch).toBeCalledTimes(4);
  //   expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  // });

  test('fetch not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {

        },
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('is loading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {

        },
        limit: 5,
        isLoading: true,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
