import { Container } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { getApiCountries, getReportByCountry } from '../../apis';
import CountrySelector from '../../components/Selector/CountrySelector';
import Highlight from './components/Highlight';
import Overview from './components/Overview';
import Summary from './components/Summary';

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [countryTag, setCountryTag] = useState('vn');
  const [report, setReport] = useState({});

  useEffect(() => {
    getApiCountries().then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleCountryChange = useCallback((e) => {
    setCountryTag(e.target.value);
  }, []);

  useEffect(() => {
    getReportByCountry(countryTag).then((res) => {
      setReport(res.data);
    });
  }, [countryTag]);

  return (
    <Container style={{ marginTop: '8px' }}>
      {/* <Typography style={{textAlign: 'right'}}>{moment().format('LLL')}</Typography> */}

      <CountrySelector
        countries={countries}
        handleOnChange={handleCountryChange}
        value={countryTag}
      />

      <Overview report={report} />

      <Highlight report={report} />

      <Summary countryTag={countryTag} />
    </Container>
  );
}

export default HomePage;
