import { Container, Divider, Typography } from '@material-ui/core';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getApiCountries, getReportByCountry } from '../../apis';
import CountrySelector from '../../components/CountrySelector';
import Highlight from '../../components/Highlight';
import LanguageSelector from '../../components/LanguageSelector';
import Overview from '../../components/Overview';
import Summary from '../../components/Summary';

function HomePage() {
  const { t, i18n } = useTranslation();
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
      {/* <Typography style={{textAlign: 'right'}}>{moment().format('LLL')}</Typography>

      <Divider /> */}

      <div style={{ display: 'flex', marginTop: '10px' }}>
        <span style={{ flexGrow: 1 }}>
          <CountrySelector
            t={t}
            countries={countries}
            handleOnChange={handleCountryChange}
            value={selectedCountryTag}
          />
        </span>
        <LanguageSelector t={t} i18n={i18n} />
      </div>

      <Overview t={t} report={report} />

      <Highlight t={t} report={report} />

      <Summary t={t} countryTag={selectedCountryTag} />
    </Container>
  );
}

export default HomePage;
