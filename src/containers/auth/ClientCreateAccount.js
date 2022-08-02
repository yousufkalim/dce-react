import React, { useState, useEffect } from 'react';

import AppLogoSVG from '../../assets/AppLogo.svg';
import DesignElaborationSVG from '../../assets/DesignElaboration.svg';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomDropDown from '../../components/CustomDropDown';
import MenuItem from '@mui/material/MenuItem';

import { handleLogin } from '../../utils/Auth';
import Api from '../../api/index';

import { useNavigate, useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';

import * as FormValidations from '../../utils/Validations';

import { Store, UpdateStore } from '../../StoreContext';

import { useTranslation } from 'react-i18next';

function ClientCreateAccountScreen() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [isProcessing, setIsProcessing] = useState(false);
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const { t } = useTranslation();
  const store = Store();
  const updateStore = UpdateStore();

  useEffect(() => {
    if (!state?.['Email'] || !state?.['Password']) {
      navigate('/login');
    }
  }, []);

  const navToHome = () => {
    navigate('/home');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isProcessing) {
      return;
    }

    const data = new FormData(event.currentTarget);

    const isValidated = FormValidations.clientCreateAccount(data);

    if (!isValidated) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = {
        email: state['Email'],
        password: state['Password'],
        name: data.get('Full Name'),
        phone: data.get('Phone Number'),
        gender: gender,
      };
      response = await Api('post', '/clients', body);

      if (response?.data?.success) {
        toast.success('Registered successfully!');
        handleLogin(response.data.token, response.data.user, updateStore);
        navToHome();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  return (
    <form noValidate={true} onSubmit={handleSubmit}>
      <div
        className="container"
        style={{
          background:
            'linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))',
        }}
      >
        <div className="login_screen_top">
          <div className="login_screen_row1">
            <div className="login_screen_row1_img create_account_screen_row1_img">
              <img
                style={{ width: '15%', marginBottom: '5%' }}
                src={AppLogoSVG}
              />
              <div>
                <p
                  style={{
                    fontSize: '32px',
                  }}
                >
                  Building
                </p>
                <p
                  style={{
                    fontSize: '32px',
                  }}
                >
                  Profile
                </p>
              </div>
            </div>
            <div className="login_screen_row1_img">
              <img style={{ width: '70%' }} src={DesignElaborationSVG} />
            </div>
          </div>
          <div className="login_screen_row2">
            <div className="create_account_screen_row2_container">
              <CustomInput
                labelText="Full Name"
                inputName="Full Name"
                inputPlaceholder="Full Name"
                divStyle={{
                  marginBottom: '6%',
                }}
              />
              <CustomInput
                labelText="Phone Number"
                inputName="Phone Number"
                inputPlaceholder="Phone Number"
                divStyle={{
                  marginBottom: '6%',
                }}
                minmax={true}
                inputValue={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value.replace(/[^0-9]/g, ''))}
              />
              <div style={{ width: '100%', border: 'none' }}>
                <div>
                  <p className="custom_input_label">{t('Category')}</p>
                </div>
                <CustomDropDown
                  labelStyle={{
                    display: 'none',
                  }}
                  selectID="gender"
                  selectName="gender"
                  selectNullValue={t('Select your gender')}
                  selectValue={gender}
                  onChange={(e) => setGender(e.target.value)}
                  menuItems={[
                    <MenuItem value={'male'}>{t('Male')}</MenuItem>,
                    <MenuItem value={'female'}>{t('Female')}</MenuItem>,
                  ]}
                  selectSX={{
                    fontSize: '12px',
                    border: '2px solid #CC8E9C',
                    padding: '2%',
                    borderRadius: '10px',
                    marginBottom: '3%',
                  }}
                />
              </div>
              <CustomButton
                text="Save"
                type="submit"
                style={{
                  marginBottom: '10%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ClientCreateAccountScreen;
