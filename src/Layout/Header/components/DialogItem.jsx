import {
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Close } from '@material-ui/icons';
import image_en from 'assets/images/vaccinces_compare_en.png';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function DialogItem({ item, index }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <ListItem button key={index} onClick={handleClickOpen}>
        <ListItemText primary={t(item.title)} />
      </ListItem>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll='paper'
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
        maxWidth='md'
      >
        <DialogTitle id='scroll-dialog-title'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ flexGrow: 1 }}>{t(item.title)}</span>
            <IconButton size='small' onClick={handleClose}>
              <Close />
            </IconButton>
          </div>
        </DialogTitle>

        <DialogContent dividers={true}>
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        </DialogContent>
      </Dialog>
    </>
  );
}
