import React, { useState } from 'react'

const ToggleButton = () => {
  const [onBtn, setOnBtn] = useState(false)
  // console.log("BTN...........",onBtn);

  const BtnFun=()=>{
  setOnBtn(!onBtn)
  }
  return (
    <div>
        <h1 style={{justifyContent:'center',alignItems:'center',backgroundColor:'red',textAlign:'center'}}>ToggleButton</h1>
       
        <button style={{justifyContent:'end',}}onClick={BtnFun}>{onBtn?'On':'Off'}</button>
        <h1>{onBtn}</h1>
    </div>
  )
}

export default ToggleButton