import React, { useState } from 'react';

import axios from 'axios';

import AutoComplete from '../components/AutoComplete';
import { makeStyles } from '@material-ui/core/styles';

import CustomDropDown from './CustomDropDown';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import CustomDatePicker from './CustomDatePicker';
import Attachment from './Attachment';
import ViewImageModal from './ViewImageModal';
import AlertBox from './AlertBox';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';

import { ChromePicker } from 'react-color';
import { SketchPicker, GithubPicker, CompactPicker, CirclePicker } from 'react-color';

import InfoIcon from '@mui/icons-material/Info';

import DottedSVG from '../assets/dottedblack.svg';
import MeasurementDetailsSVG from '../assets/MeasurementDetails.svg';
import MeasurementChartSVG from '../assets/MeasurementChart.svg';

import { useTranslation } from 'react-i18next';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import * as ParseMeasurement from './ParseMeasurement';
import * as FormValidations from '../utils/Validations';

import { assetsUrl } from '../config';
import { grey } from '@mui/material/colors';

import { materialFabrics, adNames, colors } from '../utils/Constants';
import UploadSVG from '../assets/upload.svg';
import Modal from '@mui/material/Modal';
import { Store } from '../StoreContext';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const fabricTypes = ['Plain Fabric', 'Patterned Fabric'];
function BasicSection({
  props,
  openColorPicker,
  setOpenColorPicker,
  state,
  setState,
  onClick,
  disabled,
  disables,
  images,
  setImages,
  handleImagesSelect,
  handleCloseColorPicker,
  handleImageDeselect
}) {
  const { t } = useTranslation();

  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setState({
      ...state,
      ...obj
    });
  };

  const [anchorElMeasurements, setAnchorElMeasurements] = useState(null);
  const openMeasurements = Boolean(anchorElMeasurements);
  const handleClickMeasurements = event => {
    setAnchorElMeasurements(event.currentTarget);
  };
  const handleCloseMeasurements = () => {
    setAnchorElMeasurements(null);
  };

  const [isViewImageModal, setIsViewImageModal] = useState(false);
  const handleIsViewImageModalClose = () => {
    setIsViewImageModal(false);
  };
  const handleIsViewImageModalOpen = () => {
    setIsViewImageModal(true);
  };

  const [isTapeMeasurementModal, setIsTapeMeasurementModal] = useState(false);
  const handleIsTapeMeasurementModalClose = () => {
    setIsTapeMeasurementModal(false);
  };
  const handleIsTapeMeasurementModalOpen = () => {
    setIsTapeMeasurementModal(true);
  };

  const selectMeasurementsType = _ => {
    setState({
      ...state,
      measurements: {
        type: _,
        value: ''
      }
    });
    handleCloseMeasurements();
  };

  const store = Store();

  const useStyles = makeStyles(theme => ({
    inputRoot: {
      color: '#ffffff',
      '& .MuiOutlinedInput-input.Mui-disabled': {
        '-webkit-text-fill-color': '#ffffff'
      }
    }
  }));
  const classes = useStyles();

  // const [openColorPicker, setOpenColorPicker] = useState(false);
  const [viewImage, setViewImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [imageToDeleteConfirmation, setImageToDeleteConfirmation] = useState();
  /////test code
  const handleChangeComplete = color => {
    // console.log("on change complete");
    // console.log(color.hex,"h");
    _setState('color', color.hex);
    // this.setState({ background: color.hex });
  };

  const handleChange = (color, event) => {
    console.log(color, '132col');
  };
  const handleCloseAlert = confirmation => {
    if (confirmation) {
      const _images = [...images];
      const index = _images.map(_ => _.name).indexOf(imageToDeleteConfirmation.name);
      if (index > -1) {
        _images.splice(index, 1);
      }
      setImages([..._images]);
    }
    setOpen(false);
  };

  /////
  return (
    <>
      <div className="pa_profile_section_container">
        <AlertBox open={open} setOpen={setOpen} handleClose={handleCloseAlert} />
        {/* <div
          className="pa_profile_section_input_container"
          style={{
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t("Gender")}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled || disables?.includes("gender")}
              labelStyle={{
                display: "none",
              }}
              selectID="gender"
              selectName="gender"
              selectNullValue={t("Select gender for your creation")}
              selectValue={state?.gender}
              onChange={(e) => _setState("gender", e.target.value)}
              menuItems={[<MenuItem value={"male"}>{t("Male")}</MenuItem>, <MenuItem value={"female"}>{t("Female")}</MenuItem>]}
              selectSX={{
                fontSize: "12px",
              }}
            />
          </div>
        </div> */}
        <div
          style={{
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px'
          }}
          className="pa_profile_section_input_container">
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t('Category')}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled || disables?.includes('category')}
              labelStyle={{
                display: 'none'
              }}
              selectID="category"
              selectName="category"
              selectNullValue={t('Female')}
              selectValue={t(state.category)}
              onChange={e => {
                _setState('category', e.target.value);
                let category = e.target.value;
                let name;

                if (category == t('WOMEN')) {
                  name = adNames.women[0];
                } else if (category == t('MAN')) {
                  name = adNames.man[0];
                } else if (category == t('CHILD')) {
                  name = adNames.child[0];
                } else if (category == t('Autre : précisez')) {
                  name = adNames.Autre[0];
                }

                setState({
                  ...state,
                  category: category,
                  name: name
                });
              }}
              menuItems={[
                <MenuItem value={t('WOMEN')}>{t('WOMEN')}</MenuItem>,
                <MenuItem value={t('MAN')}>{t('MAN')}</MenuItem>,
                <MenuItem value={t('CHILD')}>{t('CHILD')}</MenuItem>,
                <MenuItem value={t('Autre : précisez')}>{t('Autre : précisez')}</MenuItem>
              ]}
            />
          </div>
        </div>
        {state.category === 'Autre : précisez' && (
          <>
            <div
              className="pa_profile_section_input_container"
              style={{
                height: '45px'
              }}>
              <div className="pa_profile_section_input_label">
                <p className="pa_profile_section_input_text">{t('Précisez le type')}</p>
              </div>
              <div className="pa_profile_section_input_input">
                <CustomInput
                  disabled={disabled}
                  labelStyle={{
                    display: 'none'
                  }}
                  inputStyle={{
                    border: 'none',
                    fontSize: '12px'
                  }}
                  inputType="text"
                  inputPlaceholder={t('Précisez le type')}
                  // inputDefaultValue={state?.observation}
                  // onChange={e => _setState('observation', e.target.value)}
                />
              </div>
            </div>
          </>
        )}

        <div
          className="pa_profile_section_input_container"
          style={{
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
            marginBottom: '2%'
          }}>
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t('Type')}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled || disables?.includes('name')}
              labelStyle={{
                display: 'none'
              }}
              selectID="name"
              selectName="name"
              selectNullValue={t('Jupe longue')}
              selectValue={t(state.name)}
              onChange={e => _setState('name', e.target.value)}
              menuItems={
                state.category == t('WOMEN') ? (
                  adNames.women.map(_ => <MenuItem value={_}>{t(_)}</MenuItem>)
                ) : state.category == t('MAN') ? (
                  adNames.man.map(_ => <MenuItem value={_}>{t(_)}</MenuItem>)
                ) : state.category == t('CHILD') ? (
                  adNames.child.map(_ => <MenuItem value={_}>{t(_)}</MenuItem>)
                ) : state.category == t('Autre : précisez') ? (
                  adNames.Autre.map(_ => <MenuItem value={_}>{t(_)}</MenuItem>)
                ) : (
                  <></>
                )
              }
            />
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: '20px',
            marginBottom: '1%'
          }}>
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t('Height')}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              disabled={disabled}
              labelStyle={{
                display: 'none'
              }}
              inputStyle={{
                border: 'none',
                fontSize: '12px'
              }}
              inputType="text"
              inputPlaceholder={t(' 1.70m')}
              inputDefaultValue={state?.height}
              onChange={e => _setState('height', e.target.value)}
            />
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: '20px',
            marginBottom: '1%'
          }}>
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t('size')}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled}
              labelStyle={{
                display: 'none'
              }}
              selectID="cut"
              selectName="cut"
              selectNullValue={t('Select size')}
              selectValue={state.cut}
              onChange={e => _setState('cut', e.target.value)}
              menuItems={[
                <MenuItem value={'XS'}>XS</MenuItem>,
                <MenuItem value={'S'}>S</MenuItem>,
                <MenuItem value={'M'}>M</MenuItem>,
                <MenuItem value={'L'}>L</MenuItem>,
                <MenuItem value={'XL'}>XL</MenuItem>,
                <MenuItem value={'XXL'}>XXL</MenuItem>,
                <MenuItem value={'XXXL'}>XXXL</MenuItem>
              ]}
            />
          </div>
        </div>
        <div></div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '80%',
            marginLeft: '4%'
          }}>
          <div>
            <span className="measurements"> {t('Standard size')}</span>{' '}
          </div>
          <div className="size-measurement-cont">
            {[
              {
                size: 'small',
                measurements: '28,30,32'
              },
              {
                size: 'medium',
                measurements: '36,38,40'
              },
              {
                size: 'large',
                measurements: '42,44,46'
              }
            ].map(_ => (
              <div>
                <span className="size">{t(_.size)} </span>{' '}
                <span className="measurements">{_.measurements}</span>{' '}
              </div>
            ))}
          </div>
        </div>
        <Tooltip
            arrow
            title={
                <p style={{ fontSize: '14px' }}>Cliquez sur trois points pour sélectionner les mesures</p>
            }>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: '20px',
            marginTop: '2%',
            marginBottom: '1%'
          }}>
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t('Measurements')}</p>
          </div>
          <Tooltip
            arrow
            title={
              state?.measurements?.value?.length == 0 ? (
                ''
              ) : (
                <p style={{ fontSize: '14px',background:"red"}}>{state?.measurements?.value}</p>
              )
            }>
            <div className="pa_profile_section_input_input">
              <CustomInput
                disabled={
                  disabled || state.measurements.type == 'tape' || state.measurements.type == 'call'
                }
                labelStyle={{
                  display: 'none'
                }}
                inputStyle={{
                  border: 'none',
                  fontSize: '12px'
                }}
                inputPlaceholder={
                  state.measurements.type == 'static'
                    ? t("I'm taking my measurements")
                    : state.measurements.type == 'tape'
                    ? 'Measured by tape'
                    : state.measurements.type == 'call'
                    ? 'Discussed on call'
                    : ''
                }
                inputValue={state?.measurements?.value}
                inputDefaultValue={state?.measurements?.value}
                minmax="on"
                onChange={e => {
                  setState({
                    ...state,
                    measurements: {
                      type: 'static',
                      value: e.target.value.replace(/[^0-9]/g, '')
                    }
                  });
                }}
              />
              <img
                className="dots-measurement"
                src={DottedSVG}
                onClick={!disabled ? handleClickMeasurements : null}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorElMeasurements}
                open={openMeasurements}
                onClose={handleCloseMeasurements}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}>
                {/* <MenuItem onClick={e => selectMeasurementsType('static')}>
                  <p>{t('Statique')}</p>
                  <Tooltip
                    arrow
                    title={
                      <p style={{ fontSize: '14px' }}>
                        {t('Les mensurations sont à entrer manuellement dans le champ prévu')}
                      </p>
                    }>
                    <InfoIcon sx={{ height: '20px', width: '20px', marginLeft: '5px' }} />
                  </Tooltip>
                </MenuItem> */}
                <MenuItem
                  onClick={e => {
                    handleIsTapeMeasurementModalOpen();
                  }}>
                  <p>{t('Mesurer avec mètre ruban')}</p>
                  <Tooltip
                    arrow
                    title={
                      <p style={{ fontSize: '14px' }}>
                        {t(
                          'Les mensurations seront à prendre avec un mètre ruban une fois la commande acceptée'
                        )}
                      </p>
                    }>
                    <InfoIcon sx={{ height: '20px', width: '20px', marginLeft: '5px' }} />
                  </Tooltip>
                </MenuItem>
                {/* <MenuItem onClick={(e) => selectMeasurementsType('call')}>
                  <p>{t('Book Call')}</p>
                  <Tooltip
                    arrow
                    title={
                      <p style={{ fontSize: '14px' }}>
                        {t('A message will be dropped by you to the tailor for the measurements.')}
                      </p>
                    }
                  >
                    <InfoIcon sx={{ height: '20px', width: '20px', marginLeft: '5px' }} />
                  </Tooltip>
                </MenuItem> */}
              </Menu>
            </div>
          </Tooltip>
        </div>
        </Tooltip>
        <p className="pa_profile_section_input_instructions_text" style={{ padding: '0 6%' }}>
          {t("*I'm getting a tape measure.")}
          {t(
            'Depending on the garment, I measure certain parts of the body in circumference and/or length.'
          )}
        </p>
        {/* <p className='pa_profile_section_input_instructions_text'>
          {t('*depending on the garment, I measure certain parts of the body in circumference and/or length.')}
        </p> */}
        <div
          className="pa_profile_section_input_container"
          style={{
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            marginTop: '2%',
            backgroundColor: state.color == '#000000' ? '#ffffff' : state.color
          }}>
          <div style={{ width: '42%' }} className="pa_profile_section_input_label">
            <p
              style={{
                color: state.color == '#000000' ? '#000000' : !state.color ? '' : '#ffffff'
              }}
              className="pa_profile_section_input_text">
              {t('Dominant color')}
            </p>
          </div>
          <div
            style={{ width: '100%', height: '30pt' }}
            className="pa_profile_section_input_input"
            onClick={() => {
              console.log('🚀 ~ file: ParseAd.js ~ line 62 ~ openColorPicker', openColorPicker);
              setOpenColorPicker(!openColorPicker);
            }}>
            {openColorPicker ? (
              <div
                // open={openColorPicker}
                // onClose={handleCloseColorPicker}
                style={{
                  position: 'absolute',
                  top: '60%',
                  // left: '50%',
                  transform: 'translateX(5%)',
                  marginTop: 15,
                  background: 'green !important'
                  // padding: '5%',
                }}>
                {/* <ChromePicker
                  color={state.color}
                  onChangeComplete={(e) => {
                    _setState("color", e.hex);
                  }}
                /> */}
                <div
                  style={{
                    maxHeight: '150px',
                    // margin: '5%',
                     background: 'white',
                     borderRadius: '7px',
                     boxShadow: "4px 6px 10px #d1cbc6",
                     overflowY:"scroll",
                     overflowX:'hidden',
                  }}>
                    <div style={{padding:"5%",zIndex:'900'}}>
                  <CirclePicker
                    width="225px"
                    style={{
                      maxHeight: '30px',
                    }}
                    colors={colors}
                    circleSize={28}
                     // color={state.background}
                    onChange={handleChange}
                    onChangeComplete={handleChangeComplete}
                  />
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            {/* <p>{state.color}</p> */}
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderBottomLeftRadius: state.fabric === 'Autre : précisez' ? '0' : '20px',
            borderBottomRightRadius: state.fabric === 'Autre : précisez' ? '0' : '20px'
          }}>
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t('Dominant Fabric')}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDropDown
              disabled={disabled}
              labelStyle={{
                display: 'none'
              }}
              selectID="materialFabrics"
              selectName="materialFabrics"
              selectNullValue={t('Select Fabric Style')}
              selectValue={state.fabric}
              onChange={e => _setState('fabric', e.target.value)}
              menuItems={materialFabrics.map(_ => (
                <MenuItem value={t(_.title)}>{t(_.title)}</MenuItem>
              ))}
            />
          </div>
        </div>
        {state.fabric === 'Autre : précisez' && (
          <>
            <div
              className="pa_profile_section_input_container"
              style={{
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px',
                height: '45px'
              }}>
              <div className="pa_profile_section_input_label">
                <p className="pa_profile_section_input_text">{t('Précisez le tissu')}</p>
              </div>
              <div className="pa_profile_section_input_input">
                <CustomInput
                  disabled={disabled}
                  labelStyle={{
                    display: 'none'
                  }}
                  inputStyle={{
                    border: 'none',
                    fontSize: '12px'
                  }}
                  inputType="text"
                  inputPlaceholder={t('Précisez le tissu')}
                  // inputDefaultValue={state?.observation}
                  // onChange={e => _setState('observation', e.target.value)}
                />
              </div>
            </div>
          </>
        )}
        <div className="create_ad_radio">
          {fabricTypes.map(_ => (
            <>
              <input
                type="radio"
                style={{ marginRight: '2%', fontSize: '14px' }}
                checked={state.fabric_type == _}
                onChange={e => {
                  _setState('fabric_type', _);
                }}
              />
              <label for="html" style={{ marginRight: '2%', fontSize: '12px' }}>
                {t(_)}
              </label>
            </>
          ))}
        </div>
        {state.fabric_type == fabricTypes[1] ? (
          <>
            <div
              className="pa_profile_section_input_container"
              style={{
                borderRadius: '20px',
                marginBottom: '1%',
                marginTop: '1%'
              }}>
              <div className="pa_profile_section_input_label">
                <p className="pa_profile_section_input_text">{t('Fabric Description')}</p>
              </div>
              <div className="pa_profile_section_input_input">
                <CustomInput
                  disabled={disabled}
                  labelStyle={{
                    display: 'none'
                  }}
                  inputStyle={{
                    border: 'none',
                    fontSize: '12px'
                  }}
                  inputType="text"
                  inputPlaceholder={t('Flowers')}
                  inputDefaultValue={state?.fabric_description}
                  onChange={e => _setState('fabric_description', e.target.value)}
                />
              </div>
            </div>
          </>
        ) : null}
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: '20px',
            marginTop: '2%'
          }}>
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t('Attachments')}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <label className="upload-pic-label" htmlFor="filePicker">
              <input
                disabled={disabled}
                multiple
                type="file"
                accept="image/*"
                hidden
                id="filePicker"
                name="file"
                onChange={handleImagesSelect}
              />
              <div className="upload-img-text-cont">
                <span className="upload-img-text">
                  {t('upload an illustration of your creation')}
                </span>
                <img src={UploadSVG} />
              </div>
            </label>
          </div>
        </div>
        <div className="selected-images-container">
          {images?.map(_ => (
            <Attachment
              disabled={disabled}
              image={_}
              view={() => {
                setViewImage(typeof _ === 'string' ? assetsUrl + _ : _);
                handleIsViewImageModalOpen();
              }}
              deselect={() => {
                //handleImageDeselect(_)
                setOpen(true);
                setImageToDeleteConfirmation(_);
              }}
            />
          ))}
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: '20px',
            marginBottom: '1%',
            height: '80px'
          }}>
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t('Observation')}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              disabled={disabled}
              labelStyle={{
                display: 'none'
              }}
              inputStyle={{
                border: 'none',
                fontSize: '12px'
              }}
              inputType="text"
              inputPlaceholder={t('Details about my creation')}
              inputDefaultValue={state?.observation}
              onChange={e => _setState('observation', e.target.value)}
            />
          </div>
        </div>
        {/* <div className="checkbox-container">
          <Checkbox
            {...label}
            disabled={disabled}
            checked={state.includes_alteration_services}
            sx={{
              color: grey[900],
              "&.Mui-checked": {
                color: grey[900],
              },
            }}
            onChange={(e) => _setState("includes_alteration_services", e.target.checked)}
          />
          <label>
            {" "}
            <span className="duw-text">{t("Do you Want")}</span>{" "}
            <span className="alteration-txt">{t("ALTREATION SERVICE ?")} </span>
          </label>
        </div> */}
        <div className="checkbox-container">
          <Checkbox
            {...label}
            disabled={disabled || disables?.includes('create_catalog_after_completion')}
            checked={state.create_catalog_after_completion}
            sx={{
              color: grey[900],
              '&.Mui-checked': {
                color: grey[900]
              }
            }}
            onChange={e => _setState('create_catalog_after_completion', e.target.checked)}
          />
          <label>
            {' '}
            <span className="duw-text">
              {t('I do desired not that my creation appears on the site')}
            </span>{' '}
            {/* <span className="alteration-txt">{t("ORDER COMPLETION ?")} </span>{" "} */}
          </label>
        </div>
        {!onClick ? (
          <></>
        ) : (
          <CustomButton
            text={t('Next')}
            style={{
              marginBottom: '6%',
              padding: '1.7% 5%',
              boxShadow: 'none'
            }}
            onClick={onClick}
          />
        )}
        <Modal
          open={isViewImageModal}
          onClose={handleIsViewImageModalClose}
          aria-labelledby="View Image">
          <ViewImageModal src={viewImage} handleClose={handleIsViewImageModalClose} />
        </Modal>
        <Modal
          open={isTapeMeasurementModal}
          onClose={handleIsTapeMeasurementModalClose}
          aria-labelledby="Tape Measurement">
          <TapeMeasurementsModal
            _setState={_setState}
            handleClose={handleIsTapeMeasurementModalClose}
          />
        </Modal>
      </div>
    </>
  );
}

