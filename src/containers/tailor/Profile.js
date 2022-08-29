import React, { useEffect, useState } from 'react';

import AutoComplete from '../../components/AutoComplete';
import DesignElaborationSVG from '../../assets/profile.svg';

import CustomInput from '../../components/CustomInput';

import AddCatalogSVG from '../../assets/AddOrder.svg';
import { useTranslation } from 'react-i18next';

import ProfileBirthdaySVG from '../../assets/ProfileBirthday.svg';
import ProfileCountrySVG from '../../assets/ProfileCountry.svg';
import ProfileEmailSVG from '../../assets/ProfileEmail.svg';
import ProfileLocationSVG from '../../assets/ProfileLocation.svg';
import ProfilePhoneSVG from '../../assets/ProfilePhone.svg';
import InputEyeSVG from '../../assets/InputEye.svg';
import Grid from '@mui/material/Grid';
import dummy from '../../assets/dummy.jpeg';

import TailorAppBar from '../../components/TailorAppBar';
import Footer from '../../components/Footer';
import CustomButton from '../../components/CustomButton';
import CustomDatePicker from '../../components/CustomDatePicker';
import CatalogListTile from '../../components/CatalogListTile';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { getUser } from '../../utils/Auth';

import Api from '../../api';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import * as FormValidations from '../../utils/Validations';

import assetsURL from '../../utils/Assets';

