import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';

const useStyles = makeStyles({
  wrapper: (props) => ({ borderLeft: `5px solid ${props.color}` }),
  title: (props) => ({
    fontSize: 18,
    marginBottom: 5,
    color: props.color,
  }),
  number: { fontWeight: 'bold', fontSize: 18 },
});

function HorizontalCard({ title, number, color }) {
  const classes = useStyles({ color });

  return (
    <Card>
      <CardContent className={classes.wrapper}>
        <Typography component='p' variant='body2' className={classes.title}>
          {title}
        </Typography>
        <Typography variant='body2' component='span' className={classes.number}>
          <CountUp end={number} separator=' ' duration={2} />
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HorizontalCard;
