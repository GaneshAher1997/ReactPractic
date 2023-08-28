import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Count1 from './Components/Count1';
import ApiData from './Components/ApiData';
import Count2 from './Components/Count2';
import ToggleButton from './Components/ToggleButton';
import ControlledForm from './Components/ControlledForm';
import PorpsData from './Components/PorpsData';

import Nav from './Components/Navigation/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    {/* <Count1/>
    <Count2/>
    <ApiData /> */}
    {/* <ToggleButton></ToggleButton> */}
    {/* <ControlledForm /> */}
    {/* <PorpsData/> */}
    {/* <Navigation/> */}
    <Nav />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
