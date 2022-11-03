import './NewExpense.css';
import Expenseform from './ExpenseForm';

const NewExpense = (prpos)=>{
  const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id : Math.random.toString()
    }
      prpos.onAddExpense(expenseData)
      console.log(expenseData);
  }
  return (
    <div className='new-expense'>
      <Expenseform onSaveExpenseDate={saveExpenseDataHandler}/>

    </div>
  )
};
export default NewExpense;