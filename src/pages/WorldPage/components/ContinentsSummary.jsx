import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import { getWorldDetail } from '../../../apis';
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
    getWorldDetail()
      .then((res) => {
        const World = res.data;
        const formatData = Contients.map((c) => {
          const continent = World.filter(
            (country) => country.continent === c.name
          );
          // [c.id, continent.reduce((x, y) => x + y.cases, 0)]
          return {
            name: c.name,
            id: c.id,
            color: c.color,
            value: continent.reduce((x, y) => x + y.cases, 0),
            // recovered: continent.reduce((x, y) => x + y.recovered, 0),
            // deaths: continent.reduce((x, y) => x + y.deaths, 0),
          };
        });
        setData(formatData);
      })
      .catch((err) => {
        history.push('/');
      });
  }, []);

  return (
    <>
      <TitleDivider variant='left' text='Thống kê theo Châu lục' />
      <ContinentMaps data={data} />
    </>
  );
}

export default ContinentsSummary;
