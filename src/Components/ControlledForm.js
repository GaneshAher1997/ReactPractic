import React, { useState } from 'react'

function ControlledForm() {
  const [change, setChange] = useState('');
// console.log("change...........",change);


  const ChangeText =(event)=>{
    setChange(event.target.value)
  }
  return (

    <div>
      <h1>ControlledForm</h1>
      <input type='text' value={change} onChange={ChangeText} />
      <h1>TextInput:{change}</h1>
    </div>
  )
}

export default ControlledForm













































// import React, { useState } from 'react';

// const ControlledForm = () => {
//   const [inputText, setInputText] = useState('');

//   const handleChange = (event) => {
//     setInputText(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={inputText} onChange={handleChange} />
//       <p>Typed text: {inputText}</p>
//     </div>
//   );
// };

// export default ControlledForm;