function TailorProfileScreen() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [catalogs, setCatalogs] = useState([]);
  const [profile, setProfile] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [showPassword, setshowPassword] = useState(false);

  const user = getUser();

  const [toEdit, setToEdit] = useState(false);

  const [state, setState] = useState({
    phone: '',
    experience: '',
    diploma: '',
    store_name: '',
    hourly_rate: '',
    free_shipping_rate: '',
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
    loadData();
  }, []);

  const loadData = async () => {
    await getCatalogs();
    await getProfile();
  };

  const getCatalogs = async () => {
    let response;
    try {
      response = await Api('post', `/catalogs/byQuery`, { tailor: user._id });
      const catalogsData = response.data.catalogs.splice(-4);
      setCatalogs(catalogsData);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const getProfile = async () => {
    let response;
    try {
      response = await Api('get', `/auth`);
      const userData = response.data.user;
      setProfile(userData);
      setState({
        ...state,
        phone: userData.phone ?? '',
        experience: userData.experience ?? '',
        diploma: userData.diploma ?? '',
        store_name: userData.store_name ?? '',
        hourly_rate: userData.hourly_rate ?? '',
        free_shipping_rate: userData.free_shipping_rate ?? '',
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

    const isValidated = FormValidations.tailorEditProfile(state);
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
      body.append('experience', state.experience);
      body.append('diploma', state.diploma);
      body.append('store_name', state.store_name);
      body.append('hourly_rate', state.hourly_rate);
      body.append('free_shipping_rate', state.free_shipping_rate);
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

      response = await Api('put', '/tailors', body);

      if (response?.data?.success) {
        toast.success(t('Profile updated successfully.'));
        navToHome();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const navToHome = () => {
    navigate('/home');
  };

  const navToViewCatalog = (id) => {
    navigate(`/view_catalog/${id}`);
  };

  const navToEditCatalog = (id) => {
    navigate(`/edit_catalog/${id}`);
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
        <div
          style={{
            height: '150vh',
            width: '100vw',
          }}
        >
          <TailorAppBar color='#FCFCFC' />

          <div
            className='client_profile_screen_top tailor-client_profile_screen_top'
            style={{
              background:
                'linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))',
            }}
          >
            <div className='tailor-profile-edit-container'>
              <div className='tailor_profile_screen_row1_column1_header_text'>
                <p className='client_profile_screen_row1_text' style={{ paddingLeft: '3%' }}>
                  {t('My Profile')}
                </p>
              </div>
              <CustomButton
                type='submit'
                onClick={toEditCallback}
                text={toEdit ? t('Save') : t('Edit')}
                style={{
                  alignSelf: 'flex-end',
                  boxShadow: 'none',
                  marginRight: '5%',
                  marginBottom: '2%',
                  padding: '0.8% 4%',
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
                  <div
                    className='designer_profile_screen_row1'
                    // style={{
                    //   borderBottomColor: '#DBDBDB',
                    //   borderBottomStyle: 'solid',
                    //   borderBottomWidth: '1.5px',
                    // }}
                  >
                    <div className='tailor_profile_screen_row1_column1_'>
                      <div
                        className='tailor_profile_screen_row1_column1_img'
                        style={{
                          paddingBottom: '2%',
                        }}
                      >
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
                                profileImage
                                  ? URL.createObjectURL(profileImage)
                                  : profile.avatar
                                  ? assetsURL(profile.avatar)
                                  : dummy
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
                      <p className='tailor_profile_screen_row1_column1_user_name_text' style={{ paddingBottom: '2%' }}>
                        {profile.name}
                      </p>
                    </div>
                    <div className='tailor_profile_screen_row1_column2_'>
                      <ProfileInput
                        disabled={!toEdit}
                        name='Phone'
                        placeholder={t('Phone')}
                        defaultValue={profile.phone}
                        // img={ProfilePhoneSVG}
                        label={t('Phone')}
                        minmax='on'
                        onChange={(e) => _setState('phone', e.target.value)}
                        divStyle={{
                          borderTopLeftRadius: '10px',
                          borderTopRightRadius: '10px',
                        }}
                      />
                      <ProfileInput
                        disabled
                        name='Email'
                        placeholder={t('Email')}
                        defaultValue={profile.email}
                        // img={ProfileEmailSVG}
                        label={t('E-mail')}
                        divStyle={{
                          borderBottomLeftRadius: '10px',
                          borderBottomRightRadius: '10px',
                        }}
                      />
                      <CustomDatePicker
                        disabled={!toEdit}
                        centeredText={true}
                        disableFuture
                        dobinput
                        labelStyle={{
                          display: 'none',
                        }}
                        labelText='Date of Birth'
                        value={dateOfBirth}
                        onChange={setDateOfBirth}
                        divStyle={{
                          width: '95%',
                          marginTop: '2%',
                        }}
                      />

                      <div
                        className='pa_profile_section_input_container_'
                        style={{
                          borderRadius: '20px',
                          marginBottom: '2%',
                          height: '45px',
                          borderRadius: '10px !important',
                          marginTop: '2%',
                          width: '95%',
                        }}
                      >
                        <div className='pa_profile_section_input_label_'>
                          <p
                            className='pa_profile_section_input_text_'
                            style={{ width: '60% !important', marginLeft: '4% !important' }}
                          >
                            {t('Address')}
                          </p>
                        </div>
                        <div className='pa_profile_section_input_input'>
                          <div style={{ width: '100%' }}>
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
                        </div>
                      </div>
                      {/* <div style={{ width: '95%' }}>
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
                      </div> */}
                    </div>
                    <div className='tailor_profile_screen_row1_column2_'>
                      <ProfileInput
                        disabled
                        name='Last Password Changed'
                        placeholder={t('Last Password Changed')}
                        defaultValue={
                          profile.last_password_changed
                            ? new Date(profile.last_password_changed).toLocaleDateString('en-GB')
                            : 'N/A'
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
                        inputType={showPassword ? 'text' : 'password'}
                        label={t('Password')}
                        minmax='on'
                        enableEyes={true}
                        setshowPassword={setshowPassword}
                        showPassword={showPassword}
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
                          marginBottom: '3%',
                        }}
                      />
                      <ProfileInput
                        disabled={!toEdit}
                        name='Experience'
                        placeholder={t('Experience')}
                        defaultValue={profile.experience}
                        label={t('Experience')}
                        divStyle={{
                          borderTopLeftRadius: '10px',
                          borderTopRightRadius: '10px',
                        }}
                        minmax='on'
                        onChange={(e) => _setState('experience', e.target.value)}
                      />
                      <ProfileInput
                        disabled={!toEdit}
                        name='Diploma'
                        placeholder={t('Diploma')}
                        defaultValue={profile.diploma}
                        label={t('Diploma')}
                        minmax='on'
                        onChange={(e) => _setState('diploma', e.target.value)}
                      />
                      <ProfileInput
                        disabled={!toEdit}
                        name='Store Name'
                        placeholder={t('Store Name')}
                        defaultValue={profile.store_name}
                        label={t('Store Name')}
                        minmax='on'
                        divStyle={{
                          borderBottomLeftRadius: '10px',
                          borderBottomRightRadius: '10px',
                          marginBottom: '3%',
                        }}
                        onChange={(e) => _setState('store_name', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='tailor_profile_screen_row2'>
              <div className='tailor_profile_screen_row2_list_container'>
                <div className='tailor_profile_screen_row2_column1'>
                  <p className='tailor_profile_screen_row2_column1_text'>{t('Hourly Rate')}</p>
                </div>
                <div className='tailor_profile_screen_row2_column2'>
                  <ProfileInput
                    disabled
                    name='Fixed price'
                    alignText={'textend'}
                    placeholder={t('Certain Amount')}
                    label={t('Fixed price')}
                    divStyle={{
                      borderTopLeftRadius: '10px',
                      borderTopRightRadius: '10px',
                      padding: '1.0% 0',
                    }}
                  />
                  <ProfileInput
                    disabled={!toEdit}
                    name='Any Confection'
                    alignText={'textend'}
                    placeholder='€120'
                    defaultValue={profile.hourly_rate}
                    value={state?.hourly_rate}
                    label={t('Any Confection')}
                    minmax='on'
                    inputType='tel'
                    divStyle={{
                      borderBottomLeftRadius: '10px',
                      borderBottomRightRadius: '10px',
                      padding: '1.0% 0',
                    }}
                    onChange={(e) => _setState('hourly_rate', e.target.value.replace(/[^0-9]/g, ''))}
                  />
                </div>
              </div>
              <div className='tailor_profile_screen_row2_list_container'>
                <div className='tailor_profile_screen_row2_column1'>
                  <p className='tailor_profile_screen_row2_column1_text'>{t('Free Shipping')}</p>
                </div>
                <div className='tailor_profile_screen_row2_column2'>
                  <ProfileInput
                    disabled
                    name='Free Shipping'
                    alignText={'textend'}
                    placeholder={t('Certain Amount')}
                    label={t('Free Shipping')}
                    divStyle={{
                      borderTopLeftRadius: '10px',
                      borderTopRightRadius: '10px',
                      padding: '1.0% 0',
                    }}
                    sx={{ textAlign: 'end' }}
                  />
                  <ProfileInput
                    disabled={!toEdit}
                    name='Confection'
                    alignText={'textend'}
                    placeholder='€500'
                    defaultValue={profile.free_shipping_rate}
                    value={state.free_shipping_rate}
                    label='Confection'
                    minmax='on'
                    inputType='tel'
                    divStyle={{
                      borderBottomLeftRadius: '10px',
                      borderBottomRightRadius: '10px',
                      padding: '1.0% 0',
                    }}
                    onChange={(e) => _setState('free_shipping_rate', e.target.value.replace(/[^0-9]/g, ''))}
                  />
                </div>
              </div>
            </div> */}
            <div className='tailor_profile_screen_row3' style={{ height: '20%' }}>
              <p
                className='tailor_profile_screen_row3_text'
                style={{
                  marginRight: '2%',
                }}
              >
                {t('My Catalogue')}
              </p>
              <div className='tailor_profile_screen_row3_list_container_'>
                <AddCatalogListTile />
                {catalogs.map((_) => (
                  <CatalogListTile
                    catalog={_}
                    mainDivStyle={{
                      width: '160pt',
                    }}
                    buttonText={t('Edit')}
                    onClick={() => navToViewCatalog(_._id)}
                    onClickButton={() => navToEditCatalog(_._id)}
                  />
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

function ProfileInput({
  name,
  onChange,
  placeholder,
  defaultValue,
  inputType,
  img,
  label,
  disabled,
  divStyle,
  minmax,
  alignText,
  value,
  enableEyes,
  setshowPassword,
  showPassword,
}) {
  return (
    <div
      className='tps_profile_input_container'
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
          // className="tps_profile_input_input"
          className={alignText == 'textend' ? 'tps_profile_input_text_end' : 'tps_profile_input_input'}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          maxlength={minmax === 'on' && '30'}
          defaultValue={defaultValue}
          value={value}
          type={inputType}
        />
        {enableEyes ? (
          <>
            <div
              style={{ position: 'absolute', right: '9px', top: '0', paddingTop: '2px', textAlign: 'end' }}
              onClick={() => setshowPassword(!showPassword)}
            >
              <img src={InputEyeSVG} />
            </div>
          </>
        ) : null}
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

function AddCatalogListTile() {
  const navigate = useNavigate();

  const navToCreateCatalog = () => {
    navigate('/create_catalog');
  };
  const { t } = useTranslation();

  return (
    <div className='new_order_list_tile tailor-new_order_list_tile' onClick={navToCreateCatalog}>
      <div className='new_order_list_tile_img'>
        <img style={{ width: '40%' }} src={AddCatalogSVG} />
      </div>
      <p className='new_order_list_tile_text'>{t('Add Catalogue')}</p>
    </div>
  );
}

export default TailorProfileScreen;
