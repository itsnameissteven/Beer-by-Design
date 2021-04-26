describe('Brew by Design landing page', () => {
  beforeEach(() => {
    cy.fixture('beerData').then((data) => {
      cy.intercept('https://api.punkapi.com/v2/beers', {
        status: 200,
        body: data
      })
    })
    cy.visit('http://localhost:3000/')
  });

  it('Should have a navigation bar', () => {
    cy.get('nav').contains('Brew by Design')
      .get('nav').contains('Home')
      .get('nav').contains('How to brew')
      .get('nav').contains('Saved Recipes')
  });

  it('Should have a hero image', () => {
    cy.get('img').should('exist')
      .get('.img-container').contains('Relax.')
  });

  it('Should have a search bar', () => {
    cy.get('.search__container > .search__input') 
      .should('have.attr', 'placeholder', 'Search for a beer recipe')
  })

  it('Should have featured recipes', () => {
    cy.get('.featured-beers').contains('Recipes in the Spotlight')
      .get('.beer-card').contains('Storm')
      .get('.beer-card').contains('Islay Whisky Aged IPA.')
      .get('.beer-card').contains('original Punk IPA')
      .get('.beer-card > a > button').contains('View Recipe')
      .get('.beer-card > a[href="/recipe/23"')
  })
})

describe('Search functionality', () => {
  beforeEach(() => {
    cy.fixture('beerData').then((data) => {
      cy.intercept('https://api.punkapi.com/v2/beers', {
        status: 200,
        body: data
      })
    })
    cy.visit('http://localhost:3000/')
  });
})