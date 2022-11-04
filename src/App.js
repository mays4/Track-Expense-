import { useState } from "react";
import Expenses from "./compontents/Expenses/Expenses";

import NewExpense from './compontents/NewExpense/NewExpense'
const Dummy_expenses = [{
  id:1,
  title:"car insurance",
  amount:329.22,
  date: new Date(2022,9,20)
},
{
  id:2,
  title:"pay rent",
  amount:1000.40,
  date: new Date(2021,10,1)
}]
const App=()=> {
  const [expenses,setExpenses] = useState(Dummy_expenses);
  
  const addExpenseHandler= (expense)=>{
      setExpenses((prevExpense)=>{
        return [expense,...prevExpense]
      })
  }
  
  return (
    <div className="App">
     <NewExpense onAddExpense ={addExpenseHandler}/>
    <Expenses items={expenses}/>
    </div>
  );
}

export default App;
