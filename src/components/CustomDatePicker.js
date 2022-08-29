import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { InputAdornment } from '@mui/material';
import Birthday from '../assets/Birthday.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@mui/styles';
import frLocale from 'date-fns/locale/fr';
import enLocale from 'date-fns/locale/en-US';

function CustomDatePicker({
  labelText,
  value,
  onChange,
  disablePast,
  disableFuture,
  disabled,
  divStyle,
  labelStyle,
  dobinput,
  centeredText,
  props,
}) {
  const [open, setOpen] = useState(false);
  React.useEffect(() => {
    setLng(localStorage.getItem('i18nextLng'));
  }, [localStorage.getItem('i18nextLng')]);
  const useStyles = makeStyles((theme) => ({
    textfield: {
      textAlign: 'center',
      border: 'none',
    },
    inputLabels: {
      display: 'flex',
      fontStyle: 'normal !important',
      fontWeight: '550 !important',
      fontSize: '14px !important',
      lineHeight: '151.02 !important%',
      color: '#363557 !important',
      '&  .MuiInputLabel-formControl': { textAlign: 'center !important' },
      '@media (max-width:992px)': {
        fontSize: '20px !important',
      },
      '@media (max-width:600px)': {
        width: '200% !important',
        textAlign: 'center !important',
      },
    },
  }));
  const classes = useStyles();
  const { t } = useTranslation();
  const [lng, setLng] = React.useState();

  const localeMap = {
    en: enLocale,
    fr: frLocale,
  };

  const maskMap = {
    fr: '__/__/____',
    en: '__/__/____',
  };

  return (
    <div
      className='custom_input_container'
      style={{
        ...divStyle,
      }}
    >
      <label
        htmlFor={labelText}
        className='custom_input_label'
        style={{
          ...labelStyle,
        }}
      >
        {labelText}
      </label>
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          border: dobinput == 'dob' ? '1px solid #CC8E9C' : '1px solid #DBDBDB',
          borderRadius: dobinput == 'dob' ? '10px' : '10px',
          borderWidth: dobinput == 'dob' ? '1.5px' : '1.5px',
        }}
      >
        {centeredText ? (
          <>
            <div style={{ position: 'absolute', padding: '1%' }}>
              <p style={{ textAlign: 'center', fontSize: '12px', fontWeight: '500', marginTop: '7%' }}>{t('Date of Birth')}</p>
            </div>
          </>
        ) : (
          <>
            {/* {props.birthday && (
              <div style={{ position: 'absolute', padding: '1%' }}>
                <img src={Birthday}></img>
              </div>
            )} */}
          </>
        )}

        <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[lng]}>
          <DesktopDatePicker
            mask={maskMap[lng]}
            className='datepck'
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            value={value}
            onChange={onChange}
            disablePast={disablePast}
            disableFuture={disableFuture}
            inputFormat='dd/MM/yyyy'
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{
                  ...params.inputProps,
                  className: centeredText ? classes.textfield : '',
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                onClick={(e) => {
                  //setOpen(true)
                  if (disabled) {
                    setOpen(false);
                  }
                  if (!disabled) {
                    setOpen(true);
                  }
                }}
              />
            )}
            disabled={disabled}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default CustomDatePicker;
