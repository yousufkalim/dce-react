// Init
import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import UnAuthAppBar from '../../components/UnAuthAppBar';
import BlogBody from '../../components/blog/BlogBody';
import Footer from '../../components/Footer';
// import Contactus from '../utils/Contactus';

export default function Blog() {
  const [activeStep, setActiveStep] = useState(1);
  const [step, setStep] = useState(0);
  const [statetextforscroll, setStatetextforscroll] = useState('');
  return (
    <div style={{}}>
      {/* <UnAuthAppBar /> */}
      <BlogBody />
      {/* <Contactus /> */}
      <Footer />
    </div>
  );
}
