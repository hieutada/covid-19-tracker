import '@fontsource/roboto';
import { Container, Divider, Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/vi';
import { useCallback, useEffect, useState } from 'react';
import { getApiCountries, getReportByCountry } from './apis';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Overview from './components/Overview';
import Summary from './components/Summary';

// moment.locale('vi')

function App() {
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
    <Container style={{ marginTop: 20 }}>
      <Typography component='h4' variant='h3'>
        Số liệu COVID-19
      </Typography>

      <Typography>{moment().format('LLL')}</Typography>

      <Divider />

      <CountrySelector
        countries={countries}
        handleOnChange={handleCountryChange}
        value={selectedCountryTag}
      />

      <Overview report={report} />

      <Highlight report={report} />

      <Summary countryTag={selectedCountryTag} />

      <Typography
        style={{
          margin: 30,
          textAlign: 'center',
          color: 'rgb(102 102 102 / 50%)',
        }}
      >
        Referenced by HoleTex
        <br />
        Practiced by Ta Trung Hieu
      </Typography>
    </Container>
  );
}

export default App;
