import React, { useState, useEffect } from 'react';

import AutoComplete from '../../components/AutoComplete';

import DesignElaborationSVG from '../../assets/profile.svg';

import ProfileEmailSVG from '../../assets/ProfileEmail.svg';
import ProfilePhoneSVG from '../../assets/ProfilePhone.svg';
import dummy from '../../assets/dummy.jpeg';
import { useTranslation } from 'react-i18next';

import ClientAppBar from '../../components/ClientAppBar';
import Footer from '../../components/Footer';
import CustomButton from '../../components/CustomButton';
import CustomDatePicker from '../../components/CustomDatePicker';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import Api from '../../api';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import * as FormValidations from '../../utils/Validations';
import assetsURL from '../../utils/Assets';

function ClientProfileScreen() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [profile, setProfile] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [toEdit, setToEdit] = useState(false);

  const [state, setState] = useState({
    phone: '',
    password: undefined,
  });

  // Z-Mods
  const [dateOfBirth, setDateOfBirth] = useState(new Date('January 01, 1999'));
  const [address, setAddress] = useState({
    zip: '',
    label: '',
    city: '',
    lat: '',
    lng: '',
  });
  const [addresses, setAddresses] = useState([]);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);
  };

  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setState({
      ...state,
      ...obj,
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    let response;
    try {
      response = await Api('get', `/auth`);
      const userData = response.data.user;
      setProfile(userData);
      setState({
        ...state,
        phone: userData.phone ?? '',
      });
      if (userData.dob) {
        setDateOfBirth(userData.dob);
      }
      if (userData.address) {
        setAddress({
          zip: userData.zip_code,
          label: userData.address,
          city: userData.city,
        });
      }
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const toEditCallback = (event) => {
    event.preventDefault();

    if (!toEdit) {
      setToEdit(true);
    } else {
      handleSubmit(event);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValidated = FormValidations.clientEditProfile(state);
    if (!isValidated) {
      return;
    }

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = new FormData();

      body.append('phone', state.phone);
      if (dateOfBirth) {
        body.append('dob', dateOfBirth);
      }
      if (address.label) {
        body.append('address', address.label);
        body.append('zip_code', address.zip);
        body.append('city', address.city);
      }
      if (state.password) {
        body.append('password', state.password);
      }
      body.append('image', profileImage);

      response = await Api('put', `/clients/${profile?._id}`, body);

      if (response?.data?.success) {
        toast.success(t('Profile updated successfully.'));
        // navToHome();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const navToHome = () => {
    navigate('/home');
  };

  const _setAddress = (_) => {
    setAddress({ ...address, ..._ });
  };
  const handleSelectAddress = (e) => {
    if (e) {
      _setAddress({
        label: e.label,
        zip: e.PostalCode,
        city: e.city,
        lat: e.lat,
        lng: e.lng,
      });
    } else {
      _setAddress({
        label: '',
        zip: '',
        city: '',
        lat: '',
        lng: '',
      });
    }
  };
  const handleInputAddress = async (e) => {
    if (e.target.value === '') {
      _setAddress({
        label: '',
        zip: '',
        city: '',
        lat: '',
        lng: '',
      });
      setAddresses([]);
    } else {
      _setAddress({
        label: e.target.value,
      });
      const config = {
        method: 'get',
        url: `https://api-adresse.data.gouv.fr/search/?q=${e.target.value}&type=housenumber&autocomplete=1`,
      };
      axios.defaults.headers = null;
      try {
        const response = await axios(config);
        const addressToSet = [];
        response.data.features
          .map((item) => {
            addressToSet.push({
              label: item.properties.label,
              city: item.properties.city,
              PostalCode: item.properties.postcode,
              lat: item.geometry.coordinates[1],
              lng: item.geometry.coordinates[0],
            });
            setAddresses(addressToSet);
          })
          .catch(function (error) {
            console.log(error);
          });
        setAddresses(addressToSet);
      } catch (e) {
        console.trace(e);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className='container'>
          <ClientAppBar color='#FCFCFC' />
          <div
            className='client_profile_screen_top'
            style={{
              background:
                'linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))',
            }}
          >
            <div className='client_profile_screen_row1'>
              <p className='client_profile_screen_row1_text' style={{ paddingLeft: '3%' }}>
                {t('My Profile')}
              </p>
              <CustomButton
                type='submit'
                onClick={toEditCallback}
                text={toEdit ? t('Save') : t('Edit')}
                style={{
                  boxShadow: 'none',
                  marginRight: '5%',
                }}
              />
            </div>
            <div className='client_profile_screen_row2'>
              <div className='client_profile_screen_row2_column1'>
                <div className='prof-img'>
                  <img style={{ width: '88%' }} src={DesignElaborationSVG} />
                </div>
              </div>
              <div className='client_profile_screen_row2_column2'>
                <div className='cps_profile_container'>
                  <div className='cps_profile_img' style={{ paddingBottom: '2%' }}>
                    <label>
                      <input
                        style={{
                          display: 'none',
                          cursor: 'none',
                        }}
                        disabled={!toEdit}
                        type='file'
                        accept='image/*'
                        onChange={handleImageSelect}
                      />
                      <div
                        style={{
                          position: 'relative',
                          height: '100%',
                          width: '100%',
                        }}
                      >
                        <img
                          className='image_container'
                          style={{
                            height: '80pt',
                            width: '80pt',
                          }}
                          src={
                            profileImage ? URL.createObjectURL(profileImage) : profile.avatar ? assetsURL(profile.avatar) : dummy
                          }
                        />
                        {toEdit ? (
                          <AddPhotoAlternateIcon
                            sx={{
                              position: 'absolute',
                              right: '-4pt',
                              top: '50pt',
                            }}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    </label>
                  </div>
                  <p className='cps_profile_text' style={{ paddingBottom: '10px' }}>
                    {profile.name}
                  </p>
                  <ProfileInput
                    disabled={!toEdit}
                    name='Phone'
                    placeholder={t('Phone')}
                    defaultValue={profile.phone}
                    // img={ProfilePhoneSVG}
                    label={t('Phone number')}
                    minmax='on'
                    divStyle={{
                      borderTopLeftRadius: '10px',
                      borderTopRightRadius: '10px',
                    }}
                    onChange={(e) => _setState('phone', e.target.value)}
                  />
                  <ProfileInput
                    disabled
                    name='Email'
                    placeholder={t('E-mail')}
                    defaultValue={profile.email}
                    // img={ProfileEmailSVG}
                    label={t('E-mail')}
                  />
                  <CustomDatePicker
                    disabled={!toEdit}
                    disableFuture
                    labelStyle={{
                      display: 'none',
                    }}
                    // centeredText={true}
                    labelText='Date of Birth'
                    value={dateOfBirth}
                    label='Date of Birth'
                    onChange={setDateOfBirth}
                    divStyle={{
                      width: '90%',
                      marginTop: '2%',
                    }}
                  />

                  <div style={{ width: '90%' }}>
                    <AutoComplete
                      disabled={!toEdit}
                      name='Address'
                      required={true}
                      label={'Address'}
                      value={address?.label}
                      options={addresses}
                      placeholder={t('Address')}
                      onChangeAddress={(e) => {
                        handleInputAddress(e);
                      }}
                      onAddressSelect={(e) => handleSelectAddress(e)}
                      defaultValue={address.label}
                    />
                  </div>
                  <ProfileInput
                    disabled
                    name='Last Password Changed'
                    placeholder={t('Last Password Changed')}
                    defaultValue={
                      profile.last_password_changed ? new Date(profile.last_password_changed).toLocaleDateString('en-gb') : 'N/A'
                    }
                    label={t('Last Password Changed')}
                    divStyle={{
                      borderTopLeftRadius: '10px',
                      borderTopRightRadius: '10px',
                    }}
                  />
                  <ProfileInput
                    disabled={!toEdit}
                    name='Password'
                    placeholder='**********'
                    defaultValue=''
                    label='Password'
                    onChange={(e) => _setState('password', e.target.value)}
                  />
                  <ProfileInput
                    disabled
                    name='Account Created'
                    placeholder={t('Account Created')}
                    defaultValue={new Date(profile.createdAt).toLocaleDateString('en-GB')}
                    label={t('Account Created')}
                    divStyle={{
                      borderBottomLeftRadius: '10px',
                      borderBottomRightRadius: '10px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

function ProfileInput({ disabled, name, onChange, placeholder, defaultValue, img, label, divStyle, minmax }) {
  return (
    <div
      className='cps_profile_input_container'
      style={{
        ...divStyle,
      }}
    >
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        <input
          disabled={disabled}
          className='cps_profile_input_input'
          name={name}
          maxlength={minmax === 'on' && '10'}
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
        {label ? (
          <p
            style={{
              fontSize: '12px',
              fontWeight: '500',
              position: 'absolute',
              left: '2%',
              top: '1%',
            }}
          >
            {label}
          </p>
        ) : (
          <img
            src={img}
            style={{
              width: '16px',
              position: 'absolute',
              left: '2%',
              top: '1%',
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ClientProfileScreen;
