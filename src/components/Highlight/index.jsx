import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { DiseaseColors } from '../../constants';
import HighlightCard from './components/HighlightCard';

Highlight.propTypes = {
  report: PropTypes.object,
};

function Highlight({ report }) {
  const [dataCard, setDataCard] = useState([]);

  useEffect(() => {
    const data = [
      {
        title: 'SỐ CA NHIỄM',
        count: report.cases,
        style: {
          color: DiseaseColors.CASES,
        },
      },
      {
        title: 'ĐANG ĐIỀU TRỊ',
        count: report.active,
        style: {
          color: DiseaseColors.ACTIVE,
        },
      },
      {
        title: 'HỒI PHỤC',
        count: report.recovered,
        style: {
          color: DiseaseColors.RECOVERED,
        },
      },
      {
        title: 'TỬ VONG',
        count: report.deaths,
        style: {
          color: DiseaseColors.DEATHS,
        },
      },
    ];

    setDataCard(data);
  }, [report]);

  return (
    <Grid container spacing={3}>
      {dataCard.map((field, idx) => (
        <Grid key={idx} item md={3} sm={6} xs={12}>
          <HighlightCard summaryField={field} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Highlight;
