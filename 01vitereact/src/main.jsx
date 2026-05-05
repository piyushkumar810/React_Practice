import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Chai from './chai.jsx'

import PrintEvenNumber from './even_number.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
    <PrintEvenNumber/>
    <Chai/>
  </React.StrictMode>
);
// ------------ this is also correct
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <app/>
// )