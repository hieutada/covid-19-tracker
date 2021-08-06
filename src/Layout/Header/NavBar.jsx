import {
  AppBar,
  Button,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import TemporaryDrawer from './components/TemporaryDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

function NavBar(props) {
  const classes = useStyles();

  return (
    <>
      <AppBar
        style={{ backgroundColor: 'rgb(244, 244, 244)', boxShadow: 'none' }}
      >
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

      {/* <Container>
        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
          <Typography variant='h4' className={classes.title}>
            COVID-19 DATA
          </Typography>
        </div>
      </Container> */}

      <AppBar
        style={{
          backgroundColor: '#008B8B',
          boxShadow: 'none',
          marginTop: '64px',
        }}
        position='sticky'
      >
        <Container>
          <Toolbar disableGutters={true} variant='dense'>
            <TemporaryDrawer />

            <NavLink className={classes.link} to='/'>
              <Button color='inherit'>TRANG CHỦ</Button>
            </NavLink>

            <NavLink className={classes.link} to='/'>
              <Button color='inherit'>DIỄN BIẾN</Button>
            </NavLink>

            <NavLink className={classes.link} to='/world'>
              <Button color='inherit'>THẾ GIỚI</Button>
            </NavLink>

            <NavLink className={classes.link} to='/vietnam'>
              <Button color='inherit'>VIỆT NAM</Button>
            </NavLink>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Sider */}
    </>
  );
}

export default NavBar;
