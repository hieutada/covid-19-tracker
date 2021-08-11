import { Container } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { getApiCountries, getReportByCountry } from '../../apis';
import CountrySelector from '../../components/CountrySelector';
import LanguageSelector from '../../components/LanguageSelector';
import Overview from '../../components/Overview';
import Summary from '../../components/Summary';
import Highlight from './components/Highlight';

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryTag, setSelectedCountryTag] = useState('');
  const [report, setReport] = useState({});

  useEffect(() => {
    getApiCountries().then((res) => {
      setCountries(res.data);
      setSelectedCountryTag('vn');
    });
  }, []);

  const handleCountryChange = useCallback((e) => {
    setSelectedCountryTag(e.target.value);
  }, []);

  useEffect(() => {
    if (selectedCountryTag) {
      getReportByCountry(selectedCountryTag).then((res) => {
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryTag]);

  return (
    <Container style={{ marginTop: '8px' }}>
      {/* <Typography style={{textAlign: 'right'}}>{moment().format('LLL')}</Typography> */}

      <CountrySelector
        countries={countries}
        handleOnChange={handleCountryChange}
        value={selectedCountryTag}
      />

      <Overview report={report} />

      <Highlight report={report} />

      <Summary countryTag={selectedCountryTag} />
    </Container>
  );
}

export default HomePage;
