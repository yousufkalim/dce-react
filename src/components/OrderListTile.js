import React, { useState, useEffect, createRef } from 'react';
import UserSVG from '../assets/dummy.jpeg';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Modal } from '@mui/material';

import assetsURL from '../utils/Assets';
import InvoiceLogoSVG from '../assets/dce_logo.svg';
import CustomButton from '../components/CustomButton';
import { useScreenshot } from 'use-react-screenshot';

function OrderListTile({ order, quote, mainDivStyle, viewAs }) {
  const { t } = useTranslation();

  const Color = status => {
    let color = '';
    if (status == 'in_process') {
      color = '#000000';
    }
    if (status == 'completed') {
      color = '#A0A0A0';
    }
    return color;
  };

  const Opacity = status => {
    let opacity = '';
    if (status == 'completed') {
      opacity = '0.5';
    }
    if (status == 'in_process') {
      opacity = '1';
    }
    return opacity;
  };
  const [isInvoiceGenerateModal, setIsInvoiceGenerateModal] = useState(false);
  const handleInvoiceGenerateModalClose = e => {
    setIsInvoiceGenerateModal(false);
  };
  const handleInvoiceGenerateModalOpen = e => {
    e.stopPropagation();
    if (order.status == 'completed') {
      setIsInvoiceGenerateModal(true);
    } else {
      // setIsInvoiceGenerateModal(true);
      toast.error(t('Order must be completed for billing.'));
    }
  };

  return (
    <>
      <div
        className="order_list_tile"
        style={{
          ...mainDivStyle
        }}>
        <div
          className="order_list_tile_img"
          style={{
            paddingBottom: '5%'
          }}>
          <img
            className="image_container"
            style={{
              height: '50pt',
              width: '50pt'
            }}
            src={
              viewAs == 'client'
                ? order?.tailor?.avatar
                  ? assetsURL(order.tailor.avatar)
                  : UserSVG
                : viewAs == 'tailor'
                ? order?.client?.avatar
                  ? assetsURL(order.client.avatar)
                  : UserSVG
                : UserSVG
            }
          />
        </div>
        <p
          className="order_list_tile_title_text"
          style={{
            paddingBottom: '8%'
          }}>
          {viewAs == 'client'
            ? order?.tailor?.name ?? ''
            : viewAs == 'tailor'
            ? order?.client?.name ?? ''
            : ''}
        </p>
        <div className="order_list_tile_divider" />
        <div className="order_list_tile_item">
          <p
            style={{
              opacity: Opacity(order.status)
            }}
            className="order_list_tile_item_key">
            {t('Order')}
          </p>
          <p
            style={{
              color: Color(order.status)
            }}
            className="order_list_tile_item_value">
            {order.name}
          </p>
        </div>
        <div className="order_list_tile_item">
          <p
            style={{
              opacity: Opacity(order.status)
            }}
            className="order_list_tile_item_key">
            {t('Order Date')}
          </p>
          <p
            style={{
              color: Color(order.status)
            }}
            className="order_list_tile_item_value">
            {new Date(order.createdAt).toLocaleDateString('en-gb')}
          </p>
        </div>
        <div className="order_list_tile_item">
          <p
            style={{
              opacity: Opacity(order.status)
            }}
            className="order_list_tile_item_key">
            {t('desired delivery date')}
          </p>
          <p
            style={{
              color: Color(order.status)
            }}
            className="order_list_tile_item_value">
            {new Date(order.delivery.date).toLocaleDateString('en-gb')}
          </p>
        </div>
        <div
          className="order_list_tile_item"
          style={{
            paddingTop: '6%',
            paddingBottom: '4%'
          }}>
          {order.status == 'completed' && (
            <p
              style={{
                opacity: Opacity(order.status),
                color: 'gray',
                textDecoration: 'underline'
              }}
              className="order_list_tile_item_key"
              onClick={e => handleInvoiceGenerateModalOpen(e)}>
              {t('Bill')}
            </p>
          )}

          {/* <p
            className="order_list_tile_item_value"
            style={{
              fontSize: "15px",
              fontWeight: "700",
              color: Color(order.status),
            }}
          >
            {quote?.price ?? order.budget.min_price}€
          </p> */}
        </div>
        <div className="order_list_tile_divider" />
        <p
          className="order_list_tile_title_text_bottom"
          style={{
            padding: '4% 0',
            color: Color(order.status)
          }}>
          {t(order?.status?.replace('_', ' '))}
        </p>
      </div>
      <Modal
        open={isInvoiceGenerateModal}
        onClose={handleInvoiceGenerateModalClose}
        aria-labelledby="Order Invoice">
        <InvoiceOrderModal
          handleClose={handleInvoiceGenerateModalClose}
          order={order}
          quote={quote}
        />
      </Modal>
    </>
  );
}

