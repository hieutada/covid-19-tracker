import { Grid } from '@material-ui/core';
import { DiseaseColors } from '../../constants';
import PropTypes from 'prop-types';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HighlightCard from './components/HighlightCard';

Highlight.propTypes = {
  report: PropTypes.object,
};

function Highlight({ report }) {
  const { t } = useTranslation();
  const [dataCard, setDataCard] = useState([]);

  useEffect(() => {
    const data = [
      {
        title: t('total cases').toUpperCase(),
        count: report.cases,
        style: {
          color: DiseaseColors.CASES,
        },
      },
      {
        title: t('active').toUpperCase(),
        count: report.active,
        style: {
          color: DiseaseColors.ACTIVE,
        },
      },
      {
        title: t('recovered').toUpperCase(),
        count: report.recovered,
        style: {
          color: DiseaseColors.RECOVERED,
        },
      },
      {
        title: t('deaths').toUpperCase(),
        count: report.deaths,
        style: {
          color: DiseaseColors.DEATHS,
        },
      },
    ];

    setDataCard(data);
  }, [t, report]);

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
