import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';
import LineChart from './components/LineChart';
import HighMaps from './components/HighMaps';
import { getMapDataByCountryTag } from '../../apis';

Summary.propTypes = {
  report: PropTypes.array,
  selectedCountryTag: PropTypes.string,
};

function Summary({ report, selectedCountryTag }) {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (selectedCountryTag) {
      getMapDataByCountryTag(selectedCountryTag).then(
        async (res) => await setMapData(res)
      );
    }
  }, [selectedCountryTag]);

  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <LineChart data={report} />
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
