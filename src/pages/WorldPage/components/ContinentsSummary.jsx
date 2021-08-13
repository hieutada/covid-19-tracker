import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import { getReportInContinents } from '../../../apis';
import { useHistory } from 'react-router-dom';
import ContinentMaps from '../../../components/Maps/ContinentMaps';
import TitleDivider from '../../../components/TitleDivider';

ContinentsSummary.propTypes = {};

const Contients = [
  { name: 'Asia', id: 'as', color: '#CD5C5C' },
  { name: 'Europe', id: 'eu', color: '#9370DB' },
  { name: 'Australia-Oceania', id: 'oc', color: '#FFA07A' },
  { name: 'Africa', id: 'af', color: '#DAA520' },
  { name: 'North America', id: 'na', color: '#4682B4' },
  { name: 'South America', id: 'sa', color: '#6B8E23' },
];

function ContinentsSummary() {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    getReportInContinents()
      .then((res) => {
        const World = res.data;
        const formatData = Contients.map((c) => {
          const continent = World.filter(
            (continent) => continent.continent === c.name
          )[0];

          return {
            name: c.name,
            id: c.id,
            color: c.color,
            value: continent.cases,
            recovered: continent.recovered,
            deaths: continent.deaths,
          };
        });
        setData(formatData);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <TitleDivider variant='left' text='Thống kê theo Châu lục' />
      <ContinentMaps data={data} />
    </>
  );
}

export default ContinentsSummary;
