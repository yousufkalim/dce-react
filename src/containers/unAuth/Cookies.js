import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import UnAuthAppBar from '../../components/UnAuthAppBar';
import Terms from '../../assets/terms.png';
import FooterLogo from '../../assets/FooterLogo.svg';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';

function Cookies({ setOpenCookieePopup }) {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const lang = () => {
    i18n.changeLanguage(language === 'fr' ? 'fr' : 'en');
  };
  // useEffect(() => {
  //   lang();
  // });
  const handleCookies = () => {
    localStorage.setItem('cookies', true);
    setOpenCookieePopup(false);
  };
  const handleCancelCookies = () => {
    setOpenCookieePopup(false);
  };

  return (
    <div className="cookies" style={{ height: '' }}>
      <div className="cookiesDiv">
        <p>
          {t(
            "En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies afin d'optimiser votre navigation et réaliser des statistiques de suivis. Pour en savoir plus, consultez"
          )}
          <Link to="/cgv" style={{ color: 'black', marginLeft: '4px', fontWeight: 900 }}>
            {t('notre politique de confidentialité.')}
          </Link>
        </p>

        <p>
          {t(
            'Si vous refusez, vos informations de navigation ne seront pas conservées lors de votre visite. Nous apposons un seul cookie afin de mémoriser votre choix.'
          )}
        </p>
      </div>
      <div className="buttonsDiv">
        <button onClick={handleCancelCookies} className="cookieButtoncancel">
          {t('Refuser')}
        </button>
        <button onClick={handleCookies} className="cookieButtonaccept">
          {t('Accepter')}
        </button>
      </div>
    </div>
  );
}

export default Cookies;
