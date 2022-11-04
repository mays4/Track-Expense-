
import './ExpenseItem.css'
import ExpenseData from './ExpenseData';
import Card from '../UI/Card';
import { useState } from 'react';
 const ExpenseItem=(props)=>{
  
  const [title,setTitle] = useState(props.title);
  const clickHandler = ()=>{
    setTitle("updated")
    console.log("Clicked!!!")
  }
  return (
   <li>
  <Card className='expense-item'>
    <ExpenseData date={props.date}/>
     <div className='expense-item__description'><h2>{title }</h2>
     </div>
     <div className='expense-item__price'>${props.amount}</div>
  

  </Card>
  </li>)
};
export default ExpenseItem;