import '@fontsource/roboto';
import { Container, Divider, Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/vi';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getApiCountries, getApiReportByCountry } from './apis';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Overview from './components/Overview';
import PieChart from './components/Overview/components/PieChart';
import Summary from './components/Summary';

// moment.locale('vi')

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryTag, setSelectedCountryTag] = useState('');
  const [report, setReport] = useState([]);

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
      const selectedCountry = countries.find(
        (country) => country.ISO2 === selectedCountryTag.toUpperCase()
      );

      getApiReportByCountry(selectedCountry.Slug).then((res) => {
        const data = res.data;
        data.pop();
        setReport(data);
      });
    }
  }, [countries, selectedCountryTag]);

  const summary = useMemo(() => {
    if (report && report.length) {
      const latestData = report[report.length - 1];
      return [
        {
          title: 'Số ca nhiễm',
          count: latestData.Confirmed,
          style: {
            color: '#c9302c',
          },
        },
        {
          title: 'Số ca khỏi',
          count: latestData.Recovered,
          style: {
            color: '#28a745',
          },
        },
        {
          title: 'Số ca tử vong',
          count: latestData.Deaths,
          style: {
            color: 'gray',
          },
        },
      ];
    }
    return [];
  }, [report]);

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

      <Overview slug={selectedCountryTag} summary={summary}/>

      <Highlight summary={summary} />

      <Summary report={report} selectedCountryTag={selectedCountryTag} />
    </Container>
  );
}

export default App;
