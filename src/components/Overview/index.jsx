import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import CountryInfo from './components/CountryInfo';
import PieChart from './components/PieChart';
import { useState } from 'react';

const useStyle = makeStyles((theme)=>({
  info: {
    textAlign: 'center',
    height: '100%'
  }
}))

Overview.propTypes = {
  slug: PropTypes.string,
  summary: PropTypes.array,
};

function Overview({ slug, summary }) {
  const classes = useStyle();
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    if (summary.length > 0) {
      const total = summary[0].count;
      const recovered = summary[1].count;
      const death = summary[2].count;

      const data = [
        {
          name: 'Đang điều trị',
          y: (1 - recovered / total - death / total) * 100,
        },
        {
          name: 'Chữa khỏi',
          y: (recovered / total) * 100,
        },
        {
          name: 'Tử vong',
          y: (death / total) * 100,
        },
      ];

      setDataChart(data);
    }
  }, [summary]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={5}>
        <Paper className={classes.info}>
          <CountryInfo slug={slug} />
        </Paper>
      </Grid>

      <Grid item xs={12} md={7}>
        <Paper style={{height: "100%"}}>
          <PieChart dataChart={dataChart} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Overview;
