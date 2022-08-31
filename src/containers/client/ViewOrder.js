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
import { useParams } from 'react-router-dom';

const steps = ['MY PROJECT', 'My delivery', 'Remarks'];

function ClientViewOrderScreen() {
  const { t } = useTranslation();

  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [ad, setAd] = useState(null);
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
    min_price: '',
    max_price: '',
  });

  useEffect(() => {
    getAd();
  }, []);

  // func to get current project
  const getAd = async () => {
    let response;
    try {
      response = await Api('get', `/orders/${params.id}`);
      const adData = response.data.order;
      setAd(adData);
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
        note: adData?.budget.note,
        min_price: adData?.budget.min_price,
        max_price: adData?.budget.max_price,
        quotes: adData?.quotes.filter((_) => _.status === 'accepted'),
      });
    } catch (e) {
      console.trace(e);
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className='container-page'>
          <ClientAppBar color='#F8F4EF' activeTab={1} />
          <div
            className='containerOrder'
            style={{
              background: '#FFE9A0',
              height: '129vh',
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
                  {t('Client Basic')}
                </p>
                <p
                  style={{
                    fontSize: '30px',
                    fontWeight: '900',
                    marginBottom: '50%',
                  }}
                  className='view_add_heading edit_add_title'
                >
                  {t('Details')}
                </p>
                <img style={{ width: '55%' }} src={AdEdit1SVG} className='view_add_image' />
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
                          <StepLabel onClick={() => setActiveStep(index)}>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </div>
                  <div className='pa_content_row'>
                    <ParseAd.BasicSection disabled state={basicSection} setState={setBasicSection} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='container'
            style={{
              background: '#FFC396',
              height: '90vh',
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
                          <StepLabel onClick={() => setActiveStep(index)}>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </div>
                  <div className='pa_content_row'>
                    <ParseAd.DeliverySection disabled state={deliverySection} setState={setDeliverySection} />
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
                  {t('Delivery')}
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
                <img style={{ width: '70%' }} src={AdEdit2SVG} className='view_add_image' />
              </div>
            </div>
          </div>
          <div
            className='container'
            style={{
              background: '#FFFCFB',
              height: '45vh',
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
                    marginBottom: '8%',
                  }}
                  className='edit_add_title'
                >
                  {t('Details')}
                </p>
                <img style={{ width: '20%' }} src={AdEdit3SVG} className='view_add_image' />
              </div>
              <div className='client_edit_ad_screen_row1_column2'>
                <div
                  className='pa_container'
                  style={
                    {
                      // marginTop: '10%',
                    }
                  }
                >
                  <div className='pa_steps_row'>
                    <Stepper activeStep={2} alternativeLabel>
                      {steps.map((label, index) => (
                        <Step key={label}>
                          <StepLabel onClick={() => setActiveStep(index)}>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </div>
                  <div className='pa_content_row'>
                    <ParseAd.NotesSection disabled state={notesSection} setState={setNotesSection} />
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

export default ClientViewOrderScreen;
