import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getTodayProvinces } from '../../apis';
import VaccineCard from '../../components/Cards/VaccineCard';
import VnCaseTable from '../../components/Tables/VnCaseTable';

function VietNamPage() {
  const [data, setData] = useState({});

  useEffect(() => {
    getTodayProvinces()
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <Container>
      <Grid container spacing={2} style={{marginTop: '8px'}}>
        <Grid item xs={12} md={6}>
          <VnCaseTable data={data} />
        </Grid>
        <Grid item xs={12} md={6}>          
          <VaccineCard/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default VietNamPage;
