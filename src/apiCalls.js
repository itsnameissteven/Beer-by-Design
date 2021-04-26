const baseURL = 'https://api.punkapi.com/v2/beers'

export const getAPIs = () => {
  return fetch(baseURL).then(handleErrors);
}

export const searchAPI = (query) => {
  return fetch(`${baseURL}?beer_name=${query}`)
    .then(handleErrors).then(data => cleanData(data))
}

export const getSingleBeer = (id) => {
  return fetch(`${baseURL}/${id}`).then(handleErrors)
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

const handleErrors = (response) => {
  if(!response.ok) {
    throw new Error(`${response.status}`)
  }
  return response.json()
}