import React from 'react';
import ReactDOM from 'react-dom';

import Home from './views/Home.js';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);
