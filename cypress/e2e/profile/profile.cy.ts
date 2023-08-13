let profileId: string;

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit(`profile/${data.id}`);
      profileId = data.id;
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('Профиль загрузился', () => {
    cy.getByTestId('ProfileCard.first').should('have.value', 'testuser');
  });

  it('Пользователь редактирует профиль', () => {
    const newFirstName = 'new';
    cy.updateProfile(newFirstName);
    cy.getByTestId('ProfileCard.first').should('have.value', newFirstName);
  });
});
