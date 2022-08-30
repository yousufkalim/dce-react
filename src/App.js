// Init
import React, { useState, useEffect } from 'react';
import { ToastContainer, Flip } from 'react-toastify';
import { useLocation } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import SplashScreen from './components/SplashScreen';

// Files
import Main from './routes/Main';
import './css/index.css';

// Component
function App() {
  const [loading, setLoading] = useState(true);
  let { pathname } = useLocation();




  useEffect(() => {
    if (pathname === '/') {
      let tidio_chat = document.createElement('script');
      tidio_chat.async = true;
      tidio_chat.src = '//code.tidio.co/kzuvioyqy0zd2tdofproxrkgxrdkoryf.js';
      document.body.appendChild(tidio_chat);
    } else {
      let elm = document.getElementById('tidio-chat');
      if (elm) {
        elm.style.display = 'none';
      }
    }
  }, [pathname]);

  
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className='App'>
      {/* toastify Container for Notification */}
      <ToastContainer position='bottom-right' autoClose={3000} hideProgressBar={true} transition={Flip} />

      {/* Routes */}
      {loading ? <SplashScreen /> : <Main />}
    </div>
  );
}

// Export
export default App;
