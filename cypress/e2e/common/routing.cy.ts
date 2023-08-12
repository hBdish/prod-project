import { selectByTestId } from '../../helpers/select-by-testid';

describe('Routing', () => {
  describe('Пользователь НЕ авторизован', () => {
    it('переход на MainPage', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('переход на ProfilePage', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('переход на NotFoundPage', () => {
      cy.visit('/saf');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login('admin', '123');
    });

    it('переход на ProfilePage', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('переход на ArticlePage', () => {
      cy.visit('articles?sort=createdAt&order=asc&search=&type=IT');
      cy.get(selectByTestId('ArticlePage')).should('exist');
    });
  });
});
