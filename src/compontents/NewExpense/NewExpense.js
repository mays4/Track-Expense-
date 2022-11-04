import './NewExpense.css';
import Expenseform from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (prpos)=>{
  const[isEditing,setIsEditing]=useState(false);
  const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id : Math.random.toString()
    }
      prpos.onAddExpense(expenseData)
      // console.log(expenseData);
      setIsEditing(false);
  }
  const showFormHandler=()=>{
    setIsEditing(true);
  }
  const handleCancel= ()=>{
    setIsEditing(false);
  };
  return (
    <div className='new-expense'>
       { !isEditing && <button onClick={showFormHandler}>Add New Expenses</button>}
      { isEditing && <Expenseform onSaveExpenseDate={saveExpenseDataHandler} onCancel={handleCancel}/>}

    </div>
  )
};
export default NewExpense;