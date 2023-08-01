import TestAsyncThunk from '../../../../../shared/lib/test/test-async-thunk';
import { initArticlePage } from './init-article-page';
import { fetchArticlesList } from '../fetch-articles-list/fetch-articles-list';

jest.mock('../fetch-articles-list/fetch-articles-list');
jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
  })),
}));

describe('initArticlePage.test', () => {
  test('not inited', async () => {
    const thunk = new TestAsyncThunk(initArticlePage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {

        },
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      },
    });

    await thunk.callThunk(new URLSearchParams());

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toBeCalledTimes(1);
  });

  test('inited', async () => {
    const thunk = new TestAsyncThunk(initArticlePage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {

        },
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: true,
      },
    });

    await thunk.callThunk(new URLSearchParams());

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).toBeCalledTimes(0);
  });
});
