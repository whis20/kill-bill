import React, { useContext } from 'react';
import { BillContext } from '../../Context/BillContext';
import AddBill from '../AddBill/AddBill';
import BillList from '../BillList/BillList';
import BillOptions from '../BillOptions/BillOptions';
import BillTotal from '../BillTotal/BillTotal';
import EditBills from '../EditBills/EditBills';
import './App.css';


const App = () => {

  const {editModeEnabled} = useContext(BillContext);

  return (
    
      <div className="main-container">
        {
          editModeEnabled ? <EditBills /> : 
          <span>
            <BillOptions />
            <AddBill />
            <BillTotal/>
            <BillList />
          </span>
        }
      </div>
  );
}

export default App;
