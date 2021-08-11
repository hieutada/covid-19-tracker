import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HorizontalCard from '../../../components/HighlightCards/HorizontalCard';
import { DiseaseColors } from '../../../constants';

// Highlight.propTypes = {
//   report: PropTypes.object,
// };

function Highlight({ report }) {
  const { t } = useTranslation();
  const [dataCard, setDataCard] = useState([]);

  useEffect(() => {
    const data = [
      {
        title: t('total cases').toUpperCase(),
        number: report.cases,
        color: DiseaseColors.CASES,
      },
      {
        title: t('active').toUpperCase(),
        number: report.active,
        color: DiseaseColors.ACTIVE,
      },
      {
        title: t('recovered').toUpperCase(),
        number: report.recovered,
        color: DiseaseColors.RECOVERED,
      },
      {
        title: t('deaths').toUpperCase(),
        number: report.deaths,
        color: DiseaseColors.DEATHS,
      },
    ];

    setDataCard(data);
  }, [t, report]);

  return (
    <Grid container spacing={3}>
      {dataCard.map((field, idx) => (
        <Grid key={idx} item md={3} sm={6} xs={12}>
          <HorizontalCard title={field.title} number={field.number} color={field.color} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Highlight;
