import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { MainColors } from '../../../constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';

const useStyle = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },

  content: {},

  sub: {},

  title: ({ color }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: '8px 0px',
    margin: '0px 20px 20px 20px',
    backgroundColor: color,
    color: MainColors.White,
    border: '2px solid rounded',
    borderRadius: '15px',
  }),
}));

function WorldCard({ title, number, sub, color }) {
  const classes = useStyle({ color });
  const { t } = useTranslation();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h4'>
          <CountUp end={number} separator=',' duration={2} />
        </Typography>
        <Typography variant='p'>{sub ? `Today: +${sub}` : '_'}</Typography>
      </CardContent>
      <div className={classes.title}>
        <Typography>{t(title).toUpperCase()}</Typography>
      </div>
    </Card>
  );
}

export default WorldCard;
