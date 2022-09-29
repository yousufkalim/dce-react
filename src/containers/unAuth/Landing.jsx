import React, { useEffect } from 'react';
// router link
import { Link  } from 'react-router-dom';
//  translation
import { useTranslation } from 'react-i18next';
import UnAuthAppBar from '../../components/UnAuthAppBar'
import FooterLogo from '../../assets/FooterLogo.svg';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import Youtubeicon from "../../assets/Youtubeicon.png"
import LeftBgImage from "../../assets/landingBgLeft.svg"
import RightBgImage from "../../assets/landingBgRight.svg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import {youtubeChannelId,youtubeApiKey} from "../../config"

const Landing = () => {


  useEffect(() => {
    getVideos();
  }, []);
  let getVideos = async () => {
    // setLoading(true);
    let res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&channelId=${youtubeChannelId}&part=snippet,id&order=date&maxResults=20`,
      { 'Access-Control-Allow-Origin': '*', withCredentials: false }
    );
    if (res) {
      console.log("youtubee",res)
      // updateStore({ channelVideos: res?.data?.items });
    }
    // setLoading(false);
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
      <div className="landing_main_container" >
        <div style={{width:"100%",height:"100%",top :"25px",position:"absolute",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{width:"25%",height:"70%",display:"flex",flexDirection:"column",justifyContent:"flex-end",paddingLeft:"5%"}}>
           <img style={{width:"100%" , filter: "grayscale(70%)"}} src={LeftBgImage}/>
          </div> 
          <div style={{width:"15%",height:"92%",display:"flex",flexDirection:"column", justifyContent:"flex-end",paddingRight:"2%"}}>
          <img style={{width:"100%"}}  src={RightBgImage}/>
          </div>
        </div>
        <div className="landing_hero_section">
          {/* cl 1  */}

          <div className="landing_hero_section_info" >
            <div className="landing_hero_section_info_heading" >
              <h3>{t('Design Ethical Confections')}</h3>
              <h4>{t('Make your sewing projects a reality in just a few clicks!')}</h4>
              <p>
                {t(
                  'Plateforme de mise en relation dans le domaine de la confection mode sur-mesure',
                )}
              </p>
              <div className='btn_section_group'>
                <Link style={{ textDecoration: 'none' }} to="/select_role_login">
                  <button type="button">{t('Login')}</button>
                </Link>
                <div className="or">
                  {t('or')}
                  <Link to="/select_role_register">
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
              <h3 style={{color:"#666666"}}>1. {t('You submit your sewing idea to us!')}</h3>
              <p className='how_work_p'  >{t("You tell us your preferences, criteria, choice and style of your confections!")}</p>
              <h3 style={{color:"#666666"}}>2. {t('We make it happen!')}</h3>
              <p className='how_work_p how_work_p_s' >{t("D.C.E has selected for you professional seamstresses with nimble fingers, passionate, with quality know-how!")}</p>
              <h3 style={{color:"#666666"}}>3. {t('You receive your confection!')}</h3>
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
              <h4 className='how_work_heading2 how_work_heading2_s'  style={{ fontSize: "20px", color:"#8b7964" }}>{t('In a few clicks, D.C.E allows you to find "sewing project" missions')}</h4>
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
                  <h4 className='submit_main_cardh4' >{t('Traitez en')}</h4>
                  <h4 className='submit_main_cardh4' >{t('direct')}</h4>
                </div>
               
              </div>
              <div className='btn_section_group_2'>
                <Link to="/tailor_register" >
                  <button className="how_work_ls how_work_ls_ssss" style={{ marginTop: "0px", fontSize: "35px" }}>{t('Je souhaite mettre à profit mon savoir faire')}</button>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* section 4  */}
      <Carousel responsive={responsive}
      // swipeable={false}
      // draggable={false}
      // showDots={false}
      // ssr={true} // means to render carousel on server-side.
      // infinite={true}
      autoPlay={true}
      autoPlaySpeed={10000}
      // keyBoardControl={true}
      // customTransition="all .5"
      // transitionDuration={1000}
      // containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // dotListClass="custom-dot-list-style"
      // itemClass="carousel-item-padding-40-px"
      transitionDuration={10}
            slidesToSlide={1}
            renderArrowNext={true}
            infinite={true}
            arrows={true}
      >

      <div className="chose_main_section" id="WhyChooseDCE" style={{display:"flex",justifyContent:"center",width:"100%",height:"100%"}}>
      <iframe width="60%" height="500" src="https://www.youtube.com/embed/-Tci049s2eU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="chose_main_section" id="WhyChooseDCE" style={{display:"flex",justifyContent:"center",width:"100%",height:"100%"}}>
      <iframe width="60%" height="500" src="https://www.youtube.com/embed/CU3l9QGe6SA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      {/* <div className="chose_main_section" id="WhyChooseDCE" style={{display:"flex",justifyContent:"center",width:"100%",height:"100%"}}>
      <iframe width="60%" height="500" src="https://www.youtube.com/embed/-Tci049s2eU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div> */}
      </Carousel>

      {/* footer */}
      <div class="footer_section_main" id="animation_dec">
       <div id='chat_module'>

       </div>
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
                © 2022 <span style={{ color: '#CC8E9C' }}>{t('Design Confection Ethiques,')}</span> {t('Developed by')}{' '}
                <span style={{ color: '#0085FF' }}> <a href='https://falconconsulting.fr/' target='blank'>{t('Falcon Consulting')}</a> .</span> 
                <Link style={{color:"#d1d5db", textDecoration: 'none' }} to='/terms_conditions'>
                <span style={{paddingLeft:"10px"}}>{t('Terms & Conditions')}</span>
                </Link>     
              </h4>
            </div>
            <div className="footer_incons_main" style={{ color: 'white' }}>
              <a href='https://www.youtube.com/channel/UCzVE2HfNNKJS2axFurs4qkQ' target="blank"> <img className='fb_ss' src={Youtubeicon} /></a>
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