import { BASE_URL } from './constants';

export const searchByCountry = (country) => {
  return BASE_URL + 'name/' + country;
}

export const filterByCode = (code) => {
  return BASE_URL + 'alpha?codes=' + code;
};