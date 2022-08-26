import React, { useEffect } from 'react';
// router link
import { Link } from 'react-router-dom';
//  translation
import { useTranslation } from 'react-i18next';
import UnAuthAppBar from '../../components/UnAuthAppBar'
import FooterLogo from '../../assets/FooterLogo.svg';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';

const Landing = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const lang = () => {
    i18n.changeLanguage(language === 'fr' ? 'fr' : 'en');
  };

  useEffect(() => {
    lang();
  }, []);
  return (
    <div >
      <UnAuthAppBar />

      {/* 1 section  */}
      <div className="landing_main_container">
        <div className="landing_hero_section">
          {/* cl 1  */}

          <div className="landing_hero_section_info">
            <div className="landing_hero_section_info_heading">
              <h3>{t('Design Ethical Confections')}</h3>
              <h4>{t('Make your sewing projects a reality in just a few clicks!')}</h4>
              <p>
                {t(
                  'Plateforme de mise en relation dans le domaine de la confection mode sur-mesure',
                )}
              </p>
              <div className='btn_section_group'>
                <Link style={{ textDecoration: 'none' }} to="/select_role">
                  <button type="button">{t('Login')}</button>
                </Link>
                <div className="or">
                  {t('or')}
                  <Link to="/select_role">
                    {/* <span>{t('registered as a Designer')}</span> */}
                    <span>{t('Registered')}</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>


      {/*  2 section */}
      <div className="chose_main_section" id="WhyChooseDCE">
        <div className="chose_title_main">
          <div className="chose_title">
            <h3>{t('How it works ?')}</h3>
            <div className="how_work">
              <h3 style={{color:"black"}}>1.{t('You submit your sewing idea to us!')}</h3>
              <p className='how_work_p'  >{t("You tell us your preferences, criteria, choice and style of your confections!")}</p>
              <h3 style={{color:"black"}}>2. {t('We make it happen!')}</h3>
              <p className='how_work_p how_work_p_s' >{t("D.C.E has selected for you professional seamstresses with nimble fingers, passionate, with quality know-how!")}</p>
              <h3 style={{color:"black"}}>3.  {t('You receive your confection!')}</h3>
              <p className='how_work_p' >{t("Dés que votre confection est terminée, vous la recevez chez vous !")}</p>
              <div className='btn_section_group_2'>
                <Link to="/client_register">
                  <button className="how_work_ls how_work_ls_s" style={{ marginTop: "0px", fontSize: "35px" }}>{t('I submit my idea')}</button>
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* 3 section  */}
      <div className="great_work" id="FindGreatWork">
        <div className="chose_title_main">
          <div className="chose_title">
            {/* <h3 className='submit_h3' style={{marginTop:"100px"}}>{t('I submit my idea')}</h3> */}
            <div className="how_work">
              <h3 className='how_work_heading how_work_heading_s' style={{color:"#CC8E9C"}} >{t('You are a designer and you want to put your know-how at the service of the greatest number?')}</h3>
              <h3 className='how_work_heading2 how_work_heading2_s'  style={{ fontSize: "40px", color:"#8b7964" }}>{t('In a few clicks, D.C.E allows you to find "sewing project" missions')}</h3>
              <div className='submit_main_card'>
                <div className='card_ss'>
                  <h4 className='submit_main_cardh4 submit_main_cardh4_b'  >{t('Choose your')}</h4>
                  <h4 className='submit_main_cardh4 submit_main_cardh4_b' >{t('assignments')}</h4>

                </div>
                <div className='card_ss'>
                  <h4 className='submit_main_cardh4 submit_main_cardh4_b' >{t('Fixez vos')}</h4>
                  <h4 className='submit_main_cardh4 submit_main_cardh4_b' >{t('conditions')}</h4>
                </div>
                <div className='card_ss'>
                  <h4 className='submit_main_cardh4' >{t('Traitez')}</h4>
                  <h4 className='submit_main_cardh4' >{t('en direct')}</h4>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      {/* section 4  */}
      <div className="chose_main_section" id="WhyChooseDCE">
        <div className="chose_title_main">
          <div className="chose_title">
            <h3 >{t('How it works ?')}</h3>
            <div className="how_work">
              <h3 style={{color:"black"}} >1. {t('Find customers who match you!')}</h3>
              <p className='how_work_p' >{t("D.C.E puts you in touch with potential customers suited to your profile")}</p>
              <h3 style={{color:"black"}} >2. {t('Focus on the essentials!')}</h3>
              <p className='how_work_p how_work_p_s'>{t("D.C.E manages all the formalities relating to the provision of services")}</p>
              <h3 style={{color:"black"}} >3. {t('Respond to an ad in just a few clicks!')}</h3>

              <div className='btn_section_group_2'>
                <Link to="/tailor_register" >
                  <button className="how_work_ls how_work_ls_ssss" style={{ marginTop: "0px", fontSize: "35px" }}>{t('Je souhaite mettre à profit mon savoir faire')}</button>
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* footer */}
      <div class="footer_section_main" id="animation_dec">
        <div className="footer_center_section">
          <img src={FooterLogo} />
          <div>
            {' '}
            <Link style={{ textDecoration: 'none' }} to="/terms_conditions">
              {' '}
              {/* <span className="card_text_support card_text_support2">{t('Terms & Conditions')}</span> */}
            </Link>
          </div>
          <div className="footer_text-last">
            <div>
              <h4 className="footer_text_last_p">
                © 2022 <span style={{ color: '#CC8E9C' }}>{t('Design Confection Ethiques,')}</span> {t('Developed by')}{' '}
                <span style={{ color: '#0085FF' }}> <a href='https://falconconsulting.fr/' target='blank'>{t('Falcon Consulting')}</a> .</span>  <span style={{paddingLeft:"10px"}}>{t('Terms & Conditions')}</span>    
              </h4>
            </div>
            <div className="footer_incons_main" style={{ color: 'white' }}>
              <a href='https://www.facebook.com/Design-Confections-Ethiques-110075184902480' target="blank"> <img className='fb_ss' src={facebook} /></a>
              <a href='https://www.instagram.com/designconfectionsethiques/' target="blank"> <img className='fb_ss' src={instagram} /></a>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing