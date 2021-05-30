import React, {useContext} from 'react';
import { BillContext } from '../../Context/BillContext';
import './style.css'

import { useToasts } from 'react-toast-notifications';

const EditBills = () =>{
    const { addToast } = useToasts();
    const {bills , setEditModeEnabled, editBill , deleteBill} = useContext(BillContext);
    const editDone = () =>{
        addToast('Bill/Bills edited !', { appearance: 'success', autoDismiss:true,autoDismissTimeout:3000 });
        setEditModeEnabled(false);
    }
    const billDeleted = () =>{
        
        addToast('A bill title has been deleted', { appearance: 'info', autoDismiss:true,autoDismissTimeout:3000 });
    }
    return(
        <div className='edit-bill-container'>
            <h5 className='edit-mode-done-btn btn btn-success' 
            onClick={editDone}>
                Done !
            </h5>
            {(bills.length>0)?
                bills.map((bill,billIndex) => {
                    return(
                            <div key={billIndex} className='edit-bill-row'>
                            <div className='edit-bill-row-content'>
                                <div className='edit-bill-title'>{bill.title} : </div>
                                <input className='edit-bill-cost-input'
                                type='number'
                                value={bill.monthlyCost}
                                onChange={ (e) => editBill({
                                    title: bill.title,
                                    monthlyCost:e.target.value,
                                    enabled: bill.enabled
                                })}></input>
                                <h6 onClick={() => {deleteBill(bill); billDeleted()}} className='delete-button btn btn-outline-danger'>DELETE</h6>
                            </div>
                            <hr></hr>
                            </div>
                            
                    );
                })
                :
                <div className="no-bill">
                    No bills..
                </div>
            }
        </div>
    );
};

export default EditBills;