import React, {useContext, useState} from 'react';
import { BillContext } from '../../Context/BillContext';
import './style.css'

import { useToasts } from 'react-toast-notifications';


const AddBill = () =>{
    const { addToast } = useToasts();

    const [newBillTitle,setNewBillTitle] = useState('');
    const [newBillCost,setNewBillCost] = useState('');

    /* const updateBills = () =>{
        console.log(bill);
    }; */


    const {updateBills} = useContext(BillContext)

    const billObjectValid = () =>{
        if(!(newBillTitle.split('').find(char => char !== ' ')))
        {
            addToast('Please enter a bill title', { appearance: 'warning', autoDismiss:true,autoDismissTimeout:4000 });
        }
        if(!newBillCost){
            addToast('Please enter a bill cost', { appearance: 'warning', autoDismiss:true,autoDismissTimeout:4000 });      
        }
        if(Number.parseFloat(newBillCost)<0)
        {
            addToast('Please enter a non-negative bill cost', { appearance: 'warning', autoDismiss:true,autoDismissTimeout:4000 });
        }
        const costValid = newBillCost && (Number.parseFloat(newBillCost)>0);
        
        const titleValid = newBillTitle && newBillTitle.split('').find(char => char !== ' ');
        if(titleValid && costValid)
        {
            addToast('Bill added successfuly', { appearance: 'success', autoDismiss:true,autoDismissTimeout:4000 });
        }
        return titleValid && costValid;
    };

    const clearForm = () =>{
        setNewBillTitle('');
        setNewBillCost('');
    }
    /* useEffect(() => {
        console.log(newBillTitle);
    },[newBillTitle]); */


    return(
        <div className='add-bill-container'>
        
            <input className='add-bill-form-control form-control'
            placeholder='Enter Bill title'
            type='text'
            value={newBillTitle}
            onChange={(e)=>setNewBillTitle(e.target.value)}></input>
            <input className='add-bill-form-control form-control'
            placeholder='Enter Bill Monthly Cost'
            type='number'
            value={newBillCost}
            onChange={(e)=>setNewBillCost(e.target.value)}></input>
            <button className='add-bill-form-control btn btn-dark'
            type="submit"
            onClick={() => {
                if(billObjectValid()){
                    updateBills({
                        title:newBillTitle.toLowerCase()
                        .split(' ')
                        .map(word=>word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' '),
                        monthlyCost:newBillCost,
                        enabled:true
                });
                    clearForm();
                }      
            }}>Add Bill</button>
            &nbsp;<hr/>
        </div>
    )
}

export default AddBill;