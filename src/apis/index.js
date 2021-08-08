import axios from 'axios';

export const getApiCountries = () =>
  axios.get('https://api.covid19api.com/countries');

export const getMapDataOnWorld = () =>
  import('@highcharts/map-collection/custom/world.geo.json');

export const getMapDataByCountryTag = (countryTag) =>
  import(
    `@highcharts/map-collection/countries/${countryTag}/${countryTag}-all.geo.json`
  );

export const getReportOnWorld = () =>
  axios.get('https://disease.sh/v3/covid-19/all');

export const getReportByCountry = (slug) =>
  axios.get(`https://disease.sh/v3/covid-19/countries/${slug}`);

export const getHistoryByCountry = (slug, num) =>
  axios.get(
    `https://disease.sh/v3/covid-19/historical/${slug}?lastdays=${num}`
  );

export const getDetailVn = () =>
  axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn');

export const getVaccineReport = () =>
  axios.get(
    'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1'
  );

export const getVnExpressNews = () =>
  axios.get(
    'https://gw.vnexpress.net/ar/get_rule_2?category_id=1004765&limit=50&page=1&data_select=title,share_url,thumbnail_url,lead,publish_time'
  );
