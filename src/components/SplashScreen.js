import React from 'react';
import SplashBg from '../assets/SplashScreen.jpg';

const SplashScreen = () => {
  return (
    <>
      <div style={{ height: '100%', width: '100%' }}>
        <img src={SplashBg} />
      </div>
    </>
  );
};

export default SplashScreen;
