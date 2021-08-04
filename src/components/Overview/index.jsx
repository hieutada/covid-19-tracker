import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import CountryInfo from './components/CountryInfo';
import PieChart from './components/PieChart';
import { useState } from 'react';
import roundTo from 'round-to';

const useStyle = makeStyles((theme) => ({
  info: {
    textAlign: 'center',
    height: '100%',
  },
}));

Overview.propTypes = {
  report: PropTypes.object,
};

function Overview({ report }) {
  const classes = useStyle();
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    if (Object.keys(report).length > 0) {
      const { cases, active, recovered, deaths } = report;

      const data = [
        {
          name: 'Đang điều trị',
          y: roundTo((active / cases) * 100, 2),
        },
        {
          name: 'Chữa khỏi',
          y: roundTo((recovered / cases) * 100, 2),
        },
        {
          name: 'Tử vong',
          y: roundTo((deaths / cases) * 100, 2),
        },
      ];

      setDataChart(data);
    }
  }, [report]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={5}>
        <Paper className={classes.info}>
          <CountryInfo report={report} />
        </Paper>
      </Grid>

      <Grid item xs={12} md={7}>
        <Paper style={{ height: '100%' }}>
          <PieChart dataChart={dataChart} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Overview;
