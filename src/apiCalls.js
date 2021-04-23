const baseURL = 'https://api.punkapi.com/v2/beers'

export const getAPIs = () => {
  return fetch(baseURL).then(response => response.json());
}

export const searchAPI = (query) => {
  return fetch(`${baseURL}?beer_name=${query}`)
    .then(response => response.json()).then(data => cleanData(data))
}

export const getSingleBeer = (id) => {
  return fetch(`${baseURL}/${query}`).then(response => response.json())
}

const cleanData = (apiData) => {
  return apiData.map(data => {
    const hops = data.ingredients.hops.map(ingredient => ingredient.name)
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      abv: data.abv,
      ibu: data.ibu,
      srm: data.srm,
      hops: [...new Set(hops)]
    }
  })
}