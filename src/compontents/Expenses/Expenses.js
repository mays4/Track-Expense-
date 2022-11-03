import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
import { useState } from "react";
 const Expenses=(props)=> {
  const [filteredYear,setFilteredYear]= useState('2021');
  const filterHandler = selectedYear=>{
     setFilteredYear(selectedYear)
  }
  return (
    <div>
      
    <Card  className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterHandler}/>
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        price={props.items[0].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        price={props.items[1].price}
      ></ExpenseItem>
    </Card>
    </div>
  );
}
export default Expenses