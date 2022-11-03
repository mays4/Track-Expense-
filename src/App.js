import Expenses from "./compontents/Expenses/Expenses";

import NewExpense from './compontents/NewExpense/NewExpense'

const App=()=> {
  const expenseData = [{
    id:1,
    title:"car insurance",
    price:329.22,
    date: new Date(2022,9,20)
  },
  {
    id:2,
    title:"pay rent",
    price:1000.40,
    date: new Date(2022,10,1)
  }]
  const addExpenseHandler=expense=>{
     console.log(expense)
  }
  
  return (
    <div className="App">
     <NewExpense onAddExpense ={addExpenseHandler}/>
    <Expenses items={expenseData}/>
    </div>
  );
}

export default App;
