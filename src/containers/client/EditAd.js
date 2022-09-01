import React, { useState, useEffect } from 'react';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useTranslation } from 'react-i18next';

import AdEdit1SVG from '../../assets/AdEdit1.svg';
import AdEdit2SVG from '../../assets/AdEdit2.svg';
import AdEdit3SVG from '../../assets/AdEdit3.svg';

import ClientAppBar from '../../components/ClientAppBar';
import Footer from '../../components/Footer';
import * as ParseAd from '../../components/ParseAd';

import Api from '../../api';
import { useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import * as FormValidations from '../../utils/Validations';

const steps = ['MY PROJECT', 'My delivery', 'Remarks'];

function ClientEditAdScreen() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const params = useParams();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
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
    type: '',
    min_price: '',
    max_price: '',
    note: '',
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

  useEffect(() => {
    getAd();
  }, []);

  // func to get current project
  const getAd = async () => {
    let response;
    try {
      response = await Api('get', `/orders/${params.id}`);
      const adData = response.data.order;
      setBasicSection({
        gender: adData.gender,
        category: adData.category,
        name: adData.name,
        cut: adData.cut,
        measurements: adData.measurements,
        color: adData.color,
        fabric: adData.fabric,
        includes_alteration_services: adData.includes_alteration_services,
        create_catalog_after_completion: adData.create_catalog_after_completion,
      });
      setDeliverySection({
        date: adData.delivery.date,
        type: adData.delivery.type,
        address: {
          zip: adData.delivery.zipcode,
          label: adData.delivery.address,
          city: adData.delivery.city,
        },
      });
      setNotesSection({
        type: adData?.budget.type,
        min_price: adData?.budget.min_price,
        max_price: adData?.budget.max_price,
        note: adData?.budget.note,
        terms_conditions: true,
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
      FormValidations.parseAdDeliverySection(deliverySection) &&
      FormValidations.parseAdNotesSection(notesSection);
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
      body.append('type', 'ad');
      body.append('gender', basicSection.gender);
      body.append('category', basicSection.category);
      body.append('name', basicSection.name);
      body.append('cut', basicSection.cut);
      body.append('measurements', JSON.stringify(basicSection.measurements));
      body.append('color', basicSection.color);
      body.append('fabric', basicSection.fabric);
      body.append('includes_alteration_services', basicSection.includes_alteration_services);
      body.append('create_catalog_after_completion', basicSection.create_catalog_after_completion);
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
      body.append('note', notesSection.note);
      body.append(
        'budget',
        JSON.stringify({
          type: notesSection.type,
          min_price: notesSection.min_price,
          max_price: notesSection.max_price,
          note: notesSection.note,
        })
      );
      for (let i = 0; i < images.length; i++) {
        body.append('images', images[i]);
      } // Multipart files share the same field name

      response = await Api('put', `/orders/${params.id}`, body);

      if (response?.data?.success) {
        toast.success(t('Ad updated successfully.'));
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
              height: '135vh',
            }}
          >
            <div style={{ height: '100%' }} className='client_edit_ad_screen_row1'>
              <div className='client_edit_ad_screen_row1_column1'>
                <p
                  style={{
                    fontSize: '30px',
                    fontWeight: '900',
                  }}
                  className='edit_add_title'
                >
                  {t('Ad Basic')}
                </p>
                <p
                  style={{
                    fontSize: '30px',
                    fontWeight: '900',
                    marginBottom: '20%',
                  }}
                  className='edit_add_title'
                >
                  {t('Details')}
                </p>
                <img style={{ width: '55%' }} src={AdEdit1SVG} />
              </div>
              <div className='client_edit_ad_screen_row1_column2'>
                <div
                  className='pa_container'
                  style={{
                    marginTop: '10%',
                  }}
                >
                  <div className='pa_steps_row'>
                    <Stepper activeStep={0} alternativeLabel>
                      {steps.map((label, index) => (
                        <Step key={label}>
                          <StepLabel onClick={() => setActiveStep(index)} className='stepper_label'>
                            {t(label)}
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </div>
                  <div className='pa_content_row'>
                    <ParseAd.BasicSection
                      state={basicSection}
                      setState={setBasicSection}
                      images={images}
                      setImages={setImages}
                      handleImagesSelect={handleImagesSelect}
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
              background: '#FFC396',
              paddingBottom: '1%',
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
                    <ParseAd.DeliverySection state={deliverySection} setState={setDeliverySection} />
                  </div>
                </div>
              </div>
              <div className='client_edit_ad_screen_row2_column2'>
                <p
                  style={{
                    fontSize: '30px',
                    fontWeight: '900',
                  }}
                  className='edit_add_title'
                >
                  {t('My delivery')}
                </p>
                <p
                  style={{
                    fontSize: '30px',
                    fontWeight: '900',
                    marginBottom: '20%',
                  }}
                  className='edit_add_title'
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
              paddingBottom: '2%',
            }}
          >
            <div className='client_edit_ad_screen_row1'>
              <div className='client_edit_ad_screen_row1_column1'>
                <p
                  style={{
                    fontSize: '30px',
                    fontWeight: '900',
                  }}
                  className='edit_add_title'
                >
                  {t('Payment')}
                </p>
                <p
                  style={{
                    fontSize: '30px',
                    fontWeight: '900',
                    marginBottom: '20%',
                  }}
                  className='edit_add_title'
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
                    <ParseAd.NotesSection state={notesSection} setState={setNotesSection} onClick={handleSubmit} />
                  </div>
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

export default ClientEditAdScreen;
