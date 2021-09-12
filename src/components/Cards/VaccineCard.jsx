import {
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getVnVaccine } from '../../apis';
import CountUp from 'react-countup';

const useStyle = makeStyles({
  gridItem: {
    textAlign: 'center',
  },
  boxData: {
    border: '1px',
    borderRadius: '10px',
    padding: 1,
    borderBlockColor: '#ccc',
  },
});

function VaccineCard(props) {
  const { t, i18n } = useTranslation();
  const classes = useStyle();
  const [data, setData] = useState({});

  useEffect(() => {
    getVnVaccine().then((res) => {
      setData(res.data.data);
    });
  }, []);

  const len = Object.keys(data).length;

  return (
    <>
      {len > 0 ? (
        <Card>
          <CardContent>
            <Grid container spacing={2} style={{ textAlign: 'center' }}>
              <Grid item xs={12} sm={6}>
                <Box className={classes.boxData}>
                  <Typography>Số dân tiêm mũi 1</Typography>
                  <Typography>
                    <CountUp
                      end={data.first.total}
                      separator={i18n.language === 'vi' ? '.' : ','}
                      duration={2}
                    />
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className={classes.boxData}>
                  <Typography>Số dân tiêm mũi 2</Typography>
                  <Typography>
                    <CountUp
                      end={data.second.total}
                      separator={i18n.language === 'vi' ? '.' : ','}
                      duration={2}
                    />
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box mt={2}>
              <Typography>{data.secondRatio.toFixed(2)}% dân số đã tiêm đủ:</Typography>
              <LinearProgress
                value={data.secondRatio}
                variant='determinate'
                style={{ color: '368B85', backgroundColor: '368B85' }}
              />
            </Box>
          </CardContent>
        </Card>
      ) : (
        ''
      )}
    </>
  );
}

export default VaccineCard;
