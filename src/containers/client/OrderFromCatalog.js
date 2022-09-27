import React, { useState, useEffect } from 'react';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useTranslation } from 'react-i18next';

import AdEdit1SVG from '../../assets/AdEdit1.svg';
import AdEdit2SVG from '../../assets/AdEdit2.svg';
import AdEdit3SVG from '../../assets/AdEdit3.svg';

import ClientAppBar from '../../components/ClientAppBar';
import * as ParseAd from '../../components/ParseAd';
import CustomButton from '../../components/CustomButton';

import Api from '../../api';
import { useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import * as FormValidations from '../../utils/Validations';

const steps = ['MY PROJECT', 'My delivery', 'Remarks'];

function OrderFromCatalogScreen() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const params = useParams();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  const [catalog, setCatalog] = useState(null);
  const [basicSection, setBasicSection] = useState({
    gender: '',
    category: '',
    name: '',
    cut: '',
    measurements: {
      type: 'static',
      value: '',
    },
    color: '',
    fabric: '',
    includes_alteration_services: false,
    create_catalog_after_completion: false,
    fabric_type: '',
    fabric_description: '',
    height: '',
    observation: '',
  });
  const [deliverySection, setDeliverySection] = useState({
    date: '',
    client_first_name: '',
    client_last_name: '',
    address: { zip: '', label: '', city: '', lat: '', lng: '' },
  });
  const [notesSection, setNotesSection] = useState({
    note: '',
    price: '',
  });

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

    setImages([...images, ...event.target.files]);
  };
  const handleImageDeselect = (image) => {
    const _images = [...images];
    const index = _images.map((_) => _.name).indexOf(image.name);
    if (index > -1) {
      _images.splice(index, 1);
    }
    setImages([..._images]);
  };

  const _setNotesSection = (key, value) => {
    const obj = {};
    obj[key] = value;
    setNotesSection({
      ...notesSection,
      ...obj,
    });
  };

  useEffect(() => {
    getCatalog();
  }, []);

  // func to get current project
  const getCatalog = async () => {
    let response;
    try {
      response = await Api('get', `/catalogs/${params.id}`);
      const catalogData = response.data.catalog;
      setCatalog(catalogData);
      setBasicSection({
        ...basicSection,
        gender: catalogData.gender,
        category: catalogData.category,
        name: catalogData.name,
      });
      setNotesSection({
        price: catalogData.price,
      });
    } catch (e) {
      console.trace(e);
    }
    setIsLoading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValidated =
      FormValidations.parseAdBasicSection(basicSection) &&
      FormValidations.parseAdDeliverySection(deliverySection);
    if (!isValidated) {
      return;
    }

    if (images.length == 0) {
      toast.error(t('At least one image must be selected.')); // TODO: Trans
      return;
    }

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = new FormData();

      body.append('type', 'direct');
      body.append('catalog', params.id);
      body.append('tailor', catalog.tailor._id);
      body.append('gender', basicSection.gender);
      body.append('category', basicSection.category);
      body.append('name', basicSection.name);
      body.append('cut', basicSection.cut);
      body.append('measurements', JSON.stringify(basicSection.measurements));
      body.append('color', basicSection.color);
      body.append('fabric', basicSection.fabric);
      body.append('includes_alteration_services', basicSection.includes_alteration_services);
      body.append(
        'create_catalog_after_completion',
        basicSection.create_catalog_after_completion // Will remain false anyways
      );
      body.append(
        'delivery',
        JSON.stringify({
          address: deliverySection.address.label,
          country: deliverySection.country,
          zipcode: deliverySection.address.zip,
          city: deliverySection.address.city,
          note: deliverySection.note,
          date: deliverySection.date,
        })
      );
      body.append(
        'budget',
        JSON.stringify({
          min_price: notesSection.price,
          max_price: notesSection.price,
          note: notesSection.note,
        })
      );
      for (let i = 0; i < images.length; i++) {
        body.append('images', images[i]);
      } // Multipart files share the same field name

      response = await Api('post', `/orders`, body);

      if (response?.data?.success) {
        toast.success(t('Order created successfully.'));
        navToMyAds();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const navToMyAds = () => {
    navigate('/my_ads');
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className='container-page'>
          <ClientAppBar color='#F8F4EF' activeTab={2} />
          <div
            className='container'
            style={{
              background: '#FFE9A0',
            }}
          >
            <div className='client_edit_ad_screen_row1'>
              <div className='client_edit_ad_screen_row1_column1'>
                <p
                  style={{
                    fontSize: '30px',
                    fontWeight: '900',
                  }}
                >
                  {t('Place Order')}
                </p>
                <p
                  style={{
                    fontSize: '30px',
                    fontWeight: '900',
                    marginBottom: '20%',
                  }}
                >
                  {basicSection.name}
                </p>
                <img style={{ width: '55%' }} src={AdEdit1SVG} />
              </div>
              <div className='client_edit_ad_screen_row1_column2'>
                <div
                  className='pa_container'
                  style={{
                    marginTop: '8%',
                  }}
                >
                  <div className='pa_steps_row'>
                    <Stepper activeStep={0} alternativeLabel>
                      {steps.map((label, index) => (
                        <Step key={label}>
                          <StepLabel onClick={() => setActiveStep(index)}>{t(label)}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </div>
                  <div className='pa_content_row'>
                    <ParseAd.BasicSection
                      state={basicSection}
                      setState={setBasicSection}
                      disables={['gender', 'category', 'name', 'create_catalog_after_completion']}
                      image={images}
                      handleImageSelect={handleImagesSelect}
                      handleImageDeselect={handleImageDeselect}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='container'
            style={{
              height: '120vh !important',
              background: '#FFC396',
            }}
          >
            <div className='client_edit_ad_screen_row1'>
              <div className='client_edit_ad_screen_row2_column1'>
                <div
                  className='pa_container'
                  style={{
                    marginTop: '10%',
                  }}
                >
                  <div className='pa_steps_row'>
                    <Stepper activeStep={1} alternativeLabel>
                      {steps.map((label, index) => (
                        <Step key={label}>
                          <StepLabel onClick={() => setActiveStep(index)}>{t(label)}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </div>
                  <div className='pa_content_row'>
                    <ParseAd.DeliverySection
                      state={deliverySection}
                      setState={setDeliverySection}
                    />
                  </div>
                </div>
              </div>
              <div className='client_edit_ad_screen_row2_column2'>
                <p
                  style={{
                    fontSize: '30px',
                    fontWeight: '900',
                  }}
                >
                  {t('Delivery')}
                </p>
                <p
                  style={{
                    fontSize: '30px',
                    fontWeight: '900',
                    marginBottom: '20%',
                  }}
                >
                  {t('Details')}
                </p>
                <img style={{ width: '70%' }} src={AdEdit2SVG} />
              </div>
            </div>
          </div>
          <div
            className='container'
            style={{
              background: '#FFFCFB',
            }}
          >
            <div className='client_edit_ad_screen_row1'>
              <div className='client_edit_ad_screen_row1_column1'>
                <p
                  style={{
                    fontSize: '30px',
                    fontWeight: '900',
                  }}
                >
                  {t('Payment')}
                </p>
                <p
                  style={{
                    fontSize: '30px',
                    fontWeight: '900',
                    marginBottom: '20%',
                  }}
                >
                  {t('Details')}
                </p>
                <img style={{ width: '20%' }} src={AdEdit3SVG} />
              </div>
              <div className='client_edit_ad_screen_row1_column2'>
                <div
                  className='pa_container'
                  style={{
                    marginTop: '10%',
                  }}
                >
                  <div className='pa_steps_row'>
                    <Stepper activeStep={2} alternativeLabel>
                      {steps.map((label, index) => (
                        <Step key={label}>
                          <StepLabel onClick={() => setActiveStep(index)}>{t(label)}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </div>
                  <div className='pa_content_row'>
                    <div className='pa_profile_section_container'>
                      <div
                        className='pa_payment_section_textarea_container'
                        style={{
                          borderRadius: '20px',
                          marginBottom: '2%',
                        }}
                      >
                        <div className='pa_payment_section_textarea_label'>
                          <p className='pa_profile_section_input_text'>{t('Extra Note')}</p>
                        </div>
                        <div className='pa_profile_section_input_input'>
                          <textarea
                            className='pa_profile_section_textarea_textarea'
                            defaultValue={notesSection.note}
                            onChange={(e) => _setNotesSection('note', e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      <div
                        className='pa_payment_section_input_container'
                        style={{
                          borderRadius: '20px',
                          marginBottom: '2%',
                        }}
                      >
                        <div className='pa_payment_section_input_label'>
                          <p className='pa_payment_section_input_text'>{t('Catalogue Price')}</p>
                        </div>
                        <div className='pa_payment_section_input_input_container'>
                          <input
                            disabled
                            className='pa_payment_section_input_input'
                            type='number'
                            defaultValue={notesSection.price}
                            onChange={(e) => _setNotesSection('rice', e.target.value)}
                          />
                        </div>
                      </div>
                      <CustomButton
                        text={t('Place this Order')}
                        onClick={handleSubmit}
                        style={{
                          marginBottom: '2%',
                          padding: '1.2% 5%',
                          boxShadow: 'none',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderFromCatalogScreen;
