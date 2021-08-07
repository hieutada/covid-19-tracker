import { Grid, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getMapDataByCountryTag } from '../../apis';
import { VnAllGeo } from '../../constants';
import HighMaps from './components/HighMaps';
import LineChart from './components/LineChart';

Summary.propTypes = {
  countryTag: PropTypes.string,
};

function Summary({ countryTag }) {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (countryTag) {
      if (countryTag === 'vn') {
        setMapData(VnAllGeo);
      } else {
        getMapDataByCountryTag(countryTag).then((res) => setMapData(res));
      }
    }
  }, [countryTag]);

  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <Paper>
          <LineChart slug={countryTag} />
        </Paper>
      </Grid>

      <Grid item sm={4} xs={12}>
        <Paper style={{ height: '100%' }}>
          <HighMaps mapData={mapData} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Summary;
