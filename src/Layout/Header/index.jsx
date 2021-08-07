import {
  AppBar,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgb(244, 244, 244)',
    boxShadow: 'none',
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    // flexGrow: 1,
    color: '#008B8B',
  },

  link: {
    color: '#FFFFF0',
    textDecoration: 'none',
  },
}));

function Header(props) {
  const classes = useStyles();
  
  return (
    <>
      <AppBar className={classes.root} position='static'>
        <Container>
          <Toolbar disableGutters={true}>
            <Typography variant='h4' className={classes.title}>
              C
            </Typography>
            <img
              src='https://image.flaticon.com/icons/png/512/2659/2659980.png'
              alt='logo'
              height='32px'
            />
            <Typography variant='h4' className={classes.title}>
              VID-19 DATA
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <NavBar />
    </>
  );
}

export default Header;