function TapeMeasurementsModal(props) {
  const { t } = useTranslation();
  const steps = ['Circumference', 'Length'];

  const [activeStep, setActiveStep] = useState(0);
  const [circumferenceSection, setCircumferenceSection] = useState({
    arm: '',
    chest: '',
    waist: '',
    hip: '',
    thigh: '',
    calf: '',
    ankle: ''
  });
  const [lengthSection, setLengthSection] = useState({
    head_to_floor: '',
    shoulder_to_floor: '',
    waist_to_floor: '',
    arm_length: '',
    leg_length: ''
  });

  const circumferenceSectionCallback = () => {
    const isValidated = FormValidations.parseMeasurementCircumferenceSection(circumferenceSection);
    if (!isValidated) {
      return;
    }
    setActiveStep(1);
  };

  const lengthSectionCallback = async event => {
    event.preventDefault();

    const isValidated =
      FormValidations.parseMeasurementCircumferenceSection(circumferenceSection) &&
      FormValidations.parseMeasurementLengthSection(lengthSection);
    if (!isValidated) {
      return;
    }

    try {
      const measurements = measurmentsObjMaker();
      const str = JSON.stringify(measurements).replace(/"([^"]+)":/g, '$1:');
      props._setState('measurements', {
        type: 'tape',
        value: str
      });
      props.handleClose();
    } catch (e) {
      console.trace(e);
    }
  };

  const measurmentsObjMaker = () => {
    let DATA = {
      ArmCirmunference: circumferenceSection.arm,
      ChestCirmunference: circumferenceSection.chest,
      WaistCirmunference: circumferenceSection.waist,
      HipCirmunference: circumferenceSection.hip,
      ThighCirmunference: circumferenceSection.thigh,
      CalfCirmunference: circumferenceSection.calf,
      AnkleCirmunference: circumferenceSection.ankle,
      HeadToFloorLength: lengthSection.head_to_floor,
      ShoulderToFloorLength: lengthSection.shoulder_to_floor,
      WaistToFloorLength: lengthSection.waist_to_floor,
      ArmLength: lengthSection.arm_length,
      LegLength: lengthSection.leg_length
    };
    return DATA;
  };

  return (
    <div
      className="tqs_sqm_container"
      style={{
        maxHeight: '95vh',
        width: '60vw',
        overflow: 'scroll',
        height: '90vh'
      }}>
      <div style={{ width: '95%' }} className="client_create_ad_screen_column2">
        <p
          style={{
            padding: '2% 0%',
            color: '#990000',
            fontSize: '12pt',
            fontWeight: 'bold',
            lineHeight: '20px'
          }}>
          {t(
            'RAPPEL : Une fois les mesures renseignées et validées, D.C.E utilisera ces mesures pour confectionner votre tenue. D.C.E ne sera en aucun cas responsable des mesures erronées. Aucune réclamation sur les mensurations de vos tenues ne sera possible. Toute modification due à des mesures erronées vous sera facturée et les envois seront à votre charge.'
          )}
        </p>
        <div
          style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <img src={MeasurementDetailsSVG} style={{ width: '70%' }} />
          {/* <img style={{ width: '70%' }} src={MeasurementChartSVG} /> */}
        </div>
        <div
          className="pa_container"
          style={{
            height: '100%',
            width: '100%',
            marginTop:"2%"
          }}>
          <div
            className="pa_steps_row"
            style={{
              paddingBottom: '4%',
              paddingTop: '2%'
            }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((v, i) => (
                <Step key={v}>
                  <StepLabel onClick={() => setActiveStep(i)}>{t(v)}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <div className="pa_content_row">
            {activeStep == 0 ? (
              <ParseMeasurement.CircumferenceSection
                state={circumferenceSection}
                setState={setCircumferenceSection}
                onClick={circumferenceSectionCallback}
              />
            ) : activeStep == 1 ? (
              <ParseMeasurement.LengthSection
                state={lengthSection}
                setState={setLengthSection}
                onClick={lengthSectionCallback}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DeliverySection({ state, setState, onClick, disabled }) {
  console.log('DeliverySection state', state);
  const { t } = useTranslation();
  const [addresses, setAddresses] = useState([]);
  const _setState = (key, value) => {
    console.log('value', value);
    const obj = {};
    obj[key] = value;
    setState({
      ...state,
      ...obj
    });
  };
  const _setAddress = _ => {
    _setState('address', { ...state.address, ..._ });
  };
  const handleSelectAddress = e => {
    if (e) {
      _setAddress({
        label: e.label,
        zip: e.PostalCode,
        city: e.city,
        lat: e.lat,
        lng: e.lng
      });
    } else {
      _setAddress({
        label: '',
        zip: '',
        city: '',
        lat: '',
        lng: ''
      });
    }
  };
  const handleInputAddress = async e => {
    if (e.target.value === '') {
      _setAddress({
        label: '',
        zip: '',
        city: '',
        lat: '',
        lng: ''
      });
      setAddresses([]);
    } else {
      _setAddress({
        label: e.target.value
      });
      const config = {
        method: 'get',
        url: `https://api-adresse.data.gouv.fr/search/?q=${e.target.value}&type=housenumber&autocomplete=1`
      };
      axios.defaults.headers = null;
      try {
        const response = await axios(config);
        const addressToSet = [];
        console.log('response.data.features', response.data.features);

        response.data.features
          .map(item => {
            addressToSet.push({
              label: item.properties.label,
              city: item.properties.city,
              PostalCode: item.properties.postcode,
              lat: item.geometry.coordinates[1],
              lng: item.geometry.coordinates[0]
            });
            setAddresses(addressToSet);
          })
          .catch(function (error) {
            console.log(error);
          });
        setAddresses(addressToSet);
      } catch (e) {
        console.trace(e);
      }
    }
  };
  return (
    <>
      <div className="pa_profile_section_container">
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: '20px',
            marginBottom: '1%'
          }}>
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t('Last Name')}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              disabled={disabled}
              labelStyle={{
                display: 'none'
              }}
              inputStyle={{
                border: 'none',
                fontSize: '12px'
              }}
              inputType="text"
              inputPlaceholder={t('Last Name')}
              inputDefaultValue={state?.client_last_name}
              onChange={e => _setState('client_last_name', e.target.value)}
            />
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: '20px',
            marginBottom: '1%'
          }}>
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t('First Name')}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              disabled={disabled}
              labelStyle={{
                display: 'none'
              }}
              inputStyle={{
                border: 'none',
                fontSize: '12px'
              }}
              inputType="text"
              inputPlaceholder={t('First Name')}
              inputDefaultValue={state?.client_first_name}
              onChange={e => _setState('client_first_name', e.target.value)}
            />
          </div>
        </div>

        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: '20px',
            marginBottom: '2%'
          }}>
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t('Delivery Address')}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <div style={{ width: '100%' }}>
              <AutoComplete
                noOptionsText={'Aucune adresse trouvée'}
                disabled={disabled}
                name="Address"
                required={true}
                label={'Address'}
                value={state?.address?.label}
                options={addresses}
                placeholder={t('Address')}
                componenet="parseaddress"
                onChangeAddress={e => {
                  handleInputAddress(e);
                }}
                onAddressSelect={e => handleSelectAddress(e)}
              />
            </div>
          </div>
        </div>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: '20px',
            marginBottom: '1%'
          }}>
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">
              {t('any note (s) concerning the delivery')}
            </p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomInput
              disabled={disabled}
              labelStyle={{
                display: 'none'
              }}
              inputStyle={{
                border: 'none',
                fontSize: '12px'
              }}
              inputType="text"
              inputPlaceholder={t('Write any note regarding Delivery (Optional)')}
              inputDefaultValue={state?.note}
              onChange={e => _setState('note', e.target.value)}
            />
          </div>
        </div>
        <p className="pa_profile_section_input_instructions_text">
          {t('*Select Delivery Type according to your Demands')}
        </p>
        <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: '20px',
            marginTop: '2%',
            marginBottom: '1%'
          }}>
          <div className="pa_profile_section_input_label">
            <p className="pa_profile_section_input_text">{t('desired delivery date')}</p>
          </div>
          <div className="pa_profile_section_input_input">
            <CustomDatePicker
              disablePast
              centeredText={false}
              disabled={disabled}
              labelStyle={{
                display: 'none'
              }}
              value={state?.date}
              onChange={e => _setState('date', e)}
            />
          </div>
        </div>
        <p className="pa_profile_section_input_instructions_text">
          {t('*Select Date for delivery')}
        </p>
        {!onClick ? (
          <></>
        ) : (
          <CustomButton
            text={t('Next')}
            style={{
              marginTop: '3%',
              marginBottom: '10%',
              padding: '1.5% 5%',
              boxShadow: 'none'
            }}
            onClick={onClick}
          />
        )}
      </div>
    </>
  );
}

function NotesSection({ state, setState, buttonText, onClick, disabled }) {
  const { t } = useTranslation();

  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setState({
      ...state,
      ...obj
    });
  };
  const store = Store();
  return (
    <>
      <div className="pa_profile_section_container">
        {state?.quotes?.length === 0 || !state.quotes ? (
          <>
            {/* <div
              className="pa_profile_section_input_container"
              style={{
                borderRadius: "20px",
                marginBottom: "2%",
              }}
            >
              <div className="pa_profile_section_input_label">
                <p className="pa_profile_section_input_text">
                  {t("Choose Method")}
                </p>
              </div>
              <div className="pa_profile_section_input_input">
                <CustomDropDown
                  disabled={disabled}
                  labelStyle={{
                    display: "none",
                  }}
                  selectID="payment_type"
                  selectName="payment_type"
                  selectNullValue={t("Fixed price")}
                  selectValue={state.type}
                  onChange={(e) => _setState("type", t(e.target.value))}
                  menuItems={[
                    <MenuItem value={"fixed"}>{t("Fixed price")}</MenuItem>,
                    <MenuItem value={"hourly"}>{t("Hourly Rate")}</MenuItem>,
                  ]}
                />
              </div>
            </div> */}
            {/* <div
              className="pa_payment_section_input_container"
              style={{
                borderRadius: "20px",
                marginBottom: "2%",
              }}
            >
              <div className="pa_payment_section_input_label">
                <p className="pa_payment_section_input_text">{t("Set Minimum Price")}</p>
              </div>
              <div className="pa_payment_section_input_input_container">
                <input
                  disabled={disabled}
                  className="pa_payment_section_input_input"
                  type="number"
                  defaultValue={`${state.min_price}`}
                  onChange={(e) => {
                    _setState("min_price", e.target.value);
                  }}
                  placeholder="€0"
                />
                {state.min_price ? <span className="input-currency-sign">€</span> : null}
              </div>
            </div> */}
            <div
              className="pa_payment_section_input_container"
              style={{
                borderRadius: '20px',
                marginBottom: '2%'
              }}>
              <div className="pa_payment_section_input_label">
                <p className="pa_payment_section_input_text">{t('Set Maximum Price')}</p>
              </div>
              <div className="pa_payment_section_input_input_container">
                <input
                  disabled={disabled}
                  className="pa_payment_section_input_input"
                  type="tel"
                  value={state?.max_price}
                  defaultValue={state.max_price}
                  onChange={e => _setState('max_price', e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="0€"
                  maxlength="15"
                />
                {state.max_price ? <span className="input-currency-sign">€</span> : null}
              </div>
            </div>
          </>
        ) : null}
        {(store.userRole == 'tailor' || state?.quotes?.length > 0) &&
        state?.quotes[0]?.price > 0 ? (
          <div
            className="pa_payment_section_input_container"
            style={{
              borderRadius: '25px',
              marginBottom: '2%'
            }}>
            <div className="pa_payment_section_input_label">
              <p className="pa_payment_section_input_text">{t('Prix final')}</p>
            </div>
            <div className="pa_payment_section_input_input_container">
              <input
                disabled={disabled}
                className="pa_payment_section_input_input"
                type="number"
                defaultValue={state?.quotes[0]?.price}
                onChange={e => _setState('min_price', e.target.value)}
                placeholder="0€"
              />
              {state?.quotes[0]?.price ? <span className="input-currency-sign">€</span> : null}
            </div>
          </div>
        ) : null}
        {!onClick ? (
          <></>
        ) : (
          <div className="pa_payment_section_consent_container">
            <Checkbox
              onChange={e => _setState('terms_conditions', e.target.checked)}
              style={{
                transform: 'scale(0.8)',
                color: '#000000',
                paddingRight: '2%'
              }}
              defaultChecked
            />
            <p
              className="terms-text"
              style={{
                paddingRight: '0.6%'
              }}>
              {t('I agree with terms & condition & privacy policy of')} DESIGN CONFECTIONS ETHIQUES
            </p>
            {/* <p
              className="terms-text"
              style={{
                paddingRight: "0.6%",
                color: "#CC8E9C",
              }}
            >
              {t("Terms of Services")}
            </p>
            <p
              className="terms-text"
              style={{
                paddingRight: "0.6%",
              }}
            >
              {t("and")}
            </p>
            <p
              className="terms-text"
              style={{
                color: "#CC8E9C",
              }}
            >
              {t("Privacy Policy")}
            </p> */}
          </div>
        )}
        {!onClick ? (
          <></>
        ) : (
          <CustomButton
            text={buttonText ?? t('Publish Ad')}
            onClick={onClick}
            style={{
              margin: '7%',
              padding: '1.5% 5%',
              boxShadow: 'none'
            }}
          />
        )}
      </div>
    </>
  );
}

export { BasicSection, DeliverySection, NotesSection };
