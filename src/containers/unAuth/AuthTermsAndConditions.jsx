import React,{} from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import UnAuthAppBar from '../../components/UnAuthAppBar';
import Terms from '../../assets/terms.png';
import FooterLogo from '../../assets/FooterLogo.svg';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';

function AuthTermsAndConditions() {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const lang = () => {
    i18n.changeLanguage(language === 'fr' ? 'fr' : 'en');
  };
  // useEffect(() => {
  //   lang();
  // });

  return (
    <div>
      <UnAuthAppBar />
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
            En cours d’écriture
          </p>
        </div>
      
      </div>

      {/* footer start  */}

  
      {/* footer */}
      <div class="footer_section_main" id="animation_dec">
        <div id="chat_module"></div>
        <div className="footer_center_section">
          <img src={FooterLogo} />
          <div>
            {' '}
            {/* <Link  to="/terms_conditions">
              {' '}
              
            </Link> */}
          </div>
          <div className="footer_text-last">
            <div>
              <h4 className="footer_text_last_p">
                © 2022 <span style={{ color: '#CC8E9C' }}>{t('Design Confection Ethiques,')}</span>{' '}
                {t('Developed by')}{' '}
                <span style={{ color: '#0085FF' }}>
                  {' '}
                  <a href="https://falconconsulting.fr/" target="blank">
                    {t('Falcon Consulting')}
                  </a>{' '}
                  .
                </span>
                <Link style={{ color: '#d1d5db', textDecoration: 'none' }} to="/terms_conditions">
                  <span style={{ paddingLeft: '10px' }}>{t('Terms & Conditions')}</span>
                </Link>
                <Link style={{ color: '#d1d5db', textDecoration: 'none' }} to="/cgv">
                  <span style={{ paddingLeft: '10px' }}>{t('CGV')}</span>
                </Link>
              </h4>
            </div>
            <div className="footer_incons_main" style={{ color: 'white' }}>
              <a
                href="https://www.facebook.com/Design-Confections-Ethiques-110075184902480"
                target="blank">
                {' '}
                <img className="fb_ss" src={facebook} />
              </a>
              <a href="https://www.instagram.com/designconfectionsethiques/" target="blank">
                {' '}
                <img className="fb_ss" src={instagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* footer end  */}
    </div>
  );
}

function QNAStandardListTile({ question, answers }) {
  return (
    <div className="thiw_qna_standard_list_tile_container">
      <p
        style={{
          fontSize: '16px',
          fontWeight: 'bold',
          paddingBottom: '1%',
        }}
      >
        {question}
      </p>
      {answers.map((_) => (
        <p
          style={{
            fontSize: '16px',
            fontWeight: '500',
            color: '#A0A0A0',
            paddingBottom: '5pt',
          }}
        >
          {_}
        </p>
      ))}
    </div>
  );
}

export default AuthTermsAndConditions;
