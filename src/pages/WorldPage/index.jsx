import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { getAllWorldReport, getNcovReport, getReportOnWorld } from '../../apis';
import Top5BarChart from '../../components/Charts/Top5BarChart';
import WorldTable from '../../components/Tables/WorldTable';
import TitleDivider from '../../components/TitleDivider';
import ContinentsSummary from './components/ContinentsSummary';
import WorldHiglight from './components/WorldHiglight';

const useStyle = makeStyles({
  hl_area: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

function WorldPage() {
  const { t } = useTranslation();
  const history = useHistory();
  const classes = useStyle();

  const [cardsData, setCardsData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [top5, setTop5] = useState([]);

  useEffect(() => {
    getReportOnWorld()
      .then((res) => {
        setCardsData(res.data);
      })
      .catch((err) => history.push('/'));

    getAllWorldReport()
      .then((res) => {
        const world = res.data;
        const top = world.slice(0, 5);
        
        setTableData(world);
        setTop5(top);
      }, [])
      .catch((err) => history.push('/'));

    
  }, []);

  return (
    <Container>
      <Grid container spacing={2} style={{ marginTop: '8px' }}>
        <Grid item xs={12} md={6} className={classes.hl_area}>
          <TitleDivider variant='left' text={t('title.inTheWorld')} />
          <WorldHiglight data={cardsData} />
        </Grid>
        {/* --- */}
        <Grid item xs={12} lg={6}>
          <TitleDivider
            variant='left'
            text={t('title.top5Chart')}
          />
          <Top5BarChart data={top5} />
        </Grid>
      </Grid>

      <TitleDivider variant='left' text={t('title.continentMaps')} />
      <ContinentsSummary />

      <TitleDivider
        variant='left'
        text={t('title.allCountriesTable')}
      />
      <WorldTable data={tableData} />
    </Container>
  );
}

export default WorldPage;
