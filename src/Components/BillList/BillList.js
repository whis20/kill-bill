import React, {useContext} from 'react';
import { BillContext } from '../../Context/BillContext';
import './style.css'


const BillList = () =>{


    const {bills, editBill, setEditModeEnabled}=useContext(BillContext);

    return(
        <div className='bill-list-container text-center'>
        
        {
            bills.map((bill,index) => {
                return(
                    <div key={index} 
                    className='bill-list-row'>
                    <input type='checkbox'
                    className='form-check-input'
                    checked={bill.enabled}
                    onChange={() => editBill({
                        title:bill.title,
                        monthlyCost:bill.monthlyCost,
                        enabled: !bill.enabled
                    })}>
                    </input>
                    <div className='bill-list-row-content'>
                        {bill.title} - ₹ {bill.monthlyCost}
                    </div>
                    </div>
                );
            })
        }
        {
            JSON.parse(localStorage.getItem('user-bills')).length>0 ? <h6 className='edit-mode-btn btn btn-outline-dark'
        onClick={() => setEditModeEnabled(true)}>
            EDIT
        </h6> : ''
        }
        
        </div>
    );
};

export default BillList;