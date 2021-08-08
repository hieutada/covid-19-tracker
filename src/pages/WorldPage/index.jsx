import { Card, CardContent, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getReportOnWorld } from '../../apis';
import { DiseaseColors, MainColors } from '../../constants';

function WorldPage(props) {
  const { t } = useTranslation();
  const [data, setData] = useState({});

  useEffect(() => {
    getReportOnWorld().then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, []);

  return (
    <Container>
      <div style={{}}></div>
      <Card>
        <CardContent>
          {t('total cases')}: {data.cases} + {data.todayCases}
        </CardContent>

        <div
          style={{
            backgroundColor: DiseaseColors.CASES,
            color: MainColors.White,
            border: '2px',
            borderRadius: '5px',
            margin: '0px 15px 15px 15px',
            height: '30px',
            textAlign: 'center',
          }}
        >
          SỐ CA MẮC
        </div>
      </Card>
      <p>
        {t('active')}: {data.active}
      </p>
      <p>
        {t('recovered')}: {data.recovered} + {data.todayRecovered}
      </p>
      <p>
        {t('deaths')}: {data.deaths} + {data.todayDeaths}
      </p>
    </Container>
  );
}

export default WorldPage;
