import React from 'react'
import CustomButton from "../../components/CustomButton";

const GetTape = () => {
  return (
      <>
    <div className='getTape-container'>
      <div className="measure-tape-text">
          <p className='measurement-text'>MEASUREMENTS</p>
          <p className='gettape-text'> Get a Tape Measure</p>
      </div>
<div className='example-text-container'> 
    <h1 className='example-text'> For example</h1>
    <p>
    for most girth measurements, the tape measure should be placed parallel to the ground (horizontal)
    </p>
    <p>
    For length measurements, it should either be parallel or perpendicular to the ground (depending on the orientation of the part of the body to be measured)
    </p>
    <p>
    Know when to measure circumference or length. Depending on the body part, you will need to measure either the circumference (the circumference of the body part) or the length (the measurement from point to point).
    </p>
</div>
<div className='btn-container'>
<CustomButton
              text="Next"
              padding="1.3% 2.5%"
              style={{
                marginBottom: "10%",
                textAlign:"center",
                boxShadow:"none",
                marginTop:"3%",
                borderRadius:"15px",
                fontSize:"20px"
              }}
            />
</div>
    </div>
      </>
  
  )
}

export default GetTape