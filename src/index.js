import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { BillProvider } from './Context/BillContext';

ReactDOM.render(
  <React.StrictMode>
    <BillProvider>
        <App />
    </BillProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
