// Init
import React, { useState, useEffect } from 'react';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SplashScreen from './components/SplashScreen';

// Files
import Main from './routes/Main';
import './css/index.css';

// Component
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="App">
      {/* toastify Container for Notification */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={true} transition={Flip} />

      {/* Routes */}
      {loading ? <SplashScreen /> : <Main />}
    </div>
  );
}

// Export
export default App;
