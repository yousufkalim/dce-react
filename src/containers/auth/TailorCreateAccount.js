import React, { useState, useEffect } from 'react';

import AppLogoSVG from '../../assets/AppLogo.svg';
import DesignElaborationSVG from '../../assets/DesignElaboration.svg';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';

import { handleLogin } from '../../utils/Auth';
import Api from '../../api/index';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';

import * as FormValidations from '../../utils/Validations';

import { Store, UpdateStore } from '../../StoreContext';

import { useTranslation } from 'react-i18next';

function TailorCreateAccountScreen() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const { state } = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasPhysicalStore, setHasPhysicalStore] = useState(false);

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

    const isValidated = FormValidations.tailorCreateAccount(data);
    if (!isValidated) {
      return;
    }

    let response;

    try {
      const body = {
        email: state['Email'],
        password: state['Password'],
        // shop_name: data.get("Name of your company"),
        name: data.get('Name'),
        phone: data.get('Phone No'),
      };
      setIsProcessing(true);
      if (hasPhysicalStore) {
        if (!data.get('Store Name')) {
          toast.error("Store Name can't be empty.");
          return;
        }
        body['store_name'] = data.get('Store Name');
      }
      response = await Api('post', '/tailors', body);

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
                  Introduce
                </p>
                <p
                  style={{
                    fontSize: '32px',
                  }}
                >
                  yourself
                </p>
              </div>
            </div>
            <div className="login_screen_row1_img">
              <img style={{ width: '70%' }} src={DesignElaborationSVG} />
            </div>
          </div>
          <div className="login_screen_row2">
            <div className="create_account_screen_row2_container">
              {/* <CustomInput
                labelText={t("Name of your company")}
                inputName="Name of your company"
                inputPlaceholder={t("Name of your company")}
                divStyle={{
                  marginBottom: "6%",
                }}
              /> */}
              <CustomInput
                labelText={t('Name')}
                inputName="Name"
                inputPlaceholder={t('Name')}
                divStyle={{
                  marginBottom: '6%',
                }}
              />
              <CustomInput
                labelText={t('Phone No')}
                inputName="Phone No"
                inputPlaceholder={t('Phone No')}
                divStyle={{
                  marginBottom: '2%',
                }}
                minmax={true}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2%',
                }}
              >
                <Checkbox
                  checked={hasPhysicalStore}
                  sx={{
                    color: grey[900],
                    '&.Mui-checked': {
                      color: grey[900],
                    },
                  }}
                  onChange={(e) => setHasPhysicalStore(e.target.checked)}
                />
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#A0A0A0',
                    paddingLeft: '10px',
                  }}
                >
                  {t('I Have Physical Store')}
                </p>
              </div>
              {hasPhysicalStore ? (
                <CustomInput
                  labelText={t('Store Name')}
                  inputName="Store Name"
                  inputPlaceholder={t('Store Name')}
                  labelStyle={{
                    display: 'none',
                  }}
                  divStyle={{
                    marginBottom: '6%',
                    width: '48%',
                  }}
                />
              ) : (
                <></>
              )}
              <CustomButton
                text={t('Save')}
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

export default TailorCreateAccountScreen;
