import { Grid, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getMapDataByCountryTag } from '../../apis';
import HighMaps from './components/HighMaps';
import LineChart from './components/LineChart';

Summary.propTypes = {
  countryTag: PropTypes.string,
};

function Summary({ t, countryTag }) {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (countryTag) {
      getMapDataByCountryTag(countryTag).then((res) => setMapData(res));
    }
  }, [countryTag]);

  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <LineChart t={t} slug={countryTag} />
      </Grid>

      <Grid item sm={4} xs={12}>
        <Paper>
          <HighMaps mapData={mapData} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Summary;
