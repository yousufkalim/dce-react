// Init
import React, { useState, useEffect } from 'react';
import UnAuthAppBar from '../../components/UnAuthAppBar';
import AppLogoSVG from '../../assets/AppLogo.svg';
import BlogBodyimg from '../../assets/blogimg5.svg';
import blogImg from '../../assets/blogimg.jpeg';
import MeasurementChartSVG from '../../assets/MeasurementChart.svg';
import { assetsUrl } from '../../config';

export default function Blog() {
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
      <div style={{ background: '#e3d5d8' }}>
        <h1>Gallary</h1>
      </div>
    </>
  );
}
