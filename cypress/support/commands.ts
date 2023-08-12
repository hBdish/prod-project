import { login } from './commands/login';

Cypress.Commands.add('login', login);

// Cypress.Commands.add(
//   'login',
//   (username: string = 'testUsername', password: string = 'testPassword') => {
//     cy.request({
//       method: 'POST',
//       url: 'http://localhost:8000/login',
//       body: {
//         username,
//         password,
//       },
//     }).then(({ body }) => {
//       window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
//     });
//
//     cy.visit('/');
//   },
// );
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>
      }
  }
}
