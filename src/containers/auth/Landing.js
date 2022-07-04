import React, { Fragment, useEffect } from 'react';
// import AuthAppBar from '../../components/AuthAppBar';
// Router
import { Link } from 'react-router-dom';
//  translation
import { useTranslation } from 'react-i18next';
import AuthAppBar from '../../components/AuthAppBar';

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
// import slider
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Landing = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  useEffect(() => {
    lang();
  }, []);
  const lang = () => {
    i18n.changeLanguage(language == 'fr' ? 'fr' : 'en');
  };

  console.log(language);
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
    <Fragment>
      <AuthAppBar />
      {/* start hero section */}
      <div className="landing_main_container">
        <div className="landing_hero_section">
          {/* cl 1  */}

          <div className="landing_hero_section_info">
            <div className="landing_hero_section_info_heading">
              <h3>{t('Welcome to the Design Confection Ethiques')}</h3>
              <h4>{t('Hire The Best Designers For Your Confection')}</h4>
              <p>
                {t(
                  ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua. Ut enim ad minim veniam',
                )}
              </p>

              <Link style={{ textDecoration: 'none' }} to="/select_role">
                <button>{t('Hire Design')}</button>
              </Link>
              <hr />
              <div className="or">
                {t('Or')}{' '}
                <Link to="/select_role">
                  <span> {t('registered as a Designer')}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* cl 2  */}
          <div className="landing_hero_section_img">
            <div>
              <img src={Landinghero} alt="landing_hero_section" />
            </div>
          </div>
        </div>
      </div>
      {/* ending Hero section */}

      {/* why chose Dec */}
      <div className="chose_main_section" id="WhyChooseDCE">
        <div className="chose_title_main">
          <div className="chose_title">
            <h3>{t('Why Choose DCE')}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua. Ut enim ad minim
              veniam,
            </p>
          </div>
        </div>

        {/* card section */}
        <div className="card_main_section">
          <div className="card_inner">
            <div className="card_inner_circle">
              <img src={addpost} alt="addpost." />
            </div>

            <span className="card_title">{t('Post Ads')} </span>
            <hr className="card_inner_line" />
            <p className="card_text">Formalization of the need in a clear and synthetic way. The Falcon </p>
          </div>
          <div className="card_inner">
            <div className="card_inner_circle">
              <img src={chosedesgin} alt="addpost." />
            </div>

            <span className="card_title">{t('Choose Designer')}</span>
            <hr className="card_inner_line" />
            <p className="card_text">Formalization of the need in a clear and synthetic way. The Falcon </p>
          </div>
          <div className="card_inner">
            <div className="card_inner_circle">
              <img src={pay} alt="addpost." />
            </div>

            <span className="card_title">{t('Pay Safely')} </span>
            <hr className="card_inner_line" />
            <p className="card_text">Formalization of the need in a clear and synthetic way. The Falcon </p>
          </div>
          <div className="card_inner">
            <div className="card_inner_circle">
              <img src={door} alt="door." />
            </div>

            <span className="card_title">{t('At Your Door Step')} </span>
            <hr className="card_inner_line" />
            <p className="card_text">Formalization of the need in a clear and synthetic way. The Falcon </p>
          </div>
          <div className="card_inner">
            <div className="card_inner_circle">
              <img src={help} alt="help." />
            </div>

            <span className="card_title">{t('We Are Here To Help')} </span>
            <hr className="card_inner_line" />
            <p className="card_text">Formalization of the need in a clear and synthetic way. The Falcon </p>
          </div>
        </div>
        {/* card section end */}

        {/* fud great work  */}

        <div className="great_work" id="FindGreatWork">
          <div className="great_work_left">
            <img src={greatleft} />
          </div>
          <div className="great_work_right">
            <div className="great_work_heading">
              <h3>{t('Find Great Work')} </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua. Ut enim ad minim
                veniam,
              </p>
            </div>

            <div className="great_work_Card">
              <div className="great_work_Card_inner">
                <div>
                  <img src={tickicon} />
                </div>
                <div className="great_work_Card_inner_info">
                  <h4>{t('FIND OPPORTUNITIES')}</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae,
                    nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper{' '}
                  </p>
                </div>
              </div>
              <div className="great_work_Card_inner">
                <div>
                  <img src={tickicon} />
                </div>

                <div className="great_work_Card_inner_info">
                  <h4>{t('Explore Different Ways Earn')}</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae,
                    nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper{' '}
                  </p>
                </div>
              </div>
              <div className="great_work_Card_inner">
                <div>
                  <img src={tickicon} />
                </div>

                <div className="great_work_Card_inner_info">
                  <h4>{t('CONTROL WHEN, WHERE, AND HOW YOU WORK')}</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae,
                    nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end  chose Dec */}

      {/*Clients Review  start*/}
      <div className="client_main_section">
        <div className="clinet_handing_text">
          <h3>{'Clients Review'}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua. Ut enim ad minim
            veniam,
          </p>
        </div>
        <div>
          <div className="slider_main">
            <Carousel showDots={true} arrows={false} className="carousel-control_custom" responsive={responsive}>
              {reviews.map((reviews, index) => (
                <div className="carousel_card">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                  </p>
                  <hr />
                  <div className="slider_user_info">
                    <img src={user} />
                    <div className="user_pic_slider">
                      <h5>Rob Hope</h5>
                      <span>Onepagelove.com</span>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
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
    </Fragment>
  );
};

export default Landing;
