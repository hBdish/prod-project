import { Article } from '@/entities';

/* eslint-disable */
const defaultArticle = {
  title: 'Возможности JavaScript и TypeScript последних лет. Часть 1',
  subtitle: 'ECMAScript',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
  views: 1251,
  createdAt: '29.07.2023',
  userId: '1',
  type: [
    'IT',
  ],
  block: [ ],
};
/* eslint-enable */

export const createArticle = (article?: Article) => cy.request({
  method: 'POST',
  url: 'http://localhost:8000/articles',
  headers: { authorization: 'auth' },
  body: article ?? defaultArticle,
}).then(({ body }) => body);

export const removeArticle = (articleId?: string) => cy.request({
  method: 'DELETE',
  url: `http://localhost:8000/articles/${articleId}`,
  headers: { authorization: 'auth' },
});

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>,
      removeArticle(articleId?: string): Chainable<void>,
    }
  }
}
