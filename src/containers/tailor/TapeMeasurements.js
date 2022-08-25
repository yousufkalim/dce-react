import React from 'react';
import CustomInput from '../../components/CustomInput';
import { useTranslation } from 'react-i18next';

const TapeMeasurements = ({ state }) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '2% 0%',
          marginBottom: '0%',
        }}
        className="custom_input_label"
      >
        {t('Tape Measurements')}
      </div>
      <div className="measurement-container">
        <div className="container-circumference">
          <p className="heading-measurements"> {t('Circumference')}</p>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: '20px',
              marginBottom: '2%',
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text">{t('Arm')}</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: 'none',
                }}
                inputStyle={{
                  border: 'none',
                  fontSize: '12px',
                }}
                inputPlaceholder={t('Select size')}
                inputDefaultValue={state?.ArmCirmunference}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: '20px',
              marginBottom: '2%',
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text">{t('Chest size')}</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: 'none',
                }}
                inputStyle={{
                  border: 'none',
                  fontSize: '12px',
                }}
                inputPlaceholder={t('Select size')}
                inputDefaultValue={state?.ChestCirmunferenc}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: '20px',
              marginBottom: '2%',
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text">{t('Waist size')}</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: 'none',
                }}
                inputStyle={{
                  border: 'none',
                  fontSize: '12px',
                }}
                inputPlaceholder={t('Select size')}
                inputDefaultValue={state?.WaistCirmunferenc}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: '20px',
              marginBottom: '2%',
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text">{t('Hip')}</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: 'none',
                }}
                inputStyle={{
                  border: 'none',
                  fontSize: '12px',
                }}
                inputPlaceholder={t('Select size')}
                inputDefaultValue={state?.HipCirmunferenc}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: '20px',
              marginBottom: '2%',
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text">{t('Thigh')}</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: 'none',
                }}
                inputStyle={{
                  border: 'none',
                  fontSize: '12px',
                }}
                inputPlaceholder={t('Select size')}
                inputDefaultValue={state?.ThighCirmunferenc}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: '20px',
              marginBottom: '2%',
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text">{t('Calf')}</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: 'none',
                }}
                inputStyle={{
                  border: 'none',
                  fontSize: '12px',
                }}
                inputPlaceholder={t('Select size')}
                inputDefaultValue={state?.CalfCirmunferenc}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: '20px',
              marginBottom: '2%',
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text">{t('Ankle')}</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: 'none',
                }}
                inputStyle={{
                  border: 'none',
                  fontSize: '12px',
                }}
                inputPlaceholder={t('Select size')}
                inputDefaultValue={state?.AnkleCirmunferenc}
              />
            </div>
          </div>
        </div>

        <div className="container-length">
          <p className="heading-measurements">{t('Length')}</p>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: '20px',
              marginBottom: '2%',
            }}
          >
            <div style={{ width: '100%' }} className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text measurement_profile_section">{t('Head to floor height')}</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                //disabled={disabled}
                labelStyle={{
                  display: 'none',
                }}
                inputStyle={{
                  border: 'none',
                  fontSize: '12px',
                }}
                inputPlaceholder={t('Select size')}
                inputDefaultValue={state?.HeadToFloorLengt}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: '20px',
              marginBottom: '2%',
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text measurement_profile_section">{t('From shoulder to floor')}</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: 'none',
                }}
                inputStyle={{
                  border: 'none',
                  fontSize: '12px',
                }}
                inputPlaceholder={t('Select size')}
                inputDefaultValue={state?.ShoulderToFloorLengt}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: '20px',
              marginBottom: '2%',
            }}
          >
            <div style={{ width: '100%' }} className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text measurement_profile_section">{t('From waist to floor')}</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: 'none',
                }}
                inputStyle={{
                  border: 'none',
                  fontSize: '12px',
                }}
                inputPlaceholder={t('Select size')}
                inputDefaultValue={state?.WaistToFloorLengt}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: '20px',
              marginBottom: '2%',
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text measurement_profile_section">
                {t('Arm length')} <span style={{ color: '#A0A0A0' }}> {t('(handle)')} </span>
              </p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: 'none',
                }}
                inputStyle={{
                  border: 'none',
                  fontSize: '12px',
                }}
                inputPlaceholder={t('Select size')}
                inputDefaultValue={state?.ArmLengt}
              />
            </div>
          </div>
          <div
            className="pa_profile_section_input_container"
            style={{
              borderRadius: '20px',
              marginBottom: '2%',
            }}
          >
            <div className="pa_profile_section_input_label">
              <p className="pa_profile_section_input_text measurement_profile_section">{t('Leg length')}</p>
            </div>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled
                labelStyle={{
                  display: 'none',
                }}
                inputStyle={{
                  border: 'none',
                  fontSize: '12px',
                }}
                inputPlaceholder={t('Select size')}
                inputDefaultValue={state?.LegLengt}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TapeMeasurements;
