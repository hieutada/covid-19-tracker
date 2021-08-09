import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
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

function NavBar() {
  const {t} = useTranslation()
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Container>
        <Toolbar disableGutters={true} variant='dense'>
          <TemporaryDrawer />

          <NavLink className={classes.link} to='/'>
            <Button color='inherit'>{t('home').toUpperCase()}</Button>
          </NavLink>

          <NavLink className={classes.link} to='/news'>
            <Button color='inherit'>{t('news').toUpperCase()}</Button>
          </NavLink>

          <NavLink className={classes.link} to='/world'>
            <Button color='inherit'>{t('world').toUpperCase()}</Button>
          </NavLink>

          <NavLink className={classes.link} to='/vietnam'>
            <Button color='inherit'>{t('Vietnam').toUpperCase()}</Button>
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
