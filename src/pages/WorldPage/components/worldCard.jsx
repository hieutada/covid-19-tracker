import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
  wrapper: (props) => ({ borderLeft: `5px solid ${props.style.color}` }),
  title: (props) => ({
    fontSize: 18,
    marginBottom: 5,
    color: props.style.color,
  }),
  count: { fontWeight: 'bold', fontSize: 18 },
}));

HighlightCard.propTypes = {
  summaryField: PropTypes.object,
};

function HighlightCard({ summaryField }) {
  const { title, count, style } = summaryField;
  const classes = useStyles({ style });

  return (
    <Card>
      <CardContent className={classes.wrapper}>
        <Typography component='p' variant='body2' className={classes.title}>
          {title}
        </Typography>
        <Typography variant='body2' component='span' className={classes.count}>
          <CountUp end={count} separator=' ' duration={2} />
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HighlightCard;
