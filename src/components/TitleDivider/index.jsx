import { Box, Divider, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '16px',
    marginBottom: '8px',
  },
  fix: {
    width: '20px'
  },
  title: {
    margin: '0 8px',
    fontSize: '18px'
  },
  full: {
    flex: 1,
  },
});

function TitleDivider({ text, variant }) {
  const classes = useStyle();
  const option = [classes.full, classes.full]
  
  if (variant==='left') {
    option[0] = classes.fix
  } else if (variant==='right') {
    option[1] = classes.fix
  }

  return (
    <Box className={classes.root}>
      <Divider className={option[0]} />
      <Typography className={classes.title}>
        {text}
      </Typography>
      <Divider className={option[1]} />
    </Box>
  );
}

export default TitleDivider;
