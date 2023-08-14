import { TestProvider } from '@/shared/lib/test/component-render';
import { EditableProfileCard } from '@/features';

describe('editable-profile-card.cy.tsx', () => {
  beforeEach(() => {
    cy.viewport('macbook-15');
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
  });

  it('playground', () => {
    cy.mount(
      <TestProvider
        options={{
          initialState: {
            user: {
              authData: { id: '1' },
            },
          },
        }}
      >
        <EditableProfileCard id="1" />
      </TestProvider>,
    );
  });
});
