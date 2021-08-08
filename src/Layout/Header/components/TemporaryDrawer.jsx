import { IconButton, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBackIos, Menu } from '@material-ui/icons';
import { vaccine_article, variants_corona_article } from 'assets/article';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DialogItem from './DialogItem';

const useStyles = makeStyles({
  list: {
    width: 'auto',
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const { t } = useTranslation();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const list = [
    {
      title: 'variants_corona',
      content: variants_corona_article,
    },
    { title: 'vaccines_covid', content: vaccine_article },
  ];

  return (
    <div>
      <React.Fragment key={'left'}>
        <IconButton color='inherit' onClick={toggleDrawer(true)}>
          <Menu />
        </IconButton>

        <Drawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
          <div
            className={classes.list}
            role='presentation'
            // onClick={toggleDrawer(false)}
            // onKeyDown={toggleDrawer(false)}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                component='span'
                variant='h6'
                style={{ flexGrow: 1, paddingLeft: '14px' }}
              >
                {t('about').toUpperCase()}
              </Typography>
              <IconButton onClick={toggleDrawer(false)}>
                <ArrowBackIos />
              </IconButton>
            </div>

            <Divider />

            <List>
              {list.map((item, idx) => (
                <DialogItem item={item} index={idx} />
              ))}
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
