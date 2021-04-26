const baseURL = 'https://api.punkapi.com/v2/beers'

describe('Brew by Design landing page', () => {
  beforeEach(() => {
    cy.fixture('beerData').then((data) => {
      cy.intercept( baseURL, {
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
      cy.intercept( baseURL, {
        status: 200,
        body: data
      })
    });

    cy.fixture('search').then((data) => {
      cy.intercept(baseURL + '?beer_name=ipa',
      {
        status: 200,
        body: data
      })
    });

    cy.fixture('search').then((data) => {
      cy.intercept(baseURL + '/106',
      {
        status: 200,
        body: data
      })
    });

    cy.visit('http://localhost:3000/');
  });

  it('Should be able to type into the search field', () => {
    cy.get('.search__input').type('ipa').type('{enter}')
      .url('http://localhost:3000/search/ipa')  
  });

  it('Should return search results', () => {
    cy.get('.search__input').type('ipa').type('{enter}')
      .get('.search-results').children().should('have.length', 5)
      .get('.search-results').contains('Punk IPA')
      .get('.search-results').contains('amping up the aroma')
      .get('.search-results').contains('Simcoe')
      .get('.search-results').contains('ABV')
  });

  it('Should be able to click on a recipe', () => {
    cy.get('.search__input').type('ipa').type('{enter}')
      .get('.recipe-link[href="/recipe/106"]').click()
      .url('http://localhost:3000/recipe/106')
  });
});

describe('Recipe page', () => {
  beforeEach(() => {
    cy.fixture('beerData').then((data) => {
      cy.intercept( baseURL, {
        status: 200,
        body: data
      })
    })
    cy.fixture('singleBeer').then((data) => {
      cy.intercept(baseURL + '/22',{
        status: 200,
        body: data
      })
    });
    cy.visit('http://localhost:3000/recipe/22')
  });

  it('Should have a navigation bar', () => {
    cy.get('nav').contains('Brew by Design')
      .get('nav').contains('Home')
      .get('nav').contains('How to brew')
      .get('nav').contains('Saved Recipes')
  });

  it('Should have a search bar', () => {
    cy.get('.search__container > .search__input').should('exist')
  });

  it('Should have a name', () => {
    cy.get('.recipe__name').contains('Devine Rebel')
  });

  it('Should have beer stats', () => {
    cy.get('.recipe__stats').contains('Oak-aged')
      .get('.recipe__stats').contains('12.5%')
      .get('.recipe__stats').contains('18')
      .get('.recipe__stats').contains('100')
  });

  it('Should have an about section', () => {
    cy.get('.recipe__about').contains('most experimental')
  })

  it('Should have an ingredients list', () => {
    cy.get('.ingredients').contains('Extra Pale')
      .get('.ingredients').contains('Nelson Sauvin')
      .get('.ingredients').contains('Wyeast 1056')
  })

  it('Should have an overview of the recipe instructions', () => {
    cy.get('.target').contains('volume')
      .get('.target').contains('20')
      .get('.target').contains('target original gravity')
      .get('.target').contains('1093')
      .get('.target').contains('attenuation level')
      .get('.target').contains('68')
  })

  it('Should have method instructions', () => {
    cy.get('.method'). contains('90min')
      .get('.method'). contains('65')
      .get('.method'). contains('19')
  })

  it('Should have suggestions on how to pair with food', () => {
    cy.get('.food-pairings').contains('gingerbread biscuits')
  })
})

describe('Saving Recipes', () => {
  beforeEach(() => {
    cy.fixture('beerData').then((data) => {
      cy.intercept( baseURL, {
        status: 200,
        body: data
      })
    })
    cy.fixture('singleBeer').then((data) => {
      cy.intercept(baseURL + '/22',{
        status: 200,
        body: data
      })
    });
    cy.visit('http://localhost:3000/recipe/22')
      .get('.recipe-btn').click()
      .get('a[href="/saved-recipes"]').click()
  });

  it('Should be able to save a beer', () => {
    cy.get('.saved-recipes__card').contains('Devine Rebel')
  })

  it('Should be able to travel to the recipe page', () => {
    cy.get('.saved').click()
      .url('http://localhost:3000/recipe/22')
  })

  it('Should be able to remove a beer from saved list', () => {
    cy.get('.delete').click()
      .get('.saved-recipes__card').should('not.exist')
  })
})