const InvoiceOrderModal = props => {
  const { t } = useTranslation();
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();

  const download = async () => {
    let image = await takeScreenshot(ref.current);
    if (image) {
      saveAs(image, `${props.order.name} - ${Date.now()}.jpeg`);
    }
  };
  return (
    <div className="tqs_sqm_container1 cos_oim_container">
      <div ref={ref} className="exportImgDiv">
        <div className="cos_oim_row1">
          <div
            className="cos_oim_column1"
            style={{
              paddingLeft: '5%'
            }}>
            <img
              style={{
                height: '150pt',
                width: '200pt',
                objectFit: 'cover'
              }}
              src={InvoiceLogoSVG}
            />
            <div
              style={{
                marginLeft: '3%'
              }}>
              <p
                style={{
                  marginTop: '5%',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                Design confections Ethiques
              </p>
              <div
                className="cos_oim_column1_section"
                style={{
                  marginTop: '20%'
                }}>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#BBBBBB'
                  }}>
                  Facturer:
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#BBBBBB'
                  }}>
                  Envoyez à:
                </p>
              </div>
              <div
                className="cos_oim_column1_section"
                style={{
                  marginTop: '5%'
                }}>
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                  {props.order.client.name}
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                  {props.order.delivery.address.split(' ').at(-1)}
                </p>
              </div>
            </div>
          </div>
          <div
            className="cos_oim_column1"
            style={{
              alignItems: 'flex-end'
            }}>
            <p
              style={{
                paddingRight: '3%',
                marginTop: '5%',
                fontSize: '26px',
                fontWeight: '500',
                letterSpacing: '2'
              }}>
              FACTURE
            </p>
            <p
              style={{
                marginTop: '2%',
                fontSize: '14px'
              }}>
              #1
            </p>
            <div
              style={{
                marginTop: '5%',
                paddingRight: '3%',
                width: '100%'
              }}>
              <_InvoiceR1C2Section
                title="Date:"
                description={new Date().toLocaleDateString('en-gb')}
              />
              <_InvoiceR1C2Section title="Modalités de paiement:" description="Dépôt bancaire" />
              <_InvoiceR1C2Section
                title="Date d'échéance:"
                description={new Date(props.order.delivery.date).toLocaleDateString('en-gb')}
              />
              <_InvoiceR1C2Section title="PO Numéro:" description="N/A" />
              <div
                className="cos_oim_column1_section"
                style={{
                  justifyContent: 'space-between',
                  marginTop: '2%',
                  marginLeft: '60%',
                  padding: '2%',
                  backgroundColor: '#F5F5F5'
                }}>
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                  Solde dû:
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                  {`€${props.quote.price}`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cos_oim_row1"
          style={{
            marginTop: '2%'
          }}>
          <div
            className="cos_oim_column1"
            style={{
              backgroundColor: '#3A3A3A',
              borderTopLeftRadius: '10px',
              borderBottomLeftRadius: '10px',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <p
              style={{
                fontSize: '22px',
                color: '#FFFFFF',
                padding: '4%'
              }}>
              {`${t(props.order.name)}`}
            </p>
          </div>
          <div
            className="cos_oim_column1"
            style={{
              backgroundColor: '#3A3A3A',
              borderTopRightRadius: '10px',
              borderBottomRightRadius: '10px',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <p
              style={{
                fontSize: '22px',
                color: '#FFFFFF',
                padding: '4%'
              }}>
              {`€${props.quote.price}`}
            </p>
          </div>
        </div>
        <div
          className="cos_oim_row1"
          style={{
            marginTop: '4%',
            height: '20vh'
          }}>
          <div
            style={{
              width: '100%'
            }}>
            <_InvoiceR1C2Section
              title="Total:"
              description={`€${props.quote.price}`}
              divStyle={{
                paddingLeft: '80%'
              }}
            />
            <_InvoiceR1C2Section
              title="Impôt (0%):"
              description="€0.00"
              divStyle={{
                paddingLeft: '80%'
              }}
            />
            <_InvoiceR1C2Section
              title="Expédition:"
              description="€0.00"
              divStyle={{
                paddingLeft: '80%'
              }}
            />
            <_InvoiceR1C2Section
              title="Total:"
              description={`€${props.quote.price}`}
              divStyle={{
                paddingLeft: '80%'
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
            width: '100%'
          }}>
          <p style={{ fontSize: '14px', color: '#BBBBBB', marginBottom: '10px' }}>Remarques:</p>
          <p style={{ fontSize: '14px' }}>
            Design CONFECTIONS ETHIQUES est une plateforme en ligne (avec inscription gratuite)
            permettant créateurs indépendants pour
          </p>
          <p style={{ fontSize: '14px' }}>unearth their customers in whole or in part</p>
          <p
            style={{ fontSize: '14px', color: '#BBBBBB', marginBottom: '10px', marginTop: '10px' }}>
            Conditions:
          </p>
          <p style={{ fontSize: '14px' }}>
            Design CONFECTIONS ETHIQUES met en relation des tailleurs à la recherche de nouvelles
            missions et/ou de nouveaux clients, avec des
          </p>
          <p style={{ fontSize: '14px' }}>
            personnes (particuliers) et/ou personnes morales (sociétés) à la recherche d'un service
            : sur-mesure confection de vêtements,
          </p>
          <p style={{ fontSize: '14px' }}>
            objets de décoration ou linge de maison ou toutes autres créations
          </p>
        </div>
      </div>
      <CustomButton
        text="Télécharger"
        style={{
          position: 'relative',
          bottom: '10%',
          right: '10%',
          alignSelf: 'flex-end'
        }}
        onClick={download}
      />
    </div>
  );
};
function _InvoiceR1C2Section({ title, description, divStyle }) {
  return (
    <div
      className="cos_oim_column1_section"
      style={{
        justifyContent: 'space-between',
        marginTop: '2%',
        paddingLeft: '60%',
        ...divStyle
      }}>
      <p
        style={{
          color: '#BBBBBB',
          fontSize: '12px'
        }}>
        {title}
      </p>
      <p
        style={{
          fontSize: '12px'
        }}>
        {description}
      </p>
    </div>
  );
}

export default OrderListTile;
