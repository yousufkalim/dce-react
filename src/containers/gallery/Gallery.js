// Init
import React, { useState, useEffect } from 'react';
import UnAuthAppBar from '../../components/UnAuthAppBar';
import AppLogoSVG from '../../assets/AppLogo.svg';
import BlogBodyimg from '../../assets/blogimg5.svg';
import blogImg from '../../assets/blogimg.jpeg';
import MeasurementChartSVG from '../../assets/MeasurementChart.svg';
import { assetsUrl } from '../../config';
import api from '../../api';
import CircularProgress from '@mui/material/CircularProgress';

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  useEffect(() => {
    // get blogs
    getAllImages();
  }, []);

  let getAllImages = async () => {
    setLoading(true);
    let res = await api('get', '/images');
    if (res) {
      setImages(res?.data);
    }
    setLoading(false);
  };
  console.log('assetsUrl', assetsUrl + 'uploads/blogImages/');
  let imgArray = [
    {
      a: AppLogoSVG,
      text: 'The New Yorker'
    },
    {
      a: BlogBodyimg,
      text: 'Kapital Magazine'
    },
    {
      a: blogImg,
      text: 'Kapital Magazine'
    },

    {
      a: MeasurementChartSVG,
      text: 'Kapital Magazine'
    },
    {
      a: AppLogoSVG,
      text: 'The New Yorker'
    },
    {
      a: BlogBodyimg,
      text: 'Kapital Magazine'
    },
    {
      a: blogImg,
      text: 'Kapital Magazine'
    },

    {
      a: MeasurementChartSVG,
      text: 'Kapital Magazine'
    },
    {
      a: AppLogoSVG,
      text: 'The New Yorker'
    },
    {
      a: BlogBodyimg,
      text: 'Kapital Magazine'
    },
    {
      a: blogImg,
      text: 'Kapital Magazine'
    },

    {
      a: MeasurementChartSVG,
      text: 'Kapital Magazine'
    },
    {
      a: AppLogoSVG,
      text: 'The New Yorker'
    },
    {
      a: BlogBodyimg,
      text: 'Kapital Magazine'
    },
    {
      a: blogImg,
      text: 'Kapital Magazine'
    },

    {
      a: MeasurementChartSVG,
      text: 'Kapital Magazine'
    }
  ];
  return (
    <>
      <UnAuthAppBar />
      {loading ? (
        <h1 style={{ textAlign: 'center', padding: '20%' }}>
          <CircularProgress color="secondary" />
        </h1>
      ) : (
        <>
          <div className="maindivG" style={{ background: '#e3d5d8' }}>
            <div className="titleDiv">
              {/* <h1 className="titleGallery">erkendalkonferansen</h1>
              <h1 className="titleGallery">erkendalkonferansen</h1> */}
            </div>
            <div className="galleryMainDiv">
              {images?.map(img => (
                <>
                  <div className="imgdiv">
                    <img
                      src={assetsUrl + 'uploads/blogImages/' + img}
                      // src={img.a}
                      className="galleryimg"
                      alt="img"
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
