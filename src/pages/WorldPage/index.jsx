import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getReportOnWorld } from '../../apis';
import BarChart from '../../components/Charts/BarChart';
import WorldTable from '../../components/Tables/WorldTable';
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
    <Container>
      <Grid container spacing={2} style={{ marginTop: '8px' }}>
        <Grid item xs={12} md={6}>
          <Box style={{ alignItems: 'center', justifyContent:'center', height: '100%'}}>
          <Typography component='h6' variant='h6' style={{textAlign:'center', marginBottom: '8px'}}>Trên toàn Thế Giới</Typography>
            <Grid container spacing={2}>
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
          </Box>
        </Grid>
        {/* --- */}
        <Grid item xs={12} lg={6}>
          <BarChart />
        </Grid>
      </Grid>

      <Typography component='h6' variant='h6'>Bảng thống kê Covid-19 tại các quốc gia</Typography>
      <WorldTable />
    </Container>
  );
}

export default WorldPage;
