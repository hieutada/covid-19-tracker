import axios from 'axios';
import moment from 'moment';

export const getApiCountries = () =>
  axios.get('https://api.covid19api.com/countries');

export const getApiReportByCountry = (slug) =>
  axios.get(
    `https://api.covid19api.com/dayone/country/${slug}?from=2021-01-01T00:00:00&to=${moment()
      .utc(0)
      .format()}`
  );

export const getMapDataByCountryTag = (countryTag) =>
  import(
    `@highcharts/map-collection/countries/${countryTag}/${countryTag}-all.geo.json`
  );

export const getInfomationCountry = async (slug) =>
  await axios.get(`https://restcountries.eu/rest/v2/alpha/${slug}`);
