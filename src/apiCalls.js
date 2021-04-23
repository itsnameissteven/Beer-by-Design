const baseURL = 'https://api.punkapi.com/v2/beers'

export const getAPIs = () => {
  return fetch(baseURL).then(response => response.json());
}

export const searchAPI = (query) => {
  return fetch(`${baseURL}?beer_name=${query}`)
    .then(response => response.json());
}