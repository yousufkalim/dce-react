import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GetTape from '../../containers/client/GetTape'
import OrderAcceptForm from '../../containers/client/OrderAcceptForm'
import TapeMeasurements from '../../containers/tailor/TapeMeasurements'
import cross from '../../assets/Cross.svg'
const ModalComp = ({setOpen,state, open,RenderComp,_setState}) => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => { 
      _setState("openModal",false)
      setOpen(false);
    };
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width:RenderComp =="tapemeasurements"?1100: 900,
      height:RenderComp =="tapemeasurements"? 550:400,
      bgcolor: 'background.paper',
     borderRadius:"20px",
      boxShadow: 24,
      p: 4,
    };
    console.log(state.measurements.value);
    console.log(typeof(state.measurements.value),"val");
   const checkJson=(value)=>{
     let parsedValue
    try {
      parsedValue = JSON.parse(value);
  } catch (e) {
      return false;
  }
  return parsedValue;
   }
  return (
    <div>
    {/* <Button onClick={handleOpen}>Open modal</Button> */}
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
        <div className="cross-img-container">
        <img onClick={()=>handleClose()} src={cross}/>
      </div>
          {
            RenderComp =="tapemeasurements"? (
            <TapeMeasurements 
            // state={
            //   state?.measurements?.value!="" || typeof(state.measurements.value)!="string"?
            //   JSON.parse(state?.measurements?.value)
            //   :
            //   state?.measurements?.value}
            //state={state?.measurements?.value? JSON.parse(state?.measurements?.value): false}
            state={checkJson(state?.measurements?.value)}
            />
            )
            : 
            <OrderAcceptForm/>
          }
      
        </Box>
      </Fade>
    </Modal>
  </div>
  )
}

export default ModalComp