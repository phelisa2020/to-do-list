import React from 'react';
import ReactDOM from 'react-dom';
import Global from './components/Global/Global'
import './index.css';
import App from "./components/App/App";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Global><App /></Global>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
