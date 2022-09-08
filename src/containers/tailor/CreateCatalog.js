import React, { useState } from 'react';

import AddCatalogSVG from '../../assets/AddCatalog.svg';
import UploadSVG from '../../assets/upload.svg';

import TailorAppBar from '../../components/TailorAppBar';
import Footer from '../../components/Footer';
import { useTranslation } from 'react-i18next';

import CustomDropDown from '../../components/CustomDropDown';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Attachment from '../../components/Attachment';
import ViewImageModal from '../../components/ViewImageModal';
import AlertBox from '../../components/AlertBox';

import MenuItem from '@mui/material/MenuItem';
import { Modal } from '@mui/material';

import Api from '../../api/index';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import * as FormValidations from '../../utils/Validations';

function TailorCreateCatalogScreen() {
  const { t } = useTranslation();

  return (
    <div className='container-page'>
      <TailorAppBar color='#FFFAF9' activeTab={1} />
      {/* <OrderAcceptForm/> */}

      <div
        className='container'
        style={{
          background: '#FFEEEA',
        }}
      >
        <div className='tailor_create_catalog_screen_row1'>
          <div className='tailor_create_catalog_screen_row1_column1'>
            <img style={{ width: '100%' }} src={AddCatalogSVG} />
          </div>
          <div className='tailor_create_catalog_screen_row1_column2'>
            <p
              style={{
                marginTop: '10%',
                marginBottom: '2.5%',
                fontSize: '18px',
                fontWeight: '900',
              }}
            >
              {t('Catalogue')}
            </p>
            <div className='tccs_input_section_container' style={{}}>
              <div className='pa_content_row'>
                <InputSection />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function InputSection() {
  const [open, setOpen] = useState(false);
  const [imageToDeleteConfirmation, setImageToDeleteConfirmation] = useState();
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [images, setImages] = useState([]);
  const [viewImage, setViewImage] = useState(null);

  const [state, setState] = useState({
    name: '',
    gender: '',
    category: '',
    price: '',
    description: '',
  });

  const [isViewImageModal, setIsViewImageModal] = useState(false);

  const handleCloseAlert = (confirmation) => {
    if (confirmation) {
      const _images = [...images];
      const index = _images.map((_) => _.name).indexOf(imageToDeleteConfirmation.name);
      if (index > -1) {
        _images.splice(index, 1);
      }
      setImages([..._images]);
    }
    setOpen(false);
  };
  const handleIsViewImageModalClose = () => {
    setIsViewImageModal(false);
  };
  const handleIsViewImageModalOpen = () => {
    setIsViewImageModal(true);
  };

  const handleImagesSelect = (event) => {
    if (event.target.files.length + images.length > 5) {
      toast.error(t('You can select a maximum of 5 files.'));
      return;
    }

    for (let i = 0; i < event.target.files.length; i++) {
      const obj = event.target.files[i];
      if (obj.size / 1024 > 5000) {
        toast.error(t('File sizes greater than 5 MB are not allowed.'));
        return;
      }
    }

    if (event.target.files.length + images.length > 5) {
      toast.error(t('You can select a maximum of 5 files.'));
      return;
    }
    setImages([...images, ...event.target.files]);
  };

  //const handleImageDeselect = (image) => {
  //setOpen(true)
  //console.log("confirmation");
  // if(!open){
  //   const _images = [...images];
  //   const index = _images.map((_) => _.name).indexOf(image.name);
  //   if (index > -1) {
  //     _images.splice(index, 1);
  //   }
  //   setImages([..._images]);
  // }

  //};

  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setState({
      ...state,
      ...obj,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValidated = FormValidations.tailorCreateCatalog(state);
    if (!isValidated) {
      return;
    }

    if (images.length == 0) {
      toast.error(t('Image must be selected'));
      return;
    }

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = new FormData();

      body.append('name', state.name);
      body.append('gender', state.gender);
      body.append('category', state.category);
      body.append('price', state.price);
      body.append('description', state.description);
      for (let i = 0; i < images.length; i++) {
        body.append('images', images[i]);
      } // Multipart files share the same field name

      response = await Api('post', '/catalogs', body);

      if (response?.data?.success) {
        toast.success(t('Catalogue created successfully.'));
        navToCatalogs();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const navToCatalogs = () => {
    navigate('/catalog');
  };
  const { t } = useTranslation();

  return (
    <>
      <AlertBox open={open} setOpen={setOpen} handleClose={handleCloseAlert} />
      <div className='pa_profile_section_container'>
        <div
          className='pa_profile_section_input_container'
          style={{
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
          }}
        >
          <div className='pa_profile_section_input_label'>
            <p className='pa_profile_section_input_text'>{t('Name')}</p>
          </div>
          <div className='pa_profile_section_input_input'>
            <CustomInput
              labelStyle={{
                display: 'none',
              }}
              inputStyle={{
                border: 'none',
                fontSize: '12px',
              }}
              minmax='on'
              inputPlaceholder={t('I give a name to my confection')}
              onChange={(e) => _setState('name', e.target.value)}
            />
          </div>
        </div>

        <div className='pa_profile_section_input_container'>
          <div className='pa_profile_section_input_label'>
            <p className='pa_profile_section_input_text'>{t('Gender')}</p>
          </div>
          <div className='pa_profile_section_input_input'>
            <CustomDropDown
              labelStyle={{
                display: 'none',
              }}
              selectID='gender'
              selectName='gender'
              selectNullValue={t('Select gender')}
              selectValue={state.gender}
              onChange={(e) => _setState('gender', e.target.value)}
              menuItems={[
                <MenuItem value={t('MAN')}>{t('MAN')}</MenuItem>,
                <MenuItem value={t('WOMEN')}>{t('WOMEN')}</MenuItem>,
                <MenuItem value={t('CHILD')}>{t('CHILD')}</MenuItem>,
                <MenuItem value={t('Other')}>{t('Other')}</MenuItem>,
              ]}
              selectSX={{
                fontSize: '12px',
              }}
            />
          </div>
        </div>
        {/* <div className='pa_profile_section_input_container'>
          <div className='pa_profile_section_input_label'>
            <p className='pa_profile_section_input_text'>{t('Category')}</p>
          </div>
          <div className='pa_profile_section_input_input'>
            <CustomDropDown
              labelStyle={{
                display: 'none',
              }}
              selectID='category'
              selectName='category'
              selectNullValue={t('Select category')}
              selectValue={t(state.category)}
              onChange={(e) => _setState('category', e.target.value)}
              menuItems={[
                <MenuItem value={'WOMEN'}>{t('WOMEN')}</MenuItem>,
                <MenuItem value={'MAN'}>{t('MAN')}</MenuItem>,
                <MenuItem value={'CHILD'}>{t('CHILD')}</MenuItem>,
                <MenuItem value={'Other'}>{t('Other')}</MenuItem>,
              ]}
            />
          </div>
        </div> */}
        <div
          className='pa_profile_section_input_container'
          style={{
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
            marginBottom: '2%',
          }}
        >
          <div className='pa_profile_section_input_label'>
            <p className='pa_profile_section_input_text'>{t('Price')}</p>
          </div>
          <div className='pa_profile_section_input_input'>
            <CustomInput
              inputType='tel'
              inputValue={state?.price}
              labelStyle={{
                display: 'none',
              }}
              inputStyle={{
                border: 'none',
                fontSize: '12px',
              }}
              minmax='on'
              inputPlaceholder={t('Set your Price')}
              onChange={(e) => _setState('price', e.target.value.replace(/[^0-9]/g, ''))}
            />
          </div>
        </div>
        <div
          className='pa_payment_section_textarea_container'
          style={{
            height: '30%',
            borderRadius: '20px',
            marginBottom: '2%',
          }}
        >
          <div className='pa_payment_section_textarea_label'>
            <p className='pa_profile_section_input_text'>{t('Description')}</p>
          </div>
          <div className='pa_profile_section_input_input'>
            <textarea
              className='pa_profile_section_textarea_textarea'
              placeholder={t('Tell us about your service')}
              onChange={(e) => _setState('description', e.target.value)}
              maxLength='300'
            ></textarea>
          </div>
        </div>
        <div
          className='pa_profile_section_input_container'
          style={{
            borderRadius: '20px',
            // marginTop: '1%',
          }}
        >
          <div className='pa_profile_section_input_label'>
            <p className='pa_profile_section_input_text'>Attachments</p>
          </div>
          <div className='pa_profile_section_input_input'>
            <label className='upload-pic-label' htmlFor='filePicker'>
              <input
                type='file'
                multiple
                accept='.jpg,.jpeg,.png'
                hidden
                id='filePicker'
                name='file'
                onChange={handleImagesSelect}
              />
              <div className='upload-img-text-cont'>
                <span className='upload-img-text'>{t('upload an illustration of your creation')}</span>
                <img src={UploadSVG} />
              </div>
            </label>
          </div>
        </div>
        <div className='selected-images-container'>
          {images?.map((_) => (
            <Attachment
              image={_}
              view={() => {
                setViewImage(_);
                handleIsViewImageModalOpen();
              }}
              deselect={() => {
                setOpen(true);
                setImageToDeleteConfirmation(_);
              }}
            />
          ))}
        </div>
        <CustomButton
          text={t('Create Catalogue')}
          onClick={handleSubmit}
          style={{
            marginTop: '3%',
            marginBottom: '2%',
            padding: '1.2% 5%',
            boxShadow: 'none',
          }}
        />
        <Modal open={isViewImageModal} onClose={handleIsViewImageModalClose} aria-labelledby='View Image'>
          <ViewImageModal src={viewImage} handleClose={handleIsViewImageModalClose} />
        </Modal>
      </div>
    </>
  );
}

export default TailorCreateCatalogScreen;
