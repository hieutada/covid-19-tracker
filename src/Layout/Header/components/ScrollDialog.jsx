import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Container, ListItem, ListItemText } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  // const { t } = useTranslation();

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <ListItem button key={'dialog'} onClick={handleClickOpen()}>
        <ListItemText primary='Các chủng loại vaccine' />
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
          {'Các chủng loại vaccine'}
        </DialogTitle>

        <DialogContent dividers={true}>
          <DialogContentText
            id='scroll-dialog-description'
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Container>Đang cập nhật</Container>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
