import React, { useEffect } from 'react';
// router link
import { Link } from 'react-router-dom';
// import slider
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//  translation
import { useTranslation } from 'react-i18next';
import UnAuthAppBar from '../../components/UnAuthAppBar';

// assets
import Landinghero from '../../assets/Landinghero.png';
import addpost from '../../assets/addpost.png';
import chosedesgin from '../../assets/chosedesgin.png';
import pay from '../../assets/pay.png';
import door from '../../assets/door.png';
import help from '../../assets/help.png';
import greatleft from '../../assets/greatleft.png';
import tickicon from '../../assets/tickicon.png';
import FooterLogo from '../../assets/FooterLogo.svg';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import user from '../../assets/user.png';

function Landing() {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const lang = () => {
    i18n.changeLanguage(language === 'fr' ? 'fr' : 'en');
  };

  useEffect(() => {
    lang();
  },[]);
  const reviews = [
    {
      rv: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores',
      name: 'Rob Hope',
      web: 'Onepagelove.com',
    },
    {
      rv: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores',
      name: 'Rob Hope',
      web: 'Onepagelove.com',
    },
    {
      rv: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores',
      name: 'Rob Hope',
      web: 'Onepagelove.com',
    },
    {
      rv: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores',
      name: 'Rob Hope',
      web: 'Onepagelove.com',
    },
    {
      rv: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores',
      name: 'Rob Hope',
      web: 'Onepagelove.com',
    },
    {
      rv: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores',
      name: 'Rob Hope',
      web: 'Onepagelove.com',
    },
    {
      rv: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores',
      name: 'Rob Hope',
      web: 'Onepagelove.com',
    },
    {
      rv: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores',
      name: 'Rob Hope',
      web: 'Onepagelove.com',
    },
    {
      rv: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores',
      name: 'Rob Hope',
      web: 'Onepagelove.com',
    },
    {
      rv: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores',
      name: 'Rob Hope',
      web: 'Onepagelove.com',
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div style={{overflowX:"hidden"}}>
      <UnAuthAppBar />
      {/* start hero section */}
      <div className="landing_main_container">
        <div className="landing_hero_section">
          {/* cl 1  */}

          <div className="landing_hero_section_info">
            <div className="landing_hero_section_info_heading">
              <h3>{t('Welcome to the Design Confection Ethiques')}</h3>
              <h4>{t('Make your sewing projects a reality in just a few clicks!')}</h4>
              <p>
                {t(
                  'Plateforme de mise en relation dans le domaine de la confection mode sur-mesure',
                )}
              </p>

              <Link style={{ textDecoration: 'none' }} to="/select_role">
                <button type="button">{t('Hire Design')}</button>
              </Link>
              {/* <hr /> */}
              <div className="or">
                {t('Or')}
                <Link to="/select_role">
                  <span>{t('registered as a Designer')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ending Hero section */}

      {/* why chose Dec */}
      <div className="chose_main_section" id="WhyChooseDCE">
        <div className="chose_title_main">
          <div className="chose_title">
            <h3>{t('How it works ?')}</h3>
            <div className="how_work">
              <h3>1. {t('You submit your sewing idea to us!')}</h3>
              <p className='how_work_p' >You tell us your preferences, criteria, choice and style of your confections!</p>
              <h3>2. {t('We make it happen!')}</h3>        
              <p className='how_work_p' >You tell us your preferences, criteria, choice and style of your confections!</p>
              <h3>3.  {t('You receive your confection!')}</h3>        
              <p className='how_work_p' >As soon as your confection is finished, you will receive it at home!</p>
            </div>
     
          </div>
        </div>

        
        {/* fud great work  */}

        <div className="great_work" id="FindGreatWork">
        <div className="chose_title_main">
          <div className="chose_title">
            <h3 className='submit_h3' style={{marginTop:"100px"}}>{t('I submit my idea')}</h3>
            <div className="how_work">
              <h3 className='how_work_heading'>{t('You are a designer and you want to put your know-how at the service of the greatest number?')}</h3>        
              <h3 className='how_work_heading2' style={{fontSize:"40px"}}>{t('In a few clicks, D.C.E allows you to find sewing project missions')}</h3>        
              <div className='submit_main_card'>
                <div>
                <h4 className='submit_main_cardh4'  >{t('Choisissez')}</h4>
                <h4 className='submit_main_cardh4' >{t('vos missions')}</h4>
               
                </div>
                <div> 
                <h4 className='submit_main_cardh4' >{t('Fixez')}</h4>
                <h4 className='submit_main_cardh4' >{t('vos conditions')}</h4>
                </div>
                <div> 
                <h4 className='submit_main_cardh4' >{t('Traitez')}</h4>
                <h4 className='submit_main_cardh4' >{t('en direct')}</h4>
                </div>

              </div>
            </div>
     
          </div>
        </div>
        
        </div>
      </div>
      {/* end  chose Dec */}

      {/*Clients Review  start*/}
      <div className="client_main_section">
       
      <div className="chose_title_main">
          <div className="chose_title" style={{marginTop:"80px"}}>
            <h3 className='last_section_h3'>{t('How it works ?')}</h3>
            <div className="how_work">
              <h3 className='last_section_h33' >1. {t('Find customers who match you!')}</h3>
              <p className='how_work_ppp'>D.C.E puts you in touch with potential customers suited to your profile</p>
              <h3 className='last_section_h33'>2. {t('Focus on the essentials!')}</h3>        
              <p className='how_work_ppp' >D.C.E manages all the formalities relating to the provision of services</p>
              <h3 className='last_section_h33'>3.  {t('Respond to an ad in just a few clicks!')}</h3>        
              <p className='how_work_ppp' >As soon as your confection is finished, you will receive it at home!</p>
            </div>
            <h3 className="how_work_ls" style={{marginTop:"120px",fontSize:"35px"}}>{t('Je souhaite mettre à profit mon savoir faire')}</h3>
     
          </div>
        </div>
      </div>
      {/*Clients Review  end */}

      {/* footer start  */}

      <div class="footer_section_main" id="animation_dec">
        <div className="footer_center_section">
          <img src={FooterLogo} />
          <div>
            {' '}
            <Link style={{ textDecoration: 'none' }} to="/terms_conditions">
              {' '}
              <span className="card_text_support card_text_support2">{t('Terms & Conditions')}</span>
            </Link>
          </div>
          <div className="footer_text-last">
            <div>
              <h4 className="footer_text_last_p">
                © 2022 <span style={{ color: '#CC8E9C' }}>{t('Design Confection Ethiques,')}</span> {t('Developed by')}{' '}
                <span style={{ color: '#0085FF' }}>{t('Falcon Consulting')}.</span> {t('All rights reserved.')}
              </h4>
            </div>
            <div className="footer_incons_main" style={{ color: 'white' }}>
              <img src={facebook} />
              <img src={instagram} />
            </div>
          </div>
        </div>
      </div>
      {/* footer end  */}
    </div>
  );
}

export default Landing;
