export const BASE_URL = 'https://rickandmortyapi.com/api';

export const request = url => fetch(`${BASE_URL}${url}`)
  .then((response) => response.json());

export const getLocations = (num) => fetch(`${BASE_URL}/location/?page=${num}`)
  .then((response) => response.json());

export const getCharacters = (num) => fetch(`${BASE_URL}/character/?page=${num}`)
  .then(response => response.json());

export const getEpisodes = (num) => fetch(`${BASE_URL}/episode/?page=${num}`)
  .then((response) => response.json());
