import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';
import * as commentsCommands from './commands/comments';
import * as ratingCommands from './commands/rating';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);

// Cypress.Commands.add(
//   'common',
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
