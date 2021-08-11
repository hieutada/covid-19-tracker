import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { MainColors } from '../../../constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import firstUpperCase from '../../../utils/firstUpperCase';

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
  const { t, i18n } = useTranslation();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h4'>
          <CountUp end={number} separator={i18n.language==='vi' ? '.' : ','} duration={2} />
        </Typography>
        <Typography variant="subtitle1">{sub ? `${firstUpperCase(t('today'))}: +${sub.toLocaleString(i18n.language)}` : '_'}</Typography>
      </CardContent>
      <div className={classes.title}>
        <Typography>{t(title).toUpperCase()}</Typography>
      </div>
    </Card>
  );
}

export default WorldCard;
