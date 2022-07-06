import React, { useState, useEffect } from 'react';

import AppLogoSVG from '../../assets/AppLogo.svg';
import DesignElaborationSVG from '../../assets/DesignElaboration.svg';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigate, useParams } from 'react-router-dom';
import Api from '../../api/index';

import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

function ResetPasswordScreen() {
  const { t } = useTranslation();
  let [passwords, setPasswords] = useState({});
  let [open, setOpen] = useState(false);
  let navigate = useNavigate();
  let { token } = useParams();
  useEffect(() => {
    verifyToken();
  }, []);

  const verifyToken = async () => {
    try {
      await Api('get', `/clients/verify-token/${token}`);
    } catch (err) {
      toast.error('Link has been expired');
      navigate('/login');
    }
  };

  // const handleClose = () => {
  //   setPasswords({
  //     password: "",
  //     confirmPassword: "",
  //   });
  //   setOpen(false);
  // };

  const handleInput = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log('check', passwords.password, passwords.confirmPassword);
    e.preventDefault();
    const { password, confirmPassword } = passwords;

    if (password !== confirmPassword) {
      return toast.error('Password and confirm password are not same');
    } else if (password.length < 8) {
      return toast.error('Password should be minimum 8 characters long');
    }

    let res = await Api('put', `/clients/reset-password/${token}`, {
      password,
    });
    if (res) {
      toast.success('Password changed successfully, Please login to continue.');
    }
    setPasswords({
      password: '',
      confirmPassword: '',
    });
    navigate('/login');
  };
  return (
    <>
      <form>
        <div
          className="container"
          style={{
            background:
              'linear-gradient(to left top, #EEE9DC 0%, #F0EEEB 50%, #EEEEEE 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))',
          }}
        >
          <div className="login_screen_top">
            <div className="login_screen_row1">
              <div className="login_screen_row1_img">
                <img
                  style={{ width: '35%', marginBottom: '5%' }}
                  src={AppLogoSVG}
                />
              </div>
              <div className="login_screen_row1_img">
                <img style={{ width: '70%' }} src={DesignElaborationSVG} />
              </div>
            </div>
            <div className="login_screen_row2">
              <div className="login_screen_row2_container">
                <div
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <p
                    style={{
                      fontSize: '16px',
                      color: '#CC8E9C',
                      fontWeight: '600',
                      marginBottom: '4%',
                    }}
                  >
                    {t('Reset Password')}
                  </p>
                  <p
                    style={{
                      fontSize: '11px',
                      color: '#A0A0A0',
                      marginBottom: '10%',
                    }}
                  >
                    {t('Set up your new Password & Login')}
                  </p>
                </div>
                <CustomInput
                  labelText={t('Password')}
                  inputType="password"
                  inputName="password"
                  inputPlaceholder="********"
                  enableEyes={true}
                  value={passwords.password}
                  onChange={handleInput}
                  divStyle={{
                    marginBottom: '12%',
                  }}
                />
                <CustomInput
                  labelText={t('Password')}
                  inputType="password"
                  inputName="confirmPassword"
                  value={passwords.confirmPassword}
                  inputPlaceholder="********"
                  enableEyes={true}
                  onChange={handleInput}
                  divStyle={{
                    marginBottom: '12%',
                  }}
                />

                <CustomButton
                  text={t('Change Password')}
                  type="submit"
                  onClick={handleSubmit}
                  style={{
                    marginBottom: '10%',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ResetPasswordScreen;
