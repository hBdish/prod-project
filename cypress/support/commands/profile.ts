export const updateProfile = (firstName: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.first').clear().type(firstName);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => cy.request({
  method: 'PUT',
  url: `http://localhost:8000/profile/${profileId}`,
  headers: { authorization: 'auth' },
  body: {
    id: '4',
    first: 'testuser',
    lastname: 'user',
    age: 111,
    currency: 'RUB',
    country: 'Russia',
    city: 'Voronezh',
    username: 'testuser',
    // eslint-disable-next-line
    avatar: 'https://static.wikia.nocookie.net/toystory/images/b/b0/%D0%A0%D0%B5%D0%BA%D1%81.jpg/revision/latest?cb=20110627030456&path-prefix=ru',
  },
});

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstName: string): Chainable<void>,
      resetProfile(profileId: string): Chainable<void>,
    }
  }
}
