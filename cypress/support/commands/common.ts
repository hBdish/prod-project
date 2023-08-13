import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { User } from '@/entities';
import { selectByTestId } from '../../helpers/select-by-testid';

export const login = (username: string = 'testuser', password: string = 'testPassword') => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
    return body;
  });
};

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId), { timeout: 10000 });

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>,
      getByTestId(testId?: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
