import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MainColors } from '../../constants';
import TemporaryDrawer from './components/TemporaryDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: MainColors.DarkCyan,
    boxShadow: 'none',
    position: 'sticky',
  },

  link: {
    color: MainColors.White,
    textDecoration: 'none',
  },
}));

function NavBar(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
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
  );
}

export default NavBar;
