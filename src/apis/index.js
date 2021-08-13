import axios from 'axios';

export const getApiCountries = () =>
  axios.get('https://api.covid19api.com/countries');

// highchart

export const getMapDataByCountryTag = (countryTag) =>
  import(
    `@highcharts/map-collection/countries/${countryTag}/${countryTag}-all.geo.json`
  );

export const getMapDataOnWorld = () =>
  import('@highcharts/map-collection/custom/world.geo.json');

export const getMapDataOfContinents = () =>
  import('@highcharts/map-collection/custom/world-continents.geo.json');

// disease.sh

export const getReportOnWorld = () =>
  axios.get('https://disease.sh/v3/covid-19/all');

export const getReportByCountry = (slug) =>
  axios.get(`https://disease.sh/v3/covid-19/countries/${slug}`);

export const getHistoryByCountry = (slug, num) =>
  axios.get(
    `https://disease.sh/v3/covid-19/historical/${slug}?lastdays=${num}`
  );

export const getReportInContinents = () =>
  axios.get('https://disease.sh/v3/covid-19/continents?yesterday=1');

export const getVaccineReport = () =>
  axios.get(
    'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1'
  );

// To Vinh Khang collect

export const getDetailVn = () =>
  axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn');

// Newspapers in Vietnam

export const getNcovReport = () =>
  axios.get('https://ncovi.vnpt.vn/thongtindichbenh_v2');

export const getVnExpressNews = (page) =>
  axios.get(
    `https://gw.vnexpress.net/ar/get_rule_2?category_id=1004765&limit=12&page=${page}&data_select=title,share_url,thumbnail_url,lead,publish_time`
  );

export const getTodayProvinces = () =>
  axios.get('https://api.zingnews.vn/public/v2/corona/getChart?type=province');

// ---
export const getAllWorldReport = () =>
  axios.get('https://disease.sh/v3/covid-19/countries?sort=cases');
