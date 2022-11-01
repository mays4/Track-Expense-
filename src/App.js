import Expenses from "./compontents/Expenses/Expenses";



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
  
  return (
    <div className="App">
     <h2>Let's get started</h2>
    <Expenses items={expenseData}/>
    </div>
  );
}

export default App;
