import React, { useEffect, useState } from 'react';
import { getReportInContinents } from '../../../apis';
import ContinentMaps from '../../../components/Maps/ContinentMaps';

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

  return <ContinentMaps data={data} />;
}

export default ContinentsSummary;
