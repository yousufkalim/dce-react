import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useTranslation } from 'react-i18next';

const AlertBox = ({open,handleClose}) => {
  const { t } = useTranslation();
  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
         {t("Are you sure you want to delete the selected item")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose(false)}>{t('Discard')}</Button>
          <Button onClick={()=>{handleClose(true)}} autoFocus>
          {t('I agree')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AlertBox