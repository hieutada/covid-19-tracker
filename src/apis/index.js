import axios from 'axios';

export const getApiCountries = () =>
  axios.get('https://api.covid19api.com/countries');

export const getMapDataByCountryTag = (countryTag) =>
  import(
    `@highcharts/map-collection/countries/${countryTag}/${countryTag}-all.geo.json`
  );

export const getReportByCountry = (slug) =>
  axios.get(`https://disease.sh/v3/covid-19/countries/${slug}`);

export const getHistoryByCountry = (slug, num) =>
  axios.get(
    `https://disease.sh/v3/covid-19/historical/${slug}?lastdays=${num}`
  );