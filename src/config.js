const BASE_URL = 'https://restcountries.com/v2/';
const NEW_BASE_URL = 'http://localhost:8090/api/v1/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const UTIL_COUNTRIES = NEW_BASE_URL + 'util/currencies';
export const UTIL_CARRIERS = NEW_BASE_URL + 'util/carriers';

export const searchByCountry = (name) => BASE_URL + 'name/' + name;

export const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');
