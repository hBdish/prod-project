let currentArticleId = '';

describe('template spec', () => {
  beforeEach(() => {
    cy.login();

    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${currentArticleId}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it('Отрисовка содержимого статьи', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });

  it('Отрисовка списка рекомендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it('Написание комментария', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });

  it('Оценка статьи', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(5, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 5);
  });
});
