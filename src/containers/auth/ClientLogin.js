import React, { useState } from 'react';

import AppLogoSVG from '../../assets/AppLogo.svg';
import DesignElaborationSVG from '../../assets/DesignElaboration.svg';
import Cross from '../../assets/modalcross.svg';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { handleLogin } from '../../utils/Auth';
import Api from '../../api/index';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import Footer from '../../components/Footer';

import * as FormValidations from '../../utils/Validations';

import { Store, UpdateStore } from '../../StoreContext';

import { useTranslation } from 'react-i18next';
import ResetPasswordScreen from './ResetPassword';

function ClientLoginScreen() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [email, setEmail] = useState('');
  let [forgetPassword, setforgetPassword] = useState(false);

  const store = Store();
  const updateStore = UpdateStore();

  const navToHome = () => {
    navigate('/home');
  };

  const navToSelectRole = (e) => {
    navigate('/select_role_register');
  };
  const handleInput = (e) => {
    setEmail(e.target.value);
  };
  const forgetPasswrd = async () => {
    // if (email) {s
    let res = await Api('post', '/clients/forget-password', { email });
    if (res) {
      setOpen(false);
      toast.success(t('Please check your email to reset your password'));
    }
    setEmail('');
    // } else {
    //   toast.success("Please enter your email");
    // }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isProcessing) {
      return;
    }

    const data = new FormData(event.currentTarget);

    const isValidated = FormValidations.login(data);

    if (!isValidated) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = {
        email: data.get('Email'),
        password: data.get('Password'),
      };

      response = await Api('post', '/auth/client_login', body);
      // if (!response?.data?.success) {
      //   toast.error("You have been blocked");
      // } else
      if (response?.data?.success) {
        toast.success(t('Logged In'));
        handleLogin(response.data.token, response.data.user, updateStore);
        navToHome();
      }
    } catch (e) {
      toast.error(`${t(e.response.data.message)}`);
      if (e.response?.data?.role) {
        navigate(`/${e.response?.data?.role}_login`);
      }
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 470,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: '2% 6% 0% 6%',
    outline: 'none',
    border: 'none',
    borderRadius: '30px',
  };

  return (
    <>
      <form noValidate={true} onSubmit={handleSubmit}>
        <div
          className='container'
          style={{
            background:
              'linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))',
          }}
        >
          <div className='login_screen_top'>
            <div className='login_screen_row1'>
              <div className='login_screen_row1_img'>
                <img style={{ width: '35%', marginBottom: '5%' }} src={AppLogoSVG} />
              </div>
              <div className='login_screen_row1_img'>
                <img style={{ width: '70%' }} src={DesignElaborationSVG} />
              </div>
            </div>
            <div className='login_screen_row2'>
              <div className='login_screen_row2_container'>
                <CustomInput
                  labelText={t('Email')}
                  inputType='email'
                  inputName='Email'
                  inputPlaceholder='abc@xyz.com'
                  divStyle={{
                    marginBottom: '6%',
                  }}
                />
                <CustomInput
                  labelText={t('Password')}
                  inputType='password'
                  inputName='Password'
                  inputPlaceholder='********'
                  enableEyes={true}
                  divStyle={{
                    marginBottom: '6%',
                  }}
                />
                <p
                  onClick={handleOpen}
                  style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    color: '#A0A0A0',
                    marginBottom: '4%',
                    cursor: 'pointer',
                  }}
                >
                  {t('Forgot Password?')}
                </p>
                <CustomButton
                  text={t('Login')}
                  type='submit'
                  style={{
                    marginBottom: '10%',
                  }}
                />
                <div
                  onClick={navToSelectRole}
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <p
                    style={{
                      fontSize: '11px',
                      color: '#A0A0A0',
                    }}
                  >
                    {t("Don't have an account?")}
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      color: '#CC8E9C',
                    }}
                  >
                    {t('Register now')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box sx={style} className='forget-modal'>
          <div className='cross-img'>
            <img src={Cross} style={{ width: '15px', cursor: 'pointer' }} onClick={handleClose} />
          </div>
          <Typography id='modal-modal-title' variant='h6' component='h2' sx={{ textAlign: 'center' }}>
            Forgot Password?
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{ mt: 1, mb: 3, textAlign: 'center' }}
            className='forget-modal-description'
          >
            Enter your email, So we can send you a verification code
          </Typography>
          <CustomInput
            labelText='Email'
            inputType='email'
            inputName='Email'
            inputPlaceholder='abc@xyz.com'
            onChange={handleInput}
            divStyle={{
              marginBottom: '10%',
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CustomButton
              text={t('Send Code')}
              // type="submit"
              onClick={forgetPasswrd}
              style={{
                marginBottom: '13%',
              }}
            />
          </div>
        </Box>
      </Modal>
      {/* <ResetPasswordScreen open={forgetPassword} setOpen={setforgetPassword} /> */}
      <Footer />
    </>
  );
}

export default ClientLoginScreen;
