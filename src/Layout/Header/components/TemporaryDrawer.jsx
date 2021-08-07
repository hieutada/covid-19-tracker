import { IconButton } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';
import React from 'react';
import ScrollDialog from './ScrollDialog';

const useStyles = makeStyles({
  list: {
    width: 'auto',
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role='presentation'
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key={'info'}>
          <ListItemText primary='THÔNG TIN' />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button key={'vaccin'}>
          <ListItemText primary='Các biến thể Corona' />
        </ListItem>

        <ScrollDialog />
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <IconButton color='inherit' onClick={toggleDrawer(true)}>
          <Menu />
        </IconButton>

        <Drawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
