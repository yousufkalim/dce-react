import React, { useState } from 'react';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import AdElaborationSVG from '../../assets/AdElaboration.svg';
import { useTranslation } from 'react-i18next';

import ClientAppBar from '../../components/ClientAppBar';
import Footer from '../../components/Footer';
import * as ParseAd from '../../components/ParseAd';

import Api from '../../api/index';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import * as FormValidations from '../../utils/Validations';

const steps = ['MY PROJECT', 'My delivery', 'Remarks'];

function ClientCreateAdScreen() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [images, setImages] = useState([]);
  const [basicSection, setBasicSection] = useState({
    // gender: "",
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
  });
  const [deliverySection, setDeliverySection] = useState({
    date: '',
    address: { zip: '', label: '', city: '', lat: '', lng: '' },
  });
  const [notesSection, setNotesSection] = useState({
    type: '',
    min_price: '',
    max_price: '',
    note: '',
    terms_conditions: true,
  });

  const handleImagesSelect = (event) => {
    if (event.target.files.length + images.length > 5) {
      toast.error('You can select a maximum of 5 files.');
      return;
    }

    for (let i = 0; i < event.target.files.length; i++) {
      const obj = event.target.files[i];
      if (obj.size / 1024 > 5000) {
        toast.error('File sizes greater than 5 MB are not allowed.');
        return;
      }
    }

    if (event.target.files.length + images.length > 5) {
      toast.error('You can select a maximum of 5 files.');
      return;
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

  const basicSectionCallback = () => {
    const isValidated = FormValidations.parseAdBasicSection(basicSection);
    if (!isValidated) {
      return;
    }
    if (images.length == 0) {
      toast.error(t('At least one image must be selected.')); // TODO: Trans
      return;
    }
    setActiveStep(1);
  };

  const deliverySectionCallback = () => {
    const isValidated = FormValidations.parseAdDeliverySection(deliverySection);
    if (!isValidated) {
      return;
    }
    setActiveStep(2);
  };

  const notesSectionCallback = async (event) => {
    event.preventDefault();

    const isValidated =
      FormValidations.parseAdBasicSection(basicSection) &&
      FormValidations.parseAdDeliverySection(deliverySection) &&
      FormValidations.parseAdNotesSection(notesSection);
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
      body.append('type', 'ad');
      // body.append("gender", basicSection.gender);
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

      response = await Api('post', '/orders', body);

      if (response?.data?.success) {
        toast.success(t('Ad created successfully.'));
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

  const navToCreateAd = () => {
    navigate('/create_ad');
  };

  return (
    <>
      <div className='container'>
        <ClientAppBar activeTab={2} color='#FFFAF9' />
        <div
          className='client_create_ad_screen_top'
          style={{
            background: '#FFEEEA',
          }}
        >
          <div className='client_create_ad_screen_column1'>
            <p
              style={{
                fontSize: '20px',
                fontWeight: '900',
                marginBottom: '6%',
                width: '50%',
                lineHeight: '23px',
              }}
              onClick={navToCreateAd}
            >
              {t('I am concretizing my idea of tailoring')}
            </p>
            <img style={{ width: '70%' }} src={AdElaborationSVG} />
          </div>
          <div className='client_create_ad_screen_column2'>
            <div
              className='pa_container'
              style={{
                marginTop: '8.5%',
              }}
            >
              <div className='pa_steps_row'>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((v, i) => (
                    <Step key={v}>
                      <StepLabel onClick={() => setActiveStep(i)}>{t(v)}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
              <div className='pa_content_row'>
                {activeStep == 0 ? (
                  <ParseAd.BasicSection
                    state={basicSection}
                    setState={setBasicSection}
                    onClick={basicSectionCallback}
                    images={images}
                    setImages={setImages}
                    handleImagesSelect={handleImagesSelect}
                    handleImageDeselect={handleImageDeselect}
                  />
                ) : activeStep == 1 ? (
                  <ParseAd.DeliverySection
                    state={deliverySection}
                    setState={setDeliverySection}
                    onClick={deliverySectionCallback}
                  />
                ) : activeStep == 2 ? (
                  <ParseAd.NotesSection state={notesSection} setState={setNotesSection} onClick={notesSectionCallback} />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ClientCreateAdScreen;
