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
        console.log("🚀 ~ file: index.jsx ~ line 50 ~ .then ~ top", top)
        
        setTableData(world);
        setTop5(top);
      }, [])
      .catch((err) => history.push('/'));

    
  }, []);

  return (
    <Container>
      <Grid container spacing={2} style={{ marginTop: '8px' }}>
        <Grid item xs={12} md={6} className={classes.hl_area}>
          <TitleDivider variant='left' text='Trên toàn thế giới' />
          <WorldHiglight data={cardsData} />
        </Grid>
        {/* --- */}
        <Grid item xs={12} lg={6}>
          <TitleDivider
            variant='left'
            text='Top 5 quốc gia chịu ảnh hưởng bởi Covid-19'
          />
          <Top5BarChart data={top5} />
        </Grid>
      </Grid>

      <ContinentsSummary />

      <TitleDivider
        variant='left'
        text='Bảng thống kê Covid-19 trên thế giới'
      />
      <WorldTable data={tableData} />
    </Container>
  );
}

export default WorldPage;
