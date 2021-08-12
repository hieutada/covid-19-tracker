import {
  AppBar,
  Box,
  Container,
  Divider,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import LanguageSelector from '../../components/Selector/LanguageSelector';
import { MainColors } from '../../constants';
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
  topBox: {
    backgroundColor: MainColors.WhiteSmoke,
    color: MainColors.PaleVioletRed,
  },

  topDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
  },

  rootBar: {
    flexGrow: 1,
    backgroundColor: MainColors.WhiteSmoke,
    boxShadow: 'none',
    position: 'static',
  },

  title: {
    color: '#008B8B',
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <>
      <header>
        <Box className={classes.topBox} borderBottom='1px solid'>
          <Container>
            <div className={classes.topDiv}>
              <Typography style={{ flexGrow: 1 }}>Hotline: 19009095</Typography>
              <LanguageSelector />
            </div>
          </Container>
        </Box>

        {/* <Divider /> */}

        {/* Bar 1 */}
        <AppBar className={classes.rootBar}>
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
      </header>

      {/* Bar 2 */}
      <NavBar />
    </>
  );
}

export default Header;
