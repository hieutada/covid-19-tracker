import { Grid, makeStyles, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import roundTo from 'round-to';
import CountryInfoCard from '../../../components/Cards/CountryInfoCard';
import CasesPieChart from '../../../components/Charts/CasesPieChart';


const useStyle = makeStyles((theme) => ({
  info: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100%',
  },
}));

Overview.propTypes = {
  report: PropTypes.object,
};

function Overview({ report }) {
  const { t } = useTranslation();
  const classes = useStyle();
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    if (Object.keys(report).length > 0) {
      const { cases, active, recovered, deaths } = report;

      const data = [
        {
          name: t('active'),
          y: roundTo((active / cases) * 100, 2),
        },
        {
          name: t('recovered'),
          y: roundTo((recovered / cases) * 100, 2),
        },
        {
          name: t('deaths'),
          y: roundTo((deaths / cases) * 100, 2),
        },
      ];

      setDataChart(data);
    }
  }, [t, report]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={5}>
        <Paper className={classes.info}>
          <CountryInfoCard report={report} />
        </Paper>
      </Grid>

      <Grid item xs={12} md={7}>
        <Paper style={{ height: '100%' }}>
          <CasesPieChart dataChart={dataChart} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Overview;
