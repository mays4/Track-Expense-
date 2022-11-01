import ExpenseItem from "./compontents/ExpenseItem";



function App() {
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
  return (
    <div className="App">
     <h2>Let's get started</h2>
    <ExpenseItem  date = {expenseData[0].date}title={expenseData[0].title} price={expenseData[0].price}></ExpenseItem>
    <ExpenseItem date={expenseData[1].date} title={expenseData[1].title} price={expenseData[1].price}></ExpenseItem>
    </div>
  );
}

export default App;
