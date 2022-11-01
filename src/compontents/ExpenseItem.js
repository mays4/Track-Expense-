
import './ExpenseItem.css'
import ExpenseData from './ExpenseData';
export default function ExpenseItem(props){
  
  return (
  <div className='expense-item'>
    <ExpenseData date={props.date}/>
     <div className='expense-item__description'><h2>{props.title }</h2>
     </div>
     <div className='expense-item__price'>${props.price}</div>


  </div>)
}