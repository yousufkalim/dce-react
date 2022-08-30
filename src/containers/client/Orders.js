import React, { useState, useEffect, createRef } from 'react';

import UserSVG from '../../assets/dummy.jpeg';
import UploadSVG from '../../assets/upload.svg';
import InvoiceLogoSVG from '../../assets/InvoiceLogo.jpg';

import ClientAppBar from '../../components/ClientAppBar';
import Footer from '../../components/Footer';
import NoOrders from '../../components/NoOrders';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useTranslation } from 'react-i18next';

import { Modal } from '@mui/material';
import Rating from '@mui/material/Rating';

import { getUser } from '../../utils/Auth';
import Api from '../../api';

import assetsURL from '../../utils/Assets';

import { useNavigate, useParams } from 'react-router-dom';
import { useScreenshot } from 'use-react-screenshot';
import { saveAs } from 'file-saver';

import { toast } from 'react-toastify';

import * as FormValidations from '../../utils/Validations';

function ClientOrdersScreen() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const user = getUser();

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    let response;
    try {
      response = await Api('post', `/orders/byQuery`, {
        client: user._id,
        tailor: { $ne: null },
      });
      const ordersData = response.data.orders;
      setOrders(ordersData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  const navToCreateAd = () => {
    navigate('/create_ad');
  };

  const navToViewOrder = (_) => {
    navigate(`/view_order/${_}`);
  };
  return (
    <>
      <div className='container-page-vertical'>
        <ClientAppBar activeTab={1} color='#FCFCFC' />
        <div
          className='client_orders_screen_top'
          style={{
            background:
              'linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))',
          }}
        >
          <div className='client_orders_screen_row1'>
            <p className='client_orders_screen_row1_text'>{t('Orders List')}</p>
            <CustomButton
              padding={'15px 45px'}
              style={{ borderRadius: '15px', boxShadow: 'none' }}
              text={t('Place Your Order')}
              onClick={navToCreateAd}
            />
          </div>
          <div className='client_orders_screen_row2'>
            {orders.map((_) => (
              <OrderListTile
                order={_}
                quote={_.quotes.filter((__) => __.status == 'accepted')[0]}
                navToViewOrder={navToViewOrder}
              />
            ))}
          </div>
          {orders?.length === 0 ? (
            <>
              <NoOrders RenderText={t('No Orders')} />)
            </>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
}

function OrderListTile(props) {
  const { t } = useTranslation();

  const [isFeedbackOrderModal, setIsFeedbackOrderModal] = useState(false);
  const handleFeedbackOrderModalClose = (e) => {
    setIsFeedbackOrderModal(false);
  };
  const handleFeedbackOrderModalOpen = (e) => {
    e.stopPropagation();
    setIsFeedbackOrderModal(true);
  };

  const [isContactSupportOrderModal, setIsContactSupportOrderModal] = useState(false);
  const handleContactSupportOrderModalClose = (e) => {
    setIsContactSupportOrderModal(false);
  };
  const handleContactSupportOrderModalOpen = (e) => {
    e.stopPropagation();
    setIsContactSupportOrderModal(true);
  };

  const [isInvoiceGenerateModal, setIsInvoiceGenerateModal] = useState(false);
  const handleInvoiceGenerateModalClose = (e) => {
    setIsInvoiceGenerateModal(false);
  };
  const handleInvoiceGenerateModalOpen = (e) => {
    e.stopPropagation();
    if (props.order.status == 'completed') {
      setIsInvoiceGenerateModal(true);
    } else {
      toast.error('Order must be completed for billing.');
    }
  };

  return (
    <div
      className='cos_order_list_tile_container'
      onClick={() => {
        if (!isFeedbackOrderModal && !isContactSupportOrderModal && !isInvoiceGenerateModal) {
          props.navToViewOrder(props.order._id);
        } // This prevents the trigger when clicking inside opened modals
      }}
    >
      <div className='cos_order_list_tile_column1'>
        <div
          className='cos_order_list_tile_column1_img'
          style={{
            paddingBottom: '5%',
          }}
        >
          <img
            className='image_container'
            style={{
              height: '70pt',
              width: '70pt',
            }}
            src={
              props?.quote?.tailor?.avatar
                ? assetsURL(props.quote.tailor.avatar)
                : props?.order?.tailor?.avatar
                ? assetsURL(props.order.tailor.avatar)
                : UserSVG
            }
          />
        </div>
        <p className='cos_order_list_tile_column1_title_text'>
          {props?.quote?.tailor?.name ?? props?.order?.tailor?.name ?? 'N/A'}
        </p>
      </div>
      <div
        className='cos_order_list_tile_column2'
        style={{
          padding: '3%',
        }}
      >
        <div
          className='cos_order_list_tile_column2_item'
          style={{
            padding: '3% 0',
          }}
        >
          <p className='cos_order_list_tile_column2_item_key'>{t('Order')}</p>
          <p className='cos_order_list_tile_column2_item_value'>{props.order.name}</p>
        </div>
        <div
          className='cos_order_list_tile_column2_item cos_order_list_tile_column2_item_borders'
          style={{
            padding: '3% 0',
          }}
        >
          <p className='cos_order_list_tile_column2_item_key'>{t('Order Date')}</p>
          <p className='cos_order_list_tile_column2_item_value'>{new Date(props.order.createdAt).toLocaleDateString('en-gb')}</p>
        </div>
        <div
          className='cos_order_list_tile_column2_item'
          style={{
            padding: '3% 0',
          }}
        >
          <p className='cos_order_list_tile_column2_item_key'>{t('Delivery Date')}</p>
          <p className='cos_order_list_tile_column2_item_value'>
            {new Date(props.order.delivery.date).toLocaleDateString('en-gb')}
          </p>
        </div>
      </div>
      <div className='cos_order_list_tile_column1'>
        {/* <p style={{ fontSize: "20px", fontWeight: "bold", paddingBottom: "10%" }}>
          {`${props?.quote?.price ?? props?.order?.budget?.min_price ?? "0"}€`}
        </p> */}
        <p
          style={{ fontSize: '12px', fontWeight: '200', color: '#CC8E9C', cursor: 'pointer' }}
          onClick={(e) => handleInvoiceGenerateModalOpen(e)}
        >
          {t('Bill')}
        </p>
      </div>
      <div className='cos_order_list_tile_column4'>
        {props.order.status == 'completed' && props.order.client_submission ? (
          <CustomButton
            text={t('Support')}
            padding={'10px 14px'}
            style={{
              borderRadius: '15px',
              margin: '8px 0px',
              boxShadow: 'none',
            }}
            onClick={(e) => {
              handleContactSupportOrderModalOpen(e);
            }}
          />
        ) : props.order.status == 'completed' && !props.order.client_submission ? (
          <CustomButton
            text={t('Feedback')}
            padding={'10px 14px'}
            style={{
              borderRadius: '15px',
              margin: '8px 0px',
              boxShadow: 'none',
            }}
            onClick={handleFeedbackOrderModalOpen}
          />
        ) : (
          <></>
        )}

        <p style={{ fontSize: '15px', fontWeight: '600' }}>{t(props.order.status.replace('_', ' '))}</p>
      </div>
      <Modal
        open={isFeedbackOrderModal}
        onClose={handleFeedbackOrderModalClose}
        aria-labelledby='Feedback Order'
        onBackdropClick='false'
      >
        <FeedbackOrderModal handleClose={handleFeedbackOrderModalClose} order={props.order} />
      </Modal>
      <Modal
        open={isContactSupportOrderModal}
        onClose={handleContactSupportOrderModalClose}
        aria-labelledby='Contact Support Order'
        onBackdropClick='false'
      >
        <ContactSupportOrderModal handleClose={handleContactSupportOrderModalClose} order={props.order} />
      </Modal>
      <Modal open={isInvoiceGenerateModal} onClose={handleInvoiceGenerateModalClose} aria-labelledby='Order Invoice'>
        <InvoiceOrderModal handleClose={handleInvoiceGenerateModalClose} order={props.order} quote={props.quote} />
      </Modal>
    </div>
  );
}

const FeedbackOrderModal = (props) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);

  const [rating, setRating] = useState(5);
  const [details, setDetails] = useState('');

  const navToOrders = () => {
    navigate('/orders');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValidated = FormValidations.clientFeedbackOrder({
      rating,
      details,
    });
    if (!isValidated) {
      return;
    }

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = {
        id: props.order._id,
        rating: rating,
        details: details,
      };
      response = await Api('post', '/orders/feedback', body);

      if (response?.data?.success) {
        toast.success(t('Feedback provided successfully.'));
        props.handleClose();
        navToOrders();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  return (
    <div className='tqs_sqm_container'>
      {/* <div
        className="tqs_sqm_input_container"
        style={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          marginBottom: "2%",
          padding: "1.6% 0",
        }}
      >
        <div className="tqs_sqm_input_label">
          <p className="tqs_sqm_input_text">{t("Rating")}</p>
        </div>
        <div className="tqs_sqm_input_input">
          <Rating
            name="rating"
            value={rating}
            onChange={(_, __) => {
              setRating(__);
            }}
          />
        </div>
      </div> */}
      <div
        className='tqs_sqm_textarea_container'
        style={{
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          marginBottom: '2%',
        }}
      >
        <div className='tqs_sqm_textarea_label'>
          <p className='tqs_sqm_input_text'>{t('Details')}</p>
        </div>
        <div className='tqs_sqm_input_input'>
          <textarea
            className='tqs_sqm_textarea_textarea'
            placeholder='Describe about submit report'
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
      </div>
      <div className='tvqs_sq_buttons'>
        <CustomButton
          text={t('Cancel')}
          style={{
            boxShadow: 'none',
            marginRight: '10pt',
          }}
          onClick={props.handleClose}
        />
        <CustomButton
          text={t('Feedback')}
          style={{
            boxShadow: 'none',
          }}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

const ContactSupportOrderModal = (props) => {
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);

  const [reason, setReason] = useState('');
  const [details, setDetails] = useState('');
  const [attachment, setAttachment] = useState(null);

  const { t } = useTranslation();
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setAttachment(file);
  };

  const navToChat = () => {
    navigate('/chat');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValidated = FormValidations.clientContactSupportOrder({
      reason,
      details,
    });
    if (!isValidated) {
      return;
    }

    if (!attachment) {
      toast.error(t('Attachment must be selected'));
      return;
    }

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = new FormData();

      body.append('id', props.order._id);
      body.append('reason', reason);
      body.append('details', details);
      body.append('attachment', attachment);

      response = await Api('post', '/orders/support', body);

      if (response?.data?.success) {
        toast.success(t('Support request submitted successfully.'));
        props.handleClose();
        navToChat();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  return (
    <div className='tqs_sqm_container'>
      <div
        className='tqs_sqm_input_container'
        style={{
          borderTopLeftRadius: '20px',
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          marginBottom: '2%',
          padding: '1.6% 0',
        }}
      >
        <div className='tqs_sqm_input_label'>
          <p className='tqs_sqm_input_text'>{t('Reason')}</p>
        </div>
        <div className='tqs_sqm_input_input'>
          <CustomInput
            labelStyle={{
              display: 'none',
            }}
            inputStyle={{
              border: 'none',
              fontSize: '12px',
            }}
            inputPlaceholder={t('Enter Reason')} // TODO: Add Trans
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
      </div>
      <div
        className='tqs_sqm_textarea_container'
        style={{
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          marginBottom: '2%',
        }}
      >
        <div className='tqs_sqm_textarea_label'>
          <p className='tqs_sqm_input_text'>{t('Details')}</p>
        </div>
        <div className='tqs_sqm_input_input'>
          <textarea
            className='tqs_sqm_textarea_textarea'
            placeholder={t('Details')}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
      </div>
      <div
        className='pa_profile_section_input_container'
        style={{
          borderRadius: '20px',
          marginBottom: '2%',
          width: '100%',
          padding: '1.6% 0',
        }}
      >
        <div className='pa_profile_section_input_label'>
          <p className='pa_profile_section_input_text'>{t('Attachments')}</p>
        </div>
        <div className='pa_profile_section_input_input'>
          <label className='upload-pic-label'>
            <input type='file' accept='image/*' hidden id='filePicker' name='file' onChange={handleFileSelect} />
            <div className='upload-img-text-cont'>
              <span className='upload-img-text'>{attachment?.name ?? t('upload an illustration of your creation')}</span>
              <img src={UploadSVG} />
            </div>
          </label>
        </div>
      </div>
      <div className='tvqs_sq_buttons'>
        <CustomButton
          text={t('Cancel')}
          style={{
            boxShadow: 'none',
            marginRight: '10pt',
          }}
          onClick={props.handleClose}
        />
        <CustomButton
          text={t('Submit')}
          style={{
            boxShadow: 'none',
          }}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

const InvoiceOrderModal = (props) => {
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();

  const download = async () => {
    await takeScreenshot(ref.current);
    if (image) {
      saveAs(image, `${props.order.name} - ${Date.now()}.jpeg`);
    }
  };

  return (
    <div className='tqs_sqm_container cos_oim_container'>
      <div className='cos_oim_row1' ref={ref}>
        <div
          className='cos_oim_column1'
          style={{
            paddingLeft: '5%',
          }}
        >
          <img
            style={{
              height: '150pt',
              width: '200pt',
              objectFit: 'cover',
            }}
            src={InvoiceLogoSVG}
          />
          <div
            style={{
              marginLeft: '3%',
            }}
          >
            <p
              style={{
                marginTop: '5%',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              Design confections Ethiques
            </p>
            <div
              className='cos_oim_column1_section'
              style={{
                marginTop: '20%',
              }}
            >
              <p
                style={{
                  fontSize: '12px',
                  color: '#BBBBBB',
                }}
              >
                Bill To:
              </p>
              <p
                style={{
                  fontSize: '12px',
                  color: '#BBBBBB',
                }}
              >
                Ship To:
              </p>
            </div>
            <div
              className='cos_oim_column1_section'
              style={{
                marginTop: '5%',
              }}
            >
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {props.order.client.name}
              </p>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {props.order.delivery.address.split(' ').at(-1)}
              </p>
            </div>
          </div>
        </div>
        <div
          className='cos_oim_column1'
          style={{
            alignItems: 'flex-end',
          }}
        >
          <p
            style={{
              paddingRight: '3%',
              marginTop: '5%',
              fontSize: '26px',
              fontWeight: '500',
              letterSpacing: '2',
            }}
          >
            INVOICE
          </p>
          <p
            style={{
              marginTop: '2%',
              fontSize: '14px',
            }}
          >
            #1
          </p>
          <div
            style={{
              marginTop: '5%',
              paddingRight: '3%',
              width: '100%',
            }}
          >
            <_InvoiceR1C2Section title='Date:' description={new Date().toLocaleDateString('en-gb')} />
            <_InvoiceR1C2Section title='Payment Terms:' description='Bank Deposit' />
            <_InvoiceR1C2Section
              title='Due Date:'
              description={new Date(props.order.delivery.date).toLocaleDateString('en-gb')}
            />
            <_InvoiceR1C2Section title='PO Number:' description='N/A' />
            <div
              className='cos_oim_column1_section'
              style={{
                justifyContent: 'space-between',
                marginTop: '2%',
                marginLeft: '60%',
                padding: '2%',
                backgroundColor: '#F5F5F5',
              }}
            >
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                Balance Due:
              </p>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {`US$${props.quote.price}`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className='cos_oim_row1'
        style={{
          marginTop: '2%',
        }}
      >
        <div
          className='cos_oim_column1'
          style={{
            backgroundColor: '#3A3A3A',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              fontSize: '22px',
              color: '#FFFFFF',
              padding: '4%',
            }}
          >
            {props.order.name}
          </p>
        </div>
        <div
          className='cos_oim_column1'
          style={{
            backgroundColor: '#3A3A3A',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              fontSize: '22px',
              color: '#FFFFFF',
              padding: '4%',
            }}
          >
            {`US$${props.quote.price}`}
          </p>
        </div>
      </div>
      <div
        className='cos_oim_row1'
        style={{
          marginTop: '4%',
          height: '20vh',
        }}
      >
        <div
          style={{
            width: '100%',
          }}
        >
          <_InvoiceR1C2Section
            title='Subtotal:'
            description={`US$${props.quote.price}`}
            divStyle={{
              paddingLeft: '80%',
            }}
          />
          <_InvoiceR1C2Section
            title='Tax (0%):'
            description='US$0.00'
            divStyle={{
              paddingLeft: '80%',
            }}
          />
          <_InvoiceR1C2Section
            title='Shipping:'
            description='US$0.00'
            divStyle={{
              paddingLeft: '80%',
            }}
          />
          <_InvoiceR1C2Section
            title='Total:'
            description={`US$${props.quote.price}`}
            divStyle={{
              paddingLeft: '80%',
            }}
          />
        </div>
      </div>
      <div
        style={{
          marginTop: '4%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        <p style={{ fontSize: '14px', color: '#BBBBBB', marginBottom: '10px' }}>Notes:</p>
        <p style={{ fontSize: '14px' }}>
          Design CONFECTIONS ETHIQUES is an online platform (with free registration) allowing independent designers to
        </p>
        <p style={{ fontSize: '14px' }}>unearth their customers in whole or in part</p>
        <p style={{ fontSize: '14px', color: '#BBBBBB', marginBottom: '10px', marginTop: '10px' }}>Terms:</p>
        <p style={{ fontSize: '14px' }}>
          Design CONFECTIONS ETHIQUES connects tailors looking for new assignments and/or new clients, with natural
        </p>
        <p style={{ fontSize: '14px' }}>
          persons (individuals) and/or legal persons (companies) looking for a service: tailor-made tailoring clothing,
        </p>
        <p style={{ fontSize: '14px' }}>decorative items or linens or any other creations</p>
        <CustomButton
          text='Download Invoice'
          style={{
            alignSelf: 'flex-end',
            marginTop: '20px',
          }}
          onClick={download}
        />
      </div>
    </div>
  );
};

function _InvoiceR1C2Section({ title, description, divStyle }) {
  return (
    <div
      className='cos_oim_column1_section'
      style={{
        justifyContent: 'space-between',
        marginTop: '2%',
        paddingLeft: '60%',
        ...divStyle,
      }}
    >
      <p
        style={{
          color: '#BBBBBB',
          fontSize: '12px',
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: '12px',
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default ClientOrdersScreen;
