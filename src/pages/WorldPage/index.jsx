import {
  Container,
  Grid
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getReportOnWorld } from '../../apis';
import { DiseaseColors } from '../../constants';
import WorldCard from './components/WorldCard';

function WorldPage(props) {
  const { t } = useTranslation();
  const [data, setData] = useState({});

  useEffect(() => {
    getReportOnWorld().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Container >
      <Grid container spacing={2} style={{marginTop: '8px'}}>
        <Grid item container xs={12} md={6} spacing={2}>
          <Grid item xs={12} sm={6}>
            <WorldCard
              title={t('total cases')}
              number={data.cases}
              sub={data.todayCases}
              color={DiseaseColors.CASES}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <WorldCard
              title={t('active')}
              number={data.active}
              sub={''}
              color={DiseaseColors.ACTIVE}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <WorldCard
              title={t('recovered')}
              number={data.recovered}
              sub={data.todayRecovered}
              color={DiseaseColors.RECOVERED}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <WorldCard
              title={t('deaths')}
              number={data.deaths}
              sub={data.todayDeaths}
              color={DiseaseColors.DEATHS}
            />
          </Grid>
        </Grid>
        {/* --- */}
        <Grid item container xs={12} lg={6}>
          
        </Grid>
      </Grid>
    </Container>
  );
}

export default WorldPage;
