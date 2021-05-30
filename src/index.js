import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { BillProvider } from './Context/BillContext';
import { ToastProvider } from 'react-toast-notifications';
ReactDOM.render(
  <React.StrictMode>
  
  <BillProvider>
  <ToastProvider>
    <App />
    </ToastProvider>
    </BillProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
