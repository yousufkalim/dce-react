import React from 'react';
import { useTranslation } from 'react-i18next';

import TailorAppBar from '../../components/TailorAppBar';
import Footer from '../../components/Footer';
import Machine from '../../assets/machine.png';

function TailorHowItWorksScreen() {
  const { t } = useTranslation();

  return (
    <div className="container-page-vertical">
      <TailorAppBar color="#FDFDFC" />
      <div
        className="client_orders_screen_top"
        style={{
          background: 'linear-gradient(to right, #EEEEEE , #F7F4ED)',
        }}
      >
        <div className="thiw_qna_standard_screen_row1">
          <p
            style={{
              fontSize: '23px',
              fontWeight: 'bold',
              paddingBottom: '1%',
            }}
          >
            {t('HOW IT WORKS ?')}
          </p>
          <p
            style={{
              fontSize: '15px',
              fontWeight: '500',
              color: '#A0A0A0',
              paddingBottom: '5pt',
            }}
          >
            {t('In just a few clicks, Design Créations allows you to find one-off assignments in')}
          </p>
          <p
            style={{
              fontSize: '15px',
              fontWeight: '500',
              color: '#A0A0A0',
              paddingBottom: '5pt',
            }}
          >
            {t('in the production and manufacture of clothing, decorative elements.')}
          </p>
          <p
            style={{
              fontSize: '15px',
              fontWeight: '500',
              color: '#A0A0A0',
            }}
          >
            {t('or household linen.')}
          </p>
        </div>
        <div className="thiw_qna_standard_screen_row2">
          <QNAStandardListTile
            question={t('1 . Find the right clients for you')}
            answer={t('Design creation puts you in touch with potential customers suited to your profile')}
          />
          <QNAStandardListTile
            question={t('2 . Focus on the essentials')}
            answer={t('Design creation manages all the formalities relating to the provision of services')}
          />
          <QNAStandardListTile
            question={t('3 . Post your ad (offer) in just a few clicks')}
            answer={t('Post your add in 3 steps')}
          />
          <QNAListListTile
            question={t('Seamstress selection based on the following criteria:')}
            answers={[
              t('Reliability / Seriousness'),
              t('Rating on the site'),
              t("Customers' opinion"),
              t('Tailoring time'),
              t('Passionate'),
              t('Enthusiastic'),
              t('Available'),
              t('Skills'),
              t('Know how'),
            ]}
          />
          <QNAListListTile
            question={t('General skills')}
            answers={[
              t('Know and master the techniques of making a garment (cutting, stitching, etc.)'),
              t('Have knowledge of the different fabrics, materials, colors'),
              t('Make drawings, sketches'),
              t('Operate the right machinery'),
              t('Prepare detailed quotes'),
              t('Meet deadlines'),
              t('Have knowledge of management'),
              t('Know how to handle computers in particular the Design CREATION site'),
            ]}
          />
        </div>
        <img src={Machine} className="machineimg" />
      </div>
      <Footer />
    </div>
  );
}

function QNAStandardListTile({ question, answer }) {
  return (
    <div className="thiw_qna_standard_list_tile_container">
      <p
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#CC8E9C',
          paddingBottom: '1%',
        }}
      >
        {question}
      </p>
      <p
        style={{
          fontSize: '16px',
          fontWeight: '500',
          color: '#A0A0A0',
        }}
      >
        {answer}
      </p>
    </div>
  );
}

function QNAListListTile({ question, answers }) {
  return (
    <div className="thiw_qna_standard_list_tile_container">
      <p
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#CC8E9C',
          marginBottom: '1%',
        }}
      >
        {question}
      </p>
      <ul>
        {answers.map((_) => (
          <li
            style={{
              fontSize: '16px',
              fontWeight: '500',
              color: '#A0A0A0',
              marginBottom: '5pt',
            }}
          >
            {_}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TailorHowItWorksScreen;
