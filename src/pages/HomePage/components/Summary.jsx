import { Grid, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getMapDataByCountryTag } from '../../../apis';
import CasesHistoryLineChart from '../../../components/Charts/CasesHistoryLineChart';
import CountryMaps from '../../../components/Maps/CountryMaps';
import TitleDivider from '../../../components/TitleDivider';
import { VnAllGeo } from '../../../constants';

Summary.propTypes = {
  countryTag: PropTypes.string,
};

function Summary({ countryTag }) {
  const { t } = useTranslation();
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
        <TitleDivider variant='left' text={t('title.historyChart')} />
        <Paper>
          <CasesHistoryLineChart slug={countryTag} />
        </Paper>
      </Grid>

      <Grid item sm={4} xs={12}>
        <TitleDivider variant='left' text={t('title.areaMaps')} />
        <Paper>
          <CountryMaps mapData={mapData} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Summary;